import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CelebrationMessage() {
  const [confetti, setConfetti] = useState([]);
  const [showExtra, setShowExtra] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Generate confetti particles
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      emoji: ["❤️", "💕", "💖", "💗", "💝", "🌹", "✨", "🎉"][
        Math.floor(Math.random() * 8)
      ],
    }));
    setConfetti(particles);

    // Show extra content after initial animation
    const timer = setTimeout(() => setShowExtra(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMemoriesClick = () => {
    navigate("/memories");
  };

  return (
    <div className="relative">
      <div className="animate-fadeInUp relative z-10">
        {/* Animated emojis with scale effect */}
        <div className="mb-6 relative">
          {/* Radiating hearts */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="text-4xl absolute animate-radiate-1">💖</div>
            <div className="text-4xl absolute animate-radiate-2">💗</div>
            <div className="text-4xl absolute animate-radiate-3">💝</div>
            <div className="text-4xl absolute animate-radiate-4">💕</div>
          </div>
        </div>

        {/* Main message with typing effect feel */}
        <p className="text-3xl sm:text-4xl text-red-500 font-semibold leading-relaxed mb-4 drop-shadow-sm animate-slideDown">
          Yayyy! You just made my day! 💘
        </p>

        <p className="text-2xl text-red-400 mt-2 font-light animate-slideDown delay-200">
          I'm so happy right now! 🥰
        </p>

        {/* Additional content with delay */}
        {showExtra && (
          <div className="mt-8 space-y-4 animate-fadeInUp">
            {/* Romantic quote */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border-l-4 border-red-400 shadow-md">
              <p className="text-lg text-red-600 font-serif italic leading-relaxed">
                "You're the reason I smile a little brighter, my heart beats a
                little faster, and my days feel a little more special." ✨
              </p>
            </div>

            {/* Interactive heart button */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={handleMemoriesClick}
                className="group relative px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">
                  💕 Wanna explore our memories
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Cute footer note */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="text-pink-400 animate-bounce-slow">💌</span>
              <p className="text-sm text-red-400 font-serif">
                Made with love just for you
              </p>
              <span className="text-pink-400 animate-bounce-slow delay-300">
                💌
              </span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes radiate-1 {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(60px, -60px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes radiate-2 {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-60px, -60px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes radiate-3 {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(60px, 60px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes radiate-4 {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-60px, 60px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          50% {
            transform: scale(1.3) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-badge {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(244, 63, 94, 0.1);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 20px 25px -5px rgba(244, 63, 94, 0.3);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-confetti-fall {
          animation: confetti-fall linear forwards;
        }

        .animate-radiate-1 {
          animation: radiate-1 1.5s ease-out infinite;
        }

        .animate-radiate-2 {
          animation: radiate-2 1.5s ease-out infinite 0.3s;
        }

        .animate-radiate-3 {
          animation: radiate-3 1.5s ease-out infinite 0.6s;
        }

        .animate-radiate-4 {
          animation: radiate-4 1.5s ease-out infinite 0.9s;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-pulse-badge {
          animation: pulse-badge 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .delay-0 {
          animation-delay: 0s;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
