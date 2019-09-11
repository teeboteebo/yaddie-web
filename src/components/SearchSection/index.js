import React from "react";
import { Col, Input, Button } from "reactstrap";
import "./style.scss";

class SearchSection extends React.Component {
  render() {
    return (
      <section className="search-section">
        <Col sm={12} className="button-inside">
          <Input
            className="search-bar"
            type="text"
            name="search"
            placeholder="Sök efter recept.."
          />
          <Button type="btn" color="success" className="search-button">
            Sök
          </Button>
        </Col>
        <a
          href="/till-receptvyn"
          type="btn"
          className="btn btn-success search-by-category text-white"
        >
          Sök efter kategori!
        </a>
        <a
          href='/nytt-recept'
          type='btn'
          className='btn btn-primary add-recipes text-white'>
          Lägg till recept!
        </a>
        </Col>
      </section>
    );
  }
}
export default SearchSection;
