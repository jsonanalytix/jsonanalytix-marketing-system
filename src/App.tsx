import React, { useState } from 'react';
import { 
  Globe, 
  Settings, 
  BarChart3, 
  MessageSquare, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Zap,
  Shield,
  Workflow,
  Sparkles,
  ChevronRight
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-gray-800/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <BarChart3 className="w-5 h-5 text-black" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-white">
                JsonAnalytix
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="tel:+1-555-123-4567" className="hidden md:flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 group">
                <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">(555) 123-4567</span>
              </a>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-gray-300">AI-Powered Marketing Systems</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">
                Plug In a Fully-Managed Marketing Engine That Delivers 
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                10+ Qualified Leads Per Week — or You Don't Pay
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              JsonAnalytix gives high-performing businesses a done-for-you system that generates, tracks, and closes 
              leads — all without lifting a finger. From premium landing pages to cross-channel ad management and 
              revenue attribution dashboards, we take care of everything. No leads in your inbox? No charge until there are.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-10 py-5 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <span>Deploy My Marketing Engine</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center space-x-6">
                <a href="tel:+1-555-123-4567" className="group flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-300">
                  <div className="w-14 h-14 bg-gray-900 border border-gray-800 rounded-lg shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:border-cyan-500/50 transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Call us now</div>
                    <div className="font-semibold">(555) 123-4567</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-gray-950/50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-gray-400">Complete Solution</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Everything You Need, Nothing You Don't
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Our complete marketing system includes all the tools and services to turn your business into a lead-generating machine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "AI-Powered Landing Pages",
                description: "Custom-designed, conversion-optimized pages built with cutting-edge AI technology"
              },
              {
                icon: Shield,
                title: "Enterprise Hosting",
                description: "Lightning-fast Cloudflare hosting with 99.9% uptime and global CDN"
              },
              {
                icon: Target,
                title: "Advanced Tracking",
                description: "Complete setup for Google Ads, Meta, TikTok via GTM and GA4 analytics"
              },
              {
                icon: Workflow,
                title: "Smart Automation",
                description: "CRM-integrated forms with intelligent email and SMS nurture sequences"
              },
              {
                icon: TrendingUp,
                title: "Multi-Platform Ads",
                description: "Expert campaign management across all major advertising platforms"
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Custom dashboards powered by Supabase for actionable business insights"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-gray-900/30 border border-gray-800 p-8 rounded-2xl hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-gray-400">Simple Process</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Get your marketing system up and running in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Design & Launch",
                description: "We create your stunning landing page and set up comprehensive tracking across all platforms",
                icon: Zap
              },
              {
                step: "02", 
                title: "Automate",
                description: "We connect intelligent workflows for email, SMS, and follow-ups to nurture every lead automatically",
                icon: Settings
              },
              {
                step: "03",
                title: "Scale & Grow",
                description: "We run optimized ads across platforms and deliver high-intent leads to your business daily",
                icon: TrendingUp
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl shadow-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-gray-400">Flexible Plans</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Choose Your Growth Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Select the perfect package to scale your business and dominate your market
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$997",
                period: "one-time",
                description: "Perfect for new businesses ready to launch",
                features: [
                  "Custom landing page design",
                  "Mobile-responsive layout", 
                  "Conversion tracking setup",
                  "Basic contact form",
                  "Cloudflare hosting (1 year)",
                  "Google Analytics setup"
                ],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Growth",
                price: "$1,997",
                period: "one-time + $297/mo",
                description: "For businesses ready to scale with automation",
                features: [
                  "Everything in Starter",
                  "Email automation workflows",
                  "SMS follow-up sequences",
                  "CRM integration",
                  "Ad campaign launch",
                  "Monthly performance reports",
                  "Priority support"
                ],
                cta: "Start Growing",
                popular: true
              },
              {
                name: "Scale",
                price: "$2,997",
                period: "one-time + $497/mo",
                description: "Complete marketing system for serious growth",
                features: [
                  "Everything in Growth",
                  "Custom analytics dashboard",
                  "Advanced automation flows",
                  "Multi-platform ad management",
                  "Weekly strategy calls",
                  "Dedicated account manager",
                  "White-label reporting"
                ],
                cta: "Scale My Business",
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/50 shadow-2xl shadow-cyan-500/10 scale-105' 
                  : 'bg-gray-900/30 border-gray-800 hover:border-gray-700 hover:bg-gray-900/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {plan.name}
                  </h3>
                  <div className="text-5xl font-bold mb-2 text-white">
                    {plan.price}
                  </div>
                  <div className="text-sm mb-4 text-gray-400">
                    {plan.period}
                  </div>
                  <p className="text-gray-400">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                      <span className="text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:shadow-lg hover:shadow-cyan-500/25' 
                    : 'bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-gray-400">Success Stories</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Real results from real businesses who transformed their marketing with JsonAnalytix
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                company: "Mitchell Law Firm",
                testimonial: "JsonAnalytix transformed our lead generation completely. We went from 2-3 leads per month to 15-20 qualified prospects. The automated follow-up system alone has been worth every penny.",
                rating: 5,
                avatar: "SM"
              },
              {
                name: "Marcus Rodriguez",
                company: "Rodriguez Construction",
                testimonial: "Before JsonAnalytix, I was spending hours trying to figure out Facebook ads with no results. Now I get consistent leads every week while I focus on running my business. Game changer!",
                rating: 5,
                avatar: "MR"
              },
              {
                name: "Jennifer Kim",
                company: "Wellness Studio Pro",
                testimonial: "The custom dashboard shows me exactly which marketing efforts are working. I've doubled my client base in 6 months and finally have a marketing system that runs itself.",
                rating: 5,
                avatar: "JK"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800 p-8 rounded-2xl hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-black font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center text-white mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-gray-400">Ready to Start?</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Get your custom marketing system built and launched in the next 7 days
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-10 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-gray-300 mb-3">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="text-gray-400">Select your business type</option>
                    <option value="legal" className="text-white">Legal Services</option>
                    <option value="healthcare" className="text-white">Healthcare</option>
                    <option value="construction" className="text-white">Construction</option>
                    <option value="consulting" className="text-white">Consulting</option>
                    <option value="retail" className="text-white">Retail</option>
                    <option value="real-estate" className="text-white">Real Estate</option>
                    <option value="other" className="text-white">Other</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black py-5 px-8 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Get My Custom Marketing System</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400 mb-6 font-light">Prefer to talk? Contact us directly:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12">
                <a href="tel:+1-555-123-4567" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 font-semibold transition-colors group">
                  <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>(555) 123-4567</span>
                </a>
                <a href="mailto:hello@jsonanalytix.com" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 font-semibold transition-colors group">
                  <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hello@jsonanalytix.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <BarChart3 className="w-5 h-5 text-black" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">JsonAnalytix</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <div className="text-sm">© 2025 JsonAnalytix. All rights reserved.</div>
              <div className="text-sm mt-1">Built for businesses ready to scale.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;