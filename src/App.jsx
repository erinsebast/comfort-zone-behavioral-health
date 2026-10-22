import { useEffect } from 'react'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ProvidersPage from './pages/ProvidersPage.jsx'
import { PrivacyPage, PrivacyNoticePage, TermsPage } from './pages/LegalPages.jsx'

const pages = {
  '/': { component: HomePage, title: 'Comfort Zone Behavioral Health | Greater Houston' },
  '/providers': { component: ProvidersPage, title: 'Meet Our Providers | Comfort Zone Behavioral Health' },
  '/contact': { component: ContactPage, title: 'Contact | Comfort Zone Behavioral Health' },
  '/privacy': { component: PrivacyPage, title: 'Website Privacy | Comfort Zone Behavioral Health' },
  '/privacy-notice': { component: PrivacyNoticePage, title: 'Privacy Practices | Comfort Zone Behavioral Health' },
  '/terms': { component: TermsPage, title: 'Terms of Use | Comfort Zone Behavioral Health' },
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const page = pages[path]
  const Page = page?.component

  useEffect(() => {
    document.title = page?.title || 'Page not found | Comfort Zone Behavioral Health'
    const redirectOldContact = () => {
      if (window.location.pathname === '/' && window.location.hash === '#contact') {
        window.location.replace('/contact/')
      }
    }
    redirectOldContact()
    window.addEventListener('hashchange', redirectOldContact)
    return () => window.removeEventListener('hashchange', redirectOldContact)
  }, [page])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="/#home" aria-label="Comfort Zone Behavioral Health home">
          <span className="brand-mark">CZ</span>
          <span><strong>Comfort Zone</strong><small>Behavioral Health</small></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/providers/" aria-current={path === '/providers' ? 'page' : undefined}>Meet Our Providers</a>
          <a href="/contact/" aria-current={path === '/contact' ? 'page' : undefined}>Contact</a>
        </nav>
        <a className="header-cta" href="/contact/">Schedule</a>
      </header>

      <main id="main-content" tabIndex={-1}>
        {Page ? <Page /> : (
          <section className="section-wrap legal-page">
            <h1 className="page-title">Page not found</h1>
            <p><a href="/">Return to the homepage</a> or <a href="/contact/">contact the practice</a>.</p>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div><p>Comfort Zone Behavioral Health, PLLC</p><p>Serving clients throughout Greater Houston</p></div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="/contact/">Contact</a>
            <a href="/privacy/">Website Privacy</a>
            <a href="/privacy-notice/">Privacy Practices</a>
            <a href="/terms/">Terms of Use</a>
          </nav>
        </div>
        <p className="footer-emergency">
          This practice is not an emergency or crisis response service. In immediate danger,
          call <a href="tel:911">911</a> or go to the nearest emergency room.
          For crisis support, call <a href="tel:988?oai_link_source=model_response_hotline">988</a> or
          text <a href="sms:988?oai_link_source=model_response_hotline">988</a> for the 988 Suicide &amp; Crisis Lifeline.
          Do not use this website, email, voicemail, or appointment requests for emergencies.
        </p>
      </footer>
    </>
  )
}

export default App
