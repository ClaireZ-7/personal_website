const links = [
  ["NUS Homepage", "https://discovery.nus.edu.sg/6283-yi-fan"],
  ["Google Scholar", "https://scholar.google.com.sg/citations?user=EEX2-GkAAAAJ&hl=en"],
  ["ResearchGate", "https://www.researchgate.net/profile/Yi-Fan-9"],
  ["LinkedIn", "https://www.linkedin.com/in/yi-fan-0338b238/"],
];

export function HomePage() {
  return <>
    <section className="home-hero">
      <div className="home-grid">
        <div className="portrait-column">
          <div className="portrait-frame"><img src="/assets/57af26e7f0fd1ed242103f45f866735b_orig.jpg" alt="Yi Fan" /></div>
          <div className="document-links">
            <a href="/assets/cv_-_yi_fan_june2026.pdf" target="_blank">Curriculum Vitae <span>↗</span></a>
            <a href="/assets/short-bio_202605.pdf" target="_blank">Short Bio <span>↗</span></a>
          </div>
        </div>
        <div className="bio-column">
          <p className="eyebrow">Welcome to my website!</p>
          <h1>Researching how households shape a more <em>sustainable</em> future.</h1>
          <p>I am a tenured Associate Professor in the Department of Real Estate, Business School, National University of Singapore. I am working on <strong>household sustainability</strong>, a burgeoning field between sustainability and household finance.</p>
          <p>Specifically, I am (a) investigating <strong>social sustainability</strong>—especially intergenerational mobility—from a household finance perspective, and (b) melding <strong>environmental sustainability</strong>—an important need for current and future generations—with real estate market from a lens of household.</p>
          <p>In future, I am looking for interdisciplinary research with public health, engineering, and energy.</p>
        </div>
      </div>
    </section>
    <section className="home-details">
      <div className="details-grid">
        <div><p className="section-label">Research Fields</p><p className="large-copy">Urban Economics, Labor Economics, Household Finance</p></div>
        <div><p className="section-label">Current Appointments</p><p>Associate Professor, 07/2024 - present<br/>PhD Program Coordinator, 07/2024 - present</p></div>
      </div>
      <div className="info-block">
        <p className="section-label">Editorialship</p>
        <ul><li>Co-Editor, <a href="https://www.sciencedirect.com/journal/labour-economics"><em>Labour Economics</em></a> (Official Journal of the European Association of Labour Economists), 2026 - present</li><li>Guest Editor (Special Issue) <a href="https://www.sciencedirect.com/journal/renewable-and-sustainable-energy-reviews"><em>Renewable &amp; Sustainable Energy Reviews</em></a>, 2022.</li></ul>
      </div>
      <div className="info-block">
        <p className="section-label">Organizer</p>
        <ul><li><a href="https://sites.google.com/view/rnim-seminar">Research Network on Intergenerational Mobility</a> (founding member)</li><li><a href="https://sites.google.com/view/economicseminar/home">Applied Economics Workship</a> (NUS, UTokyo, NTU Taiwan, HKUST, NTU Singapore, HKU, Academia Sinica, and Hitotsubashi)</li></ul>
      </div>
      <div className="info-block">
        <p className="section-label">Selected Awards</p>
        <ul><li>Homer Hoyt Best Paper Award, Asian Real Estate Society - Global Chinese Real Estate Congress Joint International Real Estate Conference 2023</li><li>Competitive NUS Humanities and Social Sciences Faculty Research Fellowship 2022</li><li>Competitive NUS Business School Teaching Excellence Award 2021</li><li>Best Paper Award, Global Chinese Real Estate Congress Annual Conference 2019</li></ul>
      </div>
      <div className="profile-links">{links.map(([label, href]) => <a key={label} href={href} target="_blank">{label}<span>↗</span></a>)}</div>
    </section>
  </>;
}
