import './Gallery.css';
import Yearwise from "./Yearwise/Yearwise";

function Gallery() {
  return (
    <div className="App">
      <div className="Gllery" id="Gallery">
      <header className="page-header">
        <div className="center">
          <div className="page-title">
            
            <h2 in-view="fade-right" className="in-view">
             Gallery
            </h2>
          </div>
        </div>
      </header>
      </div>
      <Yearwise year="2018" imageLink="https://randomwordgenerator.com/img/picture-generator/55e0d0434c53a914f1dc8460962e33791c3ad6e04e507440722d72d29245c5_640.jpg" />
    </div>



  );
}


export default Gallery;
