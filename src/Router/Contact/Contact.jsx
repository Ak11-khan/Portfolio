import resume from "../../../assets/nav/Arfa_Resume.pdf";
import style from "./Contact.module.css";
import { MdMessage, MdPadding } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";



const Contact = () => {
  const [name, setName] = useState("khan");
  const [email, setEmail] = useState("abc@ygmail.com");
  const [text, setText] = useState("Happy to connect!");
  const [showPhone, setShowPhone] = useState(false);
  const [copied, setCopied] = useState(false);



  const onSubmit = () => {
    console.log(event);
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log("name", event.target[0].value);
  };

  const handlePhoneNumberClick = () => {
     setShowPhone(true);
  };

  const ContactButton = ({
    isOutline,
    icon,
    text,
    onClick,
    customStyle,
    ...rest
  }) => {
    return (
      <button
        {...rest}
        className={isOutline ? style.secondary_btn : style.primary_btn}
        style={customStyle}
        onClick={onClick}
      >
        {icon}
        {text}
      </button>
    );
  };

  return (
    <section className={style.contactSection}>
      <div className={`${style.contactContainer}`}>
        <div className={`${style.contact_section}`}>
          <h1 className="text-purple-lightPurple lg:text-3xl text-2xl font-semibold ">
            Contact{" "}
            <span className="text-white lg:text-3xl text-2xl font-thin">
              Us
            </span>
          </h1>

          <p className="text-white lg:text-lg text-base mt-2 mb-16">
            I’d love to hear from you! If you have questions about my work or
            want to connect, feel free to reach out through the contact form or
            get in touch via phone or email.
          </p>
          <div className={style.top_buttons}>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=m.khanarfaa@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <ContactButton
    text="Email"
    icon={<CiMail />}
    customStyle={{
      backgroundColor: "transparent",
      color: "white",
      border: "1px solid gray",
      width: "100%"
    }}
  />
</a>



            <ContactButton
              className=""
              text="Mobile"
              icon={<IoMdCall />}
              onClick={handlePhoneNumberClick}
              customStyle={{
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid gray",
                 width:"100%"
              }}
            />

{showPhone && (
  <div className={style.phonePopup}>
    <div className={style.popupContent}>
<button
          className={style.copyButton}
          onClick={() => {
            navigator.clipboard.writeText("949-992-6059");
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        >
          <FiCopy />
        </button>
      <h3>My Phone Number</h3>
      <div className={style.phoneNumber}>
        <p>949-992-6059</p>

        
      </div>


      {copied && <span className={style.copiedText}>Copied!</span>}

      <button onClick={() => setShowPhone(false)}>
        Close
      </button>

    </div>
  </div>
)}



          </div>
        </div>

        <div className={style.contact_form}>
          <a href={resume} download>
            <ContactButton
              isOutline={true}
              text="Download Resume"
              icon={<MdMessage />}
            />
          </a>

          {/* create a form */}

          <form onSubmit={onSubmit} className="form-input">
            <div className={style.form_container}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={style.form_container}>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" />
            </div>
            <div className={style.form_container}>
              <label htmlFor="text">Text</label>
              <textarea type="text" rows={8} name="text" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              {" "}
              <ContactButton text="Send Message"></ContactButton>{" "}
            </div>
            <div className="text-white">{name + " " + email + " " + text}</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
