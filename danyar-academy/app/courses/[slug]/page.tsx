import Link from 'next/link';
import { ArrowLeft, Clock, Users, Award, Star, CheckCircle, PlayCircle, FileText, Download } from 'lucide-react';

export default function CoursePage({ params }: { params: { slug: string } }) {
  // Mock course data - in a real app, this would come from a database
  const courseData: Record<string, any> = {
    'ai-ml-bootcamp': {
      title: 'Complete AI & Machine Learning Bootcamp',
      category: 'Artificial Intelligence',
      price: 199,
      rating: 4.9,
      students: 12500,
      duration: '12 weeks',
      instructor: {
        name: 'Dr. Alex Thompson',
        title: 'PhD MIT, Former Google AI Research',
        courses: 15,
        students: 45000,
      },
      description: 'Master the fundamentals and advanced concepts of Artificial Intelligence and Machine Learning. This comprehensive bootcamp covers everything from basic algorithms to deep learning and neural networks.',
      learningOutcomes: [
        'Understand core AI and ML concepts and algorithms',
        'Build and train neural networks from scratch',
        'Implement supervised and unsupervised learning models',
        'Work with real-world datasets and problems',
        'Deploy ML models to production environments',
        'Master popular frameworks like TensorFlow and PyTorch',
      ],
      curriculum: [
        {
          title: 'Introduction to AI & ML',
          lessons: 8,
          duration: '2 hours',
          topics: ['AI Overview', 'ML Fundamentals', 'Python Setup', 'Data Preprocessing']
        },
        {
          title: 'Supervised Learning',
          lessons: 12,
          duration: '4 hours',
          topics: ['Linear Regression', 'Logistic Regression', 'Decision Trees', 'SVM']
        },
        {
          title: 'Unsupervised Learning',
          lessons: 10,
          duration: '3.5 hours',
          topics: ['K-Means Clustering', 'Hierarchical Clustering', 'PCA', 'Dimensionality Reduction']
        },
        {
          title: 'Neural Networks',
          lessons: 15,
          duration: '5 hours',
          topics: ['Perceptrons', 'Backpropagation', 'CNNs', 'RNNs']
        },
        {
          title: 'Deep Learning',
          lessons: 18,
          duration: '6 hours',
          topics: ['Advanced CNNs', 'LSTMs', 'GANs', 'Transfer Learning']
        },
        {
          title: 'ML in Production',
          lessons: 10,
          duration: '3 hours',
          topics: ['Model Deployment', 'APIs', 'Monitoring', 'Optimization']
        },
      ],
      reviews: [
        {
          name: 'John Davis',
          rating: 5,
          comment: 'Best AI course I have ever taken! The instructor explains complex concepts in a very understandable way.',
          date: '2 weeks ago'
        },
        {
          name: 'Maria Garcia',
          rating: 5,
          comment: 'Excellent content and practical projects. I got a job as an ML engineer after completing this course!',
          date: '1 month ago'
        },
        {
          name: 'Ahmed Hassan',
          rating: 4,
          comment: 'Very comprehensive course. Would recommend to anyone serious about AI and ML.',
          date: '1 month ago'
        },
      ]
    },
    'fullstack-mastery': {
      title: 'Full-Stack Web Development Mastery',
      category: 'Web Development',
      price: 179,
      rating: 4.8,
      students: 18200,
      duration: '10 weeks',
      instructor: {
        name: 'Jessica Park',
        title: 'Senior Engineer at Meta, 12+ years',
        courses: 22,
        students: 67000,
      },
      description: 'Become a complete full-stack web developer by mastering frontend and backend technologies. Build modern, responsive web applications using React, Node.js, and industry best practices.',
      learningOutcomes: [
        'Build responsive frontends with React and Next.js',
        'Create robust backends with Node.js and Express',
        'Master database design with SQL and NoSQL',
        'Implement authentication and authorization',
        'Deploy applications to production',
        'Follow industry best practices and patterns',
      ],
      curriculum: [
        {
          title: 'Frontend Fundamentals',
          lessons: 15,
          duration: '5 hours',
          topics: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design']
        },
        {
          title: 'React & Modern Frontend',
          lessons: 20,
          duration: '7 hours',
          topics: ['React Basics', 'Hooks', 'State Management', 'Next.js']
        },
        {
          title: 'Backend Development',
          lessons: 18,
          duration: '6 hours',
          topics: ['Node.js', 'Express', 'REST APIs', 'Authentication']
        },
        {
          title: 'Databases',
          lessons: 12,
          duration: '4 hours',
          topics: ['SQL', 'PostgreSQL', 'MongoDB', 'ORMs']
        },
        {
          title: 'Full-Stack Integration',
          lessons: 16,
          duration: '5.5 hours',
          topics: ['API Integration', 'Real-time Features', 'File Upload', 'Payment Integration']
        },
        {
          title: 'Deployment & DevOps',
          lessons: 10,
          duration: '3.5 hours',
          topics: ['Git', 'CI/CD', 'Docker', 'Cloud Deployment']
        },
      ],
      reviews: [
        {
          name: 'Tom Wilson',
          rating: 5,
          comment: 'Amazing course! I went from knowing basic HTML to building full production apps.',
          date: '1 week ago'
        },
        {
          name: 'Lisa Chen',
          rating: 5,
          comment: 'Jessica is an incredible instructor. The projects are very practical and relevant.',
          date: '3 weeks ago'
        },
        {
          name: 'Carlos Rodriguez',
          rating: 4,
          comment: 'Great course content. Helped me transition from backend to full-stack development.',
          date: '2 months ago'
        },
      ]
    },
    'data-science-python': {
      title: 'Data Science with Python',
      category: 'Data Science',
      price: 159,
      rating: 4.9,
      students: 9800,
      duration: '8 weeks',
      instructor: {
        name: 'David Kumar',
        title: 'Data Science Lead at Amazon',
        courses: 18,
        students: 38000,
      },
      description: 'Master data science fundamentals and advanced techniques using Python. Learn to analyze data, create visualizations, and build predictive models.',
      learningOutcomes: [
        'Master Python for data analysis',
        'Perform statistical analysis',
        'Create compelling data visualizations',
        'Build predictive models',
        'Work with big data tools',
        'Communicate insights effectively',
      ],
      curriculum: [
        {
          title: 'Python for Data Science',
          lessons: 10,
          duration: '3.5 hours',
          topics: ['NumPy', 'Pandas', 'Data Manipulation', 'Data Cleaning']
        },
        {
          title: 'Data Visualization',
          lessons: 12,
          duration: '4 hours',
          topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Dashboard Creation']
        },
        {
          title: 'Statistical Analysis',
          lessons: 14,
          duration: '4.5 hours',
          topics: ['Descriptive Statistics', 'Inferential Statistics', 'Hypothesis Testing', 'A/B Testing']
        },
        {
          title: 'Machine Learning for Data Science',
          lessons: 16,
          duration: '5 hours',
          topics: ['Regression', 'Classification', 'Clustering', 'Model Evaluation']
        },
        {
          title: 'Advanced Topics',
          lessons: 12,
          duration: '4 hours',
          topics: ['Time Series', 'NLP', 'Recommendation Systems', 'Big Data Tools']
        },
        {
          title: 'Real-World Projects',
          lessons: 8,
          duration: '3 hours',
          topics: ['Business Analytics', 'Customer Segmentation', 'Predictive Modeling', 'Portfolio Project']
        },
      ],
      reviews: [
        {
          name: 'Sarah Miller',
          rating: 5,
          comment: 'This course gave me the confidence to pursue a career in data science. Excellent!',
          date: '2 weeks ago'
        },
        {
          name: 'James Park',
          rating: 5,
          comment: 'David is a great teacher. The projects were challenging but very rewarding.',
          date: '1 month ago'
        },
        {
          name: 'Nina Patel',
          rating: 5,
          comment: 'Best data science course available. Comprehensive and practical.',
          date: '2 months ago'
        },
      ]
    }
  };

  const course = courseData[params.slug] || courseData['ai-ml-bootcamp'];

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Course Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-4">
            <span className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold">
              {course.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl">{course.description}</p>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-400 fill-yellow-400" />
              <span className="font-bold">{course.rating}</span>
              <span className="text-blue-100">({course.students.toLocaleString()} students)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} />
              <span>Certificate of Completion</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-4xl font-bold">${course.price}</div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors">
              Enroll Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Preview Course
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Learn */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You&apos;ll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Curriculum */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((section: any, idx: number) => (
                  <details key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <summary className="cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{section.lessons} lessons</span>
                            <span>{section.duration}</span>
                          </div>
                        </div>
                      </div>
                    </summary>
                    <div className="px-6 pb-6 border-t bg-gray-50">
                      <ul className="space-y-3 mt-4">
                        {section.topics.map((topic: string, topicIdx: number) => (
                          <li key={topicIdx} className="flex items-center gap-3">
                            <PlayCircle size={18} className="text-blue-600" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Student Reviews */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Reviews</h2>
              <div className="space-y-6">
                {course.reviews.map((review: any, idx: number) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Instructor Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Instructor</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {course.instructor.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{course.instructor.name}</div>
                    <div className="text-sm text-gray-600">{course.instructor.title}</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{course.instructor.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText size={16} />
                    <span>{course.instructor.courses} courses</span>
                  </div>
                </div>
              </div>

              {/* Course Features */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">This course includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <PlayCircle size={18} className="text-blue-600" />
                    <span>60+ hours of video content</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FileText size={18} className="text-blue-600" />
                    <span>Downloadable resources</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Download size={18} className="text-blue-600" />
                    <span>Source code access</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Award size={18} className="text-blue-600" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Users size={18} className="text-blue-600" />
                    <span>Lifetime access</span>
                  </li>
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
                <p className="text-green-100 mb-4">Join thousands of students learning today</p>
                <button className="w-full bg-white text-green-700 hover:bg-gray-100 py-3 rounded-lg font-bold transition-colors">
                  Enroll for ${course.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
