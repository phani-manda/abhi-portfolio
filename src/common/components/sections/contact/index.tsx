"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/lib/hooks";
import SectionHeading from "@/common/components/shared/section-heading";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center dark:bg-darkBg dark:text-white"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Hit me up!</SectionHeading>
      <div className="w-[min(100%,38rem)] px-4">
        <p className="mb-20 mt-6 text-gray-700 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:azimov.workspace@gmail.com">
            aabhishekparnandi@gmail.com 
          </a>{" "}
          <br></br>
          Call me throught this phone number{" "}.
          <div className="flex justify-center">
            <a href="tel:+918341787486" className="text-xl font-semibold underline hover:text-gray-600 dark:hover:text-white/60">
              +91 8341787486
            </a>
          </div>
        </p>
          
      </div>
    </motion.section>
  );
}
