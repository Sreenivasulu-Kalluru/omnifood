import { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface Meal {
  id: number;
  name: string;
  description: string;
  category: string;
  calories: number;
  time: string;
  tags: string[];
  image: string;
}

const Meals = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMealId, setActiveMealId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('meals');
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

  const meals: Meal[] = [
    {
      id: 1,
      name: 'Japanese Gyoza',
      description:
        'Savory vegetable-filled dumplings served with a soy dipping sauce.',
      category: 'vegetarian',
      calories: 650,
      time: '30 min',
      tags: ['vegetarian', 'asian', 'dumplings'],
      image:
        'https://plus.unsplash.com/premium_photo-1661431411053-0a6efc353aea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3lvemF8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      name: 'Avocado Salad',
      description: 'Fresh greens, avocado, tomatoes and a citrus vinaigrette.',
      category: 'vegan',
      calories: 400,
      time: '15 min',
      tags: ['vegan', 'salad', 'quick'],
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Mediterranean Bowl',
      description:
        'Quinoa base with roasted vegetables, hummus, and tahini dressing.',
      category: 'vegetarian',
      calories: 550,
      time: '25 min',
      tags: ['vegetarian', 'mediterranean', 'bowl'],
      image:
        'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      name: 'Grilled Salmon',
      description:
        'Wild-caught salmon with lemon herb butter and seasonal vegetables.',
      category: 'protein',
      calories: 520,
      time: '20 min',
      tags: ['seafood', 'protein', 'omega-3'],
      image:
        'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      name: 'Chicken Curry',
      description: 'Tender chicken in a rich curry sauce with basmati rice.',
      category: 'protein',
      calories: 620,
      time: '35 min',
      tags: ['curry', 'protein', 'spicy'],
      image:
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      name: 'Buddha Bowl',
      description:
        'Colorful mix of beans, grains, and roasted vegetables with tahini.',
      category: 'vegan',
      calories: 480,
      time: '20 min',
      tags: ['vegan', 'bowl', 'protein'],
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
  ];

  const filteredMeals =
    activeCategory === 'all'
      ? meals
      : meals.filter((meal) => meal.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'vegan', name: 'Vegan' },
    { id: 'protein', name: 'High Protein' },
  ];

  return (
    <section id="meals" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-omni-orange font-medium mb-2">
            Meals
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-omni-dark mb-4">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our AI analyzes your preferences, dietary requirements, and nutrient
            needs to craft personalized meal plans from our vast recipe
            collection.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={`
                rounded-full px-6 transition-all duration-300
                ${
                  activeCategory === category.id
                    ? 'bg-omni-orange hover:bg-omni-orange/90 text-white'
                    : 'border-omni-orange text-omni-orange hover:bg-omni-orange/10'
                }
              `}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredMeals.map((meal, index) => (
            <div
              key={meal.id}
              className={`meal-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveMealId(meal.id)}
              onMouseLeave={() => setActiveMealId(null)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                />
                <div className="meal-card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white text-sm mb-2">
                      Ready in {meal.time}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {meal.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-omni-orange/80 hover:bg-omni-orange text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-omni-dark mb-2">
                  {meal.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {meal.description}
                </p>
                <div className="flex justify-between items-center">
                  <Badge
                    variant="outline"
                    className="border-omni-orange text-omni-orange"
                  >
                    {meal.calories} calories
                  </Badge>
                  <span className="text-sm text-gray-500">{meal.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        {/* <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-omni-dark mb-12">
            Once you try it, you can't go back
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img
                  src={`https://source.unsplash.com/collection/1353633/800x800?sig=${i}`}
                  alt="Food gallery"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <Button className="mt-12 bg-omni-orange hover:bg-omni-yellow text-white rounded-full px-8 py-6 text-lg transition-all duration-300 shadow-md hover:shadow-lg">
            View all recipes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Meals;
