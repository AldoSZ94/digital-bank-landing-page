import iconFacebook from "../../assets/img/icon-facebook.svg";
import iconInstagram from "../../assets/img/icon-instagram.svg";
import iconPinterest from "../../assets/img/icon-pinterest.svg";
import iconTwitter from "../../assets/img/icon-twitter.svg";
import iconYoutube from "../../assets/img/icon-youtube.svg";
import logoLight from "../../assets/img/logo-light.svg";
import { MainButton } from "../common/MainButton";

const navLinks = [
  { text: "About Us", href: "#" },
  { text: "Contact", href: "#" },
  { text: "Blog", href: "#" },
  { text: "Careers", href: "#" },
  { text: "Support", href: "#" },
  { text: "Privacy Policy", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-blue-950 py-12">
      <div className="mx-auto grid w-9/10 max-w-300 gap-6 md:grid-cols-3">
        <div className="flex flex-col items-center gap-6">
          {/* Logo  */}
          <a className="block" href="/" aria-label="Digitalbank - Home">
            <img className="w-50" src={logoLight} alt="" />
          </a>
          {/* Social links */}
          <div className="flex items-center justify-center gap-3 md:row-start-2">
            <a href="#" aria-label="Facebook">
              <img className="w-6" src={iconFacebook} alt="" />
            </a>
            <a href="#" aria-label="YouTube">
              <img className="w-6" src={iconYoutube} alt="" />
            </a>
            <a href="#" aria-label="Twitter">
              <img className="w-6" src={iconTwitter} alt="" />
            </a>
            <a href="#" aria-label="Pinterest">
              <img className="w-6" src={iconPinterest} alt="" />
            </a>
            <a href="#" aria-label="Instagram">
              <img className="w-6" src={iconInstagram} alt="" />
            </a>
          </div>
        </div>
        <nav>
          <ul className="grid justify-items-center gap-2 lg:grid-cols-2">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a
                  className="text-gray-100 transition hover:text-green-500"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-center gap-3 md:items-end">
          <MainButton />
          <p className="text-end">© Digitalbank. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
