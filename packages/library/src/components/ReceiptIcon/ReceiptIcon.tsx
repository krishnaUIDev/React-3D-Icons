import { SharedWrapper } from "../SharedWrapper";
import { ReceiptIconProps } from "./types";

export function ReceiptIcon(props: ReceiptIconProps) {
  return (
    <SharedWrapper iconId="receipt" {...props}>
      {(mat) => (
        <group rotation={[0.2, -Math.PI / 8, 0.05]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Top Paper Roll Scroll (Preset Material) */}
          <mesh position={[0, 0.16, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.28, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              color={mat.color}
            />
          </mesh>

          {/* Flat Printed Receipt Strip (Preset Material) */}
          <mesh position={[0, -0.04, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.28, 0.36, 0.018]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Paper Jagged Bottom Cut (Zig-zag notches simulated with boxes) */}
          <group position={[0, -0.22, 0]}>
            <mesh position={[-0.09, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.03, 0.03, 0.02]} />
              <meshStandardMaterial color="#334155" opacity={0.4} transparent />
            </mesh>
            <mesh position={[-0.03, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.03, 0.03, 0.02]} />
              <meshStandardMaterial color="#334155" opacity={0.4} transparent />
            </mesh>
            <mesh position={[0.03, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.03, 0.03, 0.02]} />
              <meshStandardMaterial color="#334155" opacity={0.4} transparent />
            </mesh>
            <mesh position={[0.09, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.03, 0.03, 0.02]} />
              <meshStandardMaterial color="#334155" opacity={0.4} transparent />
            </mesh>
          </group>

          {/* Transaction Printed Lines (Horizontal bands) */}
          <group position={[0, 0, 0.01]}>
            <mesh position={[0, 0.08, 0]}>
              <boxGeometry args={[0.2, 0.012, 0.005]} />
              <meshStandardMaterial color="#64748b" roughness={0.7} />
            </mesh>
            <mesh position={[-0.02, 0.04, 0]}>
              <boxGeometry args={[0.16, 0.012, 0.005]} />
              <meshStandardMaterial color="#64748b" roughness={0.7} />
            </mesh>
            <mesh position={[-0.01, 0.0, 0]}>
              <boxGeometry args={[0.18, 0.012, 0.005]} />
              <meshStandardMaterial color="#64748b" roughness={0.7} />
            </mesh>
            <mesh position={[0.01, -0.04, 0]}>
              <boxGeometry args={[0.14, 0.012, 0.005]} />
              <meshStandardMaterial color="#64748b" roughness={0.7} />
            </mesh>
          </group>

          {/* Glowing Checkmark verification at bottom (Emissive Accent Color) */}
          <group position={[-0.04, -0.12, 0.01]}>
            {/* Short leg */}
            <mesh position={[0.05, -0.01, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
              <boxGeometry args={[0.012, 0.04, 0.008]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* Long leg */}
            <mesh position={[0.08, 0.01, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
              <boxGeometry args={[0.012, 0.08, 0.008]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
