import { Section } from "../../../components/layout";
import { Space } from "../../../components/standalone/space";
import { qisItems } from "./constants";
import { QisDiv } from "./qis_div";

export const Qis = () => {
  const QisItems = qisItems.map((item, i) => {
    const Item = () => (
      <QisDiv
        icon={item.icon}
        title={item.title}
        description={item.description}
        href={item.href}
      />
    );
    return i == 0 ? (
      <Item key={i} />
    ) : (
      <>
        <Space axis="horizontal" factor="4" />
        <Item key={i} />
      </>
    );
  });

  return (
    <Section className="qis">
      <ul className="qis__list">{QisItems}</ul>
    </Section>
  );
};
