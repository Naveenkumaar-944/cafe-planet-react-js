import Gallery1 from "../assets/gallery/Gallery1.png";
import Gallery2 from "../assets/gallery/Gallery2.png";
import Gallery3 from "../assets/gallery/Gallery3.png";
import Gallery4 from "../assets/gallery/Gallery4.png";
import Gallery5 from "../assets/gallery/Gallery5.png";
import Gallery6 from "../assets/gallery/Gallery6.png";

function Gallery() {
  return (
    <section id="gallery" className="GallerySection">

      <h2>Our Gallery</h2>

      <div className="GalleryContainer">

        <div className="GalleryCard">
          <img src={Gallery1} alt="Coffee Image 1" />
        </div>

        <div className="GalleryCard">
          <img src={Gallery2} alt="Coffee Image 2" />
        </div>

        <div className="GalleryCard">
          <img src={Gallery3} alt="Coffee Image 3" />
        </div>

        <div className="GalleryCard">
          <img src={Gallery4} alt="Coffee Image 4" />
        </div>

        <div className="GalleryCard">
          <img src={Gallery5} alt="Coffee Image 5" />
        </div>

        <div className="GalleryCard">
          <img src={Gallery6} alt="Coffee Image 6" />
        </div>

      </div>

    </section>
  );
}

export default Gallery;