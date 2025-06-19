import { BackgroundBeams } from './components/ui/background-beams'
import './App.css'

function App() {

  return (
    <div className="h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-9xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">NeuTack.AI</h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-center relative z-10 text-2xl">Focus and Boost Productivity with AI</p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default App
