const stars = Array.from({ length: 60 }, (_, index) => ({
  id: index,
  top: `${(index * 37 + 11) % 100}%`,
  left: `${(index * 53 + 17) % 100}%`,
  size: index % 5 === 0 ? 2 : 1,
  opacity: Number((0.35 + ((index * 19) % 45) / 100).toFixed(2)),
}));

export default function GrokHero() {
  return (
    <div className="relative flex-1 w-full overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          aria-hidden="true"
          className="absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}
