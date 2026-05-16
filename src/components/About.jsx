import '../styles/About.css'

export default function About() {
  return (
    <section className="about">
      <p className="sec-tag">// about</p>

      <div className="about-inner">

        <div className="about-left">
          <h2 className="about-heading">
            <span className="ah-dim">just a</span>
            <span className="ah-bright">free soul</span>
            <span className="ah-outline">with wifi.</span>
          </h2>
        </div>

        <div className="about-right">
          <p className="about-statement">
            CS graduate. Junior dev. Chronic 3am researcher.
          </p>

          <div className="about-manifesto">
            <p>
              I got into coding because I wanted to make things look
              <span className="highlight"> unreasonably good.</span> Turns
              out I also love the logic. The problem. The long debug
              session that ends with a missing semicolon.
            </p>
            <p>
              The Movie Interstellar broke my brain in the best way. That sense of
              scale — of something
              <span className="highlight"> so vast it makes you feel small</span>
              — that's what I'm chasing when I design anything.
            </p>
            <p>
              When I'm not at a screen I'm moving. Running. Lifting.
              Calisthenics. The body needs as much work as the code.
            </p>
          </div>

          <div className="about-words">
            <span>space</span>
            <span className="slash">/</span>
            <span>film</span>
            <span className="slash">/</span>
            <span>code</span>
            <span className="slash">/</span>
            <span>design</span>
            <span className="slash">/</span>
            <span>movement</span>
            <span className="slash">/</span>
            <span>3am thoughts</span>
          </div>
        </div>

      </div>
    </section>
  )
}