import React from "react";
import axios from "axios";

import { Col, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { Search } from "react-feather";
import "./style.scss";

// import "react-bootstrap-typeahead/css/Typeahead.css";

class SearchSection extends React.Component {
  // state = {
  //   query: "",
  //   data: [],
  //   searchResult: []
  // };

  // handleInputChange = event => {
  //   this.setState(
  //     {
  //       query: event.target.value
  //     },
  //     () => {
  //       this.filterArray();
  //     }
  //   );
  // };

  // async getData() {
  //   await axios({
  //     method: "get",
  //     url: "/api/tag"
  //   }).then(data => {
  //     this.setState({
  //       data
  //     });
  //     console.log(this.state.data);
  //   });
  // }

  // filterArray = () => {
  //   console.log("test");
  //   console.log(this.state.data.data);
  //   let testarray = [];

  //   this.state.data.data.map(i => {
  //     return testarray.push(i.name.toLowerCase());
  //   });
  //   let searchString = this.state.query;

  //   console.log(searchString);
  //   testarray = testarray.filter(i => i.includes(searchString.toLowerCase()));
  //   console.log(testarray);
  //   this.setState({ searchResult: testarray });
  // };

  // componentDidMount() {
  //   this.getData();
  // }
  constructor(props) {
    super(props);

    this.searchHandler = this.searchHandler.bind(this);

    this.state = {
      searchInput: "",
      resultTags: [],
      resultRecipes: []
    };
  }
  async searchHandler(e) {
    let searchInput = e.target.value;
    this.setState({
      searchInput: e.target.value
    });
    if (searchInput.length > 1) {
      let tags = await axios({
        method: "get",
        url: `/api/tag/${searchInput}`
      });
      tags = tags.data;
      let recipes = await axios({
        method: "get",
        url: `/api/recipes/search/${searchInput}`
      });
      recipes = recipes.data;

      this.setState({
        resultTags: tags,
        resultRecipes: recipes
      });
    } else {
      this.setState({
        resultTags: [],
        resultRecipes: []
      });
    }
    console.log(searchInput);
  }

  onEnterPress = e => {
    if (e.key === "Enter") {
      document.getElementById("search-btn").click();
    }
  };

  render() {
    return (
      <section className='search-section'>
        <Col lg={9} md={10} sm={12} className='button-inside'>
          <Input
            className="search-bar"
            type="text"
            name="search"
            placeholder="Sök efter recept.."
            onChange={this.searchHandler}
            value={this.state.searchInput}
            onKeyPress={this.onEnterPress}
          />
          <Search className="search-logo" color="#555" />
          <div className="search-res">
            {this.state.searchInput.length > 1 ? (
              this.state.resultRecipes.length < 1 &&
              this.state.resultTags < 1 ? (
                <table>
                  <tbody className="recipe-list">
                    <tr>
                      <td>Inga resultat kunde hittas</td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table>
                  <tbody className="recipe-list">
                    {this.state.resultTags.length > 0 ? (
                      <tr>
                        <th>Kategorier</th>
                      </tr>
                    ) : null}
                    {this.state.resultTags.map((item, index) => (
                      <tr key={index} className="result-item">
                        <td>
                          <Link to={"/sök?kategori='" + item.name + "'"}>
                            <div>{item.name}</div>
                          </Link>
                        </td>
                      </tr>
                    ))}
                    {this.state.resultRecipes.length > 0 ? (
                      <tr>
                        <th>Recept</th>
                      </tr>
                    ) : null}
                    {this.state.resultRecipes.map((item, index) => (
                      <tr key={index} className="result-item">
                        <td className="pr-3 w-100">
                          <Link to={"/recept/" + item._id}>
                            <div>
                              <img
                                src={item.image}
                                style={{ maxWidth: 100, height: "auto" }}
                                alt={item.heading + " bild"}
                                className="mr-3"
                              />
                              {item.heading}
                            </div>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            ) : (
              ""
            )}
          </div>

          <Link
            to={'/sök/recept?namn="' + this.state.searchInput + '"'}
            type="btn"
            id="search-btn"
            className="btn btn-success search-button"
          >
            Sök
          </Link>
        </Col>
        <Link
          to="/till-receptvyn"
          type="btn"
          className="btn btn-success search-by-category text-white"
        >
          Sök efter kategori!
        </Link>
        <Link
          to="/nytt-recept"
          type="btn"
          className="btn btn-primary add-recipes text-white float-right"
        >
          Lägg till recept!
        </Link>
        <Col sm={12}>
          <NavLink
            to='/till-receptvyn'
            exact
            type='btn'
            className='btn btn-success search-by-category text-white'>
            Sök efter kategori!
          </NavLink>
        </Col>
        <Col sm={12}>
          <NavLink
            to='/nytt-recept'
            exact
            type='btn'
            className='btn btn-primary add-recipes text-white'>
            Lägg till recept!
          </NavLink>
        </Col>
      </section>
    );
  }
}
export default SearchSection;
