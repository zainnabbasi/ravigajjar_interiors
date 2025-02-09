import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "The Art of Mixing Modern and Traditional Elements",
    category: "Design Tips",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    excerpt: "Discover how to create a harmonious blend of contemporary and classic design elements in your space."
  },
  {
    id: 2,
    title: "Sustainable Interior Design: A Guide to Eco-Friendly Spaces",
    category: "Trends",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    excerpt: "Learn about sustainable materials and practices that can make your interior design environmentally conscious."
  },
  {
    id: 3,
    title: "Maximizing Small Spaces: Design Strategies That Work",
    category: "Tips & Tricks",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    excerpt: "Expert tips on making the most of compact spaces without compromising on style or functionality."
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-secondary" />
            <span className="text-sm tracking-widest uppercase text-gray-500">Our Blog</span>
            <div className="h-[1px] w-12 bg-secondary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">
            Design Insights & Inspiration
          </h2>
          <p className="text-gray-600">
            Explore our collection of articles featuring the latest design trends, expert tips, 
            and behind-the-scenes insights into our creative process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <button className="flex items-center space-x-2 text-primary group/btn">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;