// Importing React and necessary components from @react-three/fiber and @react-three/drei for 3D rendering.
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber"; // Canvas component is used to render the 3D scene.
import {
  Decal, // Decal allows us to add an image texture (decal) to a 3D object.
  Float, // Float adds a floating animation effect to 3D objects.
  OrbitControls, // OrbitControls allow the user to interact with the 3D scene (rotate, zoom).
  Preload, // Preload ensures that all assets are loaded before rendering.
  useTexture, // Hook to load textures (used for loading the decal image).
} from "@react-three/drei"; // `drei` is a set of useful helpers for `@react-three/fiber`.

import CanvasLoader from "../Loader"; // A custom loader component to display a loading indicator while assets are loading.

const Ball = (props) => {
  // `useTexture` hook loads the image (or texture) from the URL provided as `props.imgUrl`.
  const [decal] = useTexture([props.imgUrl]);

  return (
    // Float component applies a floating effect to the ball.
    // It controls the speed, rotation intensity, and floating intensity.
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Ambient light to add some general lighting to the scene */}
      <ambientLight intensity={0.25} />

      {/* Directional light to illuminate the object with a specific light direction */}
      <directionalLight position={[0, 0, 0.05]} />

      {/* Mesh is a 3D object that we can apply geometries and materials to */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* IcosahedronGeometry creates a geometric shape (icosahedron), which is a 3D object with 20 triangular faces. */}
        <icosahedronGeometry args={[1, 1]} />
        
        {/* MeshStandardMaterial is the material applied to the mesh, which defines its surface properties */}
        <meshStandardMaterial
          color='#fff8eb' // Set the color of the mesh to a light beige color.
          polygonOffset // Helps prevent z-fighting (overlapping geometry).
          polygonOffsetFactor={-5} // Adjusts the offset factor for polygon offset.
          flatShading // Gives the mesh a flat shading appearance (no smooth gradients).
        />

        {/* Decal is used to apply an image texture onto the mesh. */}
        <Decal
          position={[0, 0, 1]} // Position of the decal relative to the mesh.
          rotation={[2 * Math.PI, 0, 6.25]} // Rotation of the decal texture.
          scale={1} // Scale of the decal texture.
          map={decal} // The texture (image) loaded by `useTexture`.
          flatShading // Ensures the decal has flat shading.
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    // Canvas is the 3D container where the scene is rendered.
    <Canvas
      frameloop='demand' // Only renders when necessary (helps improve performance).
      dpr={[1, 2]} // Device Pixel Ratio (higher values are used for high-resolution displays).
      gl={{ preserveDrawingBuffer: true }} // Keeps the rendering buffer, allowing us to export images from the canvas.
    >
      {/* Suspense is used to show the loader while the 3D model is being loaded. */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allow the user to interact with the 3D scene (rotate, zoom). */}
        <OrbitControls enableZoom={false} /> {/* Disabling zoom for better control */}
        {/* Ball component receives the `icon` prop (which is the image URL) and applies it as a decal */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preload ensures that all assets (textures, models, etc.) are loaded before rendering */}
      <Preload all />
    </Canvas>
  );
};

// Exporting BallCanvas component to be used elsewhere in the project.
export default BallCanvas;

// Canvas: This is the main container where the 3D objects will be rendered.
// Decal: A decal is used to apply an image (texture) to the surface of a 3D object.
// Float: Adds animation to the object, making it appear like it’s floating and moving.
// OrbitControls: Allows users to interact with the 3D scene by rotating, panning, or zooming.
// Preload: Ensures that all textures and assets are loaded before the 3D scene is rendered, avoiding loading delays.
// useTexture: A hook to load textures (used for loading the decal image).

// ### **Detailed Explanation of the Code**

// This code defines a **3D rendering setup** using **React** and **@react-three/fiber**, along with some utilities from **@react-three/drei**. It uses these libraries to create a 3D ball with floating effects and interactive controls (rotation and zoom). Let’s break down each part:

// ---

// ### **1. Importing Necessary Libraries**

// ```javascript
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber"; // Canvas for rendering 3D scenes
// import {
//   Decal, // To apply an image texture to the 3D object
//   Float, // Adds floating animation to 3D objects
//   OrbitControls, // Lets you interact with the 3D scene
//   Preload, // Ensures assets are loaded before rendering
//   useTexture, // Loads texture (images) to apply to 3D objects
// } from "@react-three/drei"; // Utility helpers for react-three-fiber

// import CanvasLoader from "../Loader"; // Custom loader component
// ```

// - **`Canvas`**: This is the main container where the 3D objects will be rendered.
// - **`Decal`**: A decal is used to apply an image (texture) to the surface of a 3D object.
// - **`Float`**: Adds animation to the object, making it appear like it’s floating and moving.
// - **`OrbitControls`**: Allows users to interact with the 3D scene by rotating, panning, or zooming.
// - **`Preload`**: Ensures that all textures and assets are loaded before the 3D scene is rendered, avoiding loading delays.
// - **`useTexture`**: A hook to load textures (used for loading the decal image).

// ---

// ### **2. The `Ball` Component**
// The `Ball` component is used to create and animate a **3D ball** (or **icosahedron**) and apply a decal (texture) on it.

// ```javascript
// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]); // Load texture (image) for the decal

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}> 
//       {/* Floating effect with speed, rotation intensity, and floating intensity */}
      
//       <ambientLight intensity={0.25} /> {/* General ambient light */}
//       <directionalLight position={[0, 0, 0.05]} /> {/* Directional light for more focused lighting */}
      
//       <mesh castShadow receiveShadow scale={2.75}> {/* 3D object */}
//         <icosahedronGeometry args={[1, 1]} /> {/* Icosahedron (20 faces) geometry */}
//         <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading /> {/* Material */}
        
//         {/* Apply the decal (texture) on the 3D object */}
//         <Decal
//           position={[0, 0, 1]} // Decal position relative to the mesh
//           rotation={[2 * Math.PI, 0, 6.25]} // Decal rotation
//           scale={1} // Scale of the decal
//           map={decal} // The decal image (texture)
//           flatShading // Ensures the decal has flat shading
//         />
//       </mesh>
//     </Float>
//   );
// };
// ```

// - **`useTexture`**: This hook loads the texture image (the decal) from the provided `imgUrl`.
// - **`Float`**: This component applies a floating animation to the ball, making it move and rotate slightly.
// - **Lights**:
//   - **`ambientLight`**: Provides basic lighting to the scene.
//   - **`directionalLight`**: A more focused light source to highlight the ball and decal.
// - **`mesh`**: The 3D object where you apply geometry (like shapes) and material.
//   - **`icosahedronGeometry`**: Creates a 3D shape with 20 triangular faces (an icosahedron). This forms the ball.
//   - **`meshStandardMaterial`**: Defines the material properties of the ball, like its color (`#fff8eb`), flat shading, and how the surface behaves.
// - **`Decal`**: This is used to apply an image texture (decal) to the surface of the 3D object (the ball).
//   - **`position`**: Where the decal is placed on the ball.
//   - **`rotation`**: The angle at which the decal is rotated on the ball.
//   - **`map`**: The texture (image) that’s applied to the ball.

// ---

// ### **3. The `BallCanvas` Component**

// The `BallCanvas` component is where the entire **3D scene** is rendered. It sets up the `Canvas` container for 3D rendering, adds interactive controls, and ensures that all assets are loaded before the scene is displayed.

// ```javascript
// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand" // Only renders when necessary for performance
//       dpr={[1, 2]} // Device Pixel Ratio (for high-res displays)
//       gl={{ preserveDrawingBuffer: true }} // Keeps the rendering buffer for exporting images
//     >
//       <Suspense fallback={<CanvasLoader />}> {/* Shows loading spinner until 3D assets are ready */}
//         <OrbitControls enableZoom={false} /> {/* Disables zoom for better control */}
//         <Ball imgUrl={icon} /> {/* Ball component renders with the icon image */}
//       </Suspense>

//       <Preload all /> {/* Preloads all assets to prevent delay when rendering */}
//     </Canvas>
//   );
// };
// ```

// - **`Canvas`**: This is the 3D scene container where the entire rendering happens. It is responsible for rendering and updating the scene.
//   - **`frameloop="demand"`**: It ensures that the frame is updated only when necessary (helps improve performance).
//   - **`dpr={[1, 2]}`**: It adjusts the rendering for high-resolution displays (better quality).
//   - **`gl={{ preserveDrawingBuffer: true }}`**: Keeps the buffer after rendering, which helps if you want to save images from the scene.
// - **`Suspense`**: React's Suspense is used to display a **loader** (`CanvasLoader`) while the 3D model is being loaded.
// - **`OrbitControls`**: This lets you **interact** with the 3D scene by rotating and panning, but we’ve disabled zoom (`enableZoom={false}`) for this case.
// - **`Ball`**: The 3D ball with a decal is rendered here by passing the `icon` prop (image URL).
// - **`Preload`**: Ensures that all assets (like textures) are loaded before rendering starts, which prevents delays.

// ---

// ### **Putting It All Together**
// - **The `BallCanvas` component**:
//   - It sets up the 3D canvas.
//   - It renders the **`Ball`** component with the decal (image texture).
//   - It allows the user to interact with the scene using **OrbitControls**.
//   - It ensures all assets are **preloaded** before displaying.

// ---

// ### **Summary of Key Concepts**
// 1. **Canvas**: A container for rendering 3D scenes.
// 2. **Ball**: A 3D object (icosahedron) that floats and has a decal (texture).
// 3. **Float**: Adds floating and movement animation to the 3D ball.
// 4. **Decal**: Applies an image (texture) to a 3D object.
// 5. **OrbitControls**: Allows the user to interact with the 3D scene (rotate, zoom, etc.).
// 6. **Suspense**: Displays a loader until assets (like textures) are ready.
// 7. **Preload**: Ensures all assets are loaded before rendering starts.

// ---

// This should help clarify how everything works in your code. Let me know if you need more detailed explanations or examples! 😊