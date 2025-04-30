import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="">
      <div className="container mx-auto max-w-6xl flex flex-col gap-2.5 items-center px-2 py-8 h-full te">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-2.5">
          <a href="/" className="hidden md:inline-block">
            <img src="logo.png" className="w-[65%]" />
          </a>
          <address className="w-full flex flex-col gap-4">
            <div className="text-sm flex gap-6 items-center">
              <FontAwesomeIcon className="text-3xl" icon={faEnvelope} />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:highlandeyeclinic@gmail.com" className="">
                  highlandeyeclinic@gmail.com
                </a>
              </div>
            </div>
            <div className="text-sm flex gap-6 items-center">
              <FontAwesomeIcon className="text-3xl" icon={faPhone} />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="#" className="">
                  +263 78 295 4149
                </a>
              </div>
            </div>
            <div className="text-sm flex gap-6 items-center">
              <FontAwesomeIcon className="text-3xl" icon={faLocationDot} />
              <div>
                <p className="font-semibold">Location</p>
                <p>
                  Suite 19, 3rd Floor, Medical Centre, 123 Herbert Chitepo
                  Street, Mutare
                </p>
              </div>
            </div>
          </address>
          <ul className="w-full">
            <h1 className="font-bold mb-2.5">Quick Links</h1>
            <li className="text-sm">
              <a href="/about">About us</a>
            </li>
            <li className="text-sm">
              <a href="/contact">Contact</a>
            </li>
            <li className="text-sm">
              <a href="/services">Services</a>
            </li>
          </ul>
          <div className="flex flex-col justify-between">
            <ul className="w-full">
              <h1 className="font-bold mb-2.5">Clinic Hours</h1>
              <li className="text-sm flex justify-between w-full">
                <span>Mon to Fri</span>
                <span>8.30am - 4.30pm</span>
              </li>
              <li className="text-sm flex justify-between w-full">
                <span>Sat & Sun</span>
                <span>CLOSED</span>
              </li>
            </ul>
            <div className="w-full">
              <h1 className="font-bold mb-2.5">Socials</h1>
              <div className="flex gap-2.5">
                <a href="https://www.facebook.com/highlandseyeclinic/">
                  <FontAwesomeIcon className="text-3xl" icon={faFacebook} />
                </a>
                <a href="https://wa.me/263782954149">
                  <FontAwesomeIcon className="text-3xl" icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full my-3.5 border-b border-b-gray-500"></hr>
        <p>&copy; {year} Highlands Eye Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
