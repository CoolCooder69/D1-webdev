import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BankPopProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpgrade: () => Promise<void> | void;
}

export default function BankPop({
  open,
  onOpenChange,
  onUpgrade,
}: BankPopProps) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNumber = (v: string) => setNumber(v.replace(/\D/g, "").slice(0, 16));

  const handleExpiry = (v: string) => {
    const digits = v.replace(/\D/g, "").slice(0, 4);
    setExpiry(digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits);
  };

  const handleCvc = (v: string) => setCvc(v.replace(/\D/g, "").slice(0, 4));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() === "" || number.length < 13 || expiry.length !== 5 || cvc.length < 3) {
      setError("Please enter valid card details.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await onUpgrade();
      onOpenChange(false);
    } catch (e: any) {
      console.error("Upgrade error:", e);
      // Show the real reason instead of a generic message
      const status = e?.response?.status;
      const msg = e?.response?.data?.message || e?.message || "Unknown error";
      setError(status ? `Upgrade failed (${status}): ${msg}` : `Upgrade failed: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Upgrade to Paid</DialogTitle>
        </DialogHeader>

        <div className="flex justify-center scale-90">
          <Cards name={name} number={number} expiry={expiry} cvc={cvc} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            placeholder="Cardholder name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            placeholder="Card number"
            inputMode="numeric"
            value={number}
            onChange={(e) => handleNumber(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder="MM/YY"
              inputMode="numeric"
              value={expiry}
              onChange={(e) => handleExpiry(e.target.value)}
              required
            />

            <Input
              placeholder="CVC"
              type="password"
              inputMode="numeric"
              value={cvc}
              onChange={(e) => handleCvc(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : "Upgrade — ₹199"}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancel
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}