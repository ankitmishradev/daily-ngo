import { navigationItems } from "../data";
import { NavigationDiv } from "./navigation_div";

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
