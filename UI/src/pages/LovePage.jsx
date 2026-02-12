import { useEffect, useState } from "react";

export default function LovePage() {
  const startDate = new Date("2022-02-14");
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysTogether(diffDays);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-red-600 mb-2">
          Happy Valentine’s Day ❤️
        </h1>
        <p className="text-lg text-gray-700 mb-6">Nilesh & Your Forever ✨</p>

        {/* Love Message */}
        <div className="bg-pink-50 rounded-2xl p-6 mb-6">
          <p className="text-gray-800 text-lg leading-relaxed">
            From the day you walked into my life, everything changed. You are my
            today, my tomorrow, and every heartbeat in between. Thank you for
            being my constant ❤️
          </p>
        </div>

        {/* Timer */}
        <div className="flex justify-center gap-6 mb-6">
          <div className="bg-white rounded-xl shadow px-6 py-4">
            <p className="text-3xl font-bold text-red-500">{daysTogether}</p>
            <p className="text-gray-600 text-sm">Days Together</p>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
            alt="memory1"
            className="rounded-xl object-cover h-32 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="memory2"
            className="rounded-xl object-cover h-32 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="memory3"
            className="rounded-xl object-cover h-32 w-full"
          />
        </div>

        {/* Surprise */}
        <button
          onClick={() => alert("Will you be my Valentine? 💍❤️")}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg shadow-lg transition"
        >
          Tap for a Surprise 💝
        </button>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-500">Made with ❤️ just for you</p>
      </div>
    </div>
  );
}
