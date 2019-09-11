import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./styles.scss"
//import { ArrowLeftCircle, ArrowRightCircle } from "react-feather"

class ImageSlider extends React.Component {
  items = [1, 2, 3, 4, 5, 6]

  imgArray = [
    "/images/pizza.jpg",
    "/images/hamburger.jpg",
    "/images/what.jpg",
    "/images/korv.jpg",
    "/images/fries.jpg",
    "/images/spaghetti.jpg"
  ]

  label = ["Pizza", "Hamburgare", "What", "Korvrullar", "Pommes", "Spaghetti"]

  state = {
    currentIndex: 0,
    galleryItems: this.galleryItems(),
    itemsInSlide: 0,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 900: { items: 3 } }
  }

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

  galleryItems() {
    return this.imgArray.map((img, index) => (
      <div>
        <img src={img} className="slider-img"></img>
        <label className="img-label">{this.label[index]}</label>
      </div>
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
    console.log(event)
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
    console.log(this.state.itemsInSlide, item)
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
