import { useState } from "react";
import HeartBalloons from "./HeartBalloons";
import ClosedCard from "./ClosedCard";
import OpenCard from "./OpenCard";
import FloatingHearts from "./FloatingHearts";

export default function ValentineCard() {
  const [isOpen, setIsOpen] = useState(false);

  // 👉 FULL PAGE OPEN CARD
  if (isOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 relative overflow-hidden">
        <FloatingHearts />
        <OpenCard />
      </div>
    );
  }

  // 👉 CLOSED CARD VIEW
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center p-6">
      <div className="relative">
        <HeartBalloons />

        <div
          role="button"
          aria-label="Valentine card"
          onClick={() => setIsOpen(true)}
          className="
            relative bg-gradient-to-b from-pink-50 to-white
            rounded-[40px] px-10 sm:px-36 py-20 sm:py-28
            border-4 border-pink-200
            shadow-2xl cursor-pointer
            transition-all duration-700 ease-out
            hover:scale-105 animate-pulse
          "
          style={{ maxWidth: "800px", minHeight: "400px" }}
        >
          <ClosedCard />

          {/* Soft glow */}
          <div className="absolute inset-0 rounded-[40px] ring-4 ring-pink-300/30 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
