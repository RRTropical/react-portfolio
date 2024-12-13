export default function Home() {
  const contactClick = () => {
    location.href = "/contact";
    window.scrollTo(0,0)
  };
  const projectClick = () => {
    location.href = "/projects";
  };

  const aboutClick = () => {
    location.href = "/about";
  };

  return (
    <>
      <section className="hero">
        <div className="heroInfo">
          <h4>WEB DEVELOPER AND DESIGNER</h4>
          <h1>
            Hi, I'm <span className="highlight">Lorenzo</span>. <br />I love to
            build amazing websites.
          </h1>
          <p>
            I'm a full stack developer with 3 years of experience creating
            responsive websites and applications that deliver seamless user
            experiences.
          </p>
          <button className="primaryButton" onClick={contactClick}>
            Work with me
          </button>
          <button className="secondaryButton" onClick={aboutClick}>
            Learn more
          </button>
        </div>
        <img src="src\assets\version control.png" alt="A guy using a laptop" />
      </section>
      <section className="intro">
        <div className="introInfo">
          <h1>
            Let me <span className="highlight">introduce</span> myself
          </h1>
          <p>
            Hi, I’m Lorenzo! My passion for programming began when I was 9, and
            it’s been growing ever since. I started out in game development but
            quickly discovered my true love: building websites. These days, I
            focus on crafting and designing sleek, functional websites and web
            apps. I enjoy working with modern tools like Node.js and React to
            bring ideas to life and create products that stand out.
          </p>
          <button className="primaryButton" onClick={projectClick}>
            See my work
          </button>
        </div>
        <img
          src="src\assets\avatar.png"
          alt="A graphic resembling Lorenzo Cooks"
        />
      </section>
    </>
  );
}
