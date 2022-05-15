import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ContactItem } from "./types";
import { contactItems } from "./data";

export const ContactButton = (props: ContactItem) => {
  return (
    <li className="contact-bar__item">
      <a href={props.href} className="contact-bar__link">
        <div>
          <FontAwesomeIcon icon={props.icon} />
          {props.text ? <span>{props.text}</span> : <></>}
        </div>
      </a>
    </li>
  );
};

export const ContactBar = () => {
  const ContactButtons = contactItems.map((item, i) => {
    return (
      <ContactButton
        key={i}
        href={item.href}
        icon={item.icon}
        tooltip={item.tooltip}
        text={item.text}
      />
    );
  });

  return (
    <nav className="contact-bar">
      <ul className="contact-bar__list">{ContactButtons}</ul>
    </nav>
  );
};
