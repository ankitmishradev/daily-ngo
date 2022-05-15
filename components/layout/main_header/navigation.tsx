import Link from "next/link";
import { useRouter } from "next/router";

import { navigationItems } from "./data";
import { NavigationItem } from "./types";

export const NavigationDiv = (props: NavigationItem) => {
  const router = useRouter();

  const classname = `navigation__item${
    router.pathname === props.href ? " active" : ""
  }`;

  return (
    <li className={classname}>
      <Link href={props.href}>
        <a className="navigation__link">
          <div>{props.name}</div>
        </a>
      </Link>
    </li>
  );
};

export const Navigation = () => {
  const NavigationDivs = navigationItems.map((item, i) => {
    return <NavigationDiv key={i} href={item.href} name={item.name} />;
  });

  return (
    <nav className="navigation">
      <ul className="navigation__list">{NavigationDivs}</ul>
    </nav>
  );
};
