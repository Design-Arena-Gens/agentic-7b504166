import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: 'The Future of AI in Education: Trends for 2025',
      excerpt: 'Explore how artificial intelligence is revolutionizing online learning and what it means for students and educators.',
      author: 'Dr. Alex Thompson',
      date: '2025-11-01',
      category: 'AI & Technology',
      slug: 'future-of-ai-education'
    },
    {
      title: '10 Essential Skills Every Web Developer Needs',
      excerpt: 'From frontend to backend, discover the must-have skills for modern web development success.',
      author: 'Jessica Park',
      date: '2025-10-28',
      category: 'Web Development',
      slug: 'essential-web-dev-skills'
    },
    {
      title: 'Data Science Career Guide: From Beginner to Professional',
      excerpt: 'A comprehensive roadmap to building a successful career in data science and analytics.',
      author: 'David Kumar',
      date: '2025-10-25',
      category: 'Data Science',
      slug: 'data-science-career-guide'
    },
    {
      title: 'Machine Learning Best Practices for Production',
      excerpt: 'Learn how to deploy and maintain machine learning models in real-world production environments.',
      author: 'Dr. Alex Thompson',
      date: '2025-10-20',
      category: 'AI & Technology',
      slug: 'ml-production-practices'
    },
    {
      title: 'Building Responsive Websites: A Complete Guide',
      excerpt: 'Master the art of creating beautiful, responsive websites that work seamlessly across all devices.',
      author: 'Jessica Park',
      date: '2025-10-15',
      category: 'Web Development',
      slug: 'responsive-web-design'
    },
    {
      title: 'Understanding Neural Networks: A Beginner\'s Guide',
      excerpt: 'Demystify neural networks with this comprehensive introduction to deep learning fundamentals.',
      author: 'Dr. Alex Thompson',
      date: '2025-10-10',
      category: 'AI & Technology',
      slug: 'neural-networks-guide'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Web Development', 'Data Science', 'Career Advice'];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl font-bold mb-6">Danyar Academy Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and tips in technology, AI, and online learning
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white hover:bg-blue-600 hover:text-white border border-gray-200 font-semibold transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-48 flex items-center justify-center text-white text-6xl">
                  📝
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{post.category}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                  >
                    Read More <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles, course updates, and tech insights delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
