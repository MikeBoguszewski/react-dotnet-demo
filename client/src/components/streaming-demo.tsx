import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function StreamingDemo() {
  const fullText = "Hello, this is a simulated streaming message from the server.";
  const [displayed, setDisplayed] = useState("");
  const [streaming, setStreaming] = useState(false);

  useEffect(() => {
    if (!streaming) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i++));
      if (i > fullText.length) {
        clearInterval(interval);
        setStreaming(false);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [streaming]);

  const handleReset = () => {
    setDisplayed("");
    setStreaming(true);
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      <p className="font-mono whitespace-pre-wrap border rounded p-2 bg-muted w-full min-h-[80px]">{displayed}</p>
      <Button onClick={handleReset} className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Stream
      </Button>
    </div>
  );
}
