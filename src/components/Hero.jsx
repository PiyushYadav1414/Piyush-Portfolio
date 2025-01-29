// Importing the motion library from Framer Motion for animations
import { motion } from "framer-motion";

// Importing custom styles and the 3D ComputersCanvas component
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// The Hero component is the main banner section that greets users at the top of your page.
const Hero = () => {
  return (
    // The entire hero section is a full-screen area
    <section className={`relative w-full h-screen mx-auto`}>
      {/* This is the main container for the content inside the hero section */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        {/* Left decorative line and dot */}
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* A small circular dot */}
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          {/* A vertical gradient line */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* The text content This contains the heading and subheading: */}
        <div>
          {/* Main heading with dynamic styles */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Piyush</span>
          </h1>
          {/* Subheading describing what Adrian does */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* Adding the 3D animated canvas component */}
      <ComputersCanvas />

{/* Scroll indicator at the bottom.At the bottom of the hero section, you add a visual cue to encourage users to scroll down. */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* Clicking this scrolls to the "About" section */}
        <a href='#about'>
          {/* Outer container for the scroll animation */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* Animated bouncing dot inside the container */}
            <motion.div
              animate={{
                y: [0, 24, 0], // Moves the dot up and down
              }}
              transition={{
                duration: 1.5, // Takes 1.5 seconds for one animation cycle
                repeat: Infinity, // Repeats the animation forever
                repeatType: "loop", // Makes the animation loop continuously
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' // Small circular dot
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// Exporting the Hero component so it can be used in other parts of the project
export default Hero;
