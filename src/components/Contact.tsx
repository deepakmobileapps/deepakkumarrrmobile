
import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import Button from './Button';
import { toast } from 'sonner';
import useAnalytics from '../hooks/useAnalytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackEvent } = useAnalytics();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Track form submit attempt
      trackEvent('form_submit_attempt', 'Contact', 'Contact Form');
      
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/mjkybpkb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        // Track successful form submission
        trackEvent('form_submit_success', 'Contact', 'Contact Form');
        
        toast.success('Message sent successfully!', {
          description: 'Thanks for reaching out. I will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      
      // Track form submission error
      trackEvent('form_submit_error', 'Contact', 'Contact Form', 0);
      
      toast.error('Failed to send message', {
        description: 'Please try again later or contact me directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-medium mb-2 block animate-on-scroll">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Contact Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
              Have a project in mind or just want to say hello? Feel free to reach out to me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-none"
                    placeholder="I'd like to discuss a project..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={isSubmitting}
                  icon={isSubmitting ? undefined : <Send size={16} />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8 animate-on-scroll">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
                <p className="text-gray-600 mb-8">
                  Whether you need a new mobile application, want to migrate your existing app to Jetpack Compose, 
                  or are looking to leverage Kotlin Multiplatform for cross-platform development, 
                  I'm here to help turn your vision into reality.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start mb-6">
                  <div className="bg-brand-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <a href="mailto:deepakmobileapps.in@gmail.com" className="text-brand-600 hover:underline">
                      deepakmobileapps.in@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Social Media</h4>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/in/deepak-kumar13/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-600 transition-colors">LinkedIn</a>
                      <a href="https://github.com/deepakmobileapps" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-600 transition-colors">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-brand-600 to-kotlin-purple text-white rounded-xl p-8 shadow-md">
                <h4 className="text-xl font-bold mb-3">Available for Freelance</h4>
                <p className="mb-4 text-white/90">
                  Currently accepting new projects and freelance opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
