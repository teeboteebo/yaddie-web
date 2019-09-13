import React from "react";
import { Col, Input, Button } from "reactstrap";
import "./style.scss";

import axios from "axios";

class SearchSection extends React.Component {
  state = {
    query: "",
    data: [],
    searchString: []
  };

  handleInputChange = event => {
    this.setState(
      {
        query: event.target.value
      },
      () => {
        this.filterArray();
      }
    );
  };

  async getData() {
    await axios({
      method: "get",
      url: "/api/tag"
    }).then(data => {
      this.setState({
        data
      });
      console.log(this.state.data);
    });
    // .then(response => response.json())
    // .then(responseData => {
    //   // console.log(responseData)
    //   this.setState({
    //     data: responseData,
    //     searchString: responseData
    //   });
    // });
  }

  filterArray = () => {
    console.log("test");
    console.log(this.state.data.data);
    let testarray = [];

    this.state.data.data.map(i => {
      //console.log(i);
      return testarray.push(i.name);
    });

    //console.log(testarray);

    let searchString = this.state.query;
    let responseData = this.state.data;

    console.log(searchString);
    testarray = testarray.filter(i => i.includes(searchString));
    console.log(testarray);
    /*
    if (searchString.length > 0) {
      // console.log(responseData[i].name);
      console.log(searchString);
      responseData = responseData.filter(searchString);
      this.setState({
        responseData
      });
    }
    */
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <section className="search-section">
        <Col sm={12} className="button-inside">
          <Input
            className="search-bar"
            type="text"
            name="search"
            placeholder="Sök efter recept.."
            onChange={this.handleInputChange}
          />
          <Button type="submit" color="success" className="search-button">
            Sök
          </Button>
          {/* <div>
            {this.state.responseData.map(i => (
              <p>{i.name}</p>
            ))}
          </div> */}
        </Col>
        <a
          href="/till-receptvyn"
          type="btn"
          className="btn btn-success search-by-category text-white"
        >
          Sök efter kategori!
        </a>
        <a
          href="/nytt-recept"
          type="btn"
          className="btn btn-primary add-recipes text-white float-right"
        >
          Lägg till recept!
        </a>
      </section>
    );
  }
}
export default SearchSection;
