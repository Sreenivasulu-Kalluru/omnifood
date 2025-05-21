
import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your free meal is on its way!",
      });
      
      setEmail("");
      setName("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 md:py-28 bg-omni-orange">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-omni-dark mb-6">
                  Get your first meal for free!
                </h2>
                <p className="text-gray-600 mb-8">
                  Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-omni-orange focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-omni-orange focus:border-transparent outline-none transition-all"
                      placeholder="me@example.com"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-omni-orange hover:bg-omni-yellow text-white py-6 text-lg rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    {isSubmitting ? "Signing up..." : "Sign up now"}
                  </Button>
                  
                  <p className="text-xs text-gray-500 mt-4">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
