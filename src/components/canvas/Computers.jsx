// Importing necessary React and Three.js libraries
// `Suspense` is used to delay the rendering of components until certain conditions are met (like loading 3D models).
import React, { Suspense, useEffect, useState } from "react";

// `Canvas` is the component from `@react-three/fiber` which renders 3D scenes.
import { Canvas } from "@react-three/fiber";

// `OrbitControls` lets you interact with the 3D scene (e.g., rotating, zooming).
// `Preload` is used to pre-load assets (like textures or models) before they are needed.
// `useGLTF` is a hook used to load `.gltf` models (3D models).
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

//`CanvasLoader` is a custom loader component that shows a loading indicator while your 3D model is loading.
import CanvasLoader from "../Loader";

// The Computers component renders the 3D model of the computer
const Computers = ({ isMobile }) => { 
  // `useGLTF` hook loads the 3D model (in this case, a computer model stored in a `.gltf` file).
  // `computer` contains the loaded 3D model
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
// 3D Lighting Setup: Lighting is important in 3D scenes to make objects visible and give them depth.
//  You're using three types of lights:

    <mesh>
      {/* Adding lighting to the scene */}
{/* Hemisphere light provides soft lighting from all directions. The intensity is set to 0.15, making it subtle. */}
      <hemisphereLight intensity={0.5} groundColor="black" />

    
      {/* SpotLight shines on the object from a specific direction */}
{/* SpotLight focuses light in a specific direction with a soft edge. The `castShadow` attribute makes this light cast shadows on objects. */}
      <spotLight
        position={[-20, 50, 10]} // Light position in 3D space
        angle={0.12} // Angle of the spotlight
        penumbra={1} // Softness of the spotlight's edge
        intensity={1} // Light intensity
        castShadow // Enables shadows for this light
        shadow-mapSize={1024} // Shadow resolution
      />
      {/* PointLight emits light in all directions from a point with intensity 1.*/}
      <pointLight intensity={1} />

      {/* The 3D model itself */}
      <primitive
        object={computer.scene} // This line attaches the loaded 3D model (computer.scene) to the scene.
        scale={isMobile ? 0.7 : 0.75} // Adjust size based on screen size (for mobile vs desktop)
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Adjust position based on screen size
        rotation={[-0.01, -0.2, -0.1]} // Slight rotation to make it look better
      />
    </mesh>
  );
};

// The ComputersCanvas component renders the 3D scene inside a canvas
const ComputersCanvas = () => {
  // State variable to check if the user is on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  // useEffect hook to check screen size when the component loads
  useEffect(() => {
    // Create a media query to check if the screen width is 500px or less (mobile size)
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set initial value of `isMobile` based on the media query
    setIsMobile(mediaQuery.matches);

    // Function to update the `isMobile` state when the screen size changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); // Update state based on whether the screen size matches
    };

    // Add the media query listener to detect changes to screen size
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup function to remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); // Empty dependency array means this only runs once when the component is first rendered

  return (
    // Canvas is used to render the 3D scene
    <Canvas
      frameloop='demand' // Only update the frame when needed (optimized for performance)
      shadows // Enable shadows in the scene
      dpr={[1, 2]} // Device pixel ratio for better rendering on high-DPI screens
      camera={{ position: [20, 3, 5], fov: 25 }} // Set the initial camera position and field of view (fov)
      gl={{ preserveDrawingBuffer: true }} // Keep the buffer after rendering to save the image if needed
    >
      {/* Suspense is used to show the loader while the 3D model is being fetched */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allow the user to interact with the scene (rotate, zoom, etc.) */}
        <OrbitControls
          enableZoom={false} // Disable zoom for the controls
          maxPolarAngle={Math.PI / 2} // Limit vertical rotation (up/down)
          minPolarAngle={Math.PI / 2} // Prevent rotation below horizontal level (downwards)
        />
        {/* Rendering the Computers component and passing the `isMobile` prop */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload all assets (like textures) to avoid loading delays during rendering.*/}
      <Preload all />
    </Canvas>
  );
};

// Exporting the ComputersCanvas component to be used elsewhere
export default ComputersCanvas;


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Here’s the simplified flow of your code in a numbered list:

// 1. **ComputersCanvas Component**: Manages the 3D scene and checks if the user is on mobile.
// 2. **Computers Component**: Loads and displays a 3D computer model using the `useGLTF` hook.
// 3. **Interactive Scene**: The scene is interactive with OrbitControls, allowing the user to rotate and move around the 3D model.
// 4. **Mobile Adjustment**: If the user is on mobile, the 3D model adjusts its size and position accordingly.
// 5. **Suspense Loader**: The Suspense component shows a loader while the model is being loaded.

// -------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
