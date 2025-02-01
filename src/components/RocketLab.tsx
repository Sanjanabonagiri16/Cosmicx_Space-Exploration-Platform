import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import { ColorPicker } from './ui/color-picker';
import { toast } from './ui/use-toast';

interface RocketCustomization {
  color: string;
  size: number;
  enginePower: number;
}

const RocketLab = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<THREE.Group | null>(null);
  const [customization, setCustomization] = useState<RocketCustomization>({
    color: '#ff0000',
    size: 1,
    enginePower: 50,
  });
  
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

    // Create rocket
    const createRocket = () => {
      const rocket = new THREE.Group();

      // Body
      const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
      const bodyMaterial = new THREE.MeshPhongMaterial({ color: customization.color });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      rocket.add(body);

      // Nose cone
      const noseGeometry = new THREE.ConeGeometry(0.5, 1, 32);
      const noseMaterial = new THREE.MeshPhongMaterial({ color: customization.color });
      const nose = new THREE.Mesh(noseGeometry, noseMaterial);
      nose.position.y = 1.5;
      rocket.add(nose);

      // Fins
      const finGeometry = new THREE.BoxGeometry(0.1, 0.5, 0.5);
      const finMaterial = new THREE.MeshPhongMaterial({ color: customization.color });

      for (let i = 0; i < 4; i++) {
        const fin = new THREE.Mesh(finGeometry, finMaterial);
        fin.position.y = -1;
        fin.position.x = Math.cos(i * Math.PI / 2) * 0.5;
        fin.position.z = Math.sin(i * Math.PI / 2) * 0.5;
        rocket.add(fin);
      }

      // Apply size
      rocket.scale.set(
        customization.size,
        customization.size,
        customization.size
      );

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
          toast({
            title: "Launch Complete",
            description: "Rocket has successfully completed its test flight!",
            duration: 3000,
          });
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
  }, [customization]);

  const handleColorChange = (color: string) => {
    setCustomization(prev => ({ ...prev, color }));
  };

  const handleSizeChange = (value: number[]) => {
    setCustomization(prev => ({ ...prev, size: value[0] }));
  };

  const handleEnginePowerChange = (value: number[]) => {
    setCustomization(prev => ({ ...prev, enginePower: value[0] }));
  };

  return (
    <Card className="w-full bg-space-black/80">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">3D Rocket Lab</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            ref={containerRef} 
            className="w-full h-[500px] rounded-lg overflow-hidden bg-black/50"
          />
          <div className="space-y-6 p-4">
            <div>
              <label className="text-white mb-2 block">Rocket Color</label>
              <ColorPicker value={customization.color} onChange={handleColorChange} />
            </div>
            <div>
              <label className="text-white mb-2 block">Size</label>
              <Slider
                value={[customization.size]}
                onValueChange={handleSizeChange}
                min={0.5}
                max={2}
                step={0.1}
              />
            </div>
            <div>
              <label className="text-white mb-2 block">Engine Power</label>
              <Slider
                value={[customization.enginePower]}
                onValueChange={handleEnginePowerChange}
                min={0}
                max={100}
              />
            </div>
            <Button 
              onClick={() => {
                toast({
                  title: "Design Saved",
                  description: "Your rocket design has been saved!",
                  duration: 3000,
                });
              }}
              className="w-full bg-space-purple hover:bg-space-pink"
            >
              Save Design
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RocketLab;