export default function Navbar() {
  const handleClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    const navBar = document.querySelector(".navBar");
    const menu = hamburger.querySelector("i");

    hamburger.addEventListener("click", function () {
      nav.classList.toggle("active");
      menu.classList.toggle("fa-bars");
      menu.classList.toggle("fa-x");
      navBar.classList.toggle("active");
    });
  };
  return (
    <>
      <nav className="navBar">
        <h1>
          <span className="highlight">LC</span>
        </h1>
        <div className="nav">
          <a className="highlight" href="/">
            {" "}
            <i className="fa-solid fa-house"></i> Home
          </a>
          <a href="/about">
            <i className="fa-solid fa-user"></i> About
          </a>
          <a href="/projects">
            <i className="fa-solid fa-code"></i> Projects
          </a>
        </div>
        <div className="hamburger" onClick={handleClick}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </>
  );
}
