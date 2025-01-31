import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Card } from './ui/card';

const PlanetExplorer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    camera.position.z = 15;

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

    // Create planets
    const createPlanet = (radius: number, color: number, position: THREE.Vector3) => {
      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      const material = new THREE.MeshPhongMaterial({ 
        color,
        shininess: 30,
      });
      const planet = new THREE.Mesh(geometry, material);
      planet.position.copy(position);
      
      // Add orbit
      const orbitGeometry = new THREE.RingGeometry(
        position.length() - 0.1,
        position.length() + 0.1,
        64
      );
      const orbitMaterial = new THREE.MeshBasicMaterial({
        color: 0x444444,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
      orbit.rotation.x = Math.PI / 2;
      
      scene.add(orbit);
      scene.add(planet);
      
      return planet;
    };

    // Add planets
    const planets = [
      createPlanet(1, 0xff6b6b, new THREE.Vector3(0, 0, 0)), // Sun
      createPlanet(0.4, 0x74b9ff, new THREE.Vector3(4, 0, 0)), // Mercury
      createPlanet(0.6, 0xffeaa7, new THREE.Vector3(7, 0, 0)), // Venus
      createPlanet(0.7, 0x55efc4, new THREE.Vector3(10, 0, 0)), // Earth
    ];

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      planets.forEach((planet, index) => {
        // Rotate planets
        planet.rotation.y += 0.01 / (index + 1);
        
        // Orbit planets (except sun)
        if (index > 0) {
          const angle = Date.now() * 0.001 / (index + 1);
          const radius = planet.position.length();
          planet.position.x = Math.cos(angle) * radius;
          planet.position.z = Math.sin(angle) * radius;
        }
      });

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

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <Card className="w-full p-4 bg-space-black mt-8">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-white">Solar System Explorer</h2>
        <p className="text-gray-400">Watch the planets orbit around the sun</p>
      </div>
      <div 
        ref={containerRef} 
        className="w-full h-[500px] rounded-lg overflow-hidden"
      />
    </Card>
  );
};

export default PlanetExplorer;