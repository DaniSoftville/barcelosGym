import Logo from "@/assets/Logo.svg";
import { SelectedPage } from "@/shared/types";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aperiam, beatae maxime ullam nulla aspernatur tempore ab, voluptates
            consectetur odit modi obcaecati optio aliquid doloremque sunt rem
            officiis iure necessitatibus?
          </p>
          <p>© Barcelos Crossfit All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5 cursor-pointer">Facebook</p>
          <p className="my-5 cursor-pointer">Instagram</p>
          <p className="my-5 cursor-pointer">Twitter</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 cursor-pointer">WhatsApp</p>
          <p className="my-5 cursor-pointer">Ofic. (+351) 932278369</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
