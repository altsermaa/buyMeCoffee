import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Coffee } from "lucide-react";

const amount = [1, 2, 5, 10];

export const Right = () => {
  return (
    <Card className="w-[628px] max-w-sm">
      <CardHeader>
        <CardTitle>Buy Jake a Coffee</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div>
            <h6>Select amount:</h6>
            <div className="flex gap-1">
              {amount.map((el, index) => {
                return (
                  // <Button variant="outline" className="w-fit" key={index}>
                  <Badge variant="secondary" className="py-3 px-4">
                    <Coffee />${el}
                  </Badge>
                  // </Button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">
                Enter BuyMeCoffee or social acount URL:
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="buymeacoffee.com/"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Special message:</Label>
              <Input
                id="password"
                type="password"
                placeholder="Please write your message here"
                className="h-[131px]"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="outline" className="w-full">
          Support
        </Button>
      </CardFooter>
    </Card>
  );
};
