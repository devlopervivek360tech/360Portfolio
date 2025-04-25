import { useGLTF } from "@react-three/drei";

export default function ThreeDModel() {
  // Update the path to point to public/models
  const { scene } = useGLTF("/models/shirt_model.glb");
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

// Add this at the bottom of the file to preload the model
useGLTF.preload("/models/shirt_model.glb");
