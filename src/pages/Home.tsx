// src/pages/Home.tsx
import { Icon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import React from 'react';
import { LinkWrapper } from "@/components/ui/link-wrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Simple Webpage App!</h1>
      <p>This is the content of the home page.</p>
      <p>It's working with the layout and routes. Thanks</p>
      <section className="p-5 border border-gray-300"> <h1>Hello from Web</h1> <Icon as={() => ( <svg viewBox="0 0 24 24" className="w-10 h-10 fill-green-500"> <circle cx="12" cy="12" r="10" /> </svg> )} /> <p>This is a sample paragraph for inspection.</p> <Image src="https://via.placeholder.com/150" alt="Placeholder" width={150} height={150} /> <LinkWrapper href="/pricing"> <span>See Pricing</span> </LinkWrapper> <span> <Icon name="Star" className="text-yellow-500" /> <p className="">Icon example</p> </span> <div> <Label>Subject</Label> <Input value={"4"} placeholder="Subject" required className="bg-gray-100 text-black dark:bg-brandBlack2x dark:text-white" /> </div> <div> <Label>Message</Label> <Textarea value={"3"} placeholder="Your message" rows={6} required className="bg-gray-100 text-black dark:bg-brandBlack2x dark:text-white" /> </div> <section> <h2>Nested Section</h2> <p>More text here</p> </section> </section>
    </div>
  );
};

export default Home;