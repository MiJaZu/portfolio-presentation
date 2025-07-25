import Particle from './Particle';

export default function Particles() {
  const particles = [];

  for (let index = 0; index < 30; index++) {
    particles.push(<Particle />);
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">{particles}</div>
  );
}
