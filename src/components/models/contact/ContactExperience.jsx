import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      {/* Ambient light */}
      <ambientLight intensity={0.5} color='#fff4e6' />

      {/* Main directional light */}
      <directionalLight position={[5, 5, 3]} intensity={2.5} color='#ffd9b3' />

      {/* Shadow casting light */}
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color='#ffd9b3'
      />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* 3D Model */}
      <Suspense fallback={null}>
        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
