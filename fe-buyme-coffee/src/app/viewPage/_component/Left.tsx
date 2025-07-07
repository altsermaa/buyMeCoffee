import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";
import { ProfilesType } from "@/app/explore/page";

export const Left = ({
  avatarImage: profileImage,
  name: profileName,
  about,
  socialMediaURL,
  userId,
}: ProfilesType) => {
  return (
    <Card className="w-[632px] max-w-sm">
      <CardHeader className="border border-gray-200">
        <CardTitle className="flex justify-between">
          <div className="flex items-center gap-1">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src={
                  profileImage
                    ? profileImage
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEXZ3OFwd39yd3vc3+Rxd31weHtydn/Z3eBweH3f4ufV2N1vdHhueHrIy9Dc4ONpbnJqcXqOk5hncHK+wsaZnaHO0tezt7t5gIOoq7B+hIyFio6hpamusbZ6foRka3O6vcPJ1NXEzo3dAAAGeUlEQVR4nO2dW5ubKhRADVuNgMQbiqKO/f+/8mAybZOZNCYKQuawHtp+bR9Y5bI3F3eDwOPxeDwej8fj8Xg8Ho/H4/F4PB6Px+PxeDwej+f/CXxiux2bUQqkrmvG1A8keGchJcKmtugOaVnSsCvaiSkh261aBQSs4eNHnueHM+oXHyNv2BvqAFS9pJ8ef8mo7Kt308G1UqEo/CqDEFU6NbbdvhcA3HSHQxh+c7n8Xtg1+G06BxP+zeJWCXHyJp2DmYySBRkq2VvYQCXSdEkG0XFyf6QdTw2ljwfZBUqbo+3GLjIh+n3e3x1paLLd1gWgQncW5HuokYYqp0casJHeWZDvdk0YUsFOtlv8b4DIp+bL786hkrjbN5iX0SsyKOPOLtC4yZPHa/K3oVY2jtpAPX5LLJdIRO3mQMP8ual/IxO5OdBwNa6QScfKRRtSPBUtbwmjiBPbLf8OnsQ6GTE52DX8ydD/VYa61zVQdYfXXdSkCUPhXlYzrFE566SDYzJQFy/HmN8yZeFYrIEqWtszat44Ns6gKV9KZK5dUDbYbv4thG+RcWs9g7pb2PY/ANHOqUkDbE2Q+UPMXJIJpmyLzIdbpwHDJpl8CBw6qTn222R64pAMWZWY/ZXh5OiOjUr/N8kULskEW2Ti+IfJBF7GED9pmBG+bWnmtgVu+EkyW4Nma1vghi3pTJg4tqFpNshEUdnYbv8N1RaZtHRq36z2MwsXzA8Iw9Cp/QzU4/qdZpw7ttOsi9VnAEqmqN0JmTPtFhm3VuYAT6tlkrR07H0DMLH+eFY4Nf/Pk+aVe+YbGeeOZ9WkWXvWfEgdmzKXK42VOHilsfoagBbuvWyAIXnyock1KvqjxjkXtQTINXeaiErnpr8Ct2vuNBFqHbyfDY5HuULG1bdAeEJR9MpDoHPPuHhxPoN5+qpMXjjqEgAR9DWZvHNzkM1gFr2S1CTJweUHwXh65ZUWjVydMGeO0Dxvk48Ohstbpi4L730FcM38FxIq3Lr8u8eRFRlaCJ8qVKJMVrab+gRAepotyVDau7uO3QBMZo9lMsne5qMTwExSmqYqhl6RzFtkRVnK6m1UZpROL/9oXKTmoad+kj3DLq/I9wAcsIFLKURyVhFCdJ3kAwveqlf+ABgf62pqhlYxNFNVB/g9TT4BZXThR3xE6/F4/t8cL9huhh5+isy5RsPpwhvHmXOQPFdp+M2lWMPbKakWE8ampuVF0XXjnPaPoyx4385JDVF//C5jTv3Ts6nlUqhkvyxpHseH+elSHFKalWUkJG8bRt6hgwATpkRGSml0Tpev9mRqN52o36QlHef0mTiedOITawsR5nn8cKd5iPMciaJ1eWODcVWINErDOF6SiWOkuk4UlaM6+DSIy075ORmE5r89DuCeDgRDVK64PU9LMbg2eUgzZtGK74HmD+iysXHokxMIqqJMo5UyURqVsnLkFA2g5moyf1mGn+VyCEUpr08O1AYAMokMrdC4BqFMNPY758RUt6DtMiiNuOUnNBA0koZoxQOAW8IQJUkuJ5tVnCBox8WY8oLS2NqzAcLnAKnLZV4NuK2Jg4mK+MvR/nmSNC1lYCMhOOL6e/my7VBqo14YsGztc7lHIET3X9Sg2r4g32O+VNu7EAVUaOkWdq1NuHfZI6iEiTH2qUPHPW2gkusfmC/LzKXcdrMBVmx4+r8so0ZasZeNipVGZssVSbpb9OwNjrFPmYj2u6hAlZmXSVG2xyKAfy2+JtFD+cu8DAi6k4ww3jW4L9E+MlHZG84EcJVFhkL/V5IoN5vXzEX/TGRk9zH8ghO3ZtLLf9mYfMANTGwqYvAqodHPhLjpAHOLSgSMqcz12HaWMVbJDQJO9+4Zyg2d18Ck8yTmKeLYUP1DlSwvXYgZkMnNpM9QjRZ6xlCRPdJnFmTizMReYMNnpZugRgq6rq8ttwmUGah8QEyeYTxg/pBLuwzbVPJjCx9Mu8y2+iWbZLR/Lgz7ppg3jJpXAGAflkwUJdP7Bgr3Bq4vnpbRvH/Goz2XQyq0ykD9+IMYs0Sl1riJp9KiDMq07mowtypDtVZ1xzK1KiM1ygCJrMogpDGjAUbtylCNmxrcpJZlNP4vFZjvefR3h1xj2DwVlmUOhcZAI3Y8Yb5Lp8+FjKFlmVHbcga1XZMZbQkNMNsqB32F9qAKD1b2/3/R9wIFV+texmpE3/9Xhxv7MtqippfRzFMy/wFUEG8djal5cQAAAABJRU5ErkJggg=="
                }
                alt="avatarImage"
                fill
                objectFit="cover"
              />
            </div>
            <h1 className="font-black text-m">{profileName}</h1>
          </div>
          <Button variant="secondary">Edit page</Button>
        </CardTitle>
        <CardDescription>
          <div className="border border-gray-200 my-4"></div>
          <h5>About {profileName}</h5>
          <p>{about}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border border-gray-200 my-4">
          <h5>Social media URL</h5>
          <p>{socialMediaURL}</p>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div className="border border-gray-200 my-4">
          <h5>Recent supporters</h5>
          <div className="border border-gray-200 my-4 h-[140px]">
            <Heart />
            <p>Be the first one to support {profileName}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
