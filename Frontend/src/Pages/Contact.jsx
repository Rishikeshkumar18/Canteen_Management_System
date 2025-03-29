import React from "react";

const Contact = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 text-gray-800">
      {/* Contact Us Header */}
      <h2 className="text-3xl font-bold text-center mb-3">Contact Us</h2>
      <p className="text-center text-gray-600 mb-12">
        Have questions or feedback? We'd love to hear from you.
      </p>

      {/* Contact Section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Side - Contact Information */}
        <div className="space-y-6">
          
          {/* Our Information */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Our Information</h3>
            <p className="text-gray-600"><strong>Address</strong><br />
              123 Culinary Lane<br />
              Foodville, CA 94043<br />
              United States
            </p>
            <p className="text-gray-600 mt-3"><strong>Hours</strong><br />
              Monday - Friday: 9:00 AM - 10:00 PM <br />
              Saturday & Sunday: 10:00 AM - 11:00 PM
            </p>
            <p className="text-gray-600 mt-3"><strong>Contact</strong><br />
              Phone: (123) 456-7890 <br />
              Email: hello@canteen.com
            </p>
          </div>

          {/* Follow Us */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest menu items, events, and special offers by 
              following us on social media.
            </p>
            <div className="flex space-x-2">
              <button className="border px-4 py-2 rounded">Instagram</button>
              <button className="border px-4 py-2 rounded">Facebook</button>
              <button className="border px-4 py-2 rounded">Twitter</button>
            </div>
          </div>

        </div>

        {/* Right Side - Contact Form */}
        <div className="border p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Full Name</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="Your name" />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input type="email" className="w-full border p-2 rounded" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block font-medium">Subject</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="What is this regarding?" />
            </div>
            <div>
              <label className="block font-medium">Message</label>
              <textarea className="w-full border p-2 rounded h-24" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;