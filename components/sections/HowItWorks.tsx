import { MessageCircle, Search, Calendar } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Describe',
      description: 'Tell us about your perfect stay using natural language. Be as specific or general as you like.'
    },
    {
      icon: Search,
      title: 'Discover',
      description: 'Our AI analyzes your preferences and finds the best matching properties from trusted platforms.'
    },
    {
      icon: Calendar,
      title: 'Book',
      description: 'Choose from curated options and book directly through our integrated booking partners.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Finding your perfect stay has never been easier. Just three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200" />
                )}
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}