import React from "react";
import { Col, Row, Button, Form, FormGroup, Input } from "reactstrap";
import "./style.scss";

class SearchBar extends React.Component {
  render() {
    return (
      <article className="search-bar">
        <Form>
          <FormGroup row>
            <Col sm={10}>
              <Input
                type="text"
                name="search-bar"
                placeholder="Sök efter recept.."
              />
            </Col>
          </FormGroup>
        </Form>
      </article>
    );
  }
}
export default SearchBar;
