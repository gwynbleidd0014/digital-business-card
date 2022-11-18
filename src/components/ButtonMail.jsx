import email from "../assets/email-icon.png";

export default function ButtonMail() {
  return (
    <div className="button-mail button">
      <img src={email} alt="button-icon" />
      <p className="button-text">Email</p>
    </div>
  );
}
