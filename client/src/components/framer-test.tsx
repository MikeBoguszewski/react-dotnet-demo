"use client";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function FramerTest() {
  useEffect(() => {
    console.log("FramerTest hydrated!");
  }, []);
  return (
    <>
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#FF0055",
          borderRadius: 20,
          marginBottom: 20,
        }}
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 360],
          backgroundColor: ["#FF0055", "#FF55AA", "#FF0055"],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 10 }} style={{ width: 100, height: 100, background: "red" }} />
    </>
  );
}
