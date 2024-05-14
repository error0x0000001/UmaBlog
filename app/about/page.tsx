import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="transition duration-300 hover:shadow-2xl hover:shadow-slate-800 h-48 w-48">
            <AvatarImage src="/hero1.png" alt={siteConfig.author} />
            <AvatarFallback>Uma</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
        </div>
        <div className="rounded-3xl bg-black p-[1px] transition duration-300 hover:shadow-2xl hover:shadow-slate-800">
        <p className="text-muted-foreground rounded-3xl bg-slate-200 text-lg py-4">
        Welcome to UmaBlog! I'm thrilled to be your go-to destination for all things tech. Our blog is dedicated to exploring the latest innovations, trends, and developments in the dynamic world of technology. From in-depth analyses of groundbreaking tech advancements to practical tips and tutorials for mastering the latest software and gadgets, we're here to empower tech enthusiasts, professionals, and curious minds alike. Whether you're a seasoned developer, a gadget aficionado, or simply intrigued by the digital landscape, our mission is to provide you with insightful content that inspires, educates, and entertains. Join us as we dive deep into the fascinating realm of technology and uncover the endless possibilities it holds for shaping our future!"
        </p>
        </div>
      </div>
    </div>
  );
}
