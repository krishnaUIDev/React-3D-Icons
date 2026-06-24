import { SharedWrapper } from "../SharedWrapper";
import { NetworkIconProps } from "./types";

export function NetworkIcon(props: NetworkIconProps) {
  // Key vertex coordinates of an icosahedron of radius 0.8
  const nodes = [
    [0, 0.8, 0],
    [-0.7, 0.25, 0.4],
    [0.7, 0.25, 0.4],
    [-0.7, 0.25, -0.4],
    [0.7, 0.25, -0.4],
    [0, -0.6, 0.5],
    [0, -0.6, -0.5]
  ] as const;

  return (
    <SharedWrapper iconId="network" {...props}>
      {(mat) => (
        <group>
          {/* Central main network hub */}
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.42, 32, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              clearcoatRoughness={mat.clearcoatRoughness}
              ior={mat.ior}
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.4}
            />
          </mesh>

          {/* Interconnecting wireframe lattice cage */}
          <mesh castShadow>
            <icosahedronGeometry args={[0.8, 1]} />
            <meshBasicMaterial
              wireframe
              color={mat.color}
              transparent
              opacity={0.3}
            />
          </mesh>

          {/* Node hubs on major vertices */}
          {nodes.map((pos, idx) => (
            <group key={idx} position={pos}>
              {/* Outer halo */}
              <mesh castShadow>
                <sphereGeometry args={[0.11, 16, 16]} />
                <meshPhysicalMaterial
                  roughness={mat.roughness}
                  metalness={mat.metalness}
                  transmission={mat.transmission}
                  thickness={mat.thickness}
                  color={mat.color}
                />
              </mesh>
              {/* Emissive core dot */}
              <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshBasicMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : "#10b981"}
                />
              </mesh>
            </group>
          ))}
        </group>
      )}
    </SharedWrapper>
  );
}
