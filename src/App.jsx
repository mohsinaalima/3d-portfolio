import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Room() {
  const { scene } = useGLTF("/models/optimized-room.glb");
  return <primitive object={scene} scale={2.5} />;
}

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 6, 12] }}
      style={{ height: "100vh", width: "100vw" }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} />
      <Room />
      <OrbitControls />
    </Canvas>
  );
}
