import { useFrame, useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";
import { useEffect } from "react";
export function GridPlane() {
  const diffuse = useLoader(TextureLoader, "textures/grid-texture.png");

  useEffect(() => {
    diffuse.wrapS = RepeatWrapping;
    diffuse.wrapT = RepeatWrapping;
    diffuse.anisotropy = 4;
    diffuse.repeat.set(30, 30);
    diffuse.offset.set(0, 0);
  }, [diffuse]);

  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * 0.128;
    diffuse.offset.set(0, t);
  });
  return (
    <mesh rotation-x={-Math.PI * 0.5} position={[0, 0.425, 0]}>
      <planeGeometry args={[35, 35]} />
      <meshStandardMaterial
        color={[1, 1, 1]}
        opacity={0.65}
        map={diffuse}
        alphaMap={diffuse}
        transparent={true}
      />
    </mesh>
  );
}
