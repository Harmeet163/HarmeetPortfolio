"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { AwardIcon } from "lucide-react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "123-456-7890",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "example@example.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "123 Main Street",
  },
];

const Contact = () => {
  const [userdata, setUserdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const postuserdata = (event) => {
    const { name, value } = event.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstname, lastname, phone, email, message, services } = userdata;
    if (firstname && lastname && phone && email && message && services) {
      const res = await fetch(
        "https://harmeetportfolioform-default-rtdb.firebaseio.com/formdata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            phone,
            email,
            services,
            message,
          }),
        }
      );

      if(res){
        setUserdata({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          services: "",
          message: "",
        });
      alert("done sir")
      }else{
        alert("not happing")
      }

    } else {
      alert("fill data");
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Feel free to contact us for any project or inquiry.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={userdata.firstname}
                  onChange={postuserdata}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={userdata.lastname}
                  onChange={postuserdata}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userdata.email}
                  onChange={postuserdata}
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  value={userdata.phone}
                  onChange={postuserdata}
                />
              </div>

              <Select
              value={userdata.services}
              onValueChange={(value) =>
                setUserdata({ ...userdata, services: value })
              }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                type="text"
                name="message"
                placeholder="Message"
                value={userdata.message}
                onChange={postuserdata}
              />

              <Button size="md" className="max-w-40" onClick={submitData}>
                Send Message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
