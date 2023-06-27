import { Form, useActionData, useNavigation } from "react-router-dom";
import { Orbit } from "@uiball/loaders";

export default function ContactForm() {
  const navigation = useNavigation();
  const actionResult = useActionData();
  const busy = navigation.state === "submitting";

  const messageStyling = {
    color:
      actionResult?.status === 200
        ? "var(--color-success)"
        : "var(--color-error)",
    textAlign: "center",
    fontWeight: "bold",
  };

  return (
    <div className="contact-form-section about-me-page-container">
      {!busy ? (
        <>
          <h2 className="contact-form-title">Send Email</h2>
          {actionResult?.message && (
            <p style={messageStyling}>{actionResult.message}</p>
          )}
          <Form method="post">
            <label htmlFor="title" className="contact-form-label-title">
              Name
            </label>
            <input
              title="Name"
              className="contact-input"
              type="text"
              name="user_name"
            />
            <label htmlFor="email" className="contact-form-label-title">
              Email
            </label>
            <input
              title="Email"
              className="contact-input"
              type="email"
              name="user_email"
            />
            <label htmlFor="message" className="contact-form-label-title">
              Message
            </label>
            <textarea
              title="Message"
              className="contact-input contact-input-textarea"
              type="text"
              name="message"
            />
            <button className="about-gtk-btn" type="submit">
              Contact
            </button>
          </Form>
        </>
      ) : (
        <div className="contact-form-section about-me-page-container">
          <Orbit size={120} color="#5c8df7" />
        </div>
      )}
    </div>
  );
}
