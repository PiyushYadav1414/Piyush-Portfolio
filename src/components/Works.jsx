// Importing React library to create the component.
import React from "react";
// Importing the Tilt component to create a 3D tilt effect on hover.
import Tilt from "react-parallax-tilt";
// Importing motion from Framer Motion for animations.
import { motion } from "framer-motion";

// Importing custom styles and assets.
import { styles } from "../styles"; // Custom styling.
import { github } from "../assets"; // GitHub icon for source code links.
import { SectionWrapper } from "../hoc"; // Higher-order component (HOC) to add common functionality.
import { projects } from "../constants"; // Array of projects data from constants/index.js.
import { fadeIn, textVariant } from "../utils/motion"; // Predefined animation variants.



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// **********  BELOW IS CHILD COMPONENET OF THIS OUR MAIN COMPONENT EXPERIENCE   **************

// `ProjectCard` component displays individual project details (like name, description, tags, and image).
// It uses the Tilt component to add a 3D effect on hover of each card showing each project.
const ProjectCard = ({
  index, // Index of the project (used for animation delay).
  name, // Project name.
  description, // Short description of the project.
  tags, // Tags associated with the project (like technologies used).
  image, // Image or screenshot of the project.
  source_code_link, // URL for the project's source code (GitHub).
}) => {
  return ( 
// fadeIn tells when we reload the page then project card will move(animated) in upward direction from below     
    // Motion component to animate the card when it appears.
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Tilt adds a 3D effect to the card on hover */}
      <Tilt
        options={{
          max: 45, // Maximum tilt angle (45 degrees).
          scale: 1, // Scale of the card (1 means no scaling).
          speed: 450, // Speed of the tilt effect.
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full' // Card styling.
      >
        <div className='relative w-full h-[230px]'>
          {/* Project image */}
          <img
            src={image} // Image URL for the project.
            alt='project_image' // Alt text for accessibility.
            className='w-full h-full object-cover rounded-2xl' // Styling the image.
          />

          {/* Icon that appears when you hover over the image, allowing the user to open the GitHub source code */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")} // Opens the source code link in a new tab.
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github} // GitHub icon.
                alt='source code' // Alt text for the GitHub icon.
                className='w-1/2 h-1/2 object-contain' // Styling the GitHub icon.
              />
            </div>
          </div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  */}
{/* In below add Live button It will be added automatically when you will uncommment the code  */}
          {/* Icon that appears when you hover over the image, allowing the user to open the GitHub source code */}
          {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(Link_To_Project_URL, "_blank")} // Opens the source code link in a new tab.
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github} // Chnage icon and show something like live.
                alt='source code' // Alt text for the GitHub icon.
                className='w-1/2 h-1/2 object-contain' // Styling the GitHub icon.
              />
            </div>
          </div> */}
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  */}
        </div>

        {/* Project name and description */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* Tags (technologies or skills used in order to craete the project like html,css,js,React,Tailwind) */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`} // Unique key for each tag.
              className={`text-[14px] ${tag.color}`} // Apply color from the tag data.
            >
              #{tag.name} {/* Display tag name */}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
// ******* BELOW IS MAIN COMPONENET OF THIS PAGE **********

// `Works` component displays the entire "Work Experience" section.
// `Works` component displays the section title, description, and all the project cards.
const Works = () => {
  return (
    <>
      {/* Section header animation using Framer Motion */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p> {/* Subheading */}
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2> {/* Main heading */}
      </motion.div>

      {/* Description of the projects */}
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} // Fade-in animation for the paragraph.
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' // Styling for the description text.
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Project cards container */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {/* Looping through the `projects` array and rendering a `ProjectCard` for each project */}
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// Wrapping the `Works` component with the `SectionWrapper` HOC to apply common functionality, such as scroll behavior or styling.
export default SectionWrapper(Works, "");
