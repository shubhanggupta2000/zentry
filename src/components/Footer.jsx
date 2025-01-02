import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-8 text-white">
      <div className="container mx-auto flex flex-col gap-8 px-4 md:gap-12">
        {/* Main Sections */}
        <div className="grid grid-cols-2 gap-8 text-xl md:grid-cols-4 text-black">
          {/* Explore Section */}
          <div>
            <h4 className="mb-4 font-bold text-sm">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#prologue" className="hover:underline">
                  Prologue
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="mb-4 font-bold text-sm">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#radiant" className="hover:underline">
                  Radiant
                </a>
              </li>
              <li>
                <a href="#nexus" className="hover:underline">
                  Nexus ↗
                </a>
              </li>
              <li>
                <a href="#zigma" className="hover:underline">
                  Zigma
                </a>
              </li>
              <li>
                <a href="#azul" className="hover:underline">
                  Azul
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="mb-4 font-bold text-sm">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="mb-4 font-bold text-sm">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#media-kit" className="hover:underline">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Privacy Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm font-light md:text-left">
            ©Zentry 2024. All rights reserved
          </p>

          <div className="flex justify-center gap-4 md:justify-start">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-500 ease-in-out hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <a
            href="#privacy-policy"
            className="text-center text-sm font-light hover:underline md:text-right"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
