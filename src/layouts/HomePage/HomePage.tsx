import { Booking } from "./components/Booking";
import { ExploreTopOptions } from "./components/ExploreTopOptions";
import { Heros } from "./components/Heros";

export const HomePage = () => {
  return (
    <>
      <ExploreTopOptions />
      <Booking />
      <Heros />
    </>
  );
};
