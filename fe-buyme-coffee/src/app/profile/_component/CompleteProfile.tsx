"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { inputPropsType } from "../page";
import axios from "axios";
import { useAuth } from "@/app/_component/UserProvider";

const profileSchema = z.object({
  image: z.string().nonempty("Please enter image"),
  name: z.string().nonempty("Please enter name"),
  about: z.string().nonempty("Please enter info about yourself"),
  url: z.string().nonempty("Please enter a social link"),
});

export const CompleteProfile = ({ stepperNext }: inputPropsType) => {
  const { user } = useAuth();

  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (event: any) => {
    setFile(event?.target.files[0]);
    const preview = URL.createObjectURL(event?.target.files[0]);
    setPreviewURL(preview);
    form.setValue("image", preview);
  };

  const deleteBtn = () => {
    setFile(null);
    setPreviewURL("");
    form.setValue("image", "");
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
  // const { errors } = form.formState;
  // console.log(errors);

  const handleSubmit = async (values: z.infer<typeof profileSchema>) => {
    try {
      if (!file) {
        alert("Please choose an image");
        return null;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "buyMeCoffee");

      const result = await fetch(
        "https://api.cloudinary.com/v1_1/dz8b3asdf/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const img = await result.json();

      await axios.post("http://localhost:8000/createProfile", {
        name: values.name,
        about: values.about,
        image: img.secure_url,
        url: values.url,
        userId: user,
      });
      stepperNext();
    } catch (err: any) {
      alert(err?.response?.data?.message);
    }
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
              className="w-[246px]"
              disabled={buttonDisabled}
            >
              Continue
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
