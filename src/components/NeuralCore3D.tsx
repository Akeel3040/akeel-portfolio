import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { NeuralCoreMode } from "../types";

interface NeuralCore3DProps {
  mode?: NeuralCoreMode;
  audioPulse?: number; // 0 to 1 from voice guide
  interactive?: boolean;
}

export const NeuralCore3D: React.FC<NeuralCore3DProps> = ({
  mode = "hero",
  audioPulse = 0,
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const audioPulseRef = useRef<number>(audioPulse);
  const modeRef = useRef<NeuralCoreMode>(mode);

  // Keep refs synchronized with props for the animation loop
  useEffect(() => {
    audioPulseRef.current = audioPulse;
  }, [audioPulse]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let canvas: HTMLCanvasElement;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      canvas = renderer.domElement;
    } catch (e) {
      console.warn("WebGL not supported or disabled:", e);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0d1117, 1.5);
    scene.add(ambientLight);

    // Cold teal spotlight
    const spotTeal = new THREE.SpotLight(0x9fc4d0, 8, 25, Math.PI / 4, 0.8, 1);
    spotTeal.position.set(5, 8, 8);
    scene.add(spotTeal);

    // Warm champagne accent light
    const spotGold = new THREE.SpotLight(0xc9a96a, 5, 20, Math.PI / 3, 0.9, 1);
    spotGold.position.set(-6, -5, 6);
    scene.add(spotGold);

    // Central pulsing point light
    const corePointLight = new THREE.PointLight(0x9fc4d0, 2, 8);
    scene.add(corePointLight);

    // Main group holding the neural core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Generate Fibonacci Sphere Nodes (Synaptic Points)
    const nodeCount = 90;
    const baseRadius = 2.0;
    const basePositions: THREE.Vector3[] = [];
    const currentPositions: THREE.Vector3[] = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const pos = new THREE.Vector3(x * baseRadius, y * baseRadius, z * baseRadius);
      basePositions.push(pos.clone());
      currentPositions.push(pos.clone());
    }

    // 2. Point Cloud (Glowing Synaptic Nodes)
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePosArray = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      nodePosArray[i * 3] = basePositions[i].x;
      nodePosArray[i * 3 + 1] = basePositions[i].y;
      nodePosArray[i * 3 + 2] = basePositions[i].z;
    }
    nodeGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(nodePosArray, 3)
    );

    // Node Points Material
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x9fc4d0,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const pointCloud = new THREE.Points(nodeGeometry, nodeMaterial);
    coreGroup.add(pointCloud);

    // 3. Synaptic Connection Lines (Interconnected Nodes)
    const maxDistance = 1.05;
    const lineIndices: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (basePositions[i].distanceTo(basePositions[j]) < maxDistance) {
          lineIndices.push(i, j);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(lineIndices.length * 3);
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x5a7a87,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    coreGroup.add(lineSegments);

    // 4. Inner Crystalline Glass Shell (Wireframe Geodesic)
    const innerGeom = new THREE.IcosahedronGeometry(1.4, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0d1721,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.45,
    });
    const innerCore = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerCore);

    // 5. Orbiting Neural Electrons / Rings
    const orbitCount = 45;
    const orbitGeom = new THREE.BufferGeometry();
    const orbitPos = new Float32Array(orbitCount * 3);
    const orbitSpeeds: number[] = [];
    const orbitRadii: number[] = [];
    const orbitTilts: number[] = [];

    for (let i = 0; i < orbitCount; i++) {
      orbitRadii.push(2.4 + Math.random() * 0.7);
      orbitSpeeds.push((Math.random() * 0.02 + 0.008) * (Math.random() > 0.5 ? 1 : -1));
      orbitTilts.push((Math.random() - 0.5) * Math.PI);
    }

    orbitGeom.setAttribute("position", new THREE.BufferAttribute(orbitPos, 3));
    const orbitMat = new THREE.PointsMaterial({
      color: 0xc9a96a,
      size: 0.065,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const orbitPoints = new THREE.Points(orbitGeom, orbitMat);
    coreGroup.add(orbitPoints);

    // Mouse parallax tracking
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };
    const targetPosition = { x: 0, y: 0 };
    const currentPosition = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotation.y = nx * 0.45;
      targetRotation.x = -ny * 0.35;
      targetPosition.x = nx * 0.25;
      targetPosition.y = ny * 0.2;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Render Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      const pulse = audioPulseRef.current;
      const currentMode = modeRef.current;

      // Base auto rotation
      coreGroup.rotation.y += delta * 0.25;
      coreGroup.rotation.x += delta * 0.08;

      // Mouse Parallax Smooth Damping
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
      currentPosition.x += (targetPosition.x - currentPosition.x) * 0.05;
      currentPosition.y += (targetPosition.y - currentPosition.y) * 0.05;

      coreGroup.rotation.y += currentRotation.y * 0.03;
      coreGroup.rotation.x += currentRotation.x * 0.03;

      // Mode-based spatial transforms
      let modeTargetX = 0;
      let modeTargetScale = 1.0;

      if (currentMode === "about") {
        modeTargetX = 1.8; // Shifts to the side as requested
        modeTargetScale = 0.85;
      } else if (currentMode === "skills" || currentMode === "exploded") {
        modeTargetX = -1.6;
        modeTargetScale = 1.25; // Exploded deconstruction
      }

      coreGroup.position.x += (modeTargetX + currentPosition.x - coreGroup.position.x) * 0.04;
      coreGroup.position.y += (currentPosition.y - coreGroup.position.y) * 0.04;

      // Audio pulse reaction: expands nodes and changes glow intensity
      const scaleFactor = modeTargetScale * (1 + pulse * 0.18 + Math.sin(time * 1.5) * 0.02);
      coreGroup.scale.set(scaleFactor, scaleFactor, scaleFactor);

      corePointLight.intensity = 2 + pulse * 6;
      lineMaterial.opacity = 0.35 + pulse * 0.45;
      if (pulse > 0.2) {
        lineMaterial.color.setHex(0xc9a96a); // Flash champagne gold on speech beats
        nodeMaterial.color.setHex(0xe1c48b);
      } else {
        lineMaterial.color.setHex(0x5a7a87);
        nodeMaterial.color.setHex(0x9fc4d0);
      }

      // Update Node positions (subtle organic breathing)
      const positions = nodeGeometry.attributes.position.array as Float32Array;
      const explosionMultiplier = currentMode === "exploded" || currentMode === "skills" ? 1.35 : 1.0;

      for (let i = 0; i < nodeCount; i++) {
        const base = basePositions[i];
        const noise = Math.sin(time * 2 + i) * 0.05;
        const rMultiplier = explosionMultiplier + noise + pulse * 0.1;

        positions[i * 3] = base.x * rMultiplier;
        positions[i * 3 + 1] = base.y * rMultiplier;
        positions[i * 3 + 2] = base.z * rMultiplier;

        currentPositions[i].set(
          positions[i * 3],
          positions[i * 3 + 1],
          positions[i * 3 + 2]
        );
      }
      nodeGeometry.attributes.position.needsUpdate = true;

      // Update Connection Line coordinates
      const linePos = lineGeometry.attributes.position.array as Float32Array;
      let ptr = 0;
      for (let k = 0; k < lineIndices.length; k += 2) {
        const idxA = lineIndices[k];
        const idxB = lineIndices[k + 1];
        const posA = currentPositions[idxA];
        const posB = currentPositions[idxB];

        linePos[ptr++] = posA.x;
        linePos[ptr++] = posA.y;
        linePos[ptr++] = posA.z;

        linePos[ptr++] = posB.x;
        linePos[ptr++] = posB.y;
        linePos[ptr++] = posB.z;
      }
      lineGeometry.attributes.position.needsUpdate = true;

      // Orbiting particles
      const orbPos = orbitGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < orbitCount; i++) {
        const angle = time * orbitSpeeds[i] * (1 + pulse * 1.5) + i;
        const rad = orbitRadii[i] * (1 + pulse * 0.15);
        const tilt = orbitTilts[i];

        orbPos[i * 3] = Math.cos(angle) * rad;
        orbPos[i * 3 + 1] = Math.sin(angle) * rad * Math.cos(tilt);
        orbPos[i * 3 + 2] = Math.sin(angle) * rad * Math.sin(tilt);
      }
      orbitGeom.attributes.position.needsUpdate = true;

      // Inner crystalline rotation
      innerCore.rotation.y -= delta * 0.15;
      innerCore.rotation.z += delta * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);

      // Clean up Three.js allocations
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      orbitGeom.dispose();
      orbitMat.dispose();
      renderer.dispose();

      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden z-10 flex items-center justify-center"
      aria-label="3D AI Neural Core Simulation"
    />
  );
};
