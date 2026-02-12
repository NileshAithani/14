import { useState } from "react";

import iconPicture from "../../assets/image.png";
import CelebrationMessage from "./CelebrationMessage/CelebrationMessage";

export default function OpenCard() {
  const [answer, setAnswer] = useState(null);
  const [noCount, setNoCount] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  const handleNo = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);

    setNoCount(noCount + 1);
    if (noCount < 3) {
      setAnswer(null);
    } else {
      setAnswer("no");
    }
  };

  const getNoButtonText = () => {
    if (noCount === 0) return "No";
    if (noCount === 1) return "Are you sure?";
    if (noCount === 2) return "Really?? 🥺";
    return "No";
  };

  const getNoButtonStyle = () => {
    // Make the No button progressively smaller and Yes button bigger
    const yesScale = 1 + noCount * 0.15;
    const noScale = Math.max(0.7, 1 - noCount * 0.12);

    return {
      yes: { transform: `scale(${yesScale})` },
      no: { transform: `scale(${noScale})` },
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200 animate-float-bg"
            style={{
              left: `${(i * 15) % 100}%`,
              top: `${(i * 25) % 100}%`,
              animationDelay: `${i * 0.7}s`,
              fontSize: `${20 + (i % 3) * 10}px`,
              opacity: 0.3,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="relative max-w-2xl w-full z-10">
        {/* Floating Balloons */}
        <div className="absolute -left-12 top-0 text-5xl animate-float-slow">
          🎈
        </div>
        <div className="absolute -left-8 top-16 text-4xl animate-float-medium">
          🎈
        </div>
        <div className="absolute -right-12 top-8 text-5xl animate-float-slow delay-500">
          🎈
        </div>
        <div className="absolute -right-10 top-24 text-3xl animate-float-fast delay-300">
          🎈
        </div>
        <div className="absolute left-1/4 -top-8 text-4xl animate-float-medium delay-700">
          🎈
        </div>
        <div className="absolute right-1/4 -top-4 text-3xl animate-float-fast delay-200">
          🎈
        </div>

        {/* Decorative hearts */}
        <div className="absolute -left-8 top-1/4 text-4xl animate-pulse-slow">
          ❤️
        </div>
        <div className="absolute -left-6 top-1/3 text-2xl animate-pulse-slow delay-100">
          💕
        </div>
        <div className="absolute -right-8 top-1/4 text-3xl animate-pulse-slow delay-200">
          💖
        </div>

        {/* Calendar decoration */}
        <div className="absolute -top-4 right-8 bg-white rounded-lg shadow-lg p-3 transform rotate-6 hover:rotate-12 transition-transform duration-300">
          <div className="border-t-4 border-red-400 rounded-t-lg w-16 h-2 mb-1"></div>
          <div className="text-red-500 font-bold text-2xl text-center">14</div>
          <div className="text-red-500 font-bold text-sm text-center">FEB</div>
        </div>

        <div
          className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center border-2 border-pink-200 ${
            isShaking ? "animate-shake" : ""
          }`}
        >
          {/* Play button / heart icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-pulse-gentle overflow-hidden">
              <img
                src={iconPicture}
                alt="Heart Icon"
                className="w-full h-full object-cover animate-heartbeat"
              />
            </div>
          </div>

          {!answer ? (
            <>
              <h2 className="font-light text-4xl sm:text-5xl text-red-400 mb-3 animate-slideDown tracking-tight">
                Hey there,
              </h2>

              <h2 className="font-semibold text-4xl sm:text-5xl text-red-500 mb-10 animate-slideDown delay-100 drop-shadow-md">
                Will you be my Valentine?
              </h2>

              <div className="flex justify-center gap-6 flex-wrap items-center">
                <button
                  onClick={() => setAnswer("yes")}
                  className="px-12 py-5 rounded-full bg-gradient-to-r from-red-400 to-pink-500 text-white text-xl font-bold hover:from-red-500 hover:to-pink-600 transition-all shadow-xl hover:shadow-2xl active:scale-95"
                  style={getNoButtonStyle().yes}
                >
                  Yes! 💖
                </button>

                <button
                  onClick={handleNo}
                  className="px-10 py-4 rounded-full bg-white text-red-400 text-xl font-bold hover:bg-red-50 transition-all shadow-lg border-2 border-red-300 hover:border-red-400 active:scale-95"
                  style={getNoButtonStyle().no}
                >
                  {getNoButtonText()}
                </button>
              </div>

              {noCount > 0 && (
                <p className="mt-6 text-red-300 italic animate-fadeIn">
                  {noCount === 1 &&
                    "The Yes button looks better, doesn't it? 👀"}
                  {noCount === 2 && "Come on, you know you want to say yes! 💕"}
                  {noCount === 3 &&
                    "Last chance! The Yes button is calling you! ✨"}
                </p>
              )}
            </>
          ) : answer === "yes" ? (
            <CelebrationMessage />
          ) : (
            <div className="animate-fadeInUp text-center">
              {/* <div className="text-7xl mb-6 animate-bounce-sad">😢💔</div> */}

              <p className="font-semibold text-3xl sm:text-4xl text-red-500 mb-3 tracking-tight">
                Aww, my heart just broke… 💔
              </p>

              <p className="font-light text-xl sm:text-2xl text-red-400 mb-6">
                But it&apos;s okay, I&apos;ll survive… maybe 😭
              </p>
              <button
                onClick={() => {
                  setAnswer(null);
                  setNoCount(0);
                }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold hover:from-red-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
              >
                Changed your mind? 🥺
              </button>
            </div>
          )}
        </div>

        {/* More balloons at the bottom */}
        <div className="absolute -left-10 bottom-12 text-4xl animate-float-medium delay-400">
          🎈
        </div>
        <div className="absolute -right-8 bottom-8 text-3xl animate-float-slow delay-600">
          🎈
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap");

        .font-serif {
          font-family: "Kalam", cursive;
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) scale(1.05);
            opacity: 1;
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-15px) scale(1.03);
            opacity: 1;
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) scale(1.02);
            opacity: 1;
          }
        }

        @keyframes float-bg {
          0% {
            transform: translateY(100vh) rotate(0deg);
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          10%,
          30% {
            transform: scale(1.1);
          }
          20%,
          40% {
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
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

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes bounceSad {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGentle {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 2.5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 2s ease-in-out infinite;
        }

        .animate-float-bg {
          animation: float-bg 15s linear infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-bounce-sad {
          animation: bounceSad 2s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulseGentle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
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

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}
