
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  location: string;
  image: string;
}

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "OmniFood has completely transformed my eating habits! The meals are not only delicious but perfectly portioned. I've lost 15 pounds without feeling like I'm on a diet.",
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "As a busy professional, I never had time to cook healthy meals. OmniFood solved that problem completely. The food is restaurant-quality and the delivery is always on time.",
      location: "San Francisco, USA",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      text: "The variety of meals is incredible. After six months, I'm still discovering new favorites! The customer service is also top-notch whenever I need to adjust my plan.",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      text: "I've tried several meal delivery services, but OmniFood stands out for taste and quality. The app is intuitive and I love being able to swap meals based on my mood.",
      location: "Toronto, Canada",
      image: "https://randomuser.me/api/portraits/men/86.jpg"
    }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('testimonials');
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
  
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const nextSlide = () => {
    const next = (currentSlide + 1) % testimonials.length;
    goToSlide(next);
  };
  
  const prevSlide = () => {
    const prev = (currentSlide - 1 + testimonials.length) % testimonials.length;
    goToSlide(prev);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-omni-light-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-omni-orange/10 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-omni-yellow/10 translate-y-1/3 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-omni-orange font-medium mb-2">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-omni-dark">
            What our customers are saying
          </h2>
        </div>
        
        {/* Testimonial Slider */}
        <div 
          className={`relative mx-auto max-w-4xl transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            ref={sliderRef} 
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-omni-orange/20">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">
                          "{testimonial.text}"
                        </blockquote>
                        <div>
                          <h4 className="font-bold text-omni-dark">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-omni-dark hover:bg-omni-orange hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-omni-orange w-8' 
                      : 'bg-omni-orange/30 hover:bg-omni-orange/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-omni-dark hover:bg-omni-orange hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
