import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { useToast } from "./ui/use-toast";
import { Rocket, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome, Space Explorer!");
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#FFFFFF',
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesRef.current = particlesMesh;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0001;
        particlesRef.current.rotation.y += 0.0001;
        
        // Parallax effect
        particlesRef.current.position.x += (mouseX * 0.5 - particlesRef.current.position.x) * 0.1;
        particlesRef.current.position.y += (-mouseY * 0.5 - particlesRef.current.position.y) * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleStartJourney = () => {
    // Show welcome toast
    toast({
      title: "🚀 Adventure Awaits!",
      description: "Preparing for launch... Get ready to explore the cosmos!",
      duration: 5000,
    });

    // Smooth scroll to planets section
    const planetsSection = document.getElementById('planets');
    if (planetsSection) {
      planetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden cursor-cosmic">
      <style>
        {`
          .cursor-cosmic {
            cursor: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='8' fill='%236B46C1' fill-opacity='0.5'/%3E%3Ccircle cx='16' cy='16' r='4' fill='%23F687B3'/%3E%3C/svg%3E"), auto;
          }
        `}
      </style>
      
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
      </video>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Star className="w-8 h-8 text-[#9b87f5] animate-twinkle" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text animate-float">
              {welcomeMessage}
            </h1>
            <Star className="w-8 h-8 text-[#9b87f5] animate-twinkle" />
          </motion.div>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 animate-fade-in">
            Join us on a journey to discover the mysteries of the cosmos
          </p>
          
          <motion.button 
            onClick={handleStartJourney}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <Rocket className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1EAEDB] to-[#0FA0CE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
