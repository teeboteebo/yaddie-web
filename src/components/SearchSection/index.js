import React from "react"
import axios from "axios"

import { Row, Col, Input } from "reactstrap"
import { Link } from "react-router-dom"
import { Search } from "react-feather"
import "./style.scss"

class SearchSection extends React.Component {
  constructor(props) {
    super(props)

    this.searchHandler = this.searchHandler.bind(this)

    this.state = {
      searchInput: "",
      resultTags: [],
      resultRecipes: [],
      resultSelectedIndex: -1
    }
  }
  async searchHandler(e) {
    let searchInput = e.target.value

    this.setState({
      searchInput: e.target.value,
      resultFetched: false
    })
    if (searchInput.length > 1) {
      let tags = await axios({
        method: "get",
        url: `/api/tag/${searchInput}`
      })
      tags = tags.data
      let recipes = await axios({
        method: "get",
        url: `/api/recipes/search/${searchInput}`
      })
      recipes = recipes.data

      this.setState({
        resultTags: tags,
        resultRecipes: recipes,
        resultSelectedIndex: -1,
        resultFetched: true
      })
    } else {
      this.setState({
        resultTags: [],
        resultRecipes: []
      })
    }
  }

  onKeyDown = e => {
    if (["Enter", "ArrowDown", "ArrowUp"].includes(e.key)) {
      e.preventDefault()
    }
    if (e.key === "Enter") {
      if (this.state.resultSelectedIndex >= 0) {
        let combo = this.state.resultTags.concat(this.state.resultRecipes)
        this.setState({
          searchInput: combo[this.state.resultSelectedIndex].name
        })
        if (this.state.searchInput === undefined) {
          this.setState({ searchInput: "" })
        }
      }

      // ugly hack - we should really push to history - check React router docs
      document.getElementById("search-btn").click()
    }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      let newSelectedIndex =
        this.state.resultSelectedIndex + (e.key === "ArrowDown" ? 1 : -1)
      let max =
        this.state.resultTags.length + this.state.resultRecipes.length - 1
      newSelectedIndex = newSelectedIndex > max ? 0 : newSelectedIndex
      newSelectedIndex = newSelectedIndex < 0 ? max : newSelectedIndex
      this.setState({ resultSelectedIndex: newSelectedIndex })
    }
  }

  render() {
    return (
      <section className="search-section">
        <Col lg={12} md={12} sm={12} className="button-inside">
          <Input
            className="search-bar"
            type="text"
            name="search"
            placeholder="Sök recept/kategori.."
            onChange={this.searchHandler}
            value={this.state.searchInput || ""}
            onKeyDown={this.onKeyDown}
          />
          <Search className="search-logo" color="#555" />
          <div className="search-res">
            {this.state.searchInput ? (
              this.state.searchInput.length > 1 ? (
                this.state.resultRecipes.length < 1 &&
                this.state.resultTags < 1 &&
                this.state.resultFetched ? (
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
                        <tr
                          key={index}
                          className={
                            this.state.resultSelectedIndex === index
                              ? "result-item selected"
                              : "result-item"
                          }
                        >
                          <td>
                            <Link to={"/sök?kategori=" + item.name }>
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
                        <tr
                          key={index}
                          className={
                            this.state.resultSelectedIndex ===
                            index + this.state.resultTags.length
                              ? "result-item selected"
                              : "result-item"
                          }
                        >
                          <td className="pr-3 w-100">
                            <Link to={"/recept/" + item._id}>
                              <Row>
                                <Col xs={3} md={3}>
                                  <img
                                    src={item.image}
                                    style={{ maxWidth: "100%", height: "auto" }}
                                    alt={item.heading + " bild"}
                                  />
                                </Col>
                                <Col xs={9} md={9} className="padding-left-fix">
                                  <p className="recipe-name">{item.heading}</p>
                                </Col>
                              </Row>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>

          <Link
            to={"/sök?namn=" + this.state.searchInput}
            type="btn"
            id="search-btn"
            className="btn btn-success search-button"
          >
            Sök
          </Link>
        </Col>

        <Link
          to="/nytt-recept"
          type="btn"
          className="btn btn-primary col-12 col-md-5 add-recipes text-white float-right"
        >
          Lägg till recept!
        </Link>
      </section>
    )
  }
}
export default SearchSection
