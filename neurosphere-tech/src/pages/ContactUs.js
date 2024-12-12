function ContactUs() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-6">We’d love to hear from you! Reach out to us for more information or inquiries.</p>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="p-3 w-full border border-gray-300 rounded" />
            <input type="email" placeholder="Your Email" className="p-3 w-full border border-gray-300 rounded" />
            <textarea placeholder="Your Message" className="p-3 w-full border border-gray-300 rounded" rows="4"></textarea>
            <button className="bg-blue-600 py-2 px-6 rounded text-white text-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default ContactUs;
  