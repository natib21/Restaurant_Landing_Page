// pages/Contact.jsx
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  return (
    <>
     
      {/* Contact Info & Form Section */}
      <section className=" bg-white">
        <div className="bg-blue-50 max-w-7xl mx-auto ">
          <div className="sm:p-16">
            {/* Contact Form */}
            <div className="bg-white max-w-3xl mx-auto p-8 lg:p-20 ">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 font-display mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-blue-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-blue-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="terms" required className="mt-1" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    By submitting, you agree to our{' '}
                    <Link to="/terms" className="text-blue-600 hover:underline">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-blue-900 px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-800 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

 
    </>
  );
};

export default Contact;