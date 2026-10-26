import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, Move, ExternalLink, Play, Pause, Layers } from "lucide-react";
import { FEATURED_PROJECTS } from "../data";

interface Showcase360Props {
  onOpenCaseStudy?: (projectId: string) => void;
}

export const Showcase360: React.FC<Showcase360Props> = ({ onOpenCaseStudy }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0.15, y: -0.4 });
  const autoRotateRef = useRef(true);

  const currentProject = FEATURED_PROJECTS[activeProjectIndex];

  useEffect(() => {
    autoRotateRef.current = isAutoRotating;
  }, [isAutoRotating]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("WebGL unavailable for 360 showcase:", e);
      return;
    }

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Studio Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x9fc4d0, 3.5);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const goldAccent = new THREE.PointLight(0xc9a96a, 2.5, 12);
    goldAccent.position.set(3, -2, 4);
    scene.add(goldAccent);

    // Main 3D Laptop / Workstation Model Group
    const deviceGroup = new THREE.Group();
    scene.add(deviceGroup);

    // Create dynamic high-resolution 2D Canvas texture for Screen UI
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    const sCtx = screenCanvas.getContext("2d")!;

    const renderScreenUI = (projIndex: number) => {
      // Dark Charcoal Studio UI Background
      sCtx.fillStyle = "#090D14";
      sCtx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);

      // Top Browser / App bar
      sCtx.fillStyle = "#111722";
      sCtx.fillRect(0, 0, screenCanvas.width, 50);

      // Window dots
      sCtx.fillStyle = "#FF5F56";
      sCtx.beginPath();
      sCtx.arc(30, 25, 6, 0, Math.PI * 2);
      sCtx.fill();
      sCtx.fillStyle = "#FFBD2E";
      sCtx.beginPath();
      sCtx.arc(50, 25, 6, 0, Math.PI * 2);
      sCtx.fill();
      sCtx.fillStyle = "#27C93F";
      sCtx.beginPath();
      sCtx.arc(70, 25, 6, 0, Math.PI * 2);
      sCtx.fill();

      // URL bar
      sCtx.fillStyle = "#0A0D12";
      sCtx.roundRect(120, 12, 600, 26, 6);
      sCtx.fill();
      sCtx.fillStyle = "#9FC4D0";
      sCtx.font = "12px monospace";
      sCtx.fillText(
        projIndex === 0
          ? "https://ak-gym.lovestoblog.com/admin/dashboard.php"
          : "https://github.com/Akeel3040/Video-Snap-AI/pipeline.py",
        135,
        29
      );

      if (projIndex === 0) {
        // AK Gym Mockup Layout
        // Left Sidebar
        sCtx.fillStyle = "#0E141F";
        sCtx.fillRect(0, 50, 200, 590);

        sCtx.fillStyle = "#C9A96A";
        sCtx.font = "bold 16px sans-serif";
        sCtx.fillText("AK GYM SUITE", 25, 95);

        sCtx.fillStyle = "#94A3B8";
        sCtx.font = "12px sans-serif";
        sCtx.fillText("• Live Attendance", 25, 140);
        sCtx.fillText("• Membership Plans", 25, 175);
        sCtx.fillText("• Razorpay Receipts", 25, 210);
        sCtx.fillText("• QR Code Scanner", 25, 245);
        sCtx.fillText("• Trainer Logs", 25, 280);

        // Main Dashboard cards
        sCtx.fillStyle = "#151D2A";
        sCtx.roundRect(230, 80, 220, 120, 10);
        sCtx.fill();
        sCtx.fillStyle = "#9FC4D0";
        sCtx.font = "12px monospace";
        sCtx.fillText("ACTIVE MEMBERS", 250, 110);
        sCtx.fillStyle = "#FFFFFF";
        sCtx.font = "bold 32px sans-serif";
        sCtx.fillText("482", 250, 155);
        sCtx.fillStyle = "#22C55E";
        sCtx.font = "11px sans-serif";
        sCtx.fillText("↑ +14% this month", 250, 180);

        sCtx.fillStyle = "#151D2A";
        sCtx.roundRect(480, 80, 220, 120, 10);
        sCtx.fill();
        sCtx.fillStyle = "#C9A96A";
        sCtx.font = "12px monospace";
        sCtx.fillText("REVENUE (RAZORPAY)", 500, 110);
        sCtx.fillStyle = "#FFFFFF";
        sCtx.font = "bold 32px sans-serif";
        sCtx.fillText("₹ 1,84,500", 500, 155);
        sCtx.fillStyle = "#94A3B8";
        sCtx.font = "11px sans-serif";
        sCtx.fillText("Automated Invoices", 500, 180);

        sCtx.fillStyle = "#151D2A";
        sCtx.roundRect(730, 80, 250, 120, 10);
        sCtx.fill();
        sCtx.fillStyle = "#9FC4D0";
        sCtx.font = "12px monospace";
        sCtx.fillText("QR SCAN ACCESS", 750, 110);
        sCtx.fillStyle = "#FFFFFF";
        sCtx.font = "bold 20px monospace";
        sCtx.fillText("PORTAL READY", 750, 145);
        sCtx.fillStyle = "#38BDF8";
        sCtx.font = "11px sans-serif";
        sCtx.fillText("Sub-second check-in", 750, 180);

        // Big Analytics Chart Box
        sCtx.fillStyle = "#121824";
        sCtx.roundRect(230, 230, 750, 360, 12);
        sCtx.fill();

        sCtx.fillStyle = "#E2E8F0";
        sCtx.font = "14px sans-serif";
        sCtx.fillText("Daily Gym Peak Traffic & QR Scan Ingress", 260, 270);

        // Chart bars
        const bars = [40, 65, 80, 120, 190, 210, 240, 180, 220, 260, 190, 140, 85];
        bars.forEach((val, i) => {
          const bx = 260 + i * 54;
          const bh = val;
          const by = 540 - bh;
          sCtx.fillStyle = i === 9 ? "#C9A96A" : "#334155";
          sCtx.fillRect(bx, by, 32, bh);
        });
      } else {
        // Video Snap AI Layout
        sCtx.fillStyle = "#0E141F";
        sCtx.fillRect(0, 50, 220, 590);
        sCtx.fillStyle = "#9FC4D0";
        sCtx.font = "bold 16px sans-serif";
        sCtx.fillText("VIDEO SNAP AI", 25, 95);

        sCtx.fillStyle = "#94A3B8";
        sCtx.font = "12px sans-serif";
        sCtx.fillText("• Prompt Tokenizer", 25, 140);
        sCtx.fillText("• Scene Segmentation", 25, 175);
        sCtx.fillText("• Audio Alignment", 25, 210);
        sCtx.fillText("• 9:16 Reel Render", 25, 245);

        // Video preview reel
        sCtx.fillStyle = "#161F2E";
        sCtx.roundRect(260, 80, 280, 500, 14);
        sCtx.fill();
        sCtx.fillStyle = "#C9A96A";
        sCtx.font = "12px monospace";
        sCtx.fillText("GENERATED AI REEL", 285, 115);

        sCtx.fillStyle = "#2C3D52";
        sCtx.fillRect(285, 140, 230, 380);
        sCtx.fillStyle = "#FFFFFF";
        sCtx.font = "bold 18px sans-serif";
        sCtx.fillText("Automated Scene", 320, 320);
        sCtx.fillStyle = "#9FC4D0";
        sCtx.font = "12px monospace";
        sCtx.fillText("4K // 60FPS Pipeline", 330, 350);

        // Script Logs
        sCtx.fillStyle = "#111722";
        sCtx.roundRect(580, 80, 400, 500, 12);
        sCtx.fill();
        sCtx.fillStyle = "#22C55E";
        sCtx.font = "12px monospace";
        sCtx.fillText("[INIT] Model weights loaded.", 605, 120);
        sCtx.fillText("[PRE] Preprocessing input tokens...", 605, 150);
        sCtx.fillText("[GEN] Synthesizing narrative scenes...", 605, 180);
        sCtx.fillText("[OK] Render completed in 1.4s.", 605, 210);
      }
    };

    renderScreenUI(activeProjectIndex);

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.anisotropy = 8;

    // 1. Laptop Base / Keyboard Chassis
    const baseGeom = new THREE.BoxGeometry(4.2, 0.16, 2.8);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x181e28,
      metalness: 0.85,
      roughness: 0.25,
    });
    const laptopBase = new THREE.Mesh(baseGeom, metalMat);
    laptopBase.position.y = -1.2;
    deviceGroup.add(laptopBase);

    // Trackpad
    const trackpadGeom = new THREE.BoxGeometry(1.4, 0.02, 1.0);
    const trackpadMat = new THREE.MeshStandardMaterial({
      color: 0x222a38,
      metalness: 0.7,
      roughness: 0.35,
    });
    const trackpad = new THREE.Mesh(trackpadGeom, trackpadMat);
    trackpad.position.set(0, -1.11, 0.75);
    deviceGroup.add(trackpad);

    // Keyboard Surface Inset
    const keybGeom = new THREE.BoxGeometry(3.6, 0.02, 1.3);
    const keybMat = new THREE.MeshStandardMaterial({
      color: 0x0c1017,
      metalness: 0.5,
      roughness: 0.6,
    });
    const keyboard = new THREE.Mesh(keybGeom, keybMat);
    keyboard.position.set(0, -1.11, -0.45);
    deviceGroup.add(keyboard);

    // 2. Display Lid (Angled back at ~105 degrees)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, -1.12, -1.4);
    lidGroup.rotation.x = -Math.PI * 0.12; // Tilted back
    deviceGroup.add(lidGroup);

    // Display Outer Frame
    const lidGeom = new THREE.BoxGeometry(4.2, 2.7, 0.1);
    const lidMesh = new THREE.Mesh(lidGeom, metalMat);
    lidMesh.position.set(0, 1.35, 0);
    lidGroup.add(lidMesh);

    // Display Screen Face with Dynamic Canvas Texture
    const screenGeom = new THREE.PlaneGeometry(3.95, 2.45);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });
    const screenMesh = new THREE.Mesh(screenGeom, screenMat);
    screenMesh.position.set(0, 1.35, 0.056);
    lidGroup.add(screenMesh);

    // Screen Bevel Accent (Fine gold hairline)
    const borderGeom = new THREE.EdgesGeometry(screenGeom);
    const borderMat = new THREE.LineBasicMaterial({
      color: 0xc9a96a,
      transparent: true,
      opacity: 0.45,
    });
    const borderLine = new THREE.LineSegments(borderGeom, borderMat);
    borderLine.position.set(0, 1.35, 0.058);
    lidGroup.add(borderLine);

    // Interactive Drag Controls (Mouse / Touch)
    const onPointerDown = (clientX: number, clientY: number) => {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: clientX, y: clientY };
      velocityRef.current = { x: 0, y: 0 };
    };

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!isDraggingRef.current) return;
      const deltaX = clientX - prevMouseRef.current.x;
      const deltaY = clientY - prevMouseRef.current.y;

      velocityRef.current = {
        x: deltaX * 0.006,
        y: deltaY * 0.006,
      };

      rotationRef.current.y += velocityRef.current.x;
      rotationRef.current.x += velocityRef.current.y;

      // Limit vertical tilt
      rotationRef.current.x = Math.max(-0.6, Math.min(0.8, rotationRef.current.x));

      prevMouseRef.current = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    // Native mouse/touch listeners on container
    const handleMouseDown = (e: MouseEvent) => onPointerDown(e.clientX, e.clientY);
    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const handleMouseUp = () => onPointerUp();

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => onPointerUp();

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Render loop with inertia
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isDraggingRef.current) {
        if (autoRotateRef.current) {
          rotationRef.current.y += 0.005; // Gentle cinematic continuous rotation
        } else {
          // Inertia damping
          velocityRef.current.x *= 0.92;
          velocityRef.current.y *= 0.92;
          rotationRef.current.y += velocityRef.current.x;
          rotationRef.current.x += velocityRef.current.y;
          rotationRef.current.x = Math.max(-0.6, Math.min(0.8, rotationRef.current.x));
        }
      }

      deviceGroup.rotation.y = rotationRef.current.y;
      deviceGroup.rotation.x = rotationRef.current.x;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      container.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      window.removeEventListener("resize", handleResize);

      screenTexture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activeProjectIndex]);

  const resetView = () => {
    rotationRef.current = { x: 0.15, y: -0.4 };
    velocityRef.current = { x: 0, y: 0 };
  };

  return (
    <section
      id="showcase"
      className="relative min-h-screen w-full py-28 px-6 md:px-12 z-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Editorial Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#9FC4D0]">
          04 // PHYSICAL ARCHITECTURE & SPATIAL VIEW
        </span>
        <div className="h-[1px] w-12 bg-[#9FC4D0]/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-tight">
            360° Interactive <span className="serif-italic text-[#9FC4D0]">Showcase.</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-400 font-sans max-w-xl font-light">
            Manipulate the spatial viewport directly. Inspect real interface topologies,
            admin dashboards, and algorithmic pipelines in full 3D rotation.
          </p>
        </div>

        {/* Project Switcher Tabs */}
        <div className="flex items-center gap-2 bg-[#0D1117] p-1.5 rounded-full border border-white/10 self-start md:self-auto">
          {FEATURED_PROJECTS.slice(0, 2).map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                activeProjectIndex === idx
                  ? "bg-[#C9A96A] text-[#07090B] font-medium shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {proj.title.split("—")[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Viewer Glass Container */}
      <div className="relative w-full h-[540px] sm:h-[620px] rounded-3xl bg-gradient-to-b from-[#0D1117]/90 to-[#07090B]/95 border border-white/[0.08] backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing">
        {/* Three.js Canvas Container */}
        <div ref={containerRef} className="absolute inset-0 w-full h-full" />

        {/* Floating Top Controls Overlay */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
          {/* Active project badge */}
          <div className="flex items-center gap-3 bg-[#07090B]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/[0.08] pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-[#C9A96A] animate-pulse" />
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#9FC4D0] uppercase">
                {currentProject.roleBadge || "FEATURED WORK"}
              </div>
              <div className="text-sm font-serif text-white">
                {currentProject.title}
              </div>
            </div>
          </div>

          {/* Interactive Viewer Utilities */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className="p-2.5 rounded-xl bg-[#07090B]/80 hover:bg-[#121720] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
              title={isAutoRotating ? "Pause auto-rotate" : "Resume auto-rotate"}
              aria-label="Toggle auto rotate"
            >
              {isAutoRotating ? <Pause className="w-4 h-4 text-[#C9A96A]" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={resetView}
              className="p-2.5 rounded-xl bg-[#07090B]/80 hover:bg-[#121720] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
              title="Reset View Orientation"
              aria-label="Reset View"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center / Bottom "Drag to Explore" Hint */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-none">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-400 bg-[#07090B]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/[0.08]">
            <Move className="w-3.5 h-3.5 text-[#9FC4D0] animate-pulse" />
            <span>DRAG TO ROTATE 360° · RELEASE FOR INERTIA</span>
          </div>

          {/* Quick CTAs for the featured work */}
          <div className="flex items-center gap-3 pointer-events-auto">
            {currentProject.liveUrl && (
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase bg-[#C9A96A] text-[#07090B] font-medium hover:bg-[#E1C48B] transition-colors"
              >
                <span>VISIT LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {onOpenCaseStudy && (
              <button
                onClick={() => onOpenCaseStudy(currentProject.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase bg-white/[0.06] hover:bg-white/10 text-white border border-white/10 transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-[#9FC4D0]" />
                <span>DEEP CASE STUDY</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
