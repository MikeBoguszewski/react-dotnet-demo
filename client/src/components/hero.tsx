import { BackgroundBeams } from "./ui/background-beams";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
export default function Hero() {
  return (
    <div className="bg-neutral-950 relative flex flex-col items-center justify-center antialiased h-full w-full">
      <div className="max-w-2xl mx-auto p-4 h-full w-full flex flex-col items-center justify-center">
        <h1 className="relative z-10 !text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">A Modern Frontend, Right Inside Razor</h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">A lightweight demo bridging React and .NET with islands architecture.</p>
        <div className="mt-3 flex justify-center text-center">
          <HoverBorderGradient containerClassName="rounded-full" as="button" className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
            <a href="Home/Examples" className="no-underline text-inherit">
              See Examples →
            </a>
          </HoverBorderGradient>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
