import { SharedWrapper } from "../SharedWrapper";
import { IconProps, MaterialConfig } from "../../types";

interface StarProps {
  mat: MaterialConfig;
  scale?: number;
  position?: [number, number, number];
}

function ProceduralStar({ mat, scale = 1.0, position = [0, 0, 0] }: StarProps) {
  // A 4-pointed beveled star is formed by 4 cones pointing outwards from center
  const r = 0.1 * scale;
  const h = 0.45 * scale;
  
  return (
    <group position={position}>
      {/* North spike */}
      <mesh position={[0, h / 2, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[r, h, 4]} />
        <meshPhysicalMaterial {...mat} />
      </mesh>
      {/* South spike */}
      <mesh position={[0, -h / 2, 0]} rotation={[Math.PI, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[r, h, 4]} />
        <meshPhysicalMaterial {...mat} />
      </mesh>
      {/* East spike */}
      <mesh position={[h / 2, 0, 0]} rotation={[0, Math.PI / 4, -Math.PI / 2]} castShadow>
        <coneGeometry args={[r, h, 4]} />
        <meshPhysicalMaterial {...mat} />
      </mesh>
      {/* West spike */}
      <mesh position={[-h / 2, 0, 0]} rotation={[0, Math.PI / 4, Math.PI / 2]} castShadow>
        <coneGeometry args={[r, h, 4]} />
        <meshPhysicalMaterial {...mat} />
      </mesh>
    </group>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="sparkles" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.15]} position={[0, 0, 0]}>
          
          {/* Main Star (Center Left) */}
          <ProceduralStar mat={mat} scale={1.1} position={[-0.15, 0.05, 0]} />

          {/* Medium Star (Bottom Right) */}
          <ProceduralStar mat={mat} scale={0.7} position={[0.48, -0.34, 0.1]} />

          {/* Small Star (Top Right) */}
          <ProceduralStar mat={mat} scale={0.48} position={[0.4, 0.44, -0.1]} />

        </group>
      )}
    </SharedWrapper>
  );
}
