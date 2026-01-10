import { useGLTF } from "@react-three/drei";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  return (
    <primitive
      object={scene.scene}
      scale={model.scale}
      rotation={model.rotation}
    />
  );
};

export default TechIconCardExperience;
