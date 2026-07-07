import { Suspense } from "react";
import { Text3D, Center } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { LetterIconProps } from "./types";
import type { MaterialConfig } from "../../types";

const DEFAULT_FONT = "/fonts/helvetiker_bold.typeface.json";

interface Letter3DSceneProps {
  letter: string;
  fontUrl: string;
  mat: MaterialConfig;
}

// Isolated component so Suspense can catch the font-load promise
function Letter3DScene({ letter, fontUrl, mat }: Letter3DSceneProps) {
  return (
    <Center>
      <Text3D
        font={fontUrl}
        size={0.78}
        height={0.24}
        curveSegments={14}
        bevelEnabled
        bevelThickness={0.04}
        bevelSize={0.025}
        bevelSegments={4}
      >
        {letter.toUpperCase()}
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
      </Text3D>
    </Center>
  );
}

export function LetterIcon({ letter = "A", fontUrl = DEFAULT_FONT, ...props }: LetterIconProps) {
  return (
    <SharedWrapper iconId={`letter-${letter.toLowerCase()}`} {...props}>
      {(mat) => (
        <Suspense fallback={null}>
          <Letter3DScene letter={letter} fontUrl={fontUrl} mat={mat} />
        </Suspense>
      )}
    </SharedWrapper>
  );
}
