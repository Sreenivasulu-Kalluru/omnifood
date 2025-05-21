
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('pricing');
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

  const plans = [
    {
      name: "Starter",
      price: isYearly ? 399 : 39,
      description: "Perfect for those new to healthy meal plans",
      features: [
        "1 meal per day",
        "Order between 11am and 9pm",
        "Delivery within 60 minutes",
        "Access to standard recipes"
      ],
      isPopular: false
    },
    {
      name: "Complete",
      price: isYearly ? 649 : 59,
      description: "Our most popular plan with the perfect balance",
      features: [
        "2 meals per day",
        "Order 24/7",
        "Delivery within 30 minutes",
        "Access to premium recipes",
        "Free nutritionist consultation"
      ],
      isPopular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-omni-orange font-medium mb-2">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-omni-dark mb-4">
            Eating well without breaking the bank
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our meal plans are priced to ensure you get restaurant-quality, nutritious meals for less than it would cost to shop and cook yourself.
          </p>
          
          {/* Toggle */}
          <div className="mt-10 inline-flex items-center bg-omni-light-gray rounded-full p-1 mb-10">
            <button 
              className={`py-2 px-6 rounded-full transition-all ${!isYearly ? 'bg-omni-orange text-white shadow-md' : 'text-gray-700'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button 
              className={`py-2 px-6 rounded-full transition-all ${isYearly ? 'bg-omni-orange text-white shadow-md' : 'text-gray-700'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly <span className="text-xs font-medium ml-1">(Save 15%)</span>
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`
                relative rounded-2xl overflow-hidden transition-all duration-500 transform
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                ${plan.isPopular 
                  ? 'bg-gradient-to-br from-omni-orange/90 to-omni-yellow border-0 text-white shadow-xl' 
                  : 'bg-white border border-gray-200 text-gray-800 shadow-lg'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute top-5 right-5">
                  <div className="bg-white text-omni-orange font-medium text-sm py-1 px-3 rounded-full shadow-md">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8 md:p-10">
                <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-omni-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.isPopular ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <div className="flex items-end mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-lg ml-2 mb-1">{isYearly ? '/year' : '/month'}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className={`mr-3 ${plan.isPopular ? 'text-white' : 'text-omni-orange'}`} size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 text-lg shadow-lg hover:shadow-xl transition-all ${
                    plan.isPopular 
                      ? 'bg-white text-omni-orange hover:bg-gray-100' 
                      : 'bg-omni-orange text-white hover:bg-omni-yellow'
                  }`}
                >
                  Start eating well
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Prices include all applicable taxes. You can cancel at any time.
          </p>
          <p className="text-gray-600">
            Both plans include:
            <span className="font-medium text-omni-dark"> Free delivery, custom meal selections, access to exclusive recipes, and 24/7 customer support.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
