function LegalLayout({ eyebrow, title, intro, children }) {
  return (
    <section className="section-wrap legal-page" aria-labelledby="legal-heading">
      <a className="back-link" href="/">← Back to home</a>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title" id="legal-heading">{title}</h1>
      <p className="legal-intro">{intro}</p>
      {children}
      <aside className="legal-contact" aria-labelledby="legal-contact-heading">
        <h2 id="legal-contact-heading">Questions about privacy or website use?</h2>
        <p>Call Comfort Zone Behavioral Health, PLLC at <a href="tel:18323225462">832-322-5462</a> or ask the practice how to reach the person responsible for privacy matters.</p>
        <p>For general inquiries, email <a href="mailto:comfortzonebehavioral@gmail.com">comfortzonebehavioral@gmail.com</a>. Please do not include sensitive clinical information in email.</p>
        <a className="about-services-link" href="/contact/">Contact the practice →</a>
      </aside>
    </section>
  )
}

export function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Privacy & website use" title="Website Privacy Policy" intro="How information shared through this website and general inquiries is handled.">
      <p className="legal-status">Draft for practice review. This website policy is separate from the practice’s formal Notice of Privacy Practices.</p>
      <section aria-labelledby="privacy-collection">
        <h2 id="privacy-collection">Information you choose to share</h2>
        <p>If you call or email the practice, you may provide your name, contact details, and general questions about services or appointments. Information provided for care, insurance, or billing is handled through the practice’s intake and clinical processes.</p>
        <p>The contact form on this website is currently a disabled preview. It cannot accept or send a request. Call the practice for appointment availability and next steps.</p>
      </section>
      <section aria-labelledby="privacy-use">
        <h2 id="privacy-use">How information may be used</h2>
        <p>The practice may use information you provide to respond to inquiries, discuss appointments, coordinate services, verify insurance or payment details, and meet applicable administrative and legal obligations. Health information use and disclosure are addressed in the practice’s Notice of Privacy Practices.</p>
      </section>
      <section aria-labelledby="privacy-safety">
        <h2 id="privacy-safety">Protecting your information</h2>
        <p>No website or internet transmission can be guaranteed completely secure. Do not send diagnoses, medication details, insurance identifiers, or other sensitive clinical information through general email or a website inquiry. Call to ask about an appropriate way to share information needed for your care.</p>
        <p>Website messages and email are not appropriate for emergencies. If you or someone else is in immediate danger, call 911 or go to the nearest emergency room.</p>
      </section>
      <section aria-labelledby="privacy-technology">
        <h2 id="privacy-technology">Website features and other services</h2>
        <p>This preview does not include an online scheduler, patient portal, payment processing, or analytics integration. Links may open your phone or email application, or take you to an external website. Those services have their own privacy practices.</p>
        <p>This policy needs to be reviewed and updated when hosting, forms, analytics, scheduling, or other website services are selected.</p>
      </section>
    </LegalLayout>
  )
}

export function PrivacyNoticePage() {
  return (
    <LegalLayout eyebrow="Your health information" title="Notice of Privacy Practices" intro="Information about the practice’s formal privacy notice and how to ask about your rights.">
      <p className="legal-status">Full notice pending publication. The complete, approved practice notice has not been posted here. This page is a general summary and does not replace that notice.</p>
      <section aria-labelledby="notice-purpose">
        <h2 id="notice-purpose">About the formal notice</h2>
        <p>A Notice of Privacy Practices explains how protected health information may be used or disclosed, the practice’s responsibilities, and your privacy rights. It also identifies a privacy contact and an effective date.</p>
        <p>Contact the practice to ask about its current notice, request a paper copy, or discuss privacy questions. The <a href="/privacy/">Website Privacy Policy</a> describes this website and general inquiries.</p>
      </section>
      <section aria-labelledby="notice-rights">
        <h2 id="notice-rights">Understanding your privacy rights</h2>
        <p>HIPAA rights generally include the ability to request access to records, request corrections, ask for confidential communications or restrictions, and raise a privacy complaint. Conditions and exceptions can apply.</p>
        <p>Ask the practice how to make a request or contact the person responsible for privacy matters. You can also learn about <a href="https://www.hhs.gov/hipaa/filing-a-complaint/index.html">filing a privacy complaint with the HHS Office for Civil Rights</a>.</p>
        <p>Read the <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/privacy-practices-health-care-provider/index.html">HHS explanation of privacy rights</a> for general information. It is not Comfort Zone Behavioral Health’s adopted notice.</p>
      </section>
    </LegalLayout>
  )
}

export function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal information" title="Website Terms of Use" intro="Please review these guidelines when using the Comfort Zone Behavioral Health website.">
      <p className="legal-status">Draft for practice review.</p>
      <section aria-labelledby="terms-information">
        <h2 id="terms-information">General information</h2>
        <p>This website provides general educational and practice information. It does not provide medical advice, diagnosis, or treatment and does not replace professional medical, psychiatric, psychological, or emergency care.</p>
      </section>
      <section aria-labelledby="terms-relationship">
        <h2 id="terms-relationship">Appointments and treatment relationships</h2>
        <p>Visiting this website, sending an inquiry, or requesting an appointment does not establish a provider-patient relationship or guarantee acceptance for treatment. A treatment relationship begins only after the practice accepts you for care and the required intake and consent processes are completed.</p>
        <p>The contact form is currently a preview and cannot be submitted. Call the practice to discuss availability, service fit, forms, and insurance or payment arrangements. A phone or email inquiry does not confirm an appointment.</p>
      </section>
      <section aria-labelledby="terms-emergency">
        <h2 id="terms-emergency">Emergency and urgent concerns</h2>
        <p>Comfort Zone Behavioral Health is not an emergency or crisis response service. If you or someone else is in immediate danger, call 911 or go to the nearest emergency room. Do not use this website, email, voicemail, text messages to the practice, or appointment requests for emergencies.</p>
      </section>
      <section aria-labelledby="terms-privacy">
        <h2 id="terms-privacy">Privacy and external links</h2>
        <p>Do not send highly sensitive clinical information through general email or website inquiries. See the <a href="/privacy/">Website Privacy Policy</a> and <a href="/privacy-notice/">privacy practices information</a> for more details.</p>
        <p>External links provide additional information and may lead to services with their own terms and privacy policies. Contact the practice to confirm current services, hours, and appointment arrangements.</p>
      </section>
    </LegalLayout>
  )
}
