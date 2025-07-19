export default function Particle() {
  const size = Math.random() * 6 + 3;
  /* eslint-disable no-undef */
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerWidth;
  const delay = Math.random() * 8;

  const inlineStyles = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}px`,
    top: `${y}px`,
    animation: 'float 8s ease-in-out infinite',
    animationDelay: `${delay}s`,
  };

  return (
    <div
      style={inlineStyles}
      class="rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
    />
  );
}
