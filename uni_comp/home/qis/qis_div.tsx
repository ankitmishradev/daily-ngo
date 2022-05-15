import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlatButton } from "../../../components";
import { Space } from "../../../components/standalone/space";
import { QisItem } from "./constants";

export const QisDiv = (props: QisItem) => {
  return (
    <li className="qis-item">
      <header className="qis-item__header">
        <FontAwesomeIcon
          icon={props.icon}
          className="qis-item__icon"
          size="4x"
        />
      </header>
      <Space axis="vertical" />
      <main className="qis-item__main">
        <h3 className="qis-item__title">{props.title}</h3>
        <Space axis="vertical" />
        <p className="qis-item__description">{props.description}</p>
      </main>
      <Space axis="vertical" factor="4" />
      <footer className="qis-item__footer">
        <FlatButton text="Read More" class="qis-item__button" />
      </footer>
    </li>
  );
};
