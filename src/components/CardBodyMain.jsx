import ButtonMail from "./ButtonMail";
import ButtonLinkd from "./ButtonLinkd";

export default function CardBodyMain() {
  return (
    <div className="card-body-main">
      <h1 className="card-body-heading">Laura Smith</h1>
      <p className="card-body-profession">Frontend Developer</p>
      <p className="card-body-website">laurasmith.website</p>
      <div className="card-body-buttons">
        <ButtonMail />
        <ButtonLinkd />
      </div>
    </div>
  );
}
