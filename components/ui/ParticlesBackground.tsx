"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () =>
      ({
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          move: {
            enable: true,
            direction: "right",
            outModes: {
              default: "loop",
            },
            speed: 0.5,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 85,
          },
          opacity: {
            value: { min: 0.4, max: 0.8 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }) as any,
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
