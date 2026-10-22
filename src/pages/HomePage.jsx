import heroGarden from '../assets/hero-garden.webp'

const services = [
  {
    title: 'Psychiatric Evaluation',
    description: 'Understand what you are experiencing and explore a path forward with a detailed psychiatric assessment.',
    details: ['Review of symptoms and personal history', 'Discussion of your needs and treatment goals', 'Diagnostic assessment and recommended next steps'],
  },
  {
    title: 'Medication Management',
    description: 'Make informed decisions about medication with personalized prescribing and ongoing follow-up.',
    details: ['Careful medication initiation when appropriate', 'Monitoring and adjustments over time', 'Education about benefits, risks, and side effects'],
  },
  {
    title: 'Psychotherapy Services',
    description: 'Work through emotional, behavioral, and relationship concerns with care tailored to your needs.',
    details: ['Individual therapy for personal concerns', 'Family therapy for communication and relationships', 'Ask about current group therapy availability'],
  },
  {
    title: 'ADHD, Anxiety & Depression',
    description: 'Build a personalized care plan that supports your emotional health and everyday functioning.',
    details: ['Targeted treatment and behavioral strategies', 'Cognitive and emotional support', 'Medication when clinically appropriate'],
  },
  {
    title: 'Bipolar & Mood Disorders',
    description: 'Plan for ongoing care with support focused on mood stability and long-term management.',
    details: ['Mood and symptom tracking', 'Lifestyle support and stabilization planning', 'Strategies to help prevent relapse'],
  },
  {
    title: 'Substance Use Support & Referrals',
    description: 'Find nonjudgmental support and connections to resources for recovery.',
    details: ['Early-intervention counseling', 'Treatment coordination and community referrals', 'Support for co-occurring mental health concerns'],
  },
]

const values = [
  { title: 'Compassion & dignity', description: 'We listen with empathy and respect your story, experiences, and personal journey.' },
  { title: 'Evidence-based care', description: 'We use research-backed treatment approaches tailored to your needs and goals.' },
  { title: 'Collaboration', description: 'We involve you in care decisions and work with families and healthcare partners when appropriate.' },
  { title: 'Integrity', description: 'We are committed to ethical care and clear, honest communication.' },
  { title: 'Confidentiality', description: 'We respect your privacy and handle your information with care.' },
  { title: 'Accessibility', description: 'We offer in-person and telehealth visits by appointment to support access to care.' },
]

const conditions = [
  'ADHD',
  'PTSD and trauma disorders',
  'Depression',
  'Generalized anxiety',
  'Bipolar I and II',
  'Panic disorders',
  'Substance-related concerns',
  'Adjustment disorders',
]

export default function HomePage() {
  return (
    <>
        <section id="home" className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-content">
            <p className="eyebrow">Comfort Zone Behavioral Health · Greater Houston</p>
            <h1 id="hero-heading">
              <span>Find Balance.</span>{' '}
              <span>Heal Deeply.</span>{' '}
              <span>Live Well.</span>
            </h1>
            <p className="hero-copy">
              Compassionate psychiatric and behavioral health care for adolescents, adults,
              and families in the Greater Houston area.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="tel:18323225462">
                Schedule an Appointment
              </a>
              <a className="button secondary" href="mailto:comfortzonebehavioral@gmail.com?subject=Consultation%20Request">
                Request a Consultation
              </a>
            </div>
            <p className="hero-availability">In-person &amp; telehealth visits by appointment</p>
          </div>

          <figure className="hero-photo">
            <img
              src={heroGarden}
              alt="A sunlit path winding through a peaceful green garden."
              width="1024"
              height="1280"
              fetchPriority="high"
            />
            <figcaption>
              <span className="eyebrow">Care centered on you</span>
              <p>A welcoming space. An individual approach.</p>
            </figcaption>
          </figure>
        </section>

        <section className="intro-section section-wrap">
          <div>
            <p className="eyebrow">Welcome</p>
            <h2>Care that helps healing, stability, and emotional clarity become possible.</h2>
          </div>
          <p>
            Comfort Zone Behavioral Health provides supportive, stigma-free mental health
            services in a safe therapeutic environment. The practice blends modern clinical
            care with compassionate, individualized treatment for people seeking clarity,
            stability, and long-term wellness.
          </p>
        </section>

        <section className="services-section section-wrap" id="services" aria-labelledby="services-heading">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2 id="services-heading">Personalized care. A path forward.</h2>
            <p>
              Psychiatric and behavioral health services for adolescents, adults, and
              families in Greater Houston. We work with you to understand your concerns
              and develop a care plan that reflects your needs and goals.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-details">
                  {service.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <aside className="service-support" aria-labelledby="service-support-heading">
            <div>
              <h3 id="service-support-heading">When symptoms change</h3>
              <p>
                Contact the practice about worsening symptoms or changes in your care
                needs. Outpatient support may include safety planning, short-term
                stabilization strategies, and coordination with additional resources.
                Comfort Zone Behavioral Health is not an emergency or crisis response service.
              </p>
              <p className="service-urgent-note">
                If you or someone else is in immediate danger, call 911 or go to the
                nearest emergency room. Do not use this website, email, or appointment
                requests for emergencies.
              </p>
            </div>
          </aside>

          <div className="services-next-step">
            <div>
              <h3>Not sure where to begin?</h3>
              <p>
                Call to discuss service availability and next steps. In-person and
                telehealth visits are available by appointment.
              </p>
            </div>
            <a className="services-phone" href="tel:18323225462">Call 832-322-5462</a>
          </div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-heading">
          <div className="about-intro">
            <div>
              <p className="eyebrow">About us</p>
              <h2 id="about-heading">A place to feel heard. Support to move forward.</h2>
              <p>
                Comfort Zone Behavioral Health, PLLC is an outpatient psychiatric and
                behavioral health practice serving adolescents, adults, and families
                throughout Greater Houston.
              </p>
              <p>
                We bring together evidence-based clinical care and compassionate,
                individualized support in a welcoming, stigma-free environment. Your
                experiences, preferences, and goals help guide your care.
              </p>
            </div>
            <aside className="about-mission" aria-labelledby="mission-heading">
              <p className="eyebrow">Our purpose</p>
              <h3 id="mission-heading">Our mission</h3>
              <p>
                To provide compassionate, evidence-based psychiatric and behavioral
                health services that empower individuals to achieve emotional wellness,
                personal stability, and an improved quality of life.
              </p>
              <p>
                We strive to create a supportive environment where you feel safe,
                respected, and understood.
              </p>
            </aside>
          </div>

          <div className="about-details">
            <div>
              <h3>Our approach to care</h3>
              <p>
                We take time to understand the whole person, including your strengths,
                daily life, relationships, and emotional needs. Together, we develop a
                care plan that reflects what matters to you.
              </p>
              <ul className="check-list">
                <li>Trauma-informed, culturally sensitive care</li>
                <li>A focus on your strengths and treatment goals</li>
                <li>Integrated psychiatric and psychotherapy support</li>
                <li>Collaborative decisions about treatment</li>
              </ul>
            </div>
            <div>
              <h3>Who we serve</h3>
              <p>
                We support adolescents, adults, and families seeking help with mental,
                emotional, and behavioral health concerns. Outpatient care includes
                initial psychiatric evaluations, second-opinion evaluations, and
                ongoing medication management.
              </p>
              <p>
                In-person and telehealth visits are available by appointment for
                clients in Greater Houston and surrounding communities.
              </p>
              <a className="about-services-link" href="#services">Explore our services <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div className="about-values">
            <h3>What guides our care</h3>
            <div className="about-values-grid">
              {values.map((value) => (
                <article key={value.title}>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="conditions-section section-wrap">
          <div className="section-heading compact">
            <p className="eyebrow">Areas we treat</p>
            <h2>Support for common behavioral health concerns</h2>
          </div>
          <div className="tag-list">
            {conditions.map((condition) => (
              <span key={condition}>{condition}</span>
            ))}
          </div>
        </section>

        <section className="insurance-section section-wrap" id="insurance" aria-labelledby="insurance-heading">
          <div className="insurance-heading-row">
            <div className="section-heading compact">
              <p className="eyebrow">Insurance &amp; payment</p>
              <h2 id="insurance-heading">Let’s make the next step clearer.</h2>
              <p>
                Insurance information is being confirmed. Please contact the practice
                to ask about plan participation and payment options before your visit.
              </p>
            </div>
            <a className="about-services-link" href="/contact/">Ask about coverage <span aria-hidden="true">→</span></a>
          </div>
          <div className="insurance-placeholder-grid" aria-hidden="true">
            {Array.from({ length: 6 }, (_, index) => (
              <div className="insurance-placeholder" key={index}>
                <svg width="32" height="26" viewBox="0 0 32 26" fill="none">
                  <rect x="1" y="1" width="30" height="24" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 9h5m-2.5-2.5v5M8 18h16M19 9h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>Insurance plan</span>
                <small>Details to come</small>
              </div>
            ))}
          </div>
          <p className="insurance-preview-note">
            Layout preview only. The cards above do not represent confirmed insurance participation.
            Plan names and logos will be added once verified.
          </p>
        </section>

        <section className="cta-band">
          <div>
            <p className="eyebrow">Take the first step</p>
            <h2>Begin with a confidential appointment request.</h2>
          </div>
          <a className="button primary light" href="/contact/">
            Book an Appointment Today
          </a>
        </section>

    </>
  )
}
