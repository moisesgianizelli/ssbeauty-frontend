import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "../../../Images/GalleryImages/data";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ImagesGallery from "./ImagesGallery";

export const Gallery = () => {
  const [index, setIndex] = useState<number>(-1);
  return (
    <>
      <ImagesGallery
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Fullscreen, Thumbnails]}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
};
