export interface NavigationItem {
  href: string;
  name: string;
  children?: NavigationItem[];
}
