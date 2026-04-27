import { HiBars3 } from "react-icons/hi2";
import { Button, type ButtonProps } from "@/components/Button";
import s from "./nav.module.scss";

type NavLink = Pick<ButtonProps, "variant" | "color"> & { label: string };

const links: NavLink[] = [
  { label: "About", variant: "ghost", color: "dark" },
  { label: "Projects", variant: "ghost", color: "dark" },
  { label: "Careers", variant: "ghost", color: "dark" },
  { label: "News", variant: "ghost", color: "dark" },
  { label: "Contact Us", variant: "solid", color: "orange" },
];

const Nav = () => {
  return (
    <nav className={s.container} data-nav>
      <img className={s.logo} src="/images/brand/logo.svg" alt="Logo" />
      <Button
        variant="solid"
        color="orange"
        className={s.burger}
        aria-label="Open menu"
      >
        <HiBars3 size={16} />
      </Button>
      <ul className={s.links}>
        {links.map((link) => (
          <li key={link.label}>
            <Button variant={link.variant} color={link.color}>
              {link.label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
