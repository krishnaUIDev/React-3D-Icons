import { SharedWrapper } from "../SharedWrapper";
import { CalculatorIconProps } from "./types";

export function CalculatorIcon(props: CalculatorIconProps) {
  const buttonGrid = [
    { r: 0, c: 0, color: "#cbd5e1" },
    { r: 0, c: 1, color: "#cbd5e1" },
    { r: 0, c: 2, color: "#cbd5e1" },
    { r: 0, c: 3, color: "#94a3b8" },
    { r: 1, c: 0, color: "#f87171" },
    { r: 1, c: 1, color: "#f87171" },
    { r: 1, c: 2, color: "#f87171" },
    { r: 1, c: 3, color: "#94a3b8" },
    { r: 2, c: 0, color: "#f87171" },
    { r: 2, c: 1, color: "#f87171" },
    { r: 2, c: 2, color: "#f87171" },
    { r: 2, c: 3, color: "#94a3b8" },
    { r: 3, c: 0, color: "#f87171" },
    { r: 3, c: 1, color: "#f87171" },
    { r: 3, c: 2, color: "#eab308" },
    { r: 3, c: 3, color: "#38bdf8" }
  ];

  return (
    <SharedWrapper iconId="calculator" {...props}>
      {(mat) => (
        <group rotation={[0.25, -0.3, 0.1]} position={[0, 0, 0]}>
          {/* Main Pocket Calculator Shell Casing */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.26, 0.38, 0.024]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* LCD Digital Display Panel (Beveled black bezel) */}
          <group position={[0, 0.11, 0.012]}>
            <mesh castShadow>
              <boxGeometry args={[0.22, 0.08, 0.008]} />
              <meshStandardMaterial roughness={0.15} metalness={0.9} color="#0f172a" />
            </mesh>
            {/* Greenish matrix display screen background (Glowing Accent) */}
            <mesh position={[0, 0, 0.002]} castShadow>
              <boxGeometry args={[0.204, 0.068, 0.004]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
            {/* Abstract segments representing calculated numbers "88.88" */}
            <mesh position={[0.02, 0, 0.005]} castShadow>
              <boxGeometry args={[0.12, 0.016, 0.002]} />
              <meshStandardMaterial roughness={0.5} metalness={0.1} color="#064e3b" />
            </mesh>
          </group>

          {/* 4x4 Grid of Calculator Keys */}
          <group position={[0, -0.06, 0.014]}>
            {buttonGrid.map((btn, idx) => {
              const xPos = (btn.c - 1.5) * 0.054;
              const yPos = (1.5 - btn.r) * 0.046;
              // Check if button is equal key to give it the glowing accent
              const isEqualKey = btn.r === 3 && btn.c === 3;
              return (
                <mesh key={idx} position={[xPos, yPos, 0]} castShadow>
                  <boxGeometry args={[0.044, 0.036, 0.01]} />
                  <meshStandardMaterial
                    roughness={0.3}
                    metalness={isEqualKey ? 0.8 : 0.2}
                    color={isEqualKey ? props.accentColor || "#10b981" : btn.color}
                    emissive={isEqualKey ? props.accentColor || "#10b981" : undefined}
                    emissiveIntensity={isEqualKey ? 1.4 : undefined}
                  />
                </mesh>
              );
            })}
          </group>

          {/* Solar Panel strip above screen */}
          <mesh position={[0, 0.168, 0.013]} castShadow>
            <boxGeometry args={[0.1, 0.018, 0.004]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#7c2d12" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
