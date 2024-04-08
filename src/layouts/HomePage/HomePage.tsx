import { Carousel } from './components/Carousel';
import { ExploreTopOptions } from './components/ExploreTopOptions';
import { Heros } from './components/Heros';
import { LibraryServices } from './components/LibraryServices';

export const HomePage = () => {
  return (
    <>
      <ExploreTopOptions />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
};
