export default function ProvidersPage() {
  return (
    <section className="providers-section section-wrap" aria-labelledby="providers-heading">
      <div className="providers-intro">
        <p className="eyebrow">Our care team</p>
        <h1 className="page-title" id="providers-heading">Meet Our Providers</h1>
        <p>Get to know our provider. Additional profile details will be shared here as they become available.</p>
      </div>
      <div className="providers-grid providers-grid-single">
          <article className="provider-card" aria-labelledby="agatha-nwosu-heading">
            <div className="provider-photo-placeholder" aria-hidden="true">
              <svg width="72" height="80" viewBox="0 0 72 80" fill="none">
                <circle cx="36" cy="25" r="14" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 72v-5c0-13 12-23 26-23s26 10 26 23v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Provider photo to come</span>
            </div>
            <div className="provider-card-copy">
              <h2 id="agatha-nwosu-heading">Agatha Nwosu, PMHNP-BC</h2>
              <span className="provider-placeholder-label">Photo &amp; biography coming soon</span>
              <p>A personal introduction, areas of focus, and professional background will be added once confirmed.</p>
            </div>
          </article>
      </div>
      <div className="providers-contact">
        <h2>Questions about finding care?</h2>
        <p>Contact the practice to ask about current provider availability and services.</p>
        <a className="button primary" href="/contact/">Contact the practice</a>
      </div>
    </section>
  )
}
