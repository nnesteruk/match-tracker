import { Button } from "shared/ui/button";
import "./header.styles.css";

export const Header = () => {
  return (
    <header className="flex justify-between ">
      <h1 className="font-[Tactic] text-[32px]">Match Tracker</h1>
      <Button />
    </header>
  );
};
