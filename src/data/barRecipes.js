const barRecipes = [
  {
    id: 9,
    category: "bar",
    title: "Classic",
    subtitle: "Nachos",
    rating: 4.5,
    cookTime: "20 min",
    servings: 4,
    image:
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=2070&auto=format&fit=crop",
    isPopular: true,
    images: [
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625536050891-0e51b94123c5?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593501598901-3c29df3a5b6c?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Crispy tortilla chips topped with melted cheese, jalapeños, and served with salsa, guacamole, and sour cream.",
    ingredients: [
      "Tortilla Chips",
      "Cheddar Cheese",
      "Monterey Jack Cheese",
      "Black Beans",
      "Jalapeños",
      "Salsa",
      "Guacamole",
      "Sour Cream",
      "Green Onions",
      "Cilantro",
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Arrange tortilla chips in an even layer on a baking sheet.",
      "Sprinkle shredded cheeses over chips.",
      "Add black beans and jalapeño slices on top.",
      "Bake for 5-7 minutes until cheese is melted and bubbly.",
      "Remove from oven and top with dollops of salsa, guacamole, and sour cream.",
      "Garnish with chopped green onions and cilantro before serving.",
    ],
  },
  {
    id: 501,
    category: "bar",
    title: "Loaded Potato",
    subtitle: "Skins",
    rating: 4.7,
    cookTime: "45 min",
    servings: 6,
    image:
      "https://images.unsplash.com/photo-1585148859783-94a0a7a84dd0?q=80&w=2071&auto=format&fit=crop",
    isPopular: true,
    images: [
      "https://images.unsplash.com/photo-1585148859783-94a0a7a84dd0?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601756316478-4fbf88ab1429?q=80&w=1974&auto=format&fit=crop",
    ],
    description:
      "Crispy potato skins loaded with cheese, bacon, and green onions, served with sour cream.",
    ingredients: [
      "Russet potatoes",
      "Olive oil",
      "Cheddar cheese",
      "Bacon",
      "Green onions",
      "Sour cream",
      "Salt",
      "Black pepper",
      "Garlic powder",
      "Paprika",
    ],
    instructions: [
      "Preheat oven to 400°F. Scrub potatoes and pat dry.",
      "Poke potatoes with a fork and bake for 45-60 minutes until tender.",
      "Allow potatoes to cool slightly, then cut in half lengthwise.",
      "Scoop out potato flesh, leaving about 1/4 inch of potato on the skin.",
      "Brush skins inside and out with olive oil and season with salt, pepper, garlic powder, and paprika.",
      "Return to oven and bake for 10 minutes, flip, then bake 10 more minutes until crispy.",
      "Fill skins with cheese and crumbled cooked bacon.",
      "Bake 5 more minutes until cheese melts.",
      "Top with green onions and serve with sour cream for dipping.",
    ],
  },
  {
    id: 502,
    category: "bar",
    title: "Buffalo",
    subtitle: "Chicken Dip",
    rating: 4.8,
    cookTime: "30 min",
    servings: 8,
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1974&auto=format&fit=crop",
    isPopular: true,
    images: [
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598515968567-bf19536e8d6a?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Creamy, spicy buffalo chicken dip perfect for sharing with tortilla chips or celery sticks.",
    ingredients: [
      "Cooked chicken",
      "Cream cheese",
      "Ranch dressing",
      "Buffalo sauce",
      "Cheddar cheese",
      "Blue cheese",
      "Green onions",
      "Garlic powder",
      "Tortilla chips",
      "Celery sticks",
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Shred cooked chicken and mix with softened cream cheese, ranch dressing, and buffalo sauce.",
      "Fold in half of the shredded cheddar cheese and blue cheese crumbles.",
      "Spread mixture into a baking dish and top with remaining cheese.",
      "Bake for 20-25 minutes until bubbly and edges are golden.",
      "Garnish with sliced green onions.",
      "Serve hot with tortilla chips and celery sticks for dipping.",
    ],
  },
  {
    id: 503,
    category: "bar",
    title: "Jalapeño",
    subtitle: "Poppers",
    rating: 4.6,
    cookTime: "35 min",
    servings: 6,
    image:
      "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop",
    isPopular: false,
    images: [
      "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559461678-986e2e9311d7?q=80&w=1974&auto=format&fit=crop",
    ],
    description:
      "Spicy jalapeño peppers stuffed with cream cheese, wrapped in bacon, and baked until crispy.",
    ingredients: [
      "Jalapeño peppers",
      "Cream cheese",
      "Cheddar cheese",
      "Bacon",
      "Green onions",
      "Garlic powder",
      "Onion powder",
      "Paprika",
      "Ranch dressing",
      "Bread crumbs",
    ],
    instructions: [
      "Preheat oven to 375°F and line a baking sheet with foil.",
      "Cut jalapeños in half lengthwise and remove seeds and membranes (wear gloves!).",
      "In a bowl, mix softened cream cheese, shredded cheddar, minced green onions, and spices.",
      "Fill each jalapeño half with cheese mixture.",
      "Wrap each stuffed pepper with half a slice of bacon and secure with a toothpick.",
      "Optional: sprinkle with bread crumbs for extra crispiness.",
      "Bake for 25-30 minutes until bacon is crispy and peppers are tender.",
      "Let cool slightly before serving with ranch dressing for dipping.",
    ],
  },
  {
    id: 504,
    category: "bar",
    title: "Mozzarella",
    subtitle: "Sticks",
    rating: 4.7,
    cookTime: "30 min + chill time",
    servings: 6,
    image:
      "https://images.unsplash.com/photo-1548340748-6d98de4964f0?q=80&w=2069&auto=format&fit=crop",
    isPopular: true,
    images: [
      "https://images.unsplash.com/photo-1548340748-6d98de4964f0?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619633354805-64dc120e7e7f?q=80&w=1975&auto=format&fit=crop",
    ],
    description:
      "Crispy breaded mozzarella sticks with a gooey, melty center, served with marinara sauce.",
    ingredients: [
      "Mozzarella string cheese",
      "All-purpose flour",
      "Eggs",
      "Italian breadcrumbs",
      "Parmesan cheese",
      "Dried oregano",
      "Garlic powder",
      "Vegetable oil",
      "Marinara sauce",
      "Fresh basil",
    ],
    instructions: [
      "Cut string cheese sticks in half and freeze for at least 30 minutes.",
      "Set up breading station: flour in one bowl, beaten eggs in second bowl, and breadcrumbs mixed with Parmesan and seasonings in third bowl.",
      "Dip frozen cheese sticks in flour, then egg, then breadcrumbs, making sure they're fully coated.",
      "For extra crispiness, dip back in egg and breadcrumbs for a second coating.",
      "Return breaded sticks to freezer for at least 30 more minutes.",
      "Heat oil to 350°F in a deep pot.",
      "Fry cheese sticks in batches for 1-2 minutes until golden brown.",
      "Drain on paper towels and serve immediately with warm marinara sauce for dipping.",
    ],
  },
  {
    id: 505,
    category: "bar",
    title: "Loaded",
    subtitle: "Tater Tots",
    rating: 4.6,
    cookTime: "25 min",
    servings: 6,
    image:
      "https://images.unsplash.com/photo-1576866206061-3953303bd3c2?q=80&w=1974&auto=format&fit=crop",
    isPopular: false,
    images: [
      "https://images.unsplash.com/photo-1576866206061-3953303bd3c2?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?q=80&w=1974&auto=format&fit=crop",
    ],
    description:
      "Crispy tater tots topped with cheese, bacon, sour cream, and green onions.",
    ingredients: [
      "Frozen tater tots",
      "Cheddar cheese",
      "Bacon",
      "Sour cream",
      "Green onions",
      "Ranch seasoning",
      "Jalapeños",
      "Hot sauce",
      "Salt",
      "Black pepper",
    ],
    instructions: [
      "Preheat oven and bake tater tots according to package directions until extra crispy.",
      "In the last few minutes of cooking, sprinkle shredded cheese over tots.",
      "Return to oven until cheese is melted and bubbly.",
      "Top with crumbled bacon, sliced jalapeños (if desired), and green onions.",
      "Drizzle with sour cream and hot sauce.",
      "Serve immediately while hot and crispy.",
    ],
  },
  {
    id: 506,
    category: "bar",
    title: "Spinach",
    subtitle: "Artichoke Dip",
    rating: 4.7,
    cookTime: "35 min",
    servings: 8,
    image:
      "https://images.unsplash.com/photo-1639024587432-db351532d969?q=80&w=2070&auto=format&fit=crop",
    isPopular: true,
    images: [
      "https://images.unsplash.com/photo-1639024587432-db351532d969?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633436375553-b8db855088f7?q=80&w=1974&auto=format&fit=crop",
    ],
    description:
      "Creamy, cheesy spinach and artichoke dip, perfect for tortilla chips or bread.",
    ingredients: [
      "Frozen spinach",
      "Artichoke hearts",
      "Cream cheese",
      "Sour cream",
      "Mayonnaise",
      "Parmesan cheese",
      "Mozzarella cheese",
      "Garlic",
      "Red pepper flakes",
      "Tortilla chips",
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Thaw spinach and squeeze out excess moisture.",
      "Drain and chop artichoke hearts.",
      "In a bowl, mix softened cream cheese, sour cream, and mayonnaise until smooth.",
      "Stir in both cheeses, minced garlic, spinach, artichokes, and red pepper flakes.",
      "Transfer to a baking dish and spread evenly.",
      "Bake for 20-25 minutes until bubbly and golden on top.",
      "Serve hot with tortilla chips, pita chips, or sliced baguette for dipping.",
    ],
  },
  {
    id: 507,
    category: "bar",
    title: "BBQ",
    subtitle: "Chicken Wings",
    rating: 4.8,
    cookTime: "50 min",
    servings: 4,
    image:
      "https://images.unsplash.com/photo-1587255613854-1701c3994a65?q=80&w=2122&auto=format&fit=crop",
    isPopular: true,
    images: [
      "https://images.unsplash.com/photo-1587255613854-1701c3994a65?q=80&w=2122&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625938145744-e380515399de?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Tender chicken wings tossed in sweet and smoky BBQ sauce, perfect for sharing.",
    ingredients: [
      "Chicken wings",
      "BBQ sauce",
      "Brown sugar",
      "Garlic powder",
      "Smoked paprika",
      "Cayenne pepper",
      "Salt",
      "Black pepper",
      "Vegetable oil",
      "Ranch or blue cheese dressing",
    ],
    instructions: [
      "Preheat oven to 400°F and line a baking sheet with foil.",
      "Pat wings dry and toss with oil, salt, pepper, garlic powder, and paprika.",
      "Arrange wings on baking sheet and bake for 45-50 minutes, flipping halfway, until crispy and cooked through.",
      "In a small saucepan, combine BBQ sauce, brown sugar, and a dash of cayenne pepper.",
      "Heat sauce until warm and sugar dissolves.",
      "Transfer hot wings to a large bowl and pour sauce over them.",
      "Toss until well coated and serve with ranch or blue cheese dressing and celery sticks.",
    ],
  },
  {
    id: 508,
    category: "bar",
    title: "Pretzel Bites",
    subtitle: "with Beer Cheese",
    rating: 4.6,
    cookTime: "45 min",
    servings: 8,
    image:
      "https://images.unsplash.com/photo-1566217708747-c2653d0898a9?q=80&w=2070&auto=format&fit=crop",
    isPopular: false,
    images: [
      "https://images.unsplash.com/photo-1566217708747-c2653d0898a9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518133083792-40b631101435?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Soft, chewy pretzel bites served with creamy beer cheese dip.",
    ingredients: [
      "All-purpose flour",
      "Active dry yeast",
      "Brown sugar",
      "Salt",
      "Baking soda",
      "Butter",
      "Coarse salt",
      "Cheddar cheese",
      "Beer",
      "Mustard",
    ],
    instructions: [
      "Mix flour, yeast, brown sugar, and salt. Add warm water and knead until smooth.",
      "Let dough rise until doubled in size, about 1 hour.",
      "Divide dough and roll into ropes, then cut into 1-inch bites.",
      "Boil water with baking soda. Drop pretzel bites in for 30 seconds, then transfer to baking sheet.",
      "Brush with melted butter and sprinkle with coarse salt.",
      "Bake at 425°F for 12-15 minutes until golden brown.",
      "For beer cheese: melt butter, add flour to make a roux, then gradually add beer and milk.",
      "Stir in shredded cheese, mustard, and seasonings until smooth.",
      "Serve pretzel bites warm with beer cheese dip.",
    ],
  },
  {
    id: 509,
    category: "bar",
    title: "Sliders",
    subtitle: "Trio",
    rating: 4.8,
    cookTime: "40 min",
    servings: 6,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop",
    isPopular: false,
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop",
    ],
    description:
      "A variety of mini burgers featuring classic beef, BBQ pulled pork, and buffalo chicken.",
    ingredients: [
      "Slider buns",
      "Ground beef",
      "Pulled pork",
      "Chicken",
      "BBQ sauce",
      "Buffalo sauce",
      "Cheese slices",
      "Lettuce",
      "Tomato",
      "Pickle chips",
    ],
    instructions: [
      "For beef sliders: Season ground beef with salt and pepper, form small patties, and cook to desired doneness. Top with cheese during last minute of cooking.",
      "For pulled pork sliders: Mix pre-cooked pulled pork with BBQ sauce and warm through.",
      "For buffalo chicken sliders: Toss shredded cooked chicken with buffalo sauce and warm through.",
      "Toast slider buns lightly.",
      "Assemble beef sliders with classic burger toppings.",
      "Assemble pulled pork sliders with coleslaw.",
      "Assemble buffalo chicken sliders with blue cheese or ranch and lettuce.",
      "Serve warm with sides of fries and extra sauce.",
    ],
  },
];

export default barRecipes;
