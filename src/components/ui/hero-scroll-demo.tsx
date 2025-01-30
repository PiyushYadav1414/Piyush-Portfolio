"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { motion } from "framer-motion";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll titleComponent={<></>}>
        <motion.div
          className="relative w-full h-[500px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Tablet container */}
          <div className="relative w-full max-w-[920px] mx-auto h-[550px] bg-gray-100 rounded-3xl shadow-lg overflow-hidden">
            <motion.img
              src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
              alt="hero"
              className="w-full h-full object-cover rounded-2xl"
              draggable={false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </ContainerScroll>
    </div>
  );
}
