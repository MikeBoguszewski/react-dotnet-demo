import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Examples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>ShadCN Components</CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Motion</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chatbot (Streaming)</CardTitle>
        </CardHeader>
        <CardContent>{/* Your chatbot or preview */}</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Razor → React</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Data can be passed from Razor to React using data-props.</p>
          <p><strong>Hello from React</strong></p>
        </CardContent>
      </Card>
    </div>
  );
}
