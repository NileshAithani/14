import HeartIcon from "./HeartIcon";

export default function HowDareYou() {
  return (
    <div className="text-center animate-fadeIn">
      <div className="mb-4">
        <HeartIcon
          size={60}
          color="#d84870"
          className="mx-auto animate-bounce"
        />
      </div>

      <p className="text-xl sm:text-2xl font-serif text-rose-800 mb-2">
        How dare you 😤💔
      </p>

      <p className="text-sm sm:text-base text-rose-600">
        That was illegal… but I still kinda like you 😌💗
      </p>
    </div>
  );
}
