export default function Tech({ path, link }) {
  console.log(path, link);
  return (
    <>
      <div className="skill">
        <a href={link} target="_blank">
          <img src={path} alt="Tech" />
        </a>
      </div>
    </>
  );
}
