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
            Chronic 3am researcher.
          </p>

         <div className="about-manifesto">
  <p>
    I got into coding because I wanted to make things look
    <span className="highlight"> unreasonably good.</span>. Somehow
    ended up actually enjoying the technical side too. Still figuring
    out where one ends and the other begins.
  </p>
  <p>
    I go down rabbit holes at 3am for fun. Black holes, ancient
    civilisations, unsolved mysteries, why certain things exist,
    <span className="highlight"> if it's random and fascinating </span>
    I'm probably already 40 tabs deep into it.
  </p>
  <p>
    Outside of coding I'm either running, lifting or doing calisthenics.
    Keeps me from going fully feral staring at a screen all day.
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