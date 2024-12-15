import Project from "../components/Project";

export default function Projects() {
  return (
    <>
      <div className="projectPage">
        <div className="proj">
          <h1>
            My <span className="highlight">Creations</span>
          </h1>
          <p>Here are a few of the projects I’ve worked on.</p>
        </div>
        <section className="projectSection">
          <Project
            name="Flipnote"
            description="A creative note-taking website using vanilla HTML, CSS, and JS."
            path="/assets/Projects/flipnote.png"
            link="https://lcflipnote.netlify.app"
          />
        </section>
      </div>
    </>
  );
}
