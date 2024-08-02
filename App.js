import React, { useState } from 'react';

const features = [
  {
    title: "Clean Code",
    description: "Description for feature one. There are many variations of passages of Lorem Ipsum.",
    icon: "🔥"
  },
  {
    title: "Object Oriented",
    description: "Description for feature two. There are many variations of passages of Lorem Ipsum.",
    icon: "⚡"
  },
  {
    title: "24h Service",
    description: "Description for feature three. There are many variations of passages of Lorem Ipsum.",
    icon: "💡"
  },
  {
    title: "Value for Money",
    description: "Description for feature four. There are many variations of passages of Lorem Ipsum.",
    icon: "🚀"
  },
  {
    title: "Faster Response",
    description: "Description for feature five. There are many variations of passages of Lorem Ipsum.",
    icon: "🔒"
  },
  {
    title: "Cloud Support",
    description: "Description for feature six. There are many variations of passages of Lorem Ipsum.",
    icon: "🎨"
  }
];

const App = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const linkClasses = (link) =>
    activeLink === link
      ? 'text-blue-500 border-b-2 border-blue-500'
      : 'text-gray-600 hover:text-gray-900';

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <header className="flex justify-between items-center py-6">
        <div className="flex items-center">
          <img src="/img/logo.png" alt="Logo" className="h-20 w-30" />
        </div>
        <nav className="flex space-x-4">
          <a
            href="#"
            className={`transition duration-300 ${linkClasses('home')}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a
            href="#"
            className={`transition duration-300 ${linkClasses('blog')}`}
            onClick={() => handleLinkClick('blog')}
          >
            Blog
          </a>
          <a
            href="#"
            className={`transition duration-300 ${linkClasses('pricing')}`}
            onClick={() => handleLinkClick('pricing')}
          >
            Pricing
          </a>
          <a
            href="#"
            className={`transition duration-300 ${linkClasses('contact')}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
          <a
            href="#"
            className={`transition duration-300 ${linkClasses('faq')}`}
            onClick={() => handleLinkClick('faq')}
          >
            FAQ
          </a>
        </nav>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Get Started
        </button>
      </header>

      {/* Main Content */}
      <main>
        {/* Heading and Paragraph */}
        <section className="text-center my-10 px-4">
          <h1 className="text-4xl font-bold mb-4 mx-auto max-w-3xl">
            Let us solve your critical website development challenges
          </h1>
          <p className="text-lg mb-6 mx-auto max-w-2xl">
            Discover what makes our product unique and effective. There are many variations of passages of Lorem Ipsum available.
          </p>
        </section>

        {/* Image */}
        <div className="text-center mb-10">
          <img src="/img/download.jpg" alt="Feature Illustration" className="mx-auto" />
        </div>

        {/* Features Section */}
        <section className='bg-slate-200 py-12 px-4'>
          <h2 className="text-3xl font-semibold text-center mb-8">Something You Need To Know</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
