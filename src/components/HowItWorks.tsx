
import { Phone, Timer, Check } from "lucide-react";
import { useState, useEffect } from "react";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('how-it-works');
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const steps = [
    {
      number: "01",
      title: "Tell us what you like (and what not)",
      description: "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
      icon: <Phone className="w-12 h-12 text-omni-orange" />,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02",
      title: "Approve your weekly meal plan",
      description: "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
      icon: <Check className="w-12 h-12 text-omni-orange" />,
      image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Receive meals at convenient times",
      description: "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
      icon: <Timer className="w-12 h-12 text-omni-orange" />,
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white pattern-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-omni-orange font-medium mb-2">How it works</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-omni-dark">
            Your daily dose of health in 3 simple steps
          </h2>
        </div>
        
        <div className="space-y-32">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
              style={{ 
                transitionDelay: `${index * 300}ms`,
                opacity: isVisible ? 1 : 0
              }}
            >
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <span className="text-8xl font-bold text-gray-100">{step.number}</span>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-omni-dark -mt-12 mb-6">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {step.description}
                </p>
                <div className="mt-8">
                  {step.icon}
                </div>
              </div>
              
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''} relative`}>
                <div className="rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-500">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto"
                  />
                </div>
                {/* Decorative Elements */}
                <div className={`absolute ${index % 2 === 1 ? '-right-10' : '-left-10'} -top-10 w-32 h-32 rounded-full bg-omni-light-orange/20 z-0`}></div>
                <div className={`absolute ${index % 2 === 1 ? '-left-6' : '-right-6'} -bottom-6 w-24 h-24 rounded-full bg-omni-yellow/10 z-0`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
