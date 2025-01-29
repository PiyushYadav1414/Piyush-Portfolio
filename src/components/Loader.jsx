// Importing necessary components from @react-three/drei
// `Html` is used to render HTML elements inside a 3D canvas. It helps display 2D content (like loading screens) within a 3D scene.
// `useProgress` is a hook that tracks the loading progress of assets (like 3D models or textures).
import { Html, useProgress } from "@react-three/drei";

// CanvasLoader component is a custom loader that shows the loading progress of 3D assets.
const CanvasLoader = () => {
  // `useProgress` provides the current progress of asset loading.
  const { progress } = useProgress();
  
  return (
    // `Html` allows us to display regular HTML elements in the 3D scene
    <Html
      as='div' // Specifies the HTML element to use (a div)
      center // Centers the content inside the 3D canvas
      style={{
        // Styling the loader container to center the loader and text
        display: "flex",
        justifyContent: "center", // Aligns content horizontally
        alignItems: "center", // Aligns content vertically
        flexDirection: "column", // Stacks content vertically (loader and progress)
      }}
    >
      {/* The loading spinner */}
      <span className='canvas-loader'></span>
      {/* Progress text */}
      <p
        style={{
          fontSize: 14, // Sets font size
          color: "#F1F1F1", // Sets text color to a light shade
          fontWeight: 800, // Makes the text bold
          marginTop: 40, // Adds space between the loader and progress percentage
        }}
      >
        {/* Displaying the loading progress (fixed to 2 decimal places) */}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

// Exporting the CanvasLoader component so it can be used elsewhere
export default CanvasLoader;
