import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Brain, Code, Database, Star, Users, Award, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master the Skills of Tomorrow, Today
              </h1>
              <p className="text-xl text-blue-100">
                Danyar Academy empowers learners worldwide with cutting-edge computer skills and AI training.
                Transform your career with expert-led courses designed for real-world success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#courses"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                >
                  Explore Courses <ArrowRight size={20} />
                </Link>
                <Link
                  href="#about"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 rounded-full p-3">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50,000+</div>
                    <div className="text-blue-100">Active Students</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 rounded-full p-3">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-blue-100">Expert Courses</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 rounded-full p-3">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-blue-100">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="courses" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Course Categories</h2>
            <p className="text-xl text-gray-600">Choose from our wide range of technology courses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white">
                <Brain size={48} className="mb-4" />
                <h3 className="text-2xl font-bold">Artificial Intelligence</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Master machine learning, deep learning, natural language processing, and AI applications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="text-sm">Machine Learning Fundamentals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="text-sm">Neural Networks & Deep Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="text-sm">AI Model Deployment</span>
                  </li>
                </ul>
                <Link href="/courses/ai" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                  View Courses <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white">
                <Code size={48} className="mb-4" />
                <h3 className="text-2xl font-bold">Web Development</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Build modern, responsive websites and web applications with cutting-edge technologies.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="text-sm">Frontend Development (React, Vue)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="text-sm">Backend Development (Node.js)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="text-sm">Full-Stack Projects</span>
                  </li>
                </ul>
                <Link href="/courses/web-development" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                  View Courses <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 text-white">
                <Database size={48} className="mb-4" />
                <h3 className="text-2xl font-bold">Data Science</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Analyze data, create insights, and build predictive models using Python and modern tools.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="text-sm">Python for Data Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="text-sm">Statistical Modeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="text-sm">Data Visualization</span>
                  </li>
                </ul>
                <Link href="/courses/data-science" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                  View Courses <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600">Our most popular and highly-rated courses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete AI & Machine Learning Bootcamp",
                category: "Artificial Intelligence",
                price: "$199",
                rating: 4.9,
                students: 12500,
                image: "🤖",
                slug: "ai-ml-bootcamp"
              },
              {
                title: "Full-Stack Web Development Mastery",
                category: "Web Development",
                price: "$179",
                rating: 4.8,
                students: 18200,
                image: "💻",
                slug: "fullstack-mastery"
              },
              {
                title: "Data Science with Python",
                category: "Data Science",
                price: "$159",
                rating: 4.9,
                students: 9800,
                image: "📊",
                slug: "data-science-python"
              },
              {
                title: "Advanced Neural Networks",
                category: "Artificial Intelligence",
                price: "$229",
                rating: 4.7,
                students: 5600,
                image: "🧠",
                slug: "advanced-neural-networks"
              },
              {
                title: "React & Next.js Complete Guide",
                category: "Web Development",
                price: "$149",
                rating: 4.8,
                students: 15400,
                image: "⚛️",
                slug: "react-nextjs-guide"
              },
              {
                title: "Big Data Analytics",
                category: "Data Science",
                price: "$189",
                rating: 4.6,
                students: 7200,
                image: "📈",
                slug: "big-data-analytics"
              }
            ].map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-12 text-center text-6xl">
                  {course.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{course.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div>{course.students.toLocaleString()} students</div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Success stories from our learning community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "AI Engineer at TechCorp",
                content: "Danyar Academy transformed my career! The AI courses were comprehensive and practical. Within 6 months, I landed my dream job.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Full-Stack Developer",
                content: "The instructors are world-class, and the curriculum is always up-to-date. Best investment I've made in my professional development.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Data Scientist",
                content: "The hands-on projects and real-world applications made all the difference. I now work with Fortune 500 companies on data analytics.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Instructors</h2>
            <p className="text-xl text-gray-600">Learn from industry leaders and experienced professionals</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Alex Thompson",
                expertise: "AI & Machine Learning",
                credentials: "PhD MIT, Former Google AI Research",
                courses: 15
              },
              {
                name: "Jessica Park",
                expertise: "Web Development",
                credentials: "Senior Engineer at Meta, 12+ years",
                courses: 22
              },
              {
                name: "David Kumar",
                expertise: "Data Science",
                credentials: "Data Science Lead at Amazon",
                courses: 18
              },
              {
                name: "Rachel Adams",
                expertise: "Cloud Computing",
                credentials: "AWS Certified Solutions Architect",
                courses: 12
              }
            ].map((instructor, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-blue-600">
                    {instructor.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                  <div className="text-blue-600 font-semibold mb-3">{instructor.expertise}</div>
                  <p className="text-sm text-gray-600 mb-4">{instructor.credentials}</p>
                  <div className="text-sm text-gray-500">{instructor.courses} courses taught</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students worldwide and unlock your potential with Danyar Academy
          </p>
          <Link
            href="#courses"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Browse All Courses
          </Link>
        </div>
      </section>
    </main>
  );
}
