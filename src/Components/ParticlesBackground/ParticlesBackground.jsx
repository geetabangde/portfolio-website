import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground({
  height = "100%",
  width = "100%",
}) {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div style={{ height, width, position: "relative" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{
          height: "100%", 
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        options={{
          background: {
            color: { value: "transparent" }, // Set background to transparent
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              outModes: { default: "bounce" },
            },
            number: {
              value: 70,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
