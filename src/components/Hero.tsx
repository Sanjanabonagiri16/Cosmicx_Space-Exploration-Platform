import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { useToast } from "./ui/use-toast";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome, Space Explorer!");
  const { toast } = useToast();

  useEffect(() => {
    // Generate personalized welcome message
    const timeOfDay = new Date().getHours();
    const greeting = timeOfDay < 12 ? "Good Morning" : timeOfDay < 18 ? "Good Afternoon" : "Good Evening";
    setWelcomeMessage(`${greeting}, Space Explorer! Ready for Launch?`);
    
    toast({
      title: "Mission Control",
      description: welcomeMessage,
      duration: 5000,
    });
  }, []);

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

  return (
    <div className="relative h-screen overflow-hidden cursor-cosmic">
      <style jsx global>{`
        .cursor-cosmic {
          cursor: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='8' fill='%236B46C1' fill-opacity='0.5'/%3E%3Ccircle cx='16' cy='16' r='4' fill='%23F687B3'/%3E%3C/svg%3E"), auto;
        }
      `}</style>
      
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
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 animate-float dark:text-space-pink"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {welcomeMessage}
          </motion.h1>
          
          <p className="text-space-gray text-lg md:text-xl mb-8 dark:text-gray-300">
            Join us on a journey to discover the mysteries of the cosmos
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-space-purple hover:bg-space-pink text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 dark:bg-space-pink dark:hover:bg-space-purple relative group"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-space-purple to-space-pink opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;