function Services() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
              <p>Transform your business with cutting-edge cloud technologies.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">DevSecOps</h3>
              <p>Ensure secure and scalable software development through automation.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
              <p>Protect your data and infrastructure with advanced security measures.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  