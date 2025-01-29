// Importing React library for building components.
import React from "react";

// Importing components from `react-vertical-timeline-component` to create a vertical timeline for displaying experiences.
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// Importing motion from Framer Motion for adding animations to the section.
import { motion } from "framer-motion";

// Importing styles for the vertical timeline.
import "react-vertical-timeline-component/style.min.css";

// Importing custom styles, data, and utilities.
import { styles } from "../styles"; // Custom CSS styles for the project.
import { experiences } from "../constants"; // Array of experience data (e.g., job details).
import { SectionWrapper } from "../hoc"; // Higher-order component for adding shared behaviors to the section.
import { textVariant } from "../utils/motion"; // Animation variant for the text heading.


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// **********  BELOW IS CHILD COMPONENET OF THIS OUR MAIN COMPONENT EXPERIENCE   **************

// `ExperienceCard` is a reusable component to display a single experience entry in the timeline.
const ExperienceCard = ({ experience }) => {
  return (
// Each timeline entry is represented by `VerticalTimelineElement`.VerticalTimelineElement creates 
// straight vertical line and cards attach to it with arrows
    <VerticalTimelineElement
      // Custom styles for the timeline content.
      contentStyle={{
        background: "#1d1836", // Background color of the timeline entry.
        color: "#fff", // Text color.
      }}
      // Custom styles for the arrow pointing to the content outside the card.
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // Displays the date of the experience in the card.
      date={experience.date}
      // Customizes the circle icon's background color.
      iconStyle={{ background: experience.iconBg }}
      // Sets the icon for the timeline entry, typically a company logo.
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon} // Logo or icon for the company in circle shape next to each card.
            alt={experience.company_name} // Alternate text for accessibility.
            className='w-[60%] h-[60%] object-contain' // Resizes the icon while keeping its aspect ratio.
          />
        </div>
      }
    >
      {/* Content of the timeline entry */}
      <div>
        {/* It display Title of the experience, like a job title in the card */}
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        {/* It display Name of the company in the card*/}
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* List of bullet(key) points or responsibilities for the experience in the card */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`} // Unique key for each list item.
            className='text-white-100 text-[14px] pl-1 tracking-wider' // Styling for the list items.
          >
            {point} {/* The actual point text */}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ******* BELOW IS MAIN COMPONENET OF THIS PAGE **********
// `Experience` component displays the entire "Work Experience" section.
const Experience = () => {
  return (
    <>
      {/* Animated section heading.Here, motion.div It will make our <p>  animated */} 
      <motion.div variants={textVariant()}>
        {/* Subheading text */}
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        {/* Main heading text */}
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Timeline container */}
      <div className='mt-20 flex flex-col'>
        {/* `VerticalTimeline` creates the overall timeline structure */}
        <VerticalTimeline>
          {/* Mapping through the experiences array and rendering an `ExperienceCard` for each entry */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`} // Unique key for each experience.
              experience={experience} // Passing the experience data as a prop.
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Wrapping the `Experience` component with the `SectionWrapper` HOC.
// Adds shared functionality (like linking to the section by ID) to the component.
export default SectionWrapper(Experience, "work");






//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ### **What is a Timeline?**
// - A **timeline** is a vertical or horizontal layout that shows events or milestones in a sequential order. 
// - In your code, the timeline represents **work experience**, where each job or project is a separate **timeline card**.

// ---

// ### **What is a Timeline Card?**
// - A **timeline card** is an individual entry in the timeline. It contains:
//   - A **date** (when the event happened).
//   - A **title** (e.g., job title).
//   - A **description** (e.g., responsibilities).
//   - An **icon** (e.g., a logo representing the job or company).

// In your code:
// - **Timeline**: The overall container for all the cards (`<VerticalTimeline>`).
// - **Timeline Card**: Each job or project entry (`<VerticalTimelineElement>`).

// ---

// ### **What is `VerticalTimelineElement`?**
// - This is a component from the `react-vertical-timeline-component` library.
// - It represents a **single card** in the timeline.
// - It does **not** create the vertical line itself but aligns its content along the timeline.

// ---

// ### **Key Props in `VerticalTimelineElement`**

// #### **1. `contentStyle`**
// - This controls the **styling** of the card's content area (like its background, text color, etc.).

// - **Example**:
//   ```javascript
//   contentStyle={{
//     background: "#1d1836", // Dark background color for the card.
//     color: "#fff", // White text color.
//   }}
//   ```
//   **Result**: The timeline card has a dark background with white text.

// #### **2. `contentArrowStyle`**
// - This controls the **arrow** that points to the timeline card.
// - The arrow is a small triangle that connects the card to the vertical line.

// - **Example**:
//   ```javascript
//   contentArrowStyle={{ borderRight: "7px solid #232631" }}
//   ```
//   **Result**: The arrow pointing to the card has a dark gray border.

// #### **3. `icon`**
// - This defines the **icon** inside the circular marker on the timeline.
// - The icon can be an image, like a company logo, or any React component.

// - **Example**:
//   ```javascript
//   icon={
//     <div className="flex justify-center items-center w-full h-full">
//       <img
//         src={experience.icon} // Path to the company logo
//         alt={experience.company_name} // Alternate text
//         className="w-[60%] h-[60%] object-contain" // Keeps aspect ratio and resizes
//       />
//     </div>
//   }
//   ```

// #### **4. `iconStyle`**
// - This controls the **styling** of the circular icon's background.

// - **Example**:
//   ```javascript
//   iconStyle={{ background: experience.iconBg }} // Sets the background color
//   ```

// ---

// ### **What is `motion.div`?**
// - `motion.div` is a component from the **Framer Motion** library.
// - It allows you to add **animations** to your HTML elements like `<div>`.

// ---

// #### **Key Animation Props for `motion.div`**
// 1. **`variants`**: Predefined animation states (like `hidden` and `show`).
// 2. **`initial`**: Defines the starting animation state.
// 3. **`whileInView`**: Defines the animation to run when the component comes into view.
// 4. **`viewport`**: Controls when the animation triggers (e.g., only once).

// - **Example**:
//   ```javascript
//   <motion.div
//     variants={textVariant()} // Use predefined animation states
//     initial="hidden" // Start in a hidden state
//     whileInView="show" // Animate to "show" when visible
//     viewport={{ once: true, amount: 0.25 }} // Trigger animation when 25% of the element is visible
//   >
//     <h2>Work Experience</h2>
//   </motion.div>
//   ```

// ---

// ### **What is `variants={textVariant()}`?**
// - **`textVariant()`** is a custom animation configuration that:
//   - Defines how the text appears (e.g., fade-in or slide-in).
//   - It is defined in your `../utils/motion` file.

// - **Example**:
//   ```javascript
//   export const textVariant = () => ({
//     hidden: { opacity: 0, x: -50 }, // Start invisible and slightly off to the left
//     show: {
//       opacity: 1, // Fade in to fully visible
//       x: 0, // Slide back to its original position
//       transition: { duration: 0.5 }, // Takes 0.5 seconds
//     },
//   });
//   ```

// ---

// ### **Simplified Explanation of the Code**
// Let’s combine everything with examples:

// #### **1. `ExperienceCard`**
// A **single job or project** entry on the timeline.

// - **Code Example**:
//   ```javascript
//   <VerticalTimelineElement
//     contentStyle={{ background: "#1d1836", color: "#fff" }}
//     contentArrowStyle={{ borderRight: "7px solid #232631" }}
//     date="Jan 2020 - Dec 2021"
//     iconStyle={{ background: "#123456" }}
//     icon={
//       <div className="flex justify-center items-center w-full h-full">
//         <img
//           src="/path/to/logo.png"
//           alt="Company Logo"
//           className="w-[60%] h-[60%] object-contain"
//         />
//       </div>
//     }
//   >
//     <h3 className="text-white">Software Developer</h3>
//     <p className="text-secondary">TechCorp</p>
//     <ul>
//       <li>Built React applications for 10k users.</li>
//       <li>Collaborated with a team of 5 developers.</li>
//     </ul>
//   </VerticalTimelineElement>
//   ```

// #### **2. `Experience` Component**
// The **entire timeline** with multiple entries.

// - **Code Example**:
//   ```javascript
//   const Experience = () => {
//     return (
//       <motion.div variants={textVariant()}>
//         <h2>Work Experience</h2>
//         <VerticalTimeline>
//           {experiences.map((exp, index) => (
//             <ExperienceCard key={index} experience={exp} />
//           ))}
//         </VerticalTimeline>
//       </motion.div>
//     );
//   };
//   ```

// ---

// ### **Visual Breakdown**

// **1. Timeline Layout**:
// ```
// ---------------------------------------------------------
//  | Icon | Job Title        | Jan 2020 - Dec 2021
//        | Company Name      | Responsibilities:
//        |                  - Built React apps
// ---------------------------------------------------------
// ```

// **2. Animation**:
// - The heading slides in when it becomes visible.
// - Each card fades in and slides into place.

// ---

// ### **Summary**
// - **`VerticalTimeline`**: Creates the overall timeline structure.
// - **`VerticalTimelineElement`**: Represents a single entry (job/project) in the timeline.
// - **`contentStyle`**: Styles the card background and text.
// - **`contentArrowStyle`**: Styles the arrow pointing to the card.
// - **`icon`**: Adds a circular icon or logo to the timeline entry.
// - **`motion.div`**: Adds animations to the heading or other elements.
// - **`variants`**: Predefined animation states for elements like text or headings.



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  ************ Difference Between `<VerticalTimeline>` and `<VerticalTimelineElement> *******************

// Both are components from the `react-vertical-timeline-component` library, but they serve **different purposes** in creating a timeline.

// ---

// ### **1. `<VerticalTimeline>`**
// - **Purpose**:
//   - Acts as the **container** or **wrapper** for the entire timeline.
//   - It organizes and displays multiple timeline entries (cards) vertically.

// - **Key Features**:
//   - Adds a **vertical line** in the center of the timeline.
//   - Aligns all the `<VerticalTimelineElement>` components along this line.

// - **Think of it as**:
//   - The **skeleton** of the timeline that structures how all entries are displayed.

// ---

// ### **2. `<VerticalTimelineElement>`**
// - **Purpose**:
//   - Represents an **individual entry** (or "card") in the timeline.
//   - Displays specific details like:
//     - A **date** (e.g., "Jan 2020 - Dec 2021").
//     - A **title** (e.g., "Software Developer").
//     - An **icon** (e.g., a company logo).
//     - A **description** (e.g., responsibilities or highlights).

// - **Think of it as**:
//   - A **building block** of the timeline. Each entry in the timeline is a `<VerticalTimelineElement>`.

// ---

// ### **How They Work Together**

// 1. **`<VerticalTimeline>`**:
//    - Defines the overall timeline layout.
//    - Holds multiple `<VerticalTimelineElement>` components.
//    - Provides the central vertical line where entries are aligned.

// 2. **`<VerticalTimelineElement>`**:
//    - Defines the **content** for each timeline entry.
//    - Each `<VerticalTimelineElement>` aligns to the vertical line created by `<VerticalTimeline>`.

// ---

// ### **Example**

// ```jsx
// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// const ExampleTimeline = () => {
//   return (
//     <VerticalTimeline> {/* Timeline container */}
//       <VerticalTimelineElement
//         date="Jan 2020 - Dec 2021"
//         iconStyle={{ background: "#123456" }}
//         icon={<img src="/path/to/logo.png" alt="Logo" />}
//       >
//         <h3>Software Developer</h3>
//         <p>Built React applications for 10k users.</p>
//       </VerticalTimelineElement>

//       <VerticalTimelineElement
//         date="Feb 2022 - Present"
//         iconStyle={{ background: "#654321" }}
//         icon={<img src="/path/to/another-logo.png" alt="Another Logo" />}
//       >
//         <h3>Full Stack Developer</h3>
//         <p>Developed full-stack apps with Node.js and React.</p>
//       </VerticalTimelineElement>
//     </VerticalTimeline>
//   );
// };

// export default ExampleTimeline;
// ```

// ---

// ### **Output**

// ```
// ---------------------------------------------------------
//  | Icon  | Software Developer       | Jan 2020 - Dec 2021
//        | Built React applications for 10k users.
// ---------------------------------------------------------
//  | Icon  | Full Stack Developer     | Feb 2022 - Present
//        | Developed full-stack apps with Node.js and React.
// ---------------------------------------------------------
// ```

// ---

// ### **Key Points**
// 1. **`<VerticalTimeline>`**:
//    - Creates the structure of the timeline.
//    - Adds a vertical line for alignment.

// 2. **`<VerticalTimelineElement>`**:
//    - Displays individual details for each job, project, or event.
//    - Aligned along the vertical line created by `<VerticalTimeline>`.

// ---



// -------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!------------------IMPORTANT!!!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
