import '../styles/Contact.css'

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-inner">
        <p className="sec-tag">// contact</p>

        <h2 className="contact-big">
          get in touch<br />
          <em>with da goat.</em>
        </h2>

        <p className="contact-sub">
          somewhere between the stars and the screen.
          drop a message into the void —
          i usually reply.
        </p>

        <a href="mailto:henna@hennaisjustdagoat.com" className="contact-email">
          justherkive@outlook.com ↗
        </a>

        <div className="contact-links">
          <a href="https://github.com/digitalrkive" target="_blank" rel="noreferrer" className="contact-link">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/henna-mehmood-b5386b387" target="_blank" rel="noreferrer" className="contact-link">
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="contact-footer">
        <span className="footer-mono">hennaisjustdagoat.com</span>
        <span className="footer-mono">built for fun </span>
      </div>
    </section>
  )
}