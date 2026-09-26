import style from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";

// Defined outside Contact so it isn't re-created on every render
const ContactButton = ({ isOutline, icon, text, customStyle, ...rest }) => (
  <button
    {...rest}
    className={isOutline ? style.secondary_btn : style.primary_btn}
    style={customStyle}
  >
    {icon}
    {text}
  </button>
);

const outlineWhite = {
  backgroundColor: "transparent",
  color: "white",
  border: "1px solid gray",
  width: "100%",
};

const GMAIL_LINK =
  "https://mail.google.com/mail/?view=cm&fs=1&to=m.khanarfaa@gmail.com";

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("949-992-6059");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openEmail = () => {
    window.open(GMAIL_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={style.contactSection}>
      <div className={style.contactContainer}>
        <div className={style.contact_section}>
          <h1 className="text-purple-lightPurple lg:text-3xl text-2xl font-semibold">
            Contact{" "}
            <span className="text-white lg:text-3xl text-2xl font-thin">Us</span>
          </h1>

          <p className="text-white lg:text-lg text-base mt-2 mb-16">
            I’d love to hear from you! If you have questions about my work or
            want to connect, feel free to reach out through the contact form or
            get in touch via phone or email.
          </p>

          <div className={style.top_buttons}>
            <ContactButton
              type="button"
              text="Email"
              icon={<CiMail />}
              customStyle={outlineWhite}
              onClick={openEmail}
            />

            <ContactButton
              type="button"
              text="Mobile"
              icon={<IoMdCall />}
              customStyle={outlineWhite}
              onClick={() => setShowPhone(true)}
            />

            {showPhone && (
              <div className={style.phonePopup}>
                <div className={style.popupContent}>
                  <h3>My Phone Number</h3>
                  <div className={style.phoneNumber}>
                    <p>949-992-6059</p>
                    <button
                      type="button"
                      className={style.copyButton}
                      onClick={copyPhone}
                      aria-label="Copy phone number"
                    >
                      <FiCopy />
                    </button>
                  </div>

                  {copied && <span className={style.copiedText}>Copied!</span>}

                  <button type="button" onClick={() => setShowPhone(false)}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={style.contact_form}>
          {/* Resume PDF must be inside the public/ folder */}
          <a href="/ArfaKhan_Software_Developer_Resume.pdf" download>
            <ContactButton
              type="button"
              isOutline={true}
              text="Download Resume"
              icon={<MdMessage />}
            />
          </a>

          <form onSubmit={onSubmit} className="form-input">
            <div className={style.form_container}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={style.form_container}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={style.form_container}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={8} required />
            </div>

            <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
              <ContactButton
                type="submit"
                text={status === "sending" ? "Sending..." : "Send Message"}
                disabled={status === "sending"}
              />
            </div>

            {status === "success" && (
              <p className="text-center text-green-700 font-medium">
                Message sent. I’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-700 font-medium">
                Message not sent. Check your connection and try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;