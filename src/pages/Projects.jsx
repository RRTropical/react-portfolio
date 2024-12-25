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
            description="A creative note-taking app using vanilla HTML, CSS, and JS."
            path="/assets/Projects/flipnote.png"
            link="https://lcflipnote.netlify.app"
          />
          <Project
            name="Votable"
            description="A poll app using React and Firebase."
            path="/assets/Projects/votable.png"
            link="https://votable.netlify.app"
          />
        </section>
      </div>
    </>
  );
}
