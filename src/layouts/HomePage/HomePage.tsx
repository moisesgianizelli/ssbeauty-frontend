import { AboutMe } from "./components/AboutMe";
import { ExploreTopOptions } from "./components/ExploreTopOptions";
import { Heros } from "./components/Heros";

export const HomePage = () => {
  return (
    <>
      <ExploreTopOptions />
      <AboutMe />
      <Heros />
    </>
  );
};
