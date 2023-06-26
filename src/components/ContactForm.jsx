import { Form } from "react-router-dom";

export default function ContactForm() {
  return (
    <div className="contact-form-section about-me-page-container">
      <h2 className="contact-form-title">Send Email</h2>
      <Form method="post" action="/events">
        <label for="title" className="contact-form-label-title">
          Name
        </label>
        <input
          title="Name"
          className="contact-input"
          type="text"
          name="title"
        />
        <label for="email" className="contact-form-label-title">
          Email
        </label>
        <input
          title="Email"
          className="contact-input"
          type="email"
          name="email"
        />
        <label for="message" className="contact-form-label-title">
          Message
        </label>
        <textarea
          className="contact-input contact-input-textarea"
          type="text"
          name="message"
        />
        <button className="about-gtk-btn" type="submit">
          Contact
        </button>
      </Form>
    </div>
  );
}
