import ContactForm from "../../components/ContactForm";
import Icon from "../../components/Icon";

function IconContainer({ icon, text }) {
  return (
    <div className="about-me-page-container contact-page-icon">
      <Icon icon={icon} />
      <h2 className="contact-icon-text">{text}</h2>
    </div>
  );
}

export default function Contact() {
  return (
    <div>
      <h1 className="about-page-title">Contact Me</h1>
      <div className="contact-page-container">
        <div className="social-section">
          <IconContainer icon="github" text="argenisRO" />
          <IconContainer icon="linkedin" text="argenisRO" />
          <IconContainer icon="email" text="argenisRO" />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
