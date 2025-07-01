"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod/v4";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const profileSchema = z.object({
  image: z.string().nonempty("Please enter image"),
  name: z.string().nonempty("Please enter name"),
  about: z.string().nonempty("Please enter info about yourself"),
  url: z.string().nonempty("Please enter a social link"),
});

export const CompleteProfile = () => {
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (event: any) => {
    setFile(event?.target.files[0]);
    const preview = URL.createObjectURL(event?.target.files[0]);
    setPreviewURL(preview);
  };

  const deleteBtn = () => {
    setFile(null);
    setPreviewURL("");
  };

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      image: "",
      name: "",
      about: "",
      url: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof profileSchema>) => {
    console.log(values);
  };

  const buttonDisabled =
    !form.watch("image") ||
    !form.watch("name") ||
    !form.watch("about") ||
    !form.watch("url");

  return (
    <Card className="w-[510px] mx-auto mt-22">
      <CardHeader>
        <CardTitle>Complete your profile page</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-8"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            {!previewURL ? (
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add photo</FormLabel>
                    <FormControl>
                      <div className="relative w-50 h-50 flex flex-col items-center justify-center cursor-pointer rounded-full border border-gray-200">
                        <Input
                          {...field}
                          type="file"
                          required
                          onChange={handleImageChange}
                          id="image"
                          className="absolute top-0 left-0 w-50 h-50 opacity-0 cursor-pointer"
                        />
                        <Camera className="text-gray-200" />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <div className="relative w-50 h-50">
                <Image
                  alt="uploaded image"
                  src={previewURL}
                  fill
                  className="w-full h-full object-cover rounded-full"
                />
                <button
                  className="absolute top-2 right-2 rounded-full bg-black text-white w-6 h-6"
                  onClick={deleteBtn}
                  type="button"
                >
                  x
                </button>
              </div>
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name here" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Input placeholder="Write about yourself here" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Social media URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="secondary"
              className="w-[246px]"
              //   disabled={buttonDisabled}
            >
              Continue
            </Button>
          </form>
        </Form>
        {/* <form>
          <div className="flex flex-col gap-6 ">
            {!previewURL ? (
              <div>
                <Label htmlFor="image">Add photo</Label>
                <div className="relative w-50 h-50 flex flex-col items-center justify-center cursor-pointer rounded-full border border-gray-200">
                  <Input
                    id="image"
                    type="file"
                    required
                    onChange={handleImageChange}
                    className="absolute top-0 left-0 w-50 h-50 opacity-0 cursor-pointer"
                  />
                  <Camera className="text-gray-200" />
                </div>
              </div>
            ) : (
             
            )}

            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name here"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="about">About</Label>
              <Input
                id="about"
                type="text"
                required
                placeholder="Write about yourself here"
                className="h-[131px]"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="url">Social media URL</Label>
              <Input id="url" type="text" placeholder="https://" required />
            </div>
          </div>
        </form> */}
      </CardContent>
      {/* <CardFooter className="flex-col gap-2">
        <Button type="submit" variant="secondary" className="w-[246px]">
          Continue
        </Button>
      </CardFooter> */}
    </Card>
  );
};
