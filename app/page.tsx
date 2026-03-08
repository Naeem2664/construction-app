
import { Building, Hammer, Wrench, Phone, Mail, MapPin, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-light text-secondary">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="content">
            <h1 className="logo">ConstructCo</h1>
            <nav className="nav-menu">
              <a href="#services" className="nav-item">Services</a>
              <a href="#about" className="nav-item">About Us</a>
              <a href="#projects" className="nav-item">Projects</a>
              <a href="#contact" className="nav-item">Contact</a>
            </nav>
            <button className="menu-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero-section">
          <div className="content">
            <h2 className="title">Building Your Future</h2>
            <p className="subtitle">High-quality construction services for commercial and residential projects.</p>
            <a href="#contact" className="cta-button">
              Get a Free Quote
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section bg-white text-secondary">
          <div className="container text-center">
            <h3 className="section-title">Our Services</h3>
            <p className="section-subtitle">We offer a wide range of construction services.</p>
            <div className="services-grid">
              <div className="service-card">
                <div className="icon-wrapper">
                  <div className="icon">
                    <Building size={32} />
                  </div>
                </div>
                <h4 className="title">General Contracting</h4>
                <p>Comprehensive management of your construction project from start to finish.</p>
              </div>
              <div className="service-card">
                <div className="icon-wrapper">
                  <div className="icon">
                    <Hammer size={32} />
                  </div>
                </div>
                <h4 className="title">Design-Build</h4>
                <p>A streamlined process that combines design and construction into a single contract.</p>
              </div>
              <div className="service-card">
                <div className="icon-wrapper">
                  <div className="icon">
                    <Wrench size={32} />
                  </div>
                </div>
                <h4 className="title">Remodeling</h4>
                <p>Transform your existing space with our expert renovation and remodeling services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="section bg-light text-secondary">
          <div className="container">
            <div className="about-content">
              <div className="about-image-wrapper">
                <img src="https://placehold.co/600x400/cccccc/666666" alt="About Us" className="about-image" />
              </div>
              <div className="about-text">
                <h3 className="section-title">About ConstructCo</h3>
                <p>
                  With over 20 years of experience in the construction industry, ConstructCo has built a reputation for
                  excellence, integrity, and reliability. Our mission is to deliver high-quality, cost-effective projects
                  on schedule by employing and supporting motivated, flexible, and focused teams.
                </p>
                <p>
                  We value the importance of our relationships and will continue to remain fair and true in our dealings
                  with all employees, clients, vendors, and partners.
                </p>
              </div>
            </div>

            <div className="team-section">
              <h3 className="section-title text-center">Meet Our Team</h3>
              <div className="team-grid">
                <div className="team-card">
                  <img src="https://placehold.co/300x300/e2e8f0/4a5568" alt="Haji Muhammad" className="team-avatar" />
                  <h4 className="team-name">Haji Muhammad</h4>
                  <p className="team-title">President</p>
                </div>
                <div className="team-card">
                  <img src="https://placehold.co/300x300/e2e8f0/4a5568" alt="Abdul Sattar Chandia" className="team-avatar" />
                  <h4 className="team-name">Abdul Sattar Chandia</h4>
                  <p className="team-title">Vice President</p>
                  <p className="team-contact">03406016312</p>
                </div>
                <div className="team-card">
                  <img src="https://placehold.co/300x300/e2e8f0/4a5568" alt="Saad Hassn Chandia" className="team-avatar" />
                  <h4 className="team-name">Saad Hassn Chandia</h4>
                  <p className="team-title">Legal Advisor</p>
                  <p className="team-contact">03497003264</p>
                </div>
              </div>
            </div>

            <div className="vision-section">
              <h3 className="section-title text-center">Vision of the Owners</h3>
              <p className="vision-text">
                Our vision is to be a leading construction company known for our commitment to quality, innovation, and customer satisfaction. We strive to create a positive impact on the communities we serve by building with integrity and excellence. We believe in fostering a culture of collaboration and respect, where our team members can grow and thrive. Together, we are building a legacy of trust and quality that will last for generations.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section bg-white text-secondary">
          <div className="container">
            <h3 className="section-title text-center">Our Projects</h3>
            <div className="projects-grid">
              <div className="project-card">
                <img src="https://placehold.co/600x400/a0aec0/ffffff" alt="Project 1" />
                <div className="overlay">
                  <p className="overlay-text">Commercial Building</p>
                </div>
              </div>
              <div className="project-card">
                <img src="https://placehold.co/600x400/a0aec0/ffffff" alt="Project 2" />
                <div className="overlay">
                  <p className="overlay-text">Residential Home</p>
                </div>
              </div>
              <div className="project-card">
                <img src="https://placehold.co/600x400/a0aec0/ffffff" alt="Project 3" />
                <div className="overlay">
                  <p className="overlay-text">Office Renovation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-light text-secondary">
          <div className="container text-center">
            <h3 className="section-title">What Our Clients Say</h3>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="client-info">
                  <img src="https://placehold.co/100x100/e2e8f0/4a5568" alt="Client 1" className="client-avatar" />
                  <div>
                    <h4 className="client-name">John Doe</h4>
                    <div className="stars">
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <p>"ConstructCo delivered our project on time and on budget. Their team was professional and easy to work with."</p>
              </div>
              <div className="testimonial-card">
                <div className="client-info">
                  <img src="https://placehold.co/100x100/e2e8f0/4a5568" alt="Client 2" className="client-avatar" />
                  <div>
                    <h4 className="client-name">Jane Smith</h4>
                    <div className="stars">
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <p>"We were impressed with the quality of work and attention to detail. Highly recommend ConstructCo."</p>
              </div>
              <div className="testimonial-card">
                <div className="client-info">
                  <img src="https://placehold.co/100x100/e2e8f0/4a5568" alt="Client 3" className="client-avatar" />
                  <div>
                    <h4 className="client-name">Mike Johnson</h4>
                    <div className="stars">
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <p>"The best construction company we've ever worked with. Their commitment to quality is unmatched."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <h3 className="section-title text-center">Contact Us</h3>
            <div className="contact-content">
              <div className="contact-form-wrapper">
                <form className="contact-form">
                  <h4 className="form-title">Send us a message</h4>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={4}></textarea>
                  </div>
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="contact-info-wrapper">
                <div className="contact-item">
                  <Mail size={24} className="icon" />
                  <span>abdulghaffar3230@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={24} className="icon" />
                  <span>+92 340 7001729</span>
                </div>
                <div className="contact-item">
                  <MapPin size={24} className="icon" />
                  <span>Kot Addu, Punjab, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} ConstructCo. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
