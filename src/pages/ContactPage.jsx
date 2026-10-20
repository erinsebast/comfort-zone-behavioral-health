export default function ContactPage() {
  return (
        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-heading">
          <div>
            <p className="eyebrow">Contact us</p>
            <h1 className="page-title" id="contact-heading">Let’s take the next step together.</h1>
            <p>
              Contact Comfort Zone Behavioral Health, PLLC to ask about services,
              appointment availability, and next steps for care in Greater Houston.
            </p>
            <dl className="contact-details">
              <div>
                <dt>Call the practice</dt>
                <dd><a href="tel:18323225462">832-322-5462</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:comfortzonebehavioral@gmail.com">comfortzonebehavioral@gmail.com</a></dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd><address>11515 Brookside Arbor Lane<br />Richmond, Texas 77406</address></dd>
              </div>
              <div>
                <dt>Office hours</dt>
                <dd>Monday–Friday, 8:00 AM–5:00 PM<br />Central Time</dd>
              </div>
            </dl>
            <p className="contact-visit-note">
              In-person and telehealth visits are available by appointment. Please
              confirm your appointment location or telehealth instructions with the practice.
            </p>
            <div className="contact-guidance">
              <h2>Questions about insurance or payment?</h2>
              <p>
                Call the practice to confirm insurance participation, self-pay options,
                and payment arrangements before your visit.
              </p>
            </div>
            <aside className="contact-urgent" aria-labelledby="contact-urgent-heading">
              <h2 id="contact-urgent-heading">For emergencies</h2>
              <p>
                Comfort Zone Behavioral Health is not an emergency or crisis response
                service. If you or someone else is in immediate danger, call 911 or
                go to the nearest emergency room. Do not use this website, email,
                voicemail, or appointment requests for emergencies.
              </p>
              <p>For crisis support, call <a href="tel:988?oai_link_source=model_response_hotline">988</a> or text <a href="sms:988?oai_link_source=model_response_hotline">988</a> for the 988 Suicide &amp; Crisis Lifeline.</p>
            </aside>
          </div>

          <form className="contact-form" aria-labelledby="contact-form-heading" aria-describedby="contact-form-status">
            <div className="contact-form-header">
              <span className="form-preview-badge">Form preview</span>
              <h2 id="contact-form-heading">Let’s connect.</h2>
              <p>Tell us a little about how we can help.</p>
            </div>
            <p className="contact-form-status" id="contact-form-status">
              Online requests aren’t available yet. Please call <a href="tel:18323225462">832-322-5462</a> to get in touch.
            </p>
            <fieldset className="contact-fields" disabled>
              <legend className="visually-hidden">Contact details and preferences</legend>
              <div className="contact-input-grid">
                <label className="form-full-width">
                  Full name
                  <input type="text" name="name" autoComplete="name" placeholder="Your full name" />
                </label>
                <label>
                  Phone number
                  <input type="tel" name="phone" autoComplete="tel" placeholder="(832) 000-0000" />
                </label>
                <label>
                  Email address
                  <input type="email" name="email" autoComplete="email" placeholder="you@example.com" />
                </label>
                <label>
                  Reason for visit
                  <select name="reason" defaultValue="">
                    <option value="" disabled>Select a reason</option>
                    <option>Evaluation</option>
                    <option>Medication management</option>
                    <option>Therapy</option>
                    <option>Follow-up</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Appointment preference
                  <select name="appointmentType" defaultValue="">
                    <option value="" disabled>Select a preference</option>
                    <option>In-person</option>
                    <option>Telehealth</option>
                    <option>No preference</option>
                  </select>
                </label>
                <label className="form-full-width">
                  Your message
                  <textarea name="message" rows="3" placeholder="A general question about services or availability…" />
                </label>
              </div>
            </fieldset>
            <p className="form-note form-privacy-reminder">
              Please keep sensitive health details out of website inquiries and email.
              For emergencies, call 911 or go to the nearest emergency room.
            </p>
            <details className="form-disclosures">
              <summary>Privacy &amp; request acknowledgments</summary>
              <div className="form-disclosure-body">
                <p>
                  Do not include diagnoses, medication details, or other sensitive clinical
                  information. Read our <a href="/privacy/">Website Privacy Policy</a> and <a href="/terms/">Terms of Use</a>.
                </p>
                <p className="contact-request-note">
                  An appointment request does not guarantee acceptance for treatment
                  or establish a provider-patient relationship. The practice reviews
                  requests to discuss availability, service fit, intake forms,
                  insurance or payment information, and next steps.
                </p>
                <fieldset className="contact-consents" disabled>
                  <legend>Acknowledgments for online requests</legend>
                  <label><input type="checkbox" name="notEmergency" /> <span>I understand this is not for emergencies.</span></label>
                  <label><input type="checkbox" name="noTreatmentRelationship" /> <span>I understand a request does not establish a treatment relationship.</span></label>
                  <label><input type="checkbox" name="contactConsent" /> <span>I consent to be contacted using the information I provide.</span></label>
                  <label><input type="checkbox" name="limitedInformation" /> <span>I understand I should not include sensitive clinical information.</span></label>
                </fieldset>
              </div>
            </details>
            <button className="contact-submit" type="button" disabled>Send Request</button>
          </form>

        </section>

  )
}
