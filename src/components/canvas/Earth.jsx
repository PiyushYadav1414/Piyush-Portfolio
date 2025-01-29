// Importing necessary React and Three.js libraries for 3D rendering.
import React, { Suspense } from "react"; // Suspense is used to wait for the 3D model to load.
import { Canvas } from "@react-three/fiber"; // Canvas is the main container for rendering 3D scenes in React.
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // Drei provides useful helpers like OrbitControls (for scene interaction) and useGLTF (for loading 3D models).

import CanvasLoader from "../Loader"; // Custom loader component to show while the 3D model is loading.

const Earth = () => {
  // `useGLTF` is a hook used to load a GLTF 3D model. Here we're loading a planet (Earth) model.
  const earth = useGLTF("./planet/scene.gltf");

  return (
    // `primitive` allows us to directly use Three.js objects in the React Three Fiber scene.
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    // The Canvas component is used to create and display the 3D scene.
    <Canvas
      shadows // Enables shadows in the scene for better realism.
      frameloop="demand" // The scene will only render when needed (helps with performance).
      dpr={[1, 2]} // Device Pixel Ratio (higher values provide better quality for high-DPI screens).
      gl={{ preserveDrawingBuffer: true }} // Ensures the drawing buffer is preserved for things like screenshots.
      camera={{
        fov: 45, // Field of View for the camera.
        near: 0.1, // The near clipping plane distance.
        far: 200, // The far clipping plane distance.
        position: [-4, 3, 6], // Camera's position in 3D space (x, y, z).
      }}
    >
      {/* Suspense is used to handle the loading state of the 3D model. It shows a fallback (CanvasLoader) until the model is ready. */}
      <Suspense fallback={<CanvasLoader />}>
  {/* OrbitControls allows the user to interact with the scene, rotating and zooming Of Eath 3D Model. */}
        <OrbitControls
          autoRotate // Makes the 3D model rotate automatically.
          enableZoom={false} // Disables zooming for better control over the scene.
          maxPolarAngle={Math.PI / 2} // Limits vertical rotation (upwards).
          minPolarAngle={Math.PI / 2} // Prevents downward rotation.
        />
        {/* Earth component renders the Earth 3D model */}
        <Earth />

        {/* Preload ensures that all assets (like textures and models) are loaded before rendering. */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

// Exporting EarthCanvas to be used elsewhere in the application.
export default EarthCanvas;
