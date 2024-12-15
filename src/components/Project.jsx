export default function Project({
  name = "Example",
  description = "This is an example card to represent one of my projects.",
  path = "src/assets/Projects/example.png",
  link = "/",
}) {
  return (
    <>
      <div className="project">
        <img src={path} alt={`A photo of ${name}`} />
        <div className="projectInfo">
          <h2>{name}</h2>
          <p>{description}</p>
          <a href={link} target="_blank">
            <button>Visit Website</button>
          </a>
        </div>
      </div>
    </>
  );
}
