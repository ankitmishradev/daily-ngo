import { NavigationItem, ContactItem } from "./types";

export const brandData = {
  name: "Daily NGO",
  logo: "",
};

export const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "Events", href: "/events" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about-us" },
];

export const contactItems: ContactItem[] = [
  { icon: ["fab", "instagram"], href: "#", tooltip: "Instagram" },
  { icon: ["fab", "facebook"], href: "#", tooltip: "Facebook" },
  { icon: ["fab", "twitter"], href: "#", tooltip: "Twitter" },
  { icon: ["fab", "linkedin-in"], href: "#", tooltip: "LinkedIn" },
  { icon: ["fab", "youtube"], href: "#", tooltip: "YouTube" },
  {
    icon: ["fas", "phone"],
    href: "#",
    tooltip: "Call",
    text: "+91-0000000000",
  },
  {
    icon: ["fas", "envelope"],
    href: "#",
    tooltip: "Email",
    text: "abc@xyz.com",
  },
];
