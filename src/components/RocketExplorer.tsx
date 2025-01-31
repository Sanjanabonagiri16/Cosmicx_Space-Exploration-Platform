import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Card } from './ui/card';

const RocketExplorer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<THREE.Group | null>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create basic rocket shape
    const createRocket = () => {
      const rocket = new THREE.Group();

      // Body
      const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
      const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      rocket.add(body);

      // Nose cone
      const noseGeometry = new THREE.ConeGeometry(0.5, 1, 32);
      const noseMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000});
      const nose = new THREE.Mesh(noseGeometry, noseMaterial);
      nose.position.y = 1.5;
      rocket.add(nose);

      // Fins
      const finGeometry = new THREE.BoxGeometry(0.1, 0.5, 0.5);
      const finMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });

      for (let i = 0; i < 4; i++) {
        const fin = new THREE.Mesh(finGeometry, finMaterial);
        fin.position.y = -1;
        fin.position.x = Math.cos(i * Math.PI / 2) * 0.5;
        fin.position.z = Math.sin(i * Math.PI / 2) * 0.5;
        rocket.add(fin);
      }

      return rocket;
    };

    // Add rocket to scene
    const rocket = createRocket();
    scene.add(rocket);
    rocketRef.current = rocket;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (rocketRef.current) {
        rocketRef.current.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Launch animation
    const launchRocket = () => {
      if (!rocketRef.current) return;
      
      gsap.to(rocketRef.current.position, {
        y: 10,
        duration: 2,
        ease: "power2.in",
        onComplete: () => {
          rocketRef.current!.position.y = 0;
        }
      });
    };

    // Add click event listener to the container
    containerRef.current.addEventListener('click', launchRocket);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('click', launchRocket);
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <Card className="w-full p-4 bg-space-black">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-white">3D Rocket Explorer</h2>
        <p className="text-gray-400">Click to launch the rocket!</p>
      </div>
      <div 
        ref={containerRef} 
        className="w-full h-[500px] rounded-lg overflow-hidden"
      />
    </Card>
  );
};

export default RocketExplorer;