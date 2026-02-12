export default function ClosedCard() {
  return (
    <div className="text-center select-none">
      {/* Main text */}
      <p
        className="
          font-serif text-rose-900 leading-tight
          text-3xl sm:text-4xl md:text-5xl
          mb-2
        "
      >
        Click me
      </p>

      <p
        className="
          font-serif text-rose-800 leading-tight
          text-3xl sm:text-4xl md:text-5xl
        "
      >
        to open
      </p>

      {/* Decorative divider */}
      <div className="flex items-center justify-center mt-6 gap-2">
        <span className="h-px w-10 bg-rose-300" />
        <span className="text-rose-500 text-xl">💖</span>
        <span className="h-px w-10 bg-rose-300" />
      </div>

      {/* Hint */}
      <p className="mt-4 text-sm sm:text-base text-rose-600 tracking-wide animate-pulse">
        A little surprise awaits
      </p>
    </div>
  );
}
