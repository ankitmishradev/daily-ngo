import { Navigation } from "./navigation/navigation";
import { Brand } from "./brand";

export const TopBar = () => {
  return (
    <header className="topbar">
      <Brand />
      <Navigation />
    </header>
  );
};
