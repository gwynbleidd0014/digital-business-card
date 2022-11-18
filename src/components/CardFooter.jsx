import twitter from "../assets/twitter-icon.png";
import fb from "../assets/fb-icon.png";
import insta from "../assets/insta-icon.png";
import gh from "../assets/gh-icon.png";

export default function CardFooter() {
  return (
    <div className="card-footer">
      <img src={twitter} alt="twitter icon" className="social-icon" />
      <img src={fb} alt="facebook icon" className="social-icon" />
      <img src={insta} alt="instagram icon" className="social-icon" />
      <img src={gh} alt="github icon" className="social-icon" />
    </div>
  );
}
