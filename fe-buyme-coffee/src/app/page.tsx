import { Sidebar } from "@/components/ui/sidebar";
import { CompleteProfile } from "./_component/CompleteProfile";
import { PaymentDetails } from "./_component/PaymentDetails";

export default function Home() {
  return (
    <div>
      <CompleteProfile />
      <PaymentDetails />
      {/* <Sidebar /> */}
    </div>
  );
}
