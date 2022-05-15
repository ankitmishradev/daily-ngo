import { Navigation } from "./navigation";
import { ContactBar } from "./contact_bar";
import { Brand } from "./brand";

export const MainHeader = () => {
  return (
    <header className="main-header">
      <ContactBar />
      <div className="main-header__navigation">
        <Brand />
        <Navigation />
      </div>
    </header>
  );
};
