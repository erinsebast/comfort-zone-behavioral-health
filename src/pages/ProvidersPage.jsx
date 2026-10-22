export default function ProvidersPage() {
  return (
    <section className="providers-section section-wrap" aria-labelledby="providers-heading">
      <div className="providers-intro">
        <p className="eyebrow">Our care team</p>
        <h1 className="page-title" id="providers-heading">Meet Our Providers</h1>
        <p>Provider introductions are coming soon. This page will feature photos, credentials, areas of focus, and each provider’s approach to care once the details are confirmed.</p>
        <p className="providers-preview-note">Profile layout preview — these cards do not represent a confirmed provider roster.</p>
      </div>
      <div className="providers-grid">
        {[1, 2].map((slot) => (
          <article className="provider-card" key={slot} aria-label={`Provider profile placeholder ${slot}`}>
            <div className="provider-photo-placeholder" aria-hidden="true">
              <svg width="72" height="80" viewBox="0 0 72 80" fill="none">
                <circle cx="36" cy="25" r="14" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 72v-5c0-13 12-23 26-23s26 10 26 23v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Provider photo to come</span>
            </div>
            <div className="provider-card-copy">
              <span className="provider-placeholder-label">Profile coming soon</span>
              <h2>Provider name &amp; credentials</h2>
              <p>A personal introduction and approach to care will be added here.</p>
              <dl>
                <div><dt>Areas of focus</dt><dd>Details to be confirmed</dd></div>
                <div><dt>Education &amp; qualifications</dt><dd>Details to be confirmed</dd></div>
              </dl>
            </div>
          </article>
        ))}
      </div>
      <div className="providers-contact">
        <h2>Questions about finding care?</h2>
        <p>Contact the practice to ask about current provider availability and services.</p>
        <a className="button primary" href="/contact/">Contact the practice</a>
      </div>
    </section>
  )
}
