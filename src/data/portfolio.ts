// Portfolio Project Data
export interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'hospitality';
  location: string;
  year: string;
  image: string;
  images: string[];
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  // Hospitality Projects
  {
    id: 1,
    title: 'Taranovas Pizza',
    category: 'hospitality',
    location: 'Mumbai, India',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d',
      'https://images.unsplash.com/photo-1525610553991-2bede1a236e2',
      'https://images.unsplash.com/photo-1544148103-0773bf10d330',
    ],
    description:
      'Modern Italian pizzeria with a warm, inviting atmosphere and authentic design elements.',
    challenge:
      'Create a contemporary dining space that balances authentic Italian aesthetics with modern comfort.',
    solution:
      'Implemented an open kitchen concept with rustic elements, custom lighting, and comfortable seating zones.',
    features: [
      'Open-concept pizza kitchen',
      'Custom wood-fired oven display',
      'Intimate booth seating',
      'Rustic brick wall features',
      'Ambient lighting design',
    ],
    testimonial: {
      text: 'The design perfectly captures the essence of Italian dining while maintaining a modern appeal.',
      author: "Taranova's Management",
      position: 'Restaurant Owner',
    },
  },
  {
    id: 2,
    title: 'Big Scoop Cafe',
    category: 'hospitality',
    location: 'Mumbai, India',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
      'https://images.unsplash.com/photo-1600093463592-2e8d28d7f1f6',
      'https://images.unsplash.com/photo-1600456899121-68eda5705257',
      'https://images.unsplash.com/photo-1600456898730-0345ab3cfc45',
      'https://images.unsplash.com/photo-1600456899666-3e1d8f54f854',
    ],
    description:
      'A vibrant cafe design that combines comfort with Instagram-worthy aesthetics.',
    challenge:
      'Design an inviting space that appeals to both casual visitors and social media enthusiasts.',
    solution:
      'Created distinct zones with unique design elements, including a feature wall and custom seating areas.',
    features: [
      'Instagram-worthy feature wall',
      'Custom banquette seating',
      'Artisanal coffee bar',
      'Designer lighting fixtures',
      'Indoor plants and greenery',
    ],
    testimonial: {
      text: 'Our cafe has become a local hotspot thanks to the incredible design.',
      author: 'Big Scoop Team',
      position: 'Cafe Management',
    },
  },
  {
    id: 3,
    title: 'House of Gujju',
    category: 'hospitality',
    location: 'Mumbai, India',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d',
      'https://images.unsplash.com/photo-1525610553991-2bede1a236e2',
      'https://images.unsplash.com/photo-1544148103-0773bf10d330',
    ],
    description:
      'Traditional Gujarati restaurant with modern touches and authentic ambiance.',
    challenge:
      'Blend traditional Gujarati elements with contemporary design for a unique dining experience.',
    solution:
      'Incorporated traditional art forms and modern amenities while maintaining authenticity.',
    features: [
      'Traditional seating area',
      'Modern buffet setup',
      'Custom wall murals',
      'Traditional artifacts display',
      'Contemporary lighting',
    ],
    testimonial: {
      text: 'The perfect blend of tradition and modernity that our customers love.',
      author: 'House of Gujju Management',
      position: 'Restaurant Owner',
    },
  },
  {
    id: 4,
    title: "Martino'z Pizza",
    category: 'hospitality',
    location: 'Mumbai, India',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d',
    images: [
      'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d',
      'https://images.unsplash.com/photo-1525610553991-2bede1a236e2',
      'https://images.unsplash.com/photo-1544148103-0773bf10d330',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    ],
    description:
      'Contemporary pizzeria with an industrial-chic design aesthetic.',
    challenge:
      'Create a modern dining space that combines efficiency with style.',
    solution:
      'Designed an open layout with industrial elements and comfortable seating arrangements.',
    features: [
      'Industrial-style lighting',
      'Open kitchen concept',
      'Custom pizza counter',
      'Comfortable booth seating',
      'Modern ventilation system',
    ],
    testimonial: {
      text: 'The design has helped us create an unforgettable dining experience.',
      author: "Martino'z Team",
      position: 'Owner',
    },
  },

  // Residential Projects
  {
    id: 5,
    title: '6 BHK Bungalow',
    category: 'residential',
    location: 'Mumbai, India',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b',
      'https://images.unsplash.com/photo-1600607687666-146f0e44f500',
      'https://images.unsplash.com/photo-1600607687710-4bfa9f6f9155',
    ],
    description:
      'Luxurious 6 BHK bungalow combining modern aesthetics with comfortable living.',
    challenge:
      'Design a spacious family home that maintains privacy while promoting family interaction.',
    solution:
      'Created distinct private and communal spaces with high-end finishes and smart home integration.',
    features: [
      'Smart home automation',
      'Private garden and pool',
      'Home theater room',
      'Gourmet kitchen',
      'Master suite with walk-in closet',
    ],
    testimonial: {
      text: 'Our dream home became reality with this exceptional design.',
      author: 'The Shah Family',
      position: 'Homeowners',
    },
  },
  {
    id: 6,
    title: 'Luxurious Apartment',
    category: 'residential',
    location: 'Mumbai, India',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b',
      'https://images.unsplash.com/photo-1600607687666-146f0e44f500',
      'https://images.unsplash.com/photo-1600607687710-4bfa9f6f9155',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    ],
    description:
      'High-end apartment with panoramic city views and modern amenities.',
    challenge: 'Maximize space while maintaining luxury in an urban setting.',
    solution:
      'Implemented smart storage solutions and multi-functional spaces with premium finishes.',
    features: [
      'Floor-to-ceiling windows',
      'Custom storage solutions',
      'Modern kitchen design',
      'Home office space',
      'Smart lighting system',
    ],
    testimonial: {
      text: 'The perfect blend of luxury and functionality in our urban home.',
      author: 'Mr. & Mrs. Patel',
      position: 'Residents',
    },
  },

  // Commercial Projects
  {
    id: 7,
    title: 'Office 1',
    category: 'commercial',
    location: 'Mumbai, India',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa',
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
    ],
    description:
      'Modern office space designed for productivity and collaboration.',
    challenge:
      'Create a flexible workspace that promotes both focus and teamwork.',
    solution:
      'Designed adaptable spaces with various work zones and meeting areas.',
    features: [
      'Open plan workspace',
      'Private meeting rooms',
      'Collaborative areas',
      'Break-out spaces',
      'Modern amenities',
    ],
    testimonial: {
      text: "The office design has significantly improved our team's productivity.",
      author: 'Corporate Solutions Inc.',
      position: 'CEO',
    },
  },
  {
    id: 8,
    title: 'Office 2',
    category: 'commercial',
    location: 'Mumbai, India',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa',
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
    ],
    description: 'Tech-forward office space with innovative design solutions.',
    challenge:
      'Design a modern workspace that supports technological integration.',
    solution: 'Implemented smart office solutions with flexible workstations.',
    features: [
      'Smart meeting rooms',
      'Ergonomic workstations',
      'Tech hub',
      'Relaxation areas',
      'Modern cafeteria',
    ],
    testimonial: {
      text: 'A perfect balance of technology and comfort in our workspace.',
      author: 'Tech Innovations Ltd.',
      position: 'Director',
    },
  },
  {
    id: 9,
    title: 'Office 3',
    category: 'commercial',
    location: 'Mumbai, India',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa',
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
    ],
    description:
      'Creative office space designed for innovation and collaboration.',
    challenge:
      'Create an inspiring environment that fosters creativity and teamwork.',
    solution:
      'Designed dynamic spaces with artistic elements and collaborative zones.',
    features: [
      'Creative studios',
      'Brainstorming rooms',
      'Art installations',
      'Collaborative spaces',
      'Recreation area',
    ],
    testimonial: {
      text: "Our team's creativity has flourished in this inspiring space.",
      author: 'Creative Studios',
      position: 'Creative Director',
    },
  },
  {
    id: 10,
    title: 'Office 4',
    category: 'commercial',
    location: 'Mumbai, India',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa',
    images: [
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
    ],
    description: 'Executive office space with premium amenities and design.',
    challenge:
      'Create a prestigious office environment that reflects corporate success.',
    solution: 'Implemented luxury finishes with state-of-the-art facilities.',
    features: [
      'Executive suites',
      'Conference center',
      'Business lounge',
      'VIP meeting rooms',
      'Premium amenities',
    ],
    testimonial: {
      text: 'The perfect representation of our corporate values and success.',
      author: 'Executive Group',
      position: 'Managing Director',
    },
  },
  {
    id: 11,
    title: 'Office 5',
    category: 'commercial',
    location: 'Mumbai, India',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
    ],
    description: 'Sustainable office design with eco-friendly solutions.',
    challenge:
      'Create an environmentally conscious workspace without compromising on functionality.',
    solution:
      'Implemented green building practices with sustainable materials and energy-efficient systems.',
    features: [
      'Green walls',
      'Energy-efficient lighting',
      'Recycled materials',
      'Natural ventilation',
      'Water conservation systems',
    ],
    testimonial: {
      text: 'A perfect example of sustainable design meeting corporate needs.',
      author: 'Green Solutions',
      position: 'Sustainability Director',
    },
  },
  {
    id: 12,
    title: 'Office 6',
    category: 'commercial',
    location: 'Mumbai, India',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
    ],
    description: 'Sustainable office design with eco-friendly solutions.',
    challenge:
      'Create an environmentally conscious workspace without compromising on functionality.',
    solution:
      'Implemented green building practices with sustainable materials and energy-efficient systems.',
    features: [
      'Green walls',
      'Energy-efficient lighting',
      'Recycled materials',
      'Natural ventilation',
      'Water conservation systems',
    ],
    testimonial: {
      text: 'A perfect example of sustainable design meeting corporate needs.',
      author: 'Green Solutions',
      position: 'Sustainability Director',
    },
  },
];
