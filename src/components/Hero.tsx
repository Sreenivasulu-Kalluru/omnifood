
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-omni-dark">
              A healthy meal delivered to your door, <span className="text-omni-orange">every single day</span>
            </h1>
            <p className="text-lg text-gray-600 opacity-0 animate-fade-in-delay">
              The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-2">
              <Button className="bg-omni-orange hover:bg-omni-yellow text-white text-lg py-6 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Start eating well
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-omni-orange text-omni-orange hover:bg-omni-orange hover:text-white text-lg py-6 px-8 rounded-full transition-all duration-300">
                Learn more
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-10 pt-6 opacity-0 animate-fade-in-delay-2">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${item+10}.jpg`}
                        alt={`User ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="ml-4 font-medium text-omni-dark">
                  <span className="text-omni-orange font-bold">250,000+</span> meals delivered last year!
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side: Images */}
          <div className="relative h-[400px] md:h-[500px] animate-fade-in">
            <div className="absolute top-0 left-0 w-60 h-60 md:w-80 md:h-80 rounded-full bg-omni-orange/20 animate-float"></div>
            
            <div className="absolute top-0 md:top-10 right-0 w-64 h-64 md:w-72 md:h-72 shadow-xl rounded-lg overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Healthy meal" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 md:bottom-10 left-0 w-56 h-56 md:w-64 md:h-64 shadow-xl rounded-lg overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Prepared meal" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute bottom-20 md:bottom-40 right-0 md:right-10 w-48 h-48 shadow-xl rounded-lg overflow-hidden transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Fresh ingredients" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted by */}
      <div className="container mx-auto px-4 mt-16 md:mt-24">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest">Trusted by</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/512px-TechCrunch_logo.svg.png" 
               alt="TechCrunch" 
               className="h-6 md:h-8 opacity-50 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/The_New_York_Times_Logo.svg/512px-The_New_York_Times_Logo.svg.png" 
               alt="The New York Times" 
               className="h-6 md:h-8 opacity-50 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/512px-Forbes_logo.svg.png" 
               alt="Forbes" 
               className="h-6 md:h-8 opacity-50 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/The_Guardian.svg/512px-The_Guardian.svg.png" 
               alt="The Guardian" 
               className="h-6 md:h-8 opacity-50 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
