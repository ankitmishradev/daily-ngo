interface SectionProps {
  children: React.ReactNode;
  className: string;
}

export const Section = (props: SectionProps) => {
  return (
    <section
      className={`section${props.className ? ` ${props.className}` : ""}`}
    >
      {props.children}
    </section>
  );
};
