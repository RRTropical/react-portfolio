export default function Home() {
  const contactClick = () => {
    location.href = "/contact";
    ``;
  };
  const projectClick = () => {
    location.href = "/projects";
  };
  return (
    <>
      <section className="hero">
        <div className="heroInfo">
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
          <button className="secondaryButton" onClick={projectClick}>
            See my work
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
          <button
            className="primaryButton"
            onClick={() => {
              window.open("https://www.instagram.com/its_t3nnessee/", "_blank");
            }}
          >
            <i className="fa-brands fa-instagram"></i> DM me
          </button>
          <button className="secondaryButton">
            <i className="fa-solid fa-envelope"></i> Email me
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
