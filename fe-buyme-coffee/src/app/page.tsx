import { Sidebar } from "@/components/ui/sidebar";
import { CompleteProfile } from "./profile/_component/CompleteProfile";
import { PaymentDetails } from "./profile/_component/PaymentDetails";
import { AppSidebar } from "./_component/SidebarHome";
import { UserEarning } from "./_component/UserEarning";
import { Transactions } from "./_component/Transactions";

export default function Home() {
  return (
    <div className="pt-11 pr-20 pb-15 flex flex-col gap-6">
      <AppSidebar />
      <UserEarning />
      <Transactions />
    </div>
  );
}
