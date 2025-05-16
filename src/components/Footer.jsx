import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center  fixed bottom-0 left-0 w-full gap-6 border-t bg-orange-400 p-4 ">
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
              to="/Address"
              className=" hover:text-white cursor-pointer transition duration-100">
              Address
            </Link>
          </li>
          <li>
            <Link
              to="/Copyright"
              className=" hover:text-white cursor-pointer transition duration-100">
              Copyright
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
