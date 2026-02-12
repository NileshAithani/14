import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firstcafePhoto from "../../../assets/FirstDate/IMG_4738.mov";
// import firstcafePhoto from "../../../assets/FirstDate/1.png";
import secondcafePhoto from "../../../assets/FirstDate/2.png";
import thirdcafePhoto from "../../../assets/FirstDate/3.png";
import fourthcafePhoto from "../../../assets/FirstDate/4.png";
import fifthcafePhoto from "../../../assets/FirstDate/5.png";
import sixthcafePhoto from "../../../assets/FirstDate/1.png";


import firstDelhiPhoto from "../../../assets/DelhiDarshan/21.png";
import secondDelhiPhoto from "../../../assets/DelhiDarshan/22.mov";
import thirdDelhiPhoto from "../../../assets/DelhiDarshan/23.mov";
import fourthDelhiPhoto from "../../../assets/DelhiDarshan/24.mov";
import fifthDelhiPhoto from "../../../assets/DelhiDarshan/25.png";
import sixthDelhiPhoto from "../../../assets/DelhiDarshan/26.png";
import seventhDelhiPhoto from "../../../assets/DelhiDarshan/27.mov";
import eighthDelhiPhoto from "../../../assets/DelhiDarshan/28.mov";
import ninthDelhiPhoto from "../../../assets/DelhiDarshan/29.mov";

import tenthDelhiPhoto from "../../../assets/DelhiDarshan/30.png";
import eleventhDelhiPhoto from "../../../assets/DelhiDarshan/31.png";
import twelfthDelhiPhoto from "../../../assets/DelhiDarshan/32.mov";
import thirteenthDelhiPhoto from "../../../assets/DelhiDarshan/33.mov";
import fourteenthDelhiPhoto from "../../../assets/DelhiDarshan/34.png";
import fifteenthDelhiPhoto from "../../../assets/DelhiDarshan/35.mov";
import sixteenthDelhiPhoto from "../../../assets/DelhiDarshan/36.png";

import music1 from "../../../assets/Music/1.m4a";
import music2 from "../../../assets/Music/2.mp4";
import music3 from "../../../assets/Music/3.mp4";
import music4 from "../../../assets/Music/4.mp4";
import music5 from "../../../assets/Music/5.mp4";
import music6 from "../../../assets/Music/6.m4a";
import music7 from "../../../assets/Music/7.m4a";
import music8 from "../../../assets/Music/8.m4a";
import music9 from "../../../assets/Music/9.m4a";
import music10 from "../../../assets/Music/10.m4a";
import music11 from "../../../assets/Music/11.m4a";

import firstChildhoodPhoto from "../../../assets/Child/1.jpg";
import secondChildhoodPhoto from "../../../assets/Child/2.jpg";
import thirdChildhoodPhoto from "../../../assets/Child/3.jpg";
import fourthChildhoodPhoto from "../../../assets/Child/4.jpg";
import fifthChildhoodPhoto from "../../../assets/Child/5.jpg";
import sixthChildhoodPhoto from "../../../assets/Child/6.jpg";
import seventhChildhoodPhoto from "../../../assets/Child/7.mp4";
import eighthChildhoodPhoto from "../../../assets/Child/8.jpg";
import ninthChildhoodPhoto from "../../../assets/Child/9.jpg";
import tenthChildhoodPhoto from "../../../assets/Child/10.jpg";
import eleventhChildhoodPhoto from "../../../assets/Child/11.jpg";

import firstEveningPhoto from "../../../assets/Evening/1.MP4";
import secondEveningPhoto from "../../../assets/Evening/2.MP4";
import thirdEveningPhoto from "../../../assets/Evening/3.mov";
import fourthEveningPhoto from "../../../assets/Evening/4.mov";
import fifthEveningPhoto from "../../../assets/Evening/5.mov";
import sixthEveningPhoto from "../../../assets/Evening/6.mov";
import seventhEveningPhoto from "../../../assets/Evening/7.mov";
import eighthEveningPhoto from "../../../assets/Evening/8.png";
import ninthEveningPhoto from "../../../assets/Evening/9.png";
import tenthEveningPhoto from "../../../assets/Evening/10.png";
import eleventhEveningPhoto from "../../../assets/Evening/11.png";
import twelfthEveningPhoto from "../../../assets/Evening/12.png";
import thirteenthEveningPhoto from "../../../assets/Evening/13.png";
import fourteenthEveningPhoto from "../../../assets/Evening/14.mov";

import firstBdayPhoto from "../../../assets/HerBday/1.mov";
import secondBdayPhoto from "../../../assets/HerBday/2.mov";
import thirdBdayPhoto from "../../../assets/HerBday/3.mov";
import fourthBdayPhoto from "../../../assets/HerBday/4.mov";
import fifthBdayPhoto from "../../../assets/HerBday/5.mov";
import sixthBdayPhoto from "../../../assets/HerBday/6.mov";
import seventhBdayPhoto from "../../../assets/HerBday/7.mov";
import eighthBdayPhoto from "../../../assets/HerBday/8.mov";
import ninthBdayPhoto from "../../../assets/HerBday/9.png";

export default function MemoriesPage() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const navigate = useNavigate();

  const memories = [
    {
      id: 1,
      title: "Our First Date",
      date: "December 14, 2024",
      subtitle: "A day I'll never forget",
      emoji: "🌟",
      description:
        "The moment I knew you were special. Your smile lit up the entire café, and I couldn't stop thinking about you for days. That cozy little corner where we sat together, laughing and drawing a painting side by side, turned into one of my favorite memories. It wasn't just about the art we created — it was the beautiful beginning of us. 🎨💕",
      image: "🎭",
      color: "from-pink-400 to-rose-400",
      photos: [
        { id: 1, url: firstcafePhoto, caption: "Our cozy café corner" },
        { id: 2, url: secondcafePhoto, caption: "Drawing together" },
        { id: 3, url: fifthcafePhoto, caption: "Coffee and smiles" },
        { id: 4, url: fourthcafePhoto, caption: "Coffee and art" },
        { id: 5, url: thirdcafePhoto, caption: "That candid moment" },
        { id: 6, url: sixthcafePhoto, caption: "A day to remember 💕" },
      ],
    },
    {
      id: 2,
      title: "Delhi Darshan",
      subtitle: "When we got lost together",
      emoji: "🗺️",
      description:
        "Getting lost never felt so right. Every wrong turn during our Delhi Darshan became an excuse to spend more time with you. Exploring the city together turned into one of the most unforgettable adventures of us.",
      image: "🚗",
      color: "from-orange-400 to-red-400",
      photos: [
        // 🗼 Qutub Minar (2)
        {
          id: 1,
          url: firstDelhiPhoto,
          caption: "Standing beneath the majestic Qutub Minar.",
          type: "video",
        },
        {
          id: 2,
          url: secondDelhiPhoto,
          caption: "Centuries of history carved into every stone at Qutub.",
          type: "video",
        },

        // 🕌 Humayun’s Tomb (6)
        {
          id: 3,
          url: thirdDelhiPhoto,
          caption: "Symmetry and elegance at Humayun’s Tomb.",
          type: "video",
        },
        {
          id: 4,
          url: fourthDelhiPhoto,
          caption: "Vlog",
          type: "video",
        },
        {
          id: 5,
          url: fifthDelhiPhoto,
          caption: "Red sandstone glowing under the Delhi sky.",
          type: "video",
        },
        {
          id: 6,
          url: sixthDelhiPhoto,
          caption: "Royal architecture that whispers history.",
          type: "video",
        },
        {
          id: 7,
          url: seventhDelhiPhoto,
          caption: "Exploring timeless beauty at Humayun’s legacy.",
          type: "video",
        },
        {
          id: 8,
          url: eighthDelhiPhoto,
          caption: "Where heritage meets peaceful moments.",
          type: "video",
        },

        // 🌿 Sunder Nursery (3)
        {
          id: 9,
          url: ninthDelhiPhoto,
          caption: "Vlog at Sunder Nursery.",
          type: "video",
        },
        {
          id: 10,
          url: tenthDelhiPhoto,
          caption: "Nature and heritage in perfect harmony.",
          type: "image",
        },
        {
          id: 11,
          url: eleventhDelhiPhoto,
          caption: "Quiet walks beneath ancient trees.",
          type: "image",
        },

        // 🌊 Yamuna Ghat (4)
        {
          id: 12,
          url: twelfthDelhiPhoto,
          caption: "Sunrise serenity at Yamuna Ghat.",
          type: "image",
        },
        {
          id: 13,
          url: thirteenthDelhiPhoto,
          caption: "Reflections dancing over the Yamuna waters.",
          type: "image",
        },
        {
          id: 14,
          url: fourteenthDelhiPhoto,
          caption: "Where the river brings calm to the city.",
          type: "image",
        },
        {
          id: 15,
          url: fifteenthDelhiPhoto,
          caption: "Peaceful moments by the riverside.",
          type: "image",
        },

        // 🏮 Majnu Ka Tila (1)
        {
          id: 16,
          url: sixteenthDelhiPhoto,
          caption: "Exploring the vibrant streets of Majnu Ka Tila.",
          type: "image",
        },
      ],
    },
    {
      id: 3,
      title: "Her Music",
      date: "The day your music became my peace",
      subtitle: "My favorite melody",
      emoji: "🎶",
      description:
        "That moment when you played your music and everything else faded away. Every note you create feels like a piece of your heart — soft, beautiful, and impossible to forget.",
      image: "🎵",
      color: "from-purple-400 to-pink-400",
      photos: [
        { id: 1, url: music1, caption: "Sahiba" },
        { id: 2, url: music2, caption: "Sawaar loon" },
        { id: 3, url: music3, caption: "Pta ni" },
        { id: 4, url: music4, caption: "Kaise Bataaien" },
        { id: 5, url: music5, caption: "Memories in sound" },
        { id: 6, url: music6, caption: "Haal kaisa hai jnaab ka" },
        { id: 7, url: music7, caption: "Fakira" },

        { id: 8, url: music8, caption: "Ye Tune Kya Kiya" },
        { id: 9, url: music9, caption: "Tu Chahiye" },
        { id: 10, url: music10, caption: "Meherbani (Sobb)" },
        { id: 11, url: music11, caption: "Heer Ranjha 2" },
      ],
    },
    {
      id: 4,
      title: "Her Childhood",
      date: "The years that shaped you",
      subtitle: "Little moments, big heart",
      emoji: "🧸",
      description:
        "The stories of your childhood are my favorite. The little girl you once were — full of dreams, innocence, and laughter — is still my favorite part of you. Every memory from those days makes me love you even more.",
      image: "🌈",
      color: "from-pink-300 to-purple-400",
      photos: [
        { id: 1, url: firstChildhoodPhoto },
        { id: 2, url: secondChildhoodPhoto },
        { id: 3, url: thirdChildhoodPhoto },
        { id: 4, url: fourthChildhoodPhoto },
        { id: 5, url: fifthChildhoodPhoto },
        { id: 6, url: sixthChildhoodPhoto },
        { id: 7, url: seventhChildhoodPhoto },
        { id: 8, url: eighthChildhoodPhoto },
        { id: 9, url: ninthChildhoodPhoto },
        { id: 10, url: tenthChildhoodPhoto },
        {
          id: 11,
          url: eleventhChildhoodPhoto,
          caption: "Forever my favorite girl",
        },
      ],
    },
    {
      id: 5,
      title: "Evening Quick Meetups",
      date: "The evenings we never wanted to end",
      subtitle: "Short but special",
      emoji: "🌆",
      description:
        "Those little evening meetups after a long day — just a few stolen moments together, but they meant everything. No grand plans, just us, laughter, and the comfort of being side by side.",
      image: "☕",
      color: "from-orange-400 to-pink-400",
      photos: [
        {
          id: 1,
          url: firstEveningPhoto,
          caption: "A peaceful start to the evening",
        },
        {
          id: 2,
          url: secondEveningPhoto,
          caption: "Simple moments, shared smiles",
        },
        {
          id: 3,
          url: thirdEveningPhoto,
          caption: "Just a quiet pause together",
        },
        {
          id: 4,
          url: fourthEveningPhoto,
          caption: "Comfort in the little things",
        },
        {
          id: 5,
          url: fifthEveningPhoto,
          caption: "Another evening, another memory",
        },
        { id: 6, url: sixthEveningPhoto, caption: "Time well spent" },
        {
          id: 7,
          url: seventhEveningPhoto,
          caption: "Moments that felt effortless",
        },
        {
          id: 8,
          url: eighthEveningPhoto,
          caption: "Soft skies and calm conversations",
        },
        { id: 9, url: ninthEveningPhoto, caption: "Side by side, as always" },
        {
          id: 10,
          url: tenthEveningPhoto,
          caption: "A short break from the world",
        },
        {
          id: 11,
          url: eleventhEveningPhoto,
          caption: "Evenings made a little brighter",
        },
        {
          id: 12,
          url: twelfthEveningPhoto,
          caption: "Ending the day on a good note",
        },
        {
          id: 13,
          url: thirteenthEveningPhoto,
          caption: "One more memory to hold onto",
        },
        {
          id: 14,
          url: fourteenthEveningPhoto,
          caption: "Moments worth replaying",
        },
      ],
    },
    {
      id: 6,
      title: "Her First Birthday With Me",
      date: "A day full of smiles",
      subtitle: "A celebration I’ll always cherish",
      emoji: "🎂",
      description:
        "Celebrating your birthday together was perfect — you fasting, watching me devour the cake 😅, and me just happy to be with you. Every moment was priceless.",
      image: "🎉",
      color: "from-pink-500 to-red-500",
      photos: [
        {
          id: 1,
          url: firstBdayPhoto,
          caption: "Hair flip and playful poses 💁‍♀️",
        },
        {
          id: 2,
          url: secondBdayPhoto,
          caption: "Receiving my little flower gift 🌸, posing sweetly",
        },
        {
          id: 3,
          url: thirdBdayPhoto,
          caption: "Placing the flower behind her ear 🌺, looking adorable",
        },
        {
          id: 4,
          url: fourthBdayPhoto,
          caption: "Plucking a flower herself 🌼, full of curiosity and charm",
        },
        {
          id: 5,
          url: fifthBdayPhoto,
          caption: "Striking poses while walking gracefully 🚶‍♀️✨",
        },
        {
          id: 6,
          url: sixthBdayPhoto,
          caption: "Posing beautifully in the sun-kissed glow ☀️💛",
        },
        {
          id: 7,
          url: seventhBdayPhoto,
          caption: "Gazing at her birthday cake 🎂✨, full of wonder",
        },
        {
          id: 8,
          url: eighthBdayPhoto,
          caption: "Whispering something cute to the cake 🎁💖",
        },
        {
          id: 9,
          url: ninthBdayPhoto,
          caption: "Ending the day with smiles 😊",
        },
      ],
    },
  ];

  const handleOpenGallery = () => {
    setShowGallery(true);
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  const handleCloseMemory = () => {
    setSelectedMemory(null);
    setShowGallery(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-50 p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors mb-6 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Back to message
        </button>

        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-3">
            Our Beautiful Memories 💕
          </h1>
          <p className="text-red-400 text-lg">
            Every moment with you is treasure
          </p>
        </div>

        {/* Memories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              onClick={() => setSelectedMemory(memory)}
              className="group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`text-5xl bg-gradient-to-br ${memory.color} p-4 rounded-2xl shadow-md group-hover:scale-110 transition-transform`}
                >
                  {memory.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-red-500 transition-colors">
                    {memory.title}
                  </h3>
                  <p className="text-sm font-semibold text-red-400 mb-1">
                    {memory.date}
                  </p>
                  <p className="text-xs text-gray-500 mb-3 italic">
                    {memory.subtitle}
                  </p>
                  <p className="text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {memory.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Love Note */}
        <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-8 text-center shadow-xl animate-fadeInUp mb-8">
          <p className="text-2xl text-red-600 font-serif italic mb-4">
            "In every memory, in every moment, in every heartbeat... it's always
            been you." 💝
          </p>
        </div>
      </div>

      {/* Memory Detail Modal */}
      {selectedMemory && !showGallery && (
        <div
          className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeIn"
          onClick={handleCloseMemory}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl transform scale-100 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`text-6xl text-center bg-gradient-to-br ${selectedMemory.color} w-24 h-24 flex items-center justify-center rounded-3xl mx-auto mb-6 shadow-lg`}
            >
              {selectedMemory.emoji}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
              {selectedMemory.title}
            </h2>
            <p className="text-red-500 font-semibold text-center mb-1">
              {selectedMemory.date}
            </p>
            <p className="text-red-400 text-center mb-6 italic text-sm">
              {selectedMemory.subtitle}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
              {selectedMemory.description}
            </p>

            {/* Gallery Button */}
            <button
              onClick={handleOpenGallery}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-3 rounded-full hover:shadow-xl transform hover:scale-105 transition-all mb-3 flex items-center justify-center gap-2"
            >
              <span>📸</span>
              View Photo Gallery
              <span>({selectedMemory.photos.length})</span>
            </button>

            <button
              onClick={handleCloseMemory}
              className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold py-3 rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Close 💕
            </button>
          </div>
        </div>
      )}

      {/* Photo/Video Gallery Modal */}
      {selectedMemory && showGallery && (
        <div
          className="fixed inset-0  backdrop-blur-md backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn"
          onClick={handleCloseGallery}
        >
          <div
            className="bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform scale-100 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gallery Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedMemory.title} 📸
              </h2>
              <p className="text-red-400">
                {selectedMemory.photos.length} precious moments
              </p>
            </div>

            {/* Photo/Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {selectedMemory.photos.map((photo, index) => {
                const url = photo.url.toLowerCase();

                const isVideo =
                  url.endsWith(".mov") ||
                  url.endsWith(".mp4") ||
                  url.endsWith(".webm") ||
                  url.endsWith(".avi");

                const isAudio =
                  url.endsWith(".m4a") ||
                  url.endsWith(".m4p") ||
                  url.endsWith(".mp3") ||
                  url.endsWith(".wav");

                return (
                  <div
                    key={photo.id}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* VIDEO */}
                    {isVideo && (
                      <video
                        src={photo.url}
                        controls
                        className="w-full h-64 object-cover bg-black rounded-2xl"
                        preload="metadata"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {/* AUDIO */}
                    {isAudio && (
                      <div className="flex flex-col justify-center items-center h-64 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6">
                        <div className="text-4xl mb-3 animate-pulse">🎵</div>
                        <audio controls className="w-full">
                          <source src={photo.url} />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}

                    {/* IMAGE */}
                    {!isVideo && !isAudio && (
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    )}

                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pointer-events-none">
                      <p className="text-white font-medium text-center">
                        {photo.caption}
                      </p>
                    </div>

                    {/* Video Badge */}
                    {isVideo && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <span>▶</span>
                        VIDEO
                      </div>
                    )}

                    {/* Audio Badge */}
                    {isAudio && (
                      <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <span>🎵</span>
                        AUDIO
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Close Button */}
            <button
              onClick={handleCloseGallery}
              className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold py-3 rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Back to Memory 💕
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}
