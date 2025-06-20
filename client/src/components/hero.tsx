"use client";
import { BackgroundBeams } from "./ui/background-beams";
export default function Hero() {
  return (
    <div className="h-[80vh] w-[100vw] bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-9xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">NeuTack.AI</h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
          Welcome to NeuTack.AI, your go-to platform for AI-driven solutions. 
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
