import ContactForm from "../../components/ContactForm";
import Icon from "../../components/Icon";
import emailjs from "@emailjs/browser";

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        user_name: formData.get("user_name"),
        user_email: formData.get("user_email"),
        message: formData.get("message"),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return { ...result, message: "Email Sent Successfully" };
  } catch (error) {
    return {
      ...error,
      message: "Email Failed to Send. Please Try Again Later",
    };
  }
}

function IconContainer({ icon, text }) {
  return (
    <div className="about-me-page-container contact-page-icon">
      <Icon alias={icon} specialClass={"contact-icon"} />
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
          <IconContainer icon="Github" text="argenisRO" />
          <IconContainer icon="Linkedin" text="argenisRO" />
          <IconContainer icon="Email" text="argy16@gmail.com" />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
