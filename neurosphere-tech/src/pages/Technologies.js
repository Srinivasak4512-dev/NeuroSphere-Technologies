function Technologies() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Technologies We Use</h2>
          <p className="text-lg mb-6">We leverage cutting-edge technologies like AWS, Azure, AI, and ML to build the future.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-blue-100 p-6 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">AWS Cloud</h3>
              <p>Leading cloud platform for scalable infrastructure solutions.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Azure Cloud</h3>
              <p>Innovative cloud solutions for enterprises and startups alike.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">AI & ML</h3>
              <p>Advanced AI and machine learning models for smart automation.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Technologies;
  