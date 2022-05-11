import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationItem } from "../types";

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
