import { SharedWrapper } from "../SharedWrapper";
import { PrinterIconProps } from "./types";

export function PrinterIcon(props: PrinterIconProps) {
  return (
    <SharedWrapper iconId="printer" {...props}>
      {(mat) => (
        <group>
          {/* Angled to showcase 3D volume */}
          <group rotation={[Math.PI / 10, -Math.PI / 6, 0]}>
            {/* Main Printer Chassis/Body */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.85, 0.44, 0.65]} />
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
                emissiveIntensity={mat.emissiveIntensity}
              />
            </mesh>

            {/* Scanner Lid (Top) */}
            <mesh position={[0, 0.23, 0]}>
              <boxGeometry args={[0.87, 0.04, 0.67]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.9}
                color={props.theme === "dark" ? "#1e293b" : "#cbd5e1"}
              />
            </mesh>

            {/* Back Paper Input Tray & Input Sheet */}
            <group position={[0, 0.2, -0.22]} rotation={[-Math.PI / 8, 0, 0]}>
              {/* Paper Support Board */}
              <mesh castShadow>
                <boxGeometry args={[0.5, 0.36, 0.03]} />
                <meshStandardMaterial roughness={0.4} metalness={0.8} color={props.theme === "dark" ? "#334155" : "#e2e8f0"} />
              </mesh>
              {/* Feeding Sheet of Paper */}
              <mesh position={[0, 0.08, 0.02]}>
                <boxGeometry args={[0.42, 0.38, 0.01]} />
                <meshStandardMaterial roughness={0.9} color="#ffffff" />
              </mesh>
            </group>

            {/* Front Paper Output Tray */}
            <mesh position={[0, -0.16, 0.34]}>
              <boxGeometry args={[0.54, 0.03, 0.28]} />
              <meshStandardMaterial
                roughness={0.4}
                metalness={0.8}
                color={props.theme === "dark" ? "#1e293b" : "#94a3b8"}
              />
            </mesh>

            {/* Printed Paper Sheet Outputting */}
            <mesh position={[0, -0.13, 0.38]}>
              <boxGeometry args={[0.4, 0.01, 0.26]} />
              <meshStandardMaterial roughness={0.9} color="#ffffff" />
            </mesh>

            {/* Control Panel Accent (front strip) */}
            <mesh position={[0, 0.08, 0.33]} rotation={[-Math.PI / 12, 0, 0]}>
              <boxGeometry args={[0.45, 0.1, 0.02]} />
              <meshStandardMaterial
                roughness={0.8}
                color={props.theme === "dark" ? "#0f172a" : "#cbd5e1"}
              />
            </mesh>

            {/* LED Status Indicator Light */}
            <mesh position={[0.16, 0.08, 0.34]}>
              <sphereGeometry args={[0.022, 12, 12]} />
              <meshBasicMaterial color="#10b981" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
