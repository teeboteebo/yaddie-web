import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./styles.scss"

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

  state = {
    currentIndex: 0,
    responsive: { 1000: { items: 3 } },
    galleryItems: this.galleryItems()
  }

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

  galleryItems() {
    return this.items.map(i => (
      <img src={this.imgArray[i - 1]} className="slider-img">
        {console.log(i)}
      </img>
    ))
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state
    return (
      <div className="slider-container">
        <AliceCarousel
          autoPlay={true}
          buttonsDisabled={true}
          autoPlayInterval={3000}
          slideToIndex={4}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />

        <nav>{this.items.map(this.thumbItem)}</nav>
        <button onClick={() => this.Carousel.slidePrev()}>Prev button</button>
        <button onClick={() => this.Carousel.slideNext()}>Next button</button>
      </div>
    )
  }
}

export default ImageSlider
