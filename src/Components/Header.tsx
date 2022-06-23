import "./Header.scss";
import profileImg from "../Images/profile-img.jpeg";

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li className="profile-title-container">
            <img src={profileImg} alt="profile icon." />
            <h1>Home</h1>
          </li>
          <li>
            <button>
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
