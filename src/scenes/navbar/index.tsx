import Logo from "@/assets/Logo.svg";
import Link from "./Link";

/* eslint-disable @typescript-eslint/ban-types */
type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={` ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />
            {/* RIGHT SIDE */}

            <div className={`${flexBetween} w-full`}>
              {" "}
              {/* Left side for nav links*/}
              <div className={`${flexBetween} w-full gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              {/* Right side sign in and become a member*/}
              <div className={`${flexBetween}gap-8 text-sm`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
