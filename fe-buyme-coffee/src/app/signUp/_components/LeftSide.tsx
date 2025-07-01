
import {Coffee} from "lucide-react";
import Image from "next/image";

export const LeftSide = () => {
    return <div className="bg-[#FBBF24] h-screen">
        <div className="flex gap-1 pl-20 pt-8">
            <Coffee />

            <p className="font-black">Buy Me Coffee</p>
        </div>
        <div className="relative h-full flex justify-center items-center">
            <Image src="/Circle.png" width={240} height={240} alt="circle" />
            <Image src="/Coffee.png" width={125} height={206} alt="coffee" />
        </div>


    </div>
}