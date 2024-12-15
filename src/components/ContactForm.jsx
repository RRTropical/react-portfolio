import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Email");
  const [canEmail, setCanEmail] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!canEmail) return;
    setCanEmail(false);

    emailjs
      .sendForm("portfolio_email", "portfolio_contact", form.current, {
        publicKey: "VCaTR7vqa6ljcAEp_",
      })
      .then(
        () => {
          const formValues = document.querySelectorAll(
            ".hero form input, .hero form textarea"
          );
          formValues.forEach((value) => {
            value.value = "";
          });
          setButtonText("Email Sent!");
          setTimeout(() => {
            setButtonText("Send Email");
            setCanEmail(true);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setButtonText("An error occurred.");
          setTimeout(() => {
            setButtonText("Send Email");
            setCanEmail(true);
          }, 3000);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <h2>Send me an email</h2>
        <input name="name" type="text" placeholder="Full name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="subject" type="text" placeholder="Subject" />
        <h4>Tell me more about your project</h4>
        <textarea name="message" required></textarea>
        <button type="submit" disabled={!canEmail}>
          {buttonText}
        </button>
      </form>
    </>
  );
}
