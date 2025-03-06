"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {

  const router = useRouter();

  useEffect(() => {
    const handleInput = (event: Event) => {
      router.push("/home")
      console.log('user interacted', event);
    }

    // Listen for all input types
    document.addEventListener("click", handleInput);   // Mouse clicks and mobile taps
    document.addEventListener("keydown", handleInput); // Keyboard presses
    document.addEventListener("touchstart", handleInput); // Touch events (mobile)

    return () => {
      // Cleanup to prevent memory leaks
      document.removeEventListener("click", handleInput);
      document.removeEventListener("keydown", handleInput);
      document.removeEventListener("touchstart", handleInput);
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-50 z-10 pointer-events-none">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold animate-[pulse_3s_ease-in-out_infinite]">
          Welcome
        </h1>
        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl opacity-50 mt-5 sm:mt-10">
          Press Anywhere to continue
        </h4>
      </div>
    </>
  );
}
