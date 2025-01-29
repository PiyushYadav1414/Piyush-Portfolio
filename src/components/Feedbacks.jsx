// Importing React library to create the component.
import React from "react";
// Importing `motion` from Framer Motion to add animations to the component.
import { motion } from "framer-motion";

// Importing custom styles, HOC, and motion utilities.
import { styles } from "../styles"; // Custom styles for the application.
import { SectionWrapper } from "../hoc"; // Higher-Order Component (HOC) for adding common functionality.
import { fadeIn, textVariant } from "../utils/motion"; // Predefined animation functions.
import { testimonials } from "../constants"; // Array of testimonial data.



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// **********  BELOW IS CHILD COMPONENET OF THIS OUR MAIN COMPONENT FEEDBACKS   **************

const FeedbackCard = ({
  index, // Index of the testimonial (used for animation delay).
  testimonial, // The testimonial content (feedback).
  name, // The name of the person providing the testimonial.
  designation, // The designation of the person providing the testimonial.
  company, // The company the person works for.
  image, // Image of the person providing the testimonial.
}) => (
  // Motion component for animating the card with a fade-in effect.
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)} // Applying animation variants.
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full' // Styling for the card (background, padding, rounded corners).
  >
    {/* Displaying the quote symbol */}
    <p className='text-white font-black text-[48px]'>"</p>

    {/* Testimonial content */}
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> {/* The feedback/testimonial text */}

      {/* Name, designation, and company of the person providing the testimonial */}
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          {/* Name of the person providing the testimonial */}
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          {/* Designation and company of the person */}
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        {/* Image of the person giving the testimonial */}
        <img
          src={image} // Image URL of the person.
          alt={`feedback_by-${name}`} // Alt text for accessibility.
          className='w-10 h-10 rounded-full object-cover' // Styling the image (circle shape).
        />
      </div>
    </div>
  </motion.div>
);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
// ******* BELOW IS MAIN COMPONENET OF THIS PAGE **********

// `Feedbacks` component displays all the testimonial cards.
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        {/* Animated section header for "What others say" */}
    {/* sectionSubText, styles.sectionHeadText ae styles defined in styles object of src/styles.js */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p> {/* SubHeading */}
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>  {/* Heading */}
        </motion.div>
      </div>

      {/* Container for the testimonial cards */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {/* Mapping through `testimonials` array and rendering a `FeedbackCard` for each testimonial */}
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

// Wrapping the `Feedbacks` component with `SectionWrapper` HOC for shared functionality (e.g., scroll behavior, styling).
export default SectionWrapper(Feedbacks, "");
