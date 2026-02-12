import HeartIcon from "./HeartIcon";

export default function HeartBalloons() {
  const hearts = [
    { size: 40, color: "#e07a9f", delay: "0s" },
    { size: 50, color: "#d84870", delay: "0.2s" },
    { size: 45, color: "#f0a5b8", delay: "0.4s" },
    { size: 42, color: "#e8a0b5", delay: "0.6s" },
  ];

  return (
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-2">
      {/* Strings */}
      <svg className="absolute top-full left-1/2 -translate-x-1/2" width="200" height="100">
        {[30, 70, 110, 150].map((x) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2="100"
            y2="90"
            stroke="#d4a5a5"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      {hearts.map((h, i) => (
        <div key={i} className="animate-float" style={{ animationDelay: h.delay }}>
          <HeartIcon size={h.size} color={h.color} opacity={0.85} />
        </div>
      ))}
    </div>
  );
}
