import { ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SubscriptionProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  onUpgrade?: () => void;
  isPaid?: boolean;
}

export function Subscription({
  name,
  price,
  description,
  features,
  buttonText,
  onUpgrade,
  isPaid = false,
}: SubscriptionProps) {
  return (
    <Card className="mx-auto flex w-full max-w-sm flex-col">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <p className="text-3xl font-bold">
          {price}
          {price !== "Free" && (
            <span className="text-sm font-normal text-muted-foreground">
              {" "}/ month
            </span>
          )}
        </p>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="grid gap-3 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={isPaid ? "outline" : "default"}
          disabled={isPaid}
          onClick={onUpgrade}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Subscription;
