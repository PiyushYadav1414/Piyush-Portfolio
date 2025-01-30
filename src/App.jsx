// Importing BrowserRouter from "react-router-dom" to enable routing in the app.
// This allows us to navigate between different pages or sections of the app.
import { BrowserRouter } from "react-router-dom";

// Importing various components for the application. 
// These are the building blocks of your portfolio: About, Contact, Experience, etc.
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { HeroScrollDemo } from './components/ui/hero-scroll-demo';
import GoogleGeminiEffectDemo from './components/ui/google-gemini-effect-demo'

// Defining the main App component
const App = () => {
  return (
    // Wrapping the entire application inside BrowserRouter to enable navigation and routing.
    <BrowserRouter>
      {/* Setting up the main container for the application with a background color. */}
      <div className='relative z-0 bg-primary'>
        {/* Hero section with a custom background image pattern. 
            The pattern is set to cover the entire section, not repeat, and stay centered. */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* Navbar component is placed at the top of the page for navigation. */}
          <Navbar />
          {/* Hero component is displayed below the Navbar, likely a banner or introduction. */}
          <Hero />
        </div>

        {/* Other sections of the portfolio follow below the hero section. */}
        <About /> {/* Section for introducing yourself. */}
        <Experience /> {/* Section for showcasing your professional experience. */}
        <Tech /> {/* Section to display the technologies and tools you use. */}
        <Works /> {/* Section to showcase your previous projects or work. */}
        <HeroScrollDemo/>
        <Feedbacks /> {/* Section to display testimonials or feedback from clients/employers. */}
        
        {/* Contact and StarsCanvas sections are wrapped in a relative container for proper layering. */}
        <div className='relative z-0'>
          <Contact /> {/* Section for contact information or a contact form. */}
          <StarsCanvas /> {/* A visual element, likely a 3D canvas with stars, for a cool background effect. */}
        </div>
       <GoogleGeminiEffectDemo/>
      </div>
     
          
      
    </BrowserRouter>
  );
}

// Exporting the App component so it can be used in other parts of the project (like rendering it to the DOM).
export default App;
