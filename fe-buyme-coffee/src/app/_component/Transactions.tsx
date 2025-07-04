import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const Transactions = () => {
  return (
    <div className="w-[901px] h-fit p-6 flex flex-col gap-4 border border-gray-200 rounded-2xl mx-auto">
      <div className="flex justify-between">
        <h4>Recent transactions</h4>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Amount" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">
                <div className="flex items-center gap-3">
                  <Checkbox id="1" />
                  <Label htmlFor="terms">$1</Label>
                </div>
              </SelectItem>
              <SelectItem value="2">
                <div className="flex items-center gap-3">
                  <Checkbox id="2" />
                  <Label htmlFor="2">$2</Label>
                </div>
              </SelectItem>
              <SelectItem value="5">
                <div className="flex items-center gap-3">
                  <Checkbox id="5" />
                  <Label htmlFor="5">$5</Label>
                </div>
              </SelectItem>

              <SelectItem value="10">
                <div className="flex items-center gap-3">
                  <Checkbox id="10" />
                  <Label htmlFor="10">$10</Label>
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="border border-gray-200 my-4"></div>
    </div>
  );
};
