// Y9_LTWcTUeszI4oav 
// template_ip53rls
// service_f41vln9 




// Importing React and necessary hooks.
import React, { useRef, useState } from "react";
// Importing motion from Framer Motion to add animations to the component.
import { motion } from "framer-motion";
// emailjs: A service that allows you to send emails directly from your client-side application.
import emailjs from "@emailjs/browser";

// Importing custom styles and other components.
import { styles } from "../styles"; // Custom styles.
import { EarthCanvas } from "./canvas"; // 3D Earth canvas (likely for background or decoration).
import { SectionWrapper } from "../hoc"; // Higher-order component (HOC) for adding common functionality.
import { slideIn } from "../utils/motion"; // Predefined slide-in animation.

const Contact = () => {
  // Reference to the form element to handle form submission.
  const formRef = useRef();
  
  // State to handle form data (name, email, message).
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle loading state when sending the email.
  const [loading, setLoading] = useState(false);

  // Function to handle form input change.
  const handleChange = (e) => {
    const { target } = e; // destructuring target from event
    const { name, value } = target; // destructuring name, value from target

// same as setForm({...form,[e.target.name]: e.target.value});
    setForm({...form,[name]: value,});// Update the specific field in the form state.
  };

  // Function to handle form submission and send the email.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    setLoading(true); // Set loading state to true when sending the email.


// The emailjs.send() function sends an email using EmailJS. It's used to send emails directly from the 
// client-side, which is helpful in scenarios where you don't want to set up a backend server for email sending.

// import.meta.env.VITE_APP_EMAILJS_SERVICE_ID: This pulls the service ID from the environment variables, 
// which tells EmailJS which service to use to send the email.
// import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID: The template ID specifies which email template to use for 
// formatting the email. Templates in EmailJS allow you to define how the email should look.

// Form Data:
      // from_name: The user's name who is submitting the form.
      // to_name: The recipient's name (hardcoded to "JavaScript Mastery" in this case).
      // from_email: The sender's email address, taken from the form.
      // to_email: The recipient's email address (a specific address where the email should be sent).
      // message: The message content submitted in the form.
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // EmailJS service ID from the environment variables.
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // EmailJS template ID.
        {
          from_name: form.name, // The sender's name.
          to_name: "Piyush Yadav", // The recipient's name.
          from_email: form.email, // The sender's email.
          to_email: "ypiyush14yadav@gmail.com", // The recipient's email.
          message: form.message, // The message sent by the sender.
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Your EmailJS public key (for authentication)..
      )
      .then(
        () => {
          setLoading(false); // Set loading state to false when email is sent successfully.
          alert("Thank you. I will get back to you as soon as possible."); // Show success message.
      
          setForm({ name: "", email: "", message: "" }); // Clear the form fields after successful submission.
        },
        (error) => {
          setLoading(false); // Set loading state to false when an error occurs.
          console.error(error); // Log the error to the console.
          
          // Show an error message if something goes wrong.
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Motion div for animating the contact form. It make is slide from left to right when page reloads.*/}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} // Using slide-in animation for form to slide from left to right.
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        {/* Section header */}
{/* sectionSubText, styles.sectionHeadText ae styles defined in styles object of src/styles.js */}
        <p className={styles.sectionSubText}>Get in touch</p>{/* SubHeading */}
        <h3 className={styles.sectionHeadText}>Contact.</h3>{/* Heading */}

        {/* Contact form */}
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8' >
          {/* Name input field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name' // The input field's name.
              value={form.name} // Value is controlled by the form state.
              onChange={handleChange} // Call handleChange when the user types.
              placeholder="What's your good name?" // Placeholder text.
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Email input field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Message textarea */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Submit button */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"} {/* Display "Sending..." while loading */}
          </button>
        </form>
      </motion.div>

  {/* EarthCanvas component to display the 3D earth background.Giving floating functionlity to 3-D Earth */}
  {/* Motion div for animating the contact form. It make is slide from right to left when page reloads.*/}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}// Using slide-in animation for form to slide from right to left.
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas /> {/* The EarthCanvas component likely renders a 3D earth */}
      </motion.div>
    </div>
  );
};

// Wrapping the Contact component with SectionWrapper HOC for common functionality (e.g., scroll behavior, styling).
export default SectionWrapper(Contact, "contact");






