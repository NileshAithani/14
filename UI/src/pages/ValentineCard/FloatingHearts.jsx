import HeartIcon from "./HeartIcon";

const hearts = [
  {
    size: 18,
    color: "#ffc2d1",
    opacity: 0.4,
    top: "10%",
    left: "-12%",
    delay: "0s",
  },
  {
    size: 26,
    color: "#f0a5b8",
    opacity: 0.6,
    top: "22%",
    right: "-10%",
    delay: "0.6s",
  },
  {
    size: 22,
    color: "#e07a9f",
    opacity: 0.5,
    top: "38%",
    left: "-14%",
    delay: "1.2s",
  },
  {
    size: 30,
    color: "#ff8fab",
    opacity: 0.6,
    bottom: "30%",
    right: "-12%",
    delay: "1.8s",
  },
  {
    size: 16,
    color: "#f8b4c4",
    opacity: 0.4,
    bottom: "45%",
    left: "-10%",
    delay: "2.4s",
  },
  {
    size: 24,
    color: "#fb6f92",
    opacity: 0.5,
    bottom: "15%",
    right: "-14%",
    delay: "3s",
  },
];

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="absolute animate-float-slow pointer-events-none"
          style={{
            top: heart.top,
            bottom: heart.bottom,
            left: heart.left,
            right: heart.right,
            animationDelay: heart.delay,
          }}
        >
          <HeartIcon
            size={heart.size}
            color={heart.color}
            opacity={heart.opacity}
          />
        </div>
      ))}
    </>
  );
}
