import { SharedWrapper } from "../SharedWrapper";
import { UsbDriveIconProps } from "./types";

export function UsbDriveIcon(props: UsbDriveIconProps) {
  return (
    <SharedWrapper iconId="usbdrive" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.2, 0.1]} position={[0, -0.04, 0]}>
          
          {/* Main Flash Drive Plastic Body Case */}
          <mesh castShadow receiveShadow position={[0, -0.06, 0]}>
            <boxGeometry args={[0.2, 0.42, 0.08]} />
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

          {/* Metal USB Plug Nose (Steel connector extending up) */}
          <group position={[0, 0.22, 0]}>
            <mesh castShadow>
              <boxGeometry args={[0.13, 0.16, 0.05]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
            </mesh>

            {/* USB Terminal holes details */}
            <mesh position={[-0.03, 0.04, 0.026]}>
              <boxGeometry args={[0.02, 0.024, 0.005]} />
              <meshBasicMaterial color="#0f172a" />
            </mesh>
            <mesh position={[0.03, 0.04, 0.026]}>
              <boxGeometry args={[0.02, 0.024, 0.005]} />
              <meshBasicMaterial color="#0f172a" />
            </mesh>

            {/* Golden contact pads inside the plug */}
            <mesh position={[0, -0.04, 0.026]}>
              <boxGeometry args={[0.08, 0.015, 0.005]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#d4af37" />
            </mesh>
          </group>

          {/* Glowing Keyring Strap Loop at the bottom (Glowing Accent) */}
          <mesh position={[0, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.06, 0.016, 8, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Tiny LED activity status light */}
          <mesh position={[0, -0.16, 0.041]} castShadow>
            <sphereGeometry args={[0.012, 8, 8]} />
            <meshStandardMaterial color="#cbd5e1" />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}
