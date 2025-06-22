import { motion } from "motion/react";
import { CalendarDemo } from "./calendar-demo";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { StreamingDemo } from "./streaming-demo";
import { PopoverDemo } from "./popover-demo";
import ColourfulText from "./ui/colourful-text";

export default function Examples({ text }: { text: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6">
      <Card>
        <CardHeader>
          <CardTitle>UI Components</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-1">
          <CalendarDemo />
          <PopoverDemo />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Motion</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row items-center justify-center gap-28 h-full w-full">
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
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#9911ff",
            borderRadius: 5,
          }}
        />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Streaming</CardTitle>
        </CardHeader>
        <CardContent>
          <StreamingDemo />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Razor → React</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Data can be passed from Razor to React using data-props.</p>
          <h2>
            Hello from <ColourfulText text="React"/>
          </h2>
          <h2>{text}</h2>
        </CardContent>
      </Card>
    </div>
  );
}
