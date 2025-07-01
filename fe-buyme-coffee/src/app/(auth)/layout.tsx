import { Coffee } from "lucide-react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="w-screen h-screen flex">
        <div className="w-1/2 h-screen bg-[#FBBF24] flex flex-col items-center justify-center relative">
          <div className="flex gap-1 absolute top-8 left-20 ">
            <Coffee />
            <p className="font-black">Buy Me Coffee</p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/illustration.png"
              width={240}
              height={240}
              alt="circle"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 mt-10">
            <h1 className="font-black text-2xl">Fund your creative work</h1>
            <p className="text-center">
              Accept support. Start a membership. Setup a shop. It’s easier{" "}
              <br></br>than you think.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-screen flex items-center">{children}</div>
      </div>
    </html>
  );
}
