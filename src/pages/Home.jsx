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
        <img src="src\assets\version control.png" alt="" />
      </section>
    </>
  );
}
