import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center w-full gap-10 border-t bg-orange-400 p-4 mt-20">
        <ul className="flex gap-10">
          <li>
            <Link
              to="/Contatti"
              className=" hover:text-white cursor-pointer transition duration-100">
              Contatti
            </Link>
          </li>
          <li>
            <Link
              to="/SocialMedia"
              className=" hover:text-white cursor-pointer transition duration-100">
              Social Media
            </Link>
          </li>
          <li>
            <Link
              to="/FAQ"
              className=" hover:text-white cursor-pointer transition duration-100">
              FAQ
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
