import React from "react"
import { Link } from "react-router-dom"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./styles.scss"
//import { ArrowLeftCircle, ArrowRightCircle } from "react-feather"

class ImageSlider extends React.Component {
  sliderArray = [
    {
      name: "Pizza",
      image: "/images/pizza.jpg",
      link: "/recept/pizza",
      alt: "Bild på en pizza"
    },
    {
      name: "Hamburgare",
      image: "/images/hamburger.jpg",
      link: "/recept/hamburgare",
      alt: "Bild på en hamburgare"
    },
    {
      name: "What",
      image: "/images/what.jpg",
      link: "/recept/what",
      alt: "Bild på någon våffelgrej?"
    },
    {
      name: "Korvrullar",
      image: "/images/korv.jpg",
      link: "/recept/korv",
      alt: "Bild på korvrullar"
    },
    {
      name: "Pommes",
      image: "/images/fries.jpg",
      link: "/recept/fries",
      alt: "Bild på pommes"
    },
    {
      name: "Spaghetti",
      image: "/images/spaghetti.jpg",
      link: "/recept/spaghetti",
      alt: "Bild på korv och spaghetti"
    }
  ]

  state = {
    currentIndex: 0,
    galleryItems: this.galleryItems(),
    itemsInSlide: 0,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 900: { items: 3 } }
  }

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

  galleryItems() {
    return this.sliderArray.map((slide, index) => (
      <Link to={slide.link}>
        <div>
          <img src={slide.image} className="slider-img" alt={slide.alt}></img>
          <label className="img-label">{slide.name}</label>
        </div>
      </Link>
    ))
  }
  /*
  slideNext = () =>
    this.setState(
      this.state.currentIndex >= 7
        ? { currentIndex: 0 }
        : { currentIndex: this.state.currentIndex + 1 }
    )

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
*/

  handleOnSlideChange = event => {
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
  }

  render() {
    const { galleryItems, responsive } = this.state
    return (
      <div className="slider-container">
        <AliceCarousel
          autoPlay={true}
          buttonsDisabled={true}
          autoPlayInterval={5000}
          items={galleryItems}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
        />
      </div>
    )
  }
}

export default ImageSlider

/* CODE FOR BUTTONS
<div className="button-left" onClick={() => this.slidePrev()}>
<ArrowLeftCircle />
</div>
<div className="button-right" onClick={() => this.slideNext()}>
<ArrowRightCircle />
</div>
*/
