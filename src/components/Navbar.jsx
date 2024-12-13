import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    // Highlight active navigation link based on the current path
    const links = document.querySelectorAll(".nav a");
    links.forEach((link) => {
      const href = link.href;
      const parts = href.split("/");
      const lastPart =
        parts[parts.length - 1] === "" ? "/" : `/${parts[parts.length - 1]}`;

      if (lastPart === location.pathname) {
        link.style.color = "#6c63ff";
        link.querySelector("i").style.color = "#6c63ff";
      } else {
        link.style.color = "#818896";
        link.querySelector("i").style.color = "#818896";
      }
    });

    // Update navbar background color on scroll
    const updateNavbar = () => {
      if (window.innerWidth > 768) {
        const navBar = document.querySelector(".navBar");
        if (window.scrollY < 50 && !navBar.classList.contains("active")) {
          navBar.style.backgroundColor = "transparent";
        } else {
          navBar.style.backgroundColor = "#1C2430";
        }
      }
    };

    window.addEventListener("scroll", updateNavbar);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateNavbar);
    };
  }, []);

  const handleClick = () => {
    // Toggle active state for navigation and hamburger menu
    const nav = document.querySelector(".nav");
    const navBar = document.querySelector(".navBar");
    const menu = document.querySelector(".hamburger i");

    nav.classList.toggle("active");
    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-x");
    navBar.classList.toggle("active");
  };

  return (
    <nav className="navBar">
      <h1
        onClick={() => {
          location.pathname = "";
        }}
      >
        <span className="highlight">LC</span>
      </h1>
      <div className="nav">
        <a className="home" href="/">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <a className="about" href="/about">
          <i className="fa-solid fa-user"></i> About
        </a>
        <a className="projects" href="/projects">
          <i className="fa-solid fa-code"></i> Projects
        </a>
      </div>
      <div className="hamburger" onClick={handleClick}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}
