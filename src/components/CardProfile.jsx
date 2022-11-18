import profilePic from "../assets/profile.png";

export default function CardProfile() {
  return (
    <div className="profile">
      <img src={profilePic} alt="profile picture" className="profile-img" />
    </div>
  );
}
