import React, { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { SharedWrapper } from "../SharedWrapper";
import { FlameIconProps } from "./types";

declare global {
  interface Window {
    THREE: any;
  }
}

// Revolved Y-axis curves for the outer and inner flame shapes
const OUTER_PROFILE_POINTS: number[][] = [
  [0, 0.95],
  [0.03, 0.9],
  [0.08, 0.8],
  [0.15, 0.65],
  [0.24, 0.45],
  [0.34, 0.2],
  [0.42, -0.05],
  [0.46, -0.25],
  [0.42, -0.45],
  [0.32, -0.6],
  [0.18, -0.7],
  [0.08, -0.74],
  [0, -0.75]
];

const INNER_PROFILE_POINTS: number[][] = [
  [0, 0.45],
  [0.03, 0.4],
  [0.08, 0.28],
  [0.13, 0.1],
  [0.17, -0.1],
  [0.19, -0.22],
  [0.16, -0.34],
  [0.1, -0.42],
  [0.04, -0.47],
  [0, -0.48]
];

interface EmberData {
  mesh: any;
  speedY: number;
  seed: number;
  originalX: number;
}

export function FlameIcon(props: FlameIconProps) {
  const outerPoints = useMemo(
    () => OUTER_PROFILE_POINTS.map((p) => new THREE.Vector2(p[0], p[1])),
    []
  );
  const innerPoints = useMemo(
    () => INNER_PROFILE_POINTS.map((p) => new THREE.Vector2(p[0], p[1])),
    []
  );
  const flatness = 0.65;

  if (props.studio) {
    return <FlameStudio {...props} />;
  }

  return (
    <SharedWrapper iconId="flame" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Fireplace Logs at base */}
          <group position={[0, -0.45, 0]}>
            {/* Log 1 */}
            <mesh position={[0, 0, -0.06]} rotation={[Math.PI / 2, 0, Math.PI / 4]} castShadow>
              <cylinderGeometry args={[0.05, 0.06, 0.8, 12]} />
              <meshStandardMaterial roughness={0.9} metalness={0.1} color="#4a2810" />
            </mesh>
            {/* Log 2 */}
            <mesh position={[0, 0, 0.06]} rotation={[Math.PI / 2, 0, -Math.PI / 4]} castShadow>
              <cylinderGeometry args={[0.05, 0.06, 0.8, 12]} />
              <meshStandardMaterial roughness={0.9} metalness={0.1} color="#4a2810" />
            </mesh>
            {/* Glowing Charcoal in center */}
            <mesh position={[0, 0.03, 0]} castShadow>
              <sphereGeometry args={[0.11, 12, 12]} />
              <meshStandardMaterial
                color="#f97316"
                emissive="#f97316"
                emissiveIntensity={1.5}
                roughness={0.5}
              />
            </mesh>
          </group>

          {/* Flame Layers */}
          <group position={[0, 0.1, 0]} scale={[1.1, 1.1, 1.1 * flatness]}>
            {/* Outer Flame Mesh */}
            <mesh position={[0, -0.15, 0]} castShadow receiveShadow>
              <latheGeometry args={[outerPoints, 32]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.2}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Mid Flame Mesh */}
            <mesh position={[0, -0.22, 0.03]} scale={[0.72, 0.72, 0.72]} castShadow>
              <latheGeometry args={[outerPoints, 32]} />
              <meshStandardMaterial
                color={props.accentColor || "#ef4444"}
                emissive={props.accentColor || "#ef4444"}
                emissiveIntensity={0.6}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Inner Flame Core Mesh */}
            <mesh position={[0, -0.32, 0.05]} scale={[0.9, 0.9, 0.9]} castShadow>
              <latheGeometry args={[innerPoints, 32]} />
              <meshStandardMaterial
                color="#fbfb24"
                emissive="#fbfb24"
                emissiveIntensity={1.4}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

function FlameStudio() {
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Flame properties
  const [primaryColor, setPrimaryColor] = useState("#f97316"); // Outer orange
  const [accentColor, setAccentColor] = useState("#ef4444"); // Mid red
  const [coreColor, setCoreColor] = useState("#fbfb24"); // Inner gold
  const [flameStyle, setFlameStyle] = useState("glass"); // Glass, Hologram, Matte, Gold
  const [swayIntensity, setSwayIntensity] = useState(1.2);
  const [flickerSpeed, setFlickerSpeed] = useState(1.5);
  const [flatness, setFlatness] = useState(0.55); // Z-axis squish for a stylized icon look
  const [showLogs, setShowLogs] = useState(true);
  const [emberCount, setEmberCount] = useState(18);
  const [orthographic, setOrthographic] = useState(false);

  // Studio environments
  const [gridVisible, setGridVisible] = useState(true);
  const [lightingPreset, setLightingPreset] = useState("warm");
  const [activeTab, setActiveTab] = useState("flame");
  const [codeTab, setCodeTab] = useState("threejs");

  // Animation & WebGL References
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const orthoCameraRef = useRef<any>(null);
  const activeCameraRef = useRef<any>(null);

  // Flame parts references
  const rotationGroupRef = useRef<any>(null);
  const flameGroupRef = useRef<any>(null);
  const outerFlameRef = useRef<any>(null);
  const midFlameRef = useRef<any>(null);
  const innerFlameRef = useRef<any>(null);
  const logsGroupRef = useRef<any>(null);
  const embersArrayRef = useRef<EmberData[]>([]);

  // Lights & helpers
  const keyLightRef = useRef<any>(null);
  const fillLightRef = useRef<any>(null);
  const coreLightRef = useRef<any>(null);
  const gridHelperRef = useRef<any>(null);

  // Interaction vectors
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  useEffect(() => {
    if (window.THREE) {
      setThreeLoaded(true);
      return;
    }

    let script: HTMLScriptElement | null = document.querySelector(
      'script[src*="three.min.js"]'
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.async = true;
      document.head.appendChild(script);
    }

    const handleLoad = () => setThreeLoaded(true);
    script.addEventListener("load", handleLoad);

    const capturedScript = script;
    return () => {
      capturedScript.removeEventListener("load", handleLoad);
    };
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        triggerToast(`Copied ${label} to clipboard!`);
      })
      .catch(() => {
        triggerToast("Failed to copy to clipboard");
      });
  };

  const buildLatheGeometry = (pointsData: number[][]) => {
    const THREE = window.THREE;
    if (!THREE) return null;
    const vectors = pointsData.map((p: number[]) => new THREE.Vector2(p[0], p[1]));
    return new THREE.LatheGeometry(vectors, 32);
  };

  useEffect(() => {
    if (!threeLoaded || !canvasRef.current || !containerRef.current) return;

    const THREE = window.THREE;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Create Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create Perspective & Ortho Cameras
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.5);
    cameraRef.current = camera;

    const aspect = width / height;
    const d = 2.4;
    const orthoCamera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 0.1, 100);
    orthoCamera.position.set(0, 0.2, 8);
    orthoCameraRef.current = orthoCamera;

    activeCameraRef.current = orthographic ? orthoCamera : camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    // Groups hierarchy
    const rotationGroup = new THREE.Group();
    const flameGroup = new THREE.Group();
    rotationGroup.add(flameGroup);
    scene.add(rotationGroup);
    rotationGroupRef.current = rotationGroup;
    flameGroupRef.current = flameGroup;

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    // Directional Key Light (gives shiny edges to glass/gold)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(5, 5, 4);
    scene.add(keyLight);
    keyLightRef.current = keyLight;

    // Soft fill
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-5, -2, 2);
    scene.add(fillLight);
    fillLightRef.current = fillLight;

    // Internal Glow PointLight (simulating real flame illumination)
    const coreLight = new THREE.PointLight(primaryColor, 3, 8);
    coreLight.position.set(0, -0.1, 0);
    scene.add(coreLight);
    coreLightRef.current = coreLight;

    // Pristine Light Grid Floor
    const gridHelper = new THREE.GridHelper(10, 20, 0x06b6d4, 0xe2e8f0);
    gridHelper.position.y = -1.4;
    scene.add(gridHelper);
    gridHelperRef.current = gridHelper;

    const logsGroup = new THREE.Group();
    logsGroup.position.y = -0.9;
    flameGroup.add(logsGroup);
    logsGroupRef.current = logsGroup;

    // Dynamic fire log shapes
    const logMaterial = new THREE.MeshStandardMaterial({
      color: 0x4d2110,
      roughness: 0.9,
      metalness: 0.1
    });
    const logGeom = new THREE.CylinderGeometry(0.08, 0.1, 1.2, 12);

    const log1 = new THREE.Mesh(logGeom, logMaterial);
    log1.rotation.set(Math.PI / 2, 0, Math.PI / 4);
    log1.position.set(0, 0, -0.1);
    logsGroup.add(log1);

    const log2 = new THREE.Mesh(logGeom, logMaterial);
    log2.rotation.set(Math.PI / 2, 0, -Math.PI / 4);
    log2.position.set(0, 0, 0.1);
    logsGroup.add(log2);

    // Glowing charcoal core mesh in middle of wood logs
    const charcoalGeom = new THREE.SphereGeometry(0.18, 12, 12);
    const charcoalMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      emissive: 0xea580c,
      emissiveIntensity: 1.5
    });
    const charcoal = new THREE.Mesh(charcoalGeom, charcoalMat);
    charcoal.position.set(0, 0.05, 0);
    logsGroup.add(charcoal);

    const embersGroup = new THREE.Group();
    flameGroup.add(embersGroup);

    const emberGeom = new THREE.SphereGeometry(0.025, 6, 6);
    const emberMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.9
    });

    const embers: EmberData[] = [];
    for (let i = 0; i < 30; i++) {
      const mesh = new THREE.Mesh(emberGeom, emberMat);
      // Random initial distribution
      mesh.position.set(
        (Math.random() - 0.5) * 0.6,
        -0.7 + Math.random() * 1.5,
        (Math.random() - 0.5) * 0.4
      );
      embersGroup.add(mesh);
      embers.push({
        mesh: mesh,
        speedY: 0.015 + Math.random() * 0.02,
        seed: Math.random() * 100,
        originalX: mesh.position.x
      });
    }
    embersArrayRef.current = embers;

    // Instantiate Flame geometries
    const outerGeom = buildLatheGeometry(OUTER_PROFILE_POINTS);
    const innerGeom = buildLatheGeometry(INNER_PROFILE_POINTS);

    // Dynamic Materials
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: primaryColor,
      side: THREE.DoubleSide,
      transparent: true
    });
    const midMat = new THREE.MeshStandardMaterial({
      color: accentColor,
      side: THREE.DoubleSide,
      emissive: accentColor,
      emissiveIntensity: 0.5
    });
    const innerMat = new THREE.MeshStandardMaterial({
      color: coreColor,
      side: THREE.DoubleSide,
      emissive: coreColor,
      emissiveIntensity: 1.2
    });

    // Outer Mesh
    const outerMesh = new THREE.Mesh(outerGeom, outerMat);
    outerMesh.position.set(0, -0.15, 0);
    flameGroup.add(outerMesh);
    outerFlameRef.current = outerMesh;

    // Mid Flame Mesh
    const midMesh = new THREE.Mesh(outerGeom, midMat);
    midMesh.scale.setScalar(0.72);
    midMesh.position.set(0, -0.22, 0.03); // Nudged slightly forward
    flameGroup.add(midMesh);
    midFlameRef.current = midMesh;

    // Inner Flame Core Mesh
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    innerMesh.scale.setScalar(0.9);
    innerMesh.position.set(0, -0.32, 0.05); // Deeper inside, forward glow
    flameGroup.add(innerMesh);
    innerFlameRef.current = innerMesh;

    let animFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();

      // Flame flickering scale pulses
      const flickerFactor =
        Math.sin(time * 12 * flickerSpeed) * 0.03 + Math.cos(time * 7 * flickerSpeed) * 0.02;
      const baseScaleY = 1.0 + flickerFactor;
      const baseScaleXZ = 1.0 - flickerFactor * 0.5;

      // Apply 2.5D Flattening and physics sway
      if (flameGroupRef.current) {
        // Squish Z to keep icon crisp & flat (the flatness slider offset)
        flameGroupRef.current.scale.set(baseScaleXZ, baseScaleY, baseScaleXZ * flatness);
      }

      // Sine wave swaying representing soft rising heat
      const swayAmount = 0.08 * swayIntensity;
      if (outerFlameRef.current) {
        outerFlameRef.current.rotation.z = Math.sin(time * 2.5 * flickerSpeed) * swayAmount;
        outerFlameRef.current.rotation.x = Math.cos(time * 1.8 * flickerSpeed) * (swayAmount * 0.6);
      }
      if (midFlameRef.current) {
        // Offset phases to create organic independent licking motion
        midFlameRef.current.rotation.z =
          Math.sin(time * 2.8 * flickerSpeed + 1.2) * (swayAmount * 1.1);
        midFlameRef.current.rotation.x =
          Math.cos(time * 2.1 * flickerSpeed + 0.8) * (swayAmount * 0.8);
      }
      if (innerFlameRef.current) {
        innerFlameRef.current.rotation.z =
          Math.sin(time * 3.2 * flickerSpeed + 2.4) * (swayAmount * 0.7);
      }

      // Animate Rising Sparks/Embers
      embersArrayRef.current.forEach((ember: EmberData, index: number) => {
        // Hide embers exceeding user count limits
        if (index >= emberCount) {
          ember.mesh.visible = false;
          return;
        }
        ember.mesh.visible = true;

        // Rise upward
        ember.mesh.position.y += ember.speedY * flickerSpeed;

        // Drifting sine wave
        const drift = Math.sin(time * 3.5 + ember.seed) * 0.012;
        ember.mesh.position.x += drift;

        // Slowly shrink and fade out as it reaches the top
        const heightFactor = (ember.mesh.position.y + 0.7) / 1.7; // mapped 0 to 1
        const scale = Math.max(0.01, 1.0 - heightFactor);
        ember.mesh.scale.setScalar(scale);

        // Reset particle back to hot base
        if (ember.mesh.position.y > 0.95 || heightFactor >= 1.0) {
          ember.mesh.position.y = -0.7;
          ember.mesh.position.x = (Math.random() - 0.5) * 0.5;
        }
      });

      // Animate charcoal heat intensity
      charcoalMat.emissiveIntensity = 1.3 + Math.sin(time * 5) * 0.25;

      // Core pointlight flicker
      if (coreLightRef.current) {
        coreLightRef.current.intensity = 2.5 + Math.sin(time * 15) * 0.6;
      }

      if (rendererRef.current && sceneRef.current && activeCameraRef.current) {
        rendererRef.current.render(sceneRef.current, activeCameraRef.current);
      }

      animFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      rendererRef.current.setSize(w, h);

      if (cameraRef.current) {
        cameraRef.current.aspect = w / h;
        cameraRef.current.updateProjectionMatrix();
      }
      if (orthoCameraRef.current) {
        const activeAspect = w / h;
        orthoCameraRef.current.left = -d * activeAspect;
        orthoCameraRef.current.right = d * activeAspect;
        orthoCameraRef.current.top = d;
        orthoCameraRef.current.bottom = -d;
        orthoCameraRef.current.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      outerGeom?.dispose();
      innerGeom?.dispose();
      logGeom.dispose();
      charcoalGeom.dispose();
      emberGeom.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threeLoaded]);

  useEffect(() => {
    if (!threeLoaded || !outerFlameRef.current || !midFlameRef.current || !innerFlameRef.current)
      return;

    const pm = outerFlameRef.current.material;
    const mm = midFlameRef.current.material;
    const im = innerFlameRef.current.material;

    // Apply color spectrums
    pm.color.set(primaryColor);
    mm.color.set(accentColor);
    mm.emissive.set(accentColor);
    im.color.set(coreColor);
    im.emissive.set(coreColor);

    // Apply specific stylized material shaders
    if (flameStyle === "glass") {
      pm.roughness = 0.08;
      pm.metalness = 0.1;
      pm.transmission = 0.88;
      pm.thickness = 1.5;
      pm.clearcoat = 1.0;
      pm.clearcoatRoughness = 0.05;
      pm.ior = 1.48;
      pm.opacity = 0.95;
    } else if (flameStyle === "holo") {
      pm.roughness = 0.15;
      pm.metalness = 0.95;
      pm.transmission = 0.0;
      pm.clearcoat = 1.0;
      pm.clearcoatRoughness = 0.1;
      pm.ior = 1.65;
      pm.opacity = 0.8;
      // High emission shimmer
      pm.emissive = new window.THREE.Color(accentColor);
      pm.emissiveIntensity = 0.6;
    } else if (flameStyle === "gold") {
      pm.roughness = 0.1;
      pm.metalness = 0.98;
      pm.transmission = 0.0;
      pm.clearcoat = 0.8;
      pm.clearcoatRoughness = 0.05;
      pm.opacity = 1.0;
    } else if (flameStyle === "matte") {
      pm.roughness = 0.95;
      pm.metalness = 0.02;
      pm.transmission = 0.0;
      pm.clearcoat = 0.0;
      pm.opacity = 1.0;
    }
  }, [flameStyle, primaryColor, accentColor, coreColor, threeLoaded]);

  // Sync log elements visibility
  useEffect(() => {
    if (logsGroupRef.current) {
      logsGroupRef.current.visible = showLogs;
    }
  }, [showLogs]);

  // Sync grid visibility helper
  useEffect(() => {
    if (gridHelperRef.current) {
      gridHelperRef.current.visible = gridVisible;
    }
  }, [gridVisible]);

  // Sync orthographic camera selection
  useEffect(() => {
    if (!threeLoaded || !cameraRef.current || !orthoCameraRef.current) return;
    activeCameraRef.current = orthographic ? orthoCameraRef.current : cameraRef.current;
  }, [orthographic, threeLoaded]);

  // Dynamic Lighting preset configurations
  useEffect(() => {
    if (!threeLoaded || !keyLightRef.current || !fillLightRef.current) return;
    if (lightingPreset === "warm") {
      keyLightRef.current.color.set("#ffd1a4");
      fillLightRef.current.color.set("#f1f5f9");
    } else if (lightingPreset === "cool") {
      keyLightRef.current.color.set("#a4f0ff");
      fillLightRef.current.color.set("#e2e8f0");
    } else if (lightingPreset === "magic") {
      keyLightRef.current.color.set("#f472b6");
      fillLightRef.current.color.set("#818cf8");
    }
  }, [lightingPreset, threeLoaded]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !rotationGroupRef.current) return;
    const deltaX = e.clientX - previousMousePosition.current.x;
    const deltaY = e.clientY - previousMousePosition.current.y;

    rotationGroupRef.current.rotation.y += deltaX * 0.007;
    rotationGroupRef.current.rotation.x += deltaY * 0.007;

    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDragging.current = true;
      previousMousePosition.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || e.touches.length !== 1 || !rotationGroupRef.current) return;
    const deltaX = e.touches[0].clientX - previousMousePosition.current.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.current.y;

    rotationGroupRef.current.rotation.y += deltaX * 0.007;
    rotationGroupRef.current.rotation.x += deltaY * 0.007;

    previousMousePosition.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const resetRotation = () => {
    if (rotationGroupRef.current) {
      rotationGroupRef.current.rotation.set(0, 0, 0);
      triggerToast("Reset flame visual angle");
    }
  };

  const downloadPng = () => {
    if (!rendererRef.current || !sceneRef.current || !activeCameraRef.current || !canvasRef.current)
      return;

    const gridWasVisible = gridHelperRef.current ? gridHelperRef.current.visible : false;
    if (gridHelperRef.current) gridHelperRef.current.visible = false;

    rendererRef.current.render(sceneRef.current, activeCameraRef.current);
    const dataUrl = canvasRef.current.toDataURL("image/png");

    if (gridHelperRef.current) gridHelperRef.current.visible = gridWasVisible;
    rendererRef.current.render(sceneRef.current, activeCameraRef.current);

    const link = document.createElement("a");
    link.download = `Premium-Flame-Icon-3D.png`;
    link.href = dataUrl;
    link.click();
    triggerToast("Alpha Transparent PNG Downloaded!");
  };

  const applySpectrumPreset = (type: string) => {
    if (type === "classic") {
      setPrimaryColor("#f97316");
      setAccentColor("#ef4444");
      setCoreColor("#fbbf24");
      triggerToast("Applied solar flame spectrum");
    } else if (type === "cosmic") {
      setPrimaryColor("#a855f7");
      setAccentColor("#ec4899");
      setCoreColor("#6366f1");
      triggerToast("Applied cosmic magic flame spectrum");
    } else if (type === "frost") {
      setPrimaryColor("#06b6d4");
      setAccentColor("#3b82f6");
      setCoreColor("#a5f3fc");
      triggerToast("Applied absolute frost sapphire spectrum");
    } else if (type === "toxic") {
      setPrimaryColor("#22c55e");
      setAccentColor("#84cc16");
      setCoreColor("#e11d48");
      triggerToast("Applied plasma nuclear green spectrum");
    }
  };

  const getThreeJsCode = () => {
    return `// Optimized Flame Icon Geometry utilizing Revolved Silhouette curves and non-uniform squishing for 2.5D designer aesthetics
import * as THREE from 'three';

const OUTER_PROFILE = [
  new THREE.Vector2(0, 0.95),
  new THREE.Vector2(0.03, 0.90),
  new THREE.Vector2(0.08, 0.80),
  new THREE.Vector2(0.15, 0.65),
  new THREE.Vector2(0.24, 0.45),
  new THREE.Vector2(0.34, 0.20),
  new THREE.Vector2(0.42, -0.05),
  new THREE.Vector2(0.46, -0.25),
  new THREE.Vector2(0.42, -0.45),
  new THREE.Vector2(0.32, -0.60),
  new THREE.Vector2(0.18, -0.70),
  new THREE.Vector2(0.08, -0.74),
  new THREE.Vector2(0, -0.75)
];

const outerGeom = new THREE.LatheGeometry(OUTER_PROFILE, 32);

// Apply custom designer flatness onto the Mesh scale (X, Y, Z * ${flatness})
const flameMesh = new THREE.Mesh(outerGeom, new THREE.MeshPhysicalMaterial({
  color: "${primaryColor}",
  roughness: 0.1,
  transmission: 0.85,
  thickness: 1.2
}));

flameMesh.scale.set(1, 1, ${flatness}); // Modern stylized flat icon look!`;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans overflow-x-hidden selection:bg-orange-100 selection:text-orange-900">
      {/* Toast systems */}
      {toastMessage && (
        <div
          className="fixed top-6 right-6 z-50 flex items-center bg-white border border-orange-200 text-orange-800 px-4 py-3 rounded-xl shadow-xl backdrop-blur-md"
          style={{ animation: "slideIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards" }}
        >
          <svg
            className="w-5 h-5 mr-2 stroke-current text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header Panel */}
      <header className="border-b border-slate-200 bg-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-0 z-40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl shadow-md shadow-orange-500/10">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9.879 16.172a3 3 0 014.242 0M9.879 16.172a3 3 0 01-4.242-4.242L12 6.343l5.657 5.657a3 3 0 01-4.242 4.242L12 12l-2.121 2.172z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tight">
              FLAMESTUDIO 3D
            </h1>
            <p className="text-xs text-slate-500 font-medium font-mono">
              2.5D Premium Flame Component Generator
            </p>
          </div>
        </div>

        {/* Quick presets */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl">
          <span className="text-xs font-semibold text-slate-400 mr-1 uppercase tracking-wider hidden lg:inline">
            Color Presets:
          </span>
          {[
            { id: "classic", label: "Solar Flame", color: "#f97316" },
            { id: "cosmic", label: "Cosmic Magic", color: "#a855f7" },
            { id: "frost", label: "Absolute Frost", color: "#06b6d4" },
            { id: "toxic", label: "Plasma Nuclear", color: "#22c55e" }
          ].map((preset, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => applySpectrumPreset(preset.id)}
              className="text-xs px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all font-medium hover:scale-105 active:scale-95 duration-150 flex items-center gap-1.5 shadow-sm"
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: preset.color }}
              ></span>
              {preset.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Studio Viewport Grid */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
        {/* Left Control Panel (4 Columns) */}
        <div className="lg:col-span-4 border-r border-slate-200 bg-slate-50 flex flex-col overflow-y-auto max-h-[calc(100vh-73px)]">
          <div className="grid grid-cols-3 border-b border-slate-200 text-center sticky top-0 bg-slate-50 z-10">
            <button
              type="button"
              onClick={() => setActiveTab("flame")}
              className={`py-3 text-xs font-bold border-b-2 transition-all ${activeTab === "flame" ? "border-orange-500 text-orange-600 bg-white" : "border-transparent text-slate-500 hover:text-slate-800"}`}
            >
              Flame Profile
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("rendering")}
              className={`py-3 text-xs font-bold border-b-2 transition-all ${activeTab === "rendering" ? "border-orange-500 text-orange-600 bg-white" : "border-transparent text-slate-500 hover:text-slate-800"}`}
            >
              Material &amp; Glow
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("physics")}
              className={`py-3 text-xs font-bold border-b-2 transition-all ${activeTab === "physics" ? "border-orange-500 text-orange-600 bg-white" : "border-transparent text-slate-500 hover:text-slate-800"}`}
            >
              Sway &amp; Physics
            </button>
          </div>

          <div className="p-6 flex-1 flex flex-col gap-6">
            {activeTab === "flame" && (
              <div className="space-y-6 animate-fade-in">
                {/* 2D Silhouette Flattening (Designer flat-look slider) */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4 shadow-sm">
                  <div>
                    <span className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-1">
                      2.5D Flattening Offset
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      Compresses Z-axis to create a beautiful flat vector style in isometric space
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.05"
                      value={flatness}
                      onChange={(e) => setFlatness(parseFloat(e.target.value))}
                      className="flex-1 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <span className="text-xs font-mono font-bold bg-slate-100 px-2.5 py-1 rounded text-slate-600">
                      {flatness}x
                    </span>
                  </div>
                </div>

                {/* Custom Layer Colors */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4 shadow-sm">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">
                    Layer Fire Spectrum
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        Outer Envelope
                      </span>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="color"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                        />
                        <span className="text-xs font-mono uppercase text-slate-600">
                          {primaryColor}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">Middle Core</span>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="color"
                          value={accentColor}
                          onChange={(e) => setAccentColor(e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                        />
                        <span className="text-xs font-mono uppercase text-slate-600">
                          {accentColor}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">Inner Heart</span>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="color"
                          value={coreColor}
                          onChange={(e) => setCoreColor(e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                        />
                        <span className="text-xs font-mono uppercase text-slate-600">
                          {coreColor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Base Hearth */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div>
                    <span className="text-xs font-bold text-slate-700">
                      Stylized Log Fuel Hearth
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">
                      Appends crossed campfire firewood cylinders at base
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowLogs(!showLogs)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all ${showLogs ? "bg-orange-500" : "bg-slate-200"}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-all ${showLogs ? "translate-x-6" : "translate-x-1"} shadow`}
                    />
                  </button>
                </div>
              </div>
            )}

            {activeTab === "rendering" && (
              <div className="space-y-6 animate-fade-in">
                {/* Advanced Material styles */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                    Premium Icon Shader
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "glass", label: "Glassmorphism", desc: "Refractive translucent glass" },
                      { id: "holo", label: "Holographic", desc: "Emissive shifting chrome" },
                      { id: "gold", label: "Polished Metal", desc: "Ultra shiny reflections" },
                      { id: "matte", label: "Tactile Clay", desc: "Clean, soft pastel matte" }
                    ].map((style) => (
                      <button
                        type="button"
                        key={style.id}
                        onClick={() => setFlameStyle(style.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${flameStyle === style.id ? "border-orange-500 bg-orange-50/50 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"}`}
                      >
                        <div
                          className={`text-xs font-bold ${flameStyle === style.id ? "text-orange-900" : "text-slate-800"}`}
                        >
                          {style.label}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                          {style.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Studio Lighting Preset */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4 shadow-sm">
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Studio Environment Rig
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "warm", label: "Warm Solar", glowClass: "from-orange-400 to-red-400" },
                      { id: "cool", label: "Cool Aurora", glowClass: "from-cyan-400 to-blue-400" },
                      {
                        id: "magic",
                        label: "Magic Nebula",
                        glowClass: "from-fuchsia-400 to-indigo-400"
                      }
                    ].map((preset) => (
                      <button
                        type="button"
                        key={preset.id}
                        onClick={() => setLightingPreset(preset.id)}
                        className={`p-2 rounded-xl text-[10px] font-bold border text-left transition-all ${lightingPreset === preset.id ? "border-orange-500 bg-orange-50/20" : "border-slate-200 bg-white"}`}
                      >
                        <div
                          className={`w-full h-1.5 rounded bg-gradient-to-r ${preset.glowClass} mb-1`}
                        />
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "physics" && (
              <div className="space-y-6 animate-fade-in">
                {/* Wind Sway Rates */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4 shadow-sm">
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Dynamic Turbulence Simulator
                  </h4>

                  {/* Sway offset */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">
                        Turbulence Sway Intensity
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-700">
                        {swayIntensity}x
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="3"
                      step="0.1"
                      value={swayIntensity}
                      onChange={(e) => setSwayIntensity(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                  </div>

                  {/* Flicker Speed */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">
                        Flicker Pulse Frequency
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-700">
                        {flickerSpeed}Hz
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="3.0"
                      step="0.1"
                      value={flickerSpeed}
                      onChange={(e) => setFlickerSpeed(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                  </div>
                </div>

                {/* Particle Embers Count */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4 shadow-sm">
                  <div className="flex justify-between mb-1">
                    <div>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Floating Heat Embers
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Total volume of physical spark particles
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-700">
                      {emberCount} sparks
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    step="1"
                    value={emberCount}
                    onChange={(e) => setEmberCount(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center Main Live Viewport Panel (5 Columns) */}
        <div className="lg:col-span-5 border-r border-slate-200 bg-slate-100/40 flex flex-col items-center justify-center relative min-h-[450px]">
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="text-[10px] font-black tracking-widest text-orange-600 bg-orange-100 border border-orange-200 px-2 py-1 rounded-md uppercase">
              VIVID ENGINE 2.5
            </span>
            <div className="text-sm font-bold text-slate-800 mt-2">
              DYNAMICS FLAME{" "}
              <span className="text-xs font-normal text-slate-500">({flameStyle})</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Drag to spin, scroll to zoom</div>
          </div>

          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              onClick={resetRotation}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all text-xs flex items-center gap-1 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17"
                />
              </svg>
              <span>Reset Camera</span>
            </button>
          </div>

          {/* WebGL Canvas Wrapper */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className="w-full h-full relative cursor-grab active:cursor-grabbing overflow-hidden flex items-center justify-center bg-slate-100/30"
          >
            {!threeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-20 gap-3">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs font-semibold text-slate-500 tracking-wider">
                  Initializing Fluid Engine...
                </span>
              </div>
            )}
            <canvas ref={canvasRef} className="w-full h-full block z-10" />
          </div>

          {/* Bottom control Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 border border-slate-200 rounded-2xl p-4 shadow-lg backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Show Helper Floor:
                </span>
                <button
                  type="button"
                  onClick={() => setGridVisible(!gridVisible)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${gridVisible ? "bg-orange-500 border-orange-400 text-white" : "bg-white border-slate-200 text-slate-600"}`}
                >
                  {gridVisible ? "FLOOR ACTIVE" : "HIDDEN"}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Projection:
              </span>
              <button
                type="button"
                onClick={() => setOrthographic(!orthographic)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${orthographic ? "bg-orange-500 border-orange-400 text-white" : "bg-white border-slate-200 text-slate-600"}`}
              >
                {orthographic ? "ORTHOGRAPHIC (2D)" : "PERSPECTIVE (3D)"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Developer Output & Snippet studio (3 Columns) */}
        <div className="lg:col-span-3 bg-slate-50 flex flex-col overflow-y-auto max-h-[calc(100vh-73px)] border-l lg:border-l-0 border-slate-200">
          <div className="border-b border-slate-200 bg-white p-4 sticky top-0 z-10">
            <h3 className="text-xs font-black uppercase text-slate-500 tracking-wider">
              Component Export
            </h3>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Capture transparent PNG assets or fetch code
            </p>
          </div>

          <div className="p-6 space-y-6 flex-1 flex flex-col">
            {/* Static UI Glass Card component presentation */}
            <div className="space-y-3">
              <span className="block text-xs font-bold uppercase text-slate-400 tracking-wider">
                Interactive UI Presentation (Card CSS)
              </span>

              <div
                className="relative p-6 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center bg-white border border-slate-200/80 shadow-2xl transition-all"
                style={{
                  boxShadow: `0 10px 40px -10px ${primaryColor}22`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-red-500/5 pointer-events-none" />

                {/* Flame element representational container */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center border border-slate-100 shadow-inner mb-4 relative"
                  style={{ backgroundColor: "#fffbf9" }}
                >
                  <span
                    className="w-8 h-10 rounded-full animate-pulse transition-colors"
                    style={{
                      backgroundColor: primaryColor,
                      clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
                    }}
                  />
                </div>

                <h4 className="text-sm font-extrabold text-slate-800 tracking-tight">
                  Active Flame Item
                </h4>
                <p className="text-[10px] text-slate-500 mt-1">Ready for production dashboards</p>
              </div>
            </div>

            {/* Downloader action */}
            <div className="space-y-3">
              <span className="block text-xs font-bold uppercase text-slate-400 tracking-wider">
                Assets Exporter
              </span>
              <button
                type="button"
                onClick={downloadPng}
                className="w-full py-3 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 font-extrabold text-xs text-white uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/10"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Alpha PNG
              </button>
            </div>

            {/* Code Generator tabs */}
            <div className="flex-1 flex flex-col min-h-[220px]">
              <div className="flex border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider mb-2">
                <button
                  type="button"
                  onClick={() => setCodeTab("threejs")}
                  className={`flex-1 pb-1.5 border-b-2 text-center transition-all ${codeTab === "threejs" ? "border-orange-500 text-orange-600 font-bold" : "border-transparent text-slate-400"}`}
                >
                  Vanilla Three.js Setup
                </button>
              </div>

              {/* Code Panel */}
              <div className="flex-1 bg-slate-900 rounded-xl border border-slate-800 relative group max-h-[180px] overflow-y-auto">
                <pre className="p-4 text-[10px] font-mono text-slate-300 whitespace-pre-wrap leading-relaxed select-all">
                  {getThreeJsCode()}
                </pre>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(getThreeJsCode(), "ThreeJS profile geometry source")
                  }
                  className="absolute top-2 right-2 p-1.5 bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white rounded-lg text-[10px] font-medium transition-all flex items-center gap-1.5 opacity-0 group-hover:opacity-100"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer System Specs */}
      <footer className="border-t border-slate-200 bg-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <div className="flex items-center gap-6">
          <span>
            Active Shader:{" "}
            <strong className="text-slate-700 font-semibold">{flameStyle.toUpperCase()}</strong>
          </span>
          <span>
            Camera aspect ratio:{" "}
            <strong className="text-slate-700 font-semibold">
              {orthographic ? "Orthogonal 2D" : "Perspective 3D"}
            </strong>
          </span>
          <span>
            Flattening Offset: <strong className="text-slate-700 font-semibold">{flatness}x</strong>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span>Powered by</span>
          <span className="font-extrabold text-orange-500 tracking-wider">WebGL + Three.js</span>
        </div>
      </footer>
    </div>
  );
}
