import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ContactItem {
  icon: IconProp;
  href: string;
  text?: string;
  tooltip: string;
}

export interface NavigationItem {
  href: string;
  name: string;
  children?: NavigationItem[];
}
