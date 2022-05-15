import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface QisItem {
  icon: IconProp;
  title: string;
  description: string;
  href: string;
}

export const qisItems: QisItem[] = [
  {
    icon: ["fas", "bullseye"],
    title: "Our Mission",
    description:
      "We work to ensure every needy gets the necessary help for living. We want to everyone to be equal.",
    href: "#",
  },
  {
    icon: ["fas", "piggy-bank"],
    title: "Make Donation",
    description:
      "We work to ensure every needy gets the necessary help for living. We want to everyone to be equal.",
    href: "#",
  },
  {
    icon: ["fas", "hands-holding"],
    title: "Help & Support",
    description:
      "We work to ensure every needy gets the necessary help for living. We want to everyone to be equal.",
    href: "#",
  },
  {
    icon: ["fas", "puzzle-piece"],
    title: "Our Campaign",
    description:
      "We work to ensure every needy gets the necessary help for living. We want to everyone to be equal.",
    href: "#",
  },
];
