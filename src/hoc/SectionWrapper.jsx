// Importing the `motion` component from Framer Motion to add animations.
import { motion } from "framer-motion";

// Importing custom styles for consistent spacing and layout.
import { styles } from "../styles";
// Importing the `staggerContainer` animation variant for staggering child animations.
import { staggerContainer } from "../utils/motion";

// `StarWrapper` is a higher-order component (HOC) that wraps another component with animation and styling.
// `Component`: The component to be wrapped.
// `idName`: A unique identifier for the section (used for navigation or styling).
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      // Wrapping the section with a motion-enabled container.
      <motion.section
        // Applying staggered animations to the children of this section.
        variants={staggerContainer()} // Animation configuration for staggering child animations.
        initial='hidden' // Sets the initial state of the animation to "hidden."
        whileInView='show' // Starts the animation when the section comes into the viewport.
        viewport={{
          once: true, // Ensures the animation runs only once when the section is in view.
          amount: 0.25, // Triggers the animation when 25% of the section is visible.
        }}
        
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} 
      >
{/* styles.padding are customized styles which are defined in src/styles.js in styles object.We are using 
it like this so that we dont have to write same style again and again */}

        {/* Adding a hidden anchor span for easy navigation (e.g., scroll to this section). */}
        <span className='hash-span' id={idName}>
          &nbsp; {/* Non-breaking space to maintain structure. */}
        </span>

        {/* Rendering the wrapped component */}
        <Component />
      </motion.section>
    );
  };

// Exporting the `StarWrapper` HOC so it can be used to wrap other components.
export default StarWrapper;


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ### **What Does This Code Do?**
// The code defines a **higher-order component (HOC)** called `StarWrapper`. The purpose of this HOC is to:
// 1. Add animations to a section of the page using **Framer Motion**.
// 2. Apply consistent styling to ensure proper spacing and layout.
// 3. Add functionality for viewport-based animations (e.g., triggering animations when the section comes into view).

// ---

// ### **Key Parts of the Code**

// #### **1. `motion.section` (Framer Motion Component)**:
// This is the main container for the animation. It wraps the content of the section with animation capabilities.

// - **Props Used**:
//   - **`variants={staggerContainer()}`**:
//     - This applies a pre-defined animation variant (`staggerContainer`).
//     - `staggerContainer` staggers animations for child elements, creating a cascading effect.
//   - **`initial="hidden"`**:
//     - The animation starts in the `hidden` state, where child elements are not visible.
//   - **`whileInView="show"`**:
//     - The animation transitions to the `show` state when the section scrolls into view.
//   - **`viewport`**:
//     - **`once: true`**: The animation plays only once when the section becomes visible.
//     - **`amount: 0.25`**: The animation starts when 25% of the section is visible in the viewport.

// ---

// #### **2. `staggerContainer()`**:
// - **What is it?**
//   - A utility function imported from `../utils/motion`.
//   - It defines the animation configuration for staggering child animations.

// - **Example of How `staggerContainer` Might Look**:
// ```javascript
// export const staggerContainer = () => ({
//   hidden: { opacity: 0 }, // Initial state: invisible
//   show: {
//     opacity: 1, // Final state: fully visible
//     transition: {
//       staggerChildren: 0.2, // Adds a delay between animations of child elements
//       delayChildren: 0.1, // Adds an initial delay for all children
//     },
//   },
// });
// ```

// ---

// #### **3. `StarWrapper` HOC**:
// - **What is an HOC?**
//   - An HOC is a function that takes a component and adds extra functionality to it. In this case, it adds animations, layout styling, and a unique section ID.

// - **How It Works**:
//   - The `StarWrapper` takes two arguments:
//     - **`Component`**: The React component you want to wrap.
//     - **`idName`**: A unique identifier (used for navigation or linking).
//   - The HOC returns a new functional component that wraps the `Component` with animation and layout.

// - **Key Additions in the Wrapper**:
//   - **Styling**:
//     - Adds consistent padding and layout styles using `styles.padding` and `max-w-7xl` for a centered layout.
//   - **Anchor Point**:
//     - The `<span>` with `id={idName}` acts as an anchor for navigation. For example, if you click on a link to this section, the browser scrolls to this anchor.

// ---

// #### **4. Exporting the HOC**:
// - The `StarWrapper` is exported as the default export, so you can use it to wrap other components in your project.

// - **Example Usage**:
//   ```javascript
//   import StarWrapper from "./hoc/StarWrapper";
//   import About from "./components/About";

//   const WrappedAbout = StarWrapper(About, "about");

//   export default WrappedAbout;
//   ```
//   - Here, the `About` component is wrapped with `StarWrapper`, and it is assigned the `idName` `"about"`.

// ---

// ### **Simplified Flow of How the Code Works**
// 1. **Define the HOC**:
//    - `StarWrapper` takes a component and adds animations and layout styles.
// 2. **Apply Animations**:
//    - The section animates when it scrolls into view, using `staggerContainer` for child animations.
// 3. **Provide Navigation**:
//    - Adds a hidden anchor (`<span id="idName">`) for easy navigation (e.g., scroll-to links).
// 4. **Consistent Layout**:
//    - Applies pre-defined styles to ensure sections look uniform.

// ---

// ### **In Summary**
// - **HOC (StarWrapper)**:
//   - Enhances components by adding animations, styling, and unique section IDs.
// - **`motion.section`**:
//   - The animated container for the section.
// - **`staggerContainer`**:
//   - Staggers animations for child elements to create a cascading effect.
// - **Anchor Span**:
//   - Adds an ID for linking to this section.

// -------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
