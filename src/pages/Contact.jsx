import ContactForm from "../components/ContactForm";

export default function About() {
  return (
    <>
      <section className="hero contactPage">
        <div className="heroInfo">
          <h1>
            Let's <span className="highlight">chat</span>. <br />
            Tell me about your project.
          </h1>
          <p>Let's build your next website!</p>
          <a href="https://www.instagram.com/its_t3nnessee/" target="_blank">
            <button className="primaryButton contactButton">
              <i className="fa-brands fa-instagram"></i>
              DM me
            </button>
          </a>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
