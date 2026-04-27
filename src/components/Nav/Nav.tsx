import Image from "next/image";
import s from "./nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <Image
        className={s.logo}
        src="/logo.png"
        alt="Logo"
        width={192}
        height={96}
      />
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Careers</li>
        <li>News</li>
      </ul>
    </nav>
  );
};

export default Nav;
