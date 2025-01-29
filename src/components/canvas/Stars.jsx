// Importing necessary hooks and libraries for React and Three.js rendering.
import { useState, useRef, Suspense } from "react"; // useState, useRef, and Suspense from React.
import { Canvas, useFrame } from "@react-three/fiber"; // Canvas is the main container for rendering 3D scenes.
import { Points, PointMaterial, Preload } from "@react-three/drei"; // Points for rendering particles (stars), PointMaterial for material settings, and Preload for preloading resources.
import * as random from "maath/random/dist/maath-random.esm"; // Maath random library for generating random positions for the stars.

const Stars = (props) => {
  // Create a reference to the points group to manipulate its rotation.
  const ref = useRef();

  // Generate random positions for the stars within a sphere.
  // `random.inSphere` generates random points in a 3D space.
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  // Using useFrame to animate the rotation (movement of stars here & there) of the stars over time.
  // `useFrame` runs every frame and allows you to update the component's state or properties.
  useFrame((state, delta) => {
    // Rotating the points (stars) group slightly on each frame.
    ref.current.rotation.x -= delta / 10; // Rotating along the X-axis.
    ref.current.rotation.y -= delta / 15; // Rotating along the Y-axis.
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Points component from Drei is used to render thousands of stars (points) */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/* PointMaterial defines the appearance of the points */}
        <PointMaterial
          transparent // Makes the stars semi-transparent.
          color='#f272c8' // Setting the color of the stars (light pink).
          size={0.002} // The size of each star (point).
          sizeAttenuation={true} // Ensures that the size of the points diminishes with distance.
          depthWrite={false} // Ensures the stars are drawn in front of other objects (no depth testing).
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      {/* Canvas component from @react-three/fiber to render the 3D scene */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Suspense is used to handle loading of components, fallback is set to null */}
        <Suspense fallback={null}>
          <Stars /> {/* Rendering the Stars component inside the Canvas */}
        </Suspense>

        {/* Preloading all assets (ensures smooth rendering without delays) */}
        <Preload all />
      </Canvas>
    </div>
  );
};

// Exporting the StarsCanvas component to be used elsewhere in the app.
export default StarsCanvas;
