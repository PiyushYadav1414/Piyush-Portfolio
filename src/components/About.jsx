// Importing React and required libraries/components
import React from "react";
// `Tilt` provides a tilting effect when hovering over an element.
import Tilt from "react-parallax-tilt";
// `motion` from Framer Motion is used for animations.
import { motion } from "framer-motion";
// Importing custom styles, data, higher-order components (HOCs), and utility functions.
import { styles } from "../styles"; // Custom CSS styles.
import { services } from "../constants"; // Array of services to display data (title, icon, etc.) as cards.
import { SectionWrapper } from "../hoc"; // High Order Component to add shared behaviors to the `About` section.
import { fadeIn, textVariant } from "../utils/motion"; // Pre-defined animation variants.



// `ServiceCard` is a reusable component that displays information about a service.

// Key Points:
// Tilt: Adds a hover effect where the card tilts dynamically based on mouse position.
// motion.div: Animates the card using the fadeIn effect.
// Dynamic Props: The title, icon, and index are passed from the parent and control the content and animation delay.
const ServiceCard = ({ index, title, icon }) => (
  // `Tilt` adds a 3D hover effect to the card.
  <Tilt className='xs:w-[250px] w-full'>
    {/* `motion.div` adds animation to the card using the `fadeIn` variant. */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} // Animates each card with a slight delay.
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' // Styling for the card.
    >
      {/* Inner container for the card content with hover options for `Tilt`. */}
      <div
        options={{
          max: 45, // Maximum tilt angle.
          scale: 1, // Keeps the scale unchanged on hover.
          speed: 450, // Speed of the tilt effect.
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* Icon for the service, loaded dynamically from the `services` array. */}
        <img
          src={icon}   // The service's icon.
          alt='web-development' // Alternate text for accessibility.
          className='w-16 h-16 object-contain' // Sets size and keeps aspect ratio.
        />
        {/* Title of the service displayed in bold, centered text. */}
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// Main `About` component which introduces the user and their services.
const About = () => {
  return (
    <>
      {/* Motion animation for the section heading */}
      <motion.div variants={textVariant()}>
{/* styles.sectionSubText,styles.sectionHeadText are customized styles which are defined in src/styles.js.
We are using it like this so that we dont have to write same style again and again */}
        <p className={styles.sectionSubText}>Introduction</p> {/* Subheading */}
        <h2 className={styles.sectionHeadText}>Overview.</h2> {/* Main heading */}
      </motion.div>

      {/* Animated paragraph with a brief introduction about the user */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)} // Animation effect for the paragraph.
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' // Text styling.
      >
        I'm a passionate Full-Stack Software Engineer with a proven track record 
        in developing robust, scalable web applications. With expertise in React,
         Node.js, and TypeScript, I specialize in creating innovative digital 
         solutions. My background in machine learning allows me to integrate 
         intelligent features that transform complex challenges into cutting-edge
          technologies. I'm committed to continuous learning and delivering high-impact 
          projects that exceed client expectations.
      </motion.p>

      {/* Service cards section */}
      <div className='mt-20 flex flex-wrap gap-10'>
{/* Looping through the `services` which is an array of object coming from constants/index.js and rendering a `ServiceCard` for each service. */}
        {services.map((service, index) => (
          // The title and icon for each service are passed as props to the ServiceCard.
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Wrapping the `About` component with the `SectionWrapper` HOC
// Adds additional functionality like smooth scrolling to the "about" section.
export default SectionWrapper(About, "about");

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ### **1. `Tilt`**
// - **What is it?**
//   - `Tilt` is a component from the `react-tilt` library.
//   - It adds a **3D hover effect** to elements, making them tilt dynamically based on your mouse position.
//   - It's commonly used to enhance UI elements like cards or buttons.

// - **Example**:
//   ```jsx
//   <Tilt>
//     <div style={{ width: 200, height: 100, background: "blue" }}>
//       Hover over me!
//     </div>
//   </Tilt>
//   ```
//   When you hover over the blue box, it will tilt slightly, as if it's being pushed in 3D.

// ---

// ### **2. `options`**
// - **What is it?**
//   - The `options` object is used inside the `Tilt` component to customize how the tilt effect behaves.
//   - It controls things like the maximum tilt angle, speed, and scaling.

// - **Key Properties in `options`:**
//   - **`max`**: Sets the maximum angle (in degrees) that the element can tilt.
//   - **`scale`**: Determines how much the element grows or shrinks during the hover effect.
//   - **`speed`**: Controls how fast the tilt effect reacts to mouse movements.

// - **Example**:
//   ```jsx
//   <Tilt
//     options={{
//       max: 45, // Max tilt angle is 45 degrees
//       scale: 1.1, // Slightly enlarges the element on hover
//       speed: 500, // Reacts quickly to mouse movement
//     }}
//   >
//     <div style={{ width: 200, height: 100, background: "green" }}>
//       Hover over me!
//     </div>
//   </Tilt>
//   ```

// - **What happens here?**
//   - The green box tilts up to 45 degrees as you hover.
//   - It grows slightly (10% larger) while hovering.
//   - The tilt effect adjusts quickly based on your mouse movement.

// ---

// ### **3. `motion.div` and `motion.p`**
// - **What are they?**
//   - These are components from **Framer Motion**.
//   - They are animated versions of regular HTML tags like `<div>` and `<p>`.
//   - You use them to easily apply animations to your elements.

// #### **Key Properties in Framer Motion**:
// 1. **`initial`**: The starting state of the animation (how the element looks before the animation begins).
// 2. **`animate`**: The final state of the animation (how the element looks after the animation is completed).
// 3. **`transition`**: Specifies how the animation should progress (e.g., duration, delay, type of easing).

// ---

// #### **Example**:
// ```jsx
// <motion.div
//   initial={{ opacity: 0, scale: 0 }} // Start fully transparent and tiny
//   animate={{ opacity: 1, scale: 1 }} // End fully visible and normal size
//   transition={{ duration: 1 }} // The animation takes 1 second
// >
//   I fade in and grow!
// </motion.div>
// ```

// - **What happens here?**
//   - The `<motion.div>` starts fully invisible (`opacity: 0`) and very small (`scale: 0`).
//   - Over 1 second, it fades in (`opacity: 1`) and grows to its normal size (`scale: 1`).

// ---

// ### **4. `variants`**
// - **What are they?**
//   - `variants` are predefined **sets of animation states** in Framer Motion.
//   - They allow you to define multiple states (`initial`, `animate`, etc.) in one place and reuse them across components.

// #### **How it works**:
// You define a `variants` object that contains different states (like `hidden` and `visible`). Then, you pass it to the `motion.div` using `variants`.

// #### **Example**:
// ```jsx
// const boxVariants = {
//   hidden: { opacity: 0, x: -100 }, // Start hidden and off-screen to the left
//   visible: { opacity: 1, x: 0 },   // Fade in and slide to its original position
// };

// <motion.div
//   variants={boxVariants} // Use the predefined variants
//   initial="hidden"       // Start with the "hidden" state
//   animate="visible"      // Animate to the "visible" state
// >
//   I slide in and fade in!
// </motion.div>
// ```

// - **Why use variants?**
//   - Variants simplify animations for complex components.
//   - You can reuse the same variants across multiple elements.

// ---

// ### **5. `fadeIn`**
// - **What is it?**
//   - `fadeIn` is a custom function in your project. It generates animation settings for Framer Motion.

// #### **Example of `fadeIn`**:
// ```javascript
// const fadeIn = (direction, type, delay, duration) => ({
//   initial: {
//     opacity: 0,
//     x: direction === "right" ? 100 : 0, // Slide in from the right
//     y: direction === "up" ? 100 : 0,    // Slide in from the top
//   },
//   animate: {
//     opacity: 1,
//     x: 0, // End at the original position
//     y: 0,
//     transition: {
//       type: type,       // Animation type (e.g., "spring")
//       delay: delay,     // Delay before starting
//       duration: duration, // Total duration of the animation
//     },
//   },
// });
// ```

// #### **Usage**:
// ```jsx
// <motion.div
//   variants={fadeIn("right", "spring", 0.5, 0.75)} // Slide in from the right
//   initial="initial"
//   animate="animate"
// >
//   I fade in and slide from the right!
// </motion.div>
// ```

// ---

// ### **How Framer Motion Works Together**
// 1. **Base Components**:
//    - Use `motion.div` or `motion.p` for animating HTML elements.
   
// 2. **Define States**:
//    - Use `initial` (start state) and `animate` (end state) to control animations.
   
// 3. **Transitions**:
//    - Customize animations with `transition` (e.g., duration, delay, spring effect).

// 4. **Variants**:
//    - Group multiple animation states together and apply them to different elements.

// -------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
