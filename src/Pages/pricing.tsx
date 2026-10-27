import { useState } from "react";
import axios from "axios";
import Subscription from "@/components/Premium";
import BankPop from "@/components/bankCard";
import { useFirebase } from "@/Context/firebase";

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const { user, isPremium } = useFirebase();

  const handleUpgrade = async () => {
    if (!user) throw new Error("Please log in first");
    const token = await user.getIdToken();
    await axios.post(
      "http://localhost:3000/api/upgrade",
      { headers: { Authorization: `Bearer ${token}` } } 
    );
  };

  return (
    <>
      <div className="my-30 mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
        <Subscription
          name="Free"
          price="Free"
          description="Free forever"
          features={[
            "Access to basic posts",
            "5 posts per month",
            "2 MB image uploads",
          ]}
          buttonText={isPremium ? "Free" : "Current Plan"}
          isPaid
        />
        <Subscription
          name="Premium"
          price="₹199"
          description="For users who want more"
          features={[
            "Access to all posts",
            "50 posts per month",
            "10 MB image uploads",
          ]}
          buttonText={isPremium ? "Current Plan" : "Upgrade Plan"}
          onUpgrade={() => !isPremium && setModalOpen(true)}
        />
      </div>

      <BankPop
        open={modalOpen}
        onOpenChange={setModalOpen}
        onUpgrade={handleUpgrade}
      />
    </>
  );
}