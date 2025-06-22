// import { Button } from "./ui/button";
import { useEffect } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";


export default function Greeting({ text }: { text: string }) {
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
      <p>
        Passed through to React from Blazor page using data-props: <strong>{text}</strong>
      </p>
    </>
  );
}
