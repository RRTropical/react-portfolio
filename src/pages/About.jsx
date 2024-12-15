import Tech from "../components/Tech";

export default function About() {
  return (
    <>
      <section className="hero about">
        <div className="heroInfo">
          <h1>
            More <span className="highlight">about</span> me
          </h1>
          <p>
            I'm a full stack developer with 3 years of experience creating I've
            spent a few years working on different projects using a range of
            languages, including C#, JavaScript, Python, and Lua. However,
            within the last three years, I've come to love creating websites.
            During this time, I have expanded my skill set and created websites
            for both myself and other people.
          </p>
        </div>
        <img src="/assets/coding.png" alt="A guy using a laptop" />
      </section>
      <section className="techs">
        <div className="skillSet">
          <h1>
            My <span className="highlight">Skillset</span>
          </h1>
          <div className="skills">
            <Tech
              link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwieiajksaaKAxXFhIkEHZlOFacQFnoECBAQAQ&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript&usg=AOvVaw1Il_CfTbNi4CXc-0nBN5rP&opi=89978449"
              path="/assets/Tech Skills/javascript.svg"
            />
            <Tech
              link="https://nodejs.org/en"
              path="/assets/Tech Skills/nodejs.svg"
            />
            <Tech
              link="https://www.python.org"
              path="/assets/Tech Skills/python.svg"
            />
            <Tech
              link="https://react.dev/"
              path="/assets/Tech Skills/react.svg"
            />
            <Tech
              link="https://tailwindcss.com"
              path="/assets/Tech Skills/tailwind.svg"
            />
            <Tech
              link="https://www.typescriptlang.org"
              path="/assets/Tech Skills/typescript.svg"
            />
          </div>
          <h1>
            <span className="highlight">Tools</span> I use
          </h1>
          <div className="skills">
            <Tech
              link="https://www.apple.com/mac/"
              path="/assets/Tech Skills/macos.svg"
            />
            <Tech
              link="https://code.visualstudio.com"
              path="/assets/Tech Skills/vscode.svg"
            />
            <Tech
              link="https://www.microsoft.com/en-us/windows?r=1"
              path="/assets/Tech Skills/windows.svg"
            />
            <Tech
              link="https://figma.com"
              path="/assets/Tech Skills/figma.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
