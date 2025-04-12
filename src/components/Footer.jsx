import { Link } from "react-router-dom";
import { github } from "../assets";
import { contacts } from "../constants";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer
      className={`bg-tertiary ${styles.paddingX} w-full flex flex-col md:flex-row  items-center justify-between py-3`}
    >
      <div className="flex justify-between items-center gap-1 mb-3">
        {contacts.map((contact) => (
          <div
            onClick={() => window.open(contact.link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={contact.icon}
              alt="preview"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        ))}
      </div>

      <p className="text-sm">© 2025 Gloria Win Nyunt. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
