export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'hospitality';
  description: string;
  images: string[];
  challenge: string;
  solution: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'trends' | 'tips' | 'stories';
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}