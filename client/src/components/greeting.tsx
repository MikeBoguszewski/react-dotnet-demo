// import { Button } from "./ui/button";
import { useEffect } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";


export default function Greeting({ name, text }: { name: string; text: string }) {
  useEffect(() => {
    console.log("Greeting hydrated!");
  }, []);
  return (
    <>
      <div className="flex text-center">
        <HoverBorderGradient containerClassName="rounded-full" as="button" className="bg-black text-white flex items-center space-x-2">
          <span>Hello from React</span>
        </HoverBorderGradient>
      </div>
      <h2>Hello, {name}!</h2>
      <p>
        Passed through to React from Blazor page using data-props: <strong>{text}</strong>
      </p>
      Tailwind CSS Animation Test: <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </>
  );
}
