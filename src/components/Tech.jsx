// Importing React library to create the component.
import React from "react";

// Importing the BallCanvas component to render each technology icon in 3D.
import { BallCanvas } from "./canvas";

// Importing the `SectionWrapper` higher-order component (HOC) to add common functionality to the `Tech` component.
import { SectionWrapper } from "../hoc";

// Importing the list of technologies (icons and  names) from `constants/index.js`.
import { technologies } from "../constants";

// `Tech` component displays a list of technologies, each represented as a 3D icon in a canvas.
const Tech = () => {
  return (
    // `flex` container for the row layout; `flex-wrap` allows wrapping the items into multiple rows.
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* Loop through the `technologies` array and display each technology in a canvas */}
      {technologies.map((technology) => (
        // Each technology gets its own container with a fixed width and height for the 3D icon.
        <div className='w-28 h-28' key={technology.name}>

{/* BallCanvas renders a 3D canvas for each technology icon.The BallCanvas component is a custom component
 (not fully shown here) that displays a 3D icon for each technology. It likely uses a 3D rendering library like three.js to render the icon in a 3D space. */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

// Wrapping the `Tech` component with the `SectionWrapper` HOC to add shared functionality, like scrolling behavior and section styling.
export default SectionWrapper(Tech, "");

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ### **How It All Works Together**

// 1. The **`Tech`** component displays a list of technologies.
// 2. For each technology:
//    - A **`div`** container with a fixed size is created for the 3D icon.
//    - The **`BallCanvas`** component renders the 3D icon inside that container.
// 3. The **`SectionWrapper`** HOC wraps the entire `Tech` component and adds additional functionality like smooth scrolling or shared styling.

// ### **Example Output**

// If the `technologies` array contains 3 items like this:

// ```javascript
// const technologies = [
//   { name: "React", icon: "react-icon.png" },
//   { name: "JavaScript", icon: "js-icon.png" },
//   { name: "Node.js", icon: "nodejs-icon.png" }
// ];
// ```

// You will see 3 3D icons for **React**, **JavaScript**, and **Node.js** arranged in a row. Each icon is rendered inside a **3D canvas** (via `BallCanvas`), and the layout is responsive, meaning the icons will wrap into multiple rows if needed.

// ---

// ### **Summary**
// - **`Tech`** component displays a list of technologies.
// - **`BallCanvas`** is responsible for rendering each technology's 3D icon.
// - **`SectionWrapper`** is a higher-order component that adds shared behaviors to the section.
// - The layout is responsive and uses **flexbox** for organizing the technology icons.

// -------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

