import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

class RecipePopOver extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <span>
        <Button
          className="mr-1"
          color="secondary"
          id={"Popover-" + this.props.id}
          type="button"
        ></Button>
        <Popover
          name={this.state.test}
          isOpen={this.state.popoverOpen}
          target={"Popover-" + this.props.id}
          toggle={this.toggle}
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            <div>
              <h1>{this.props.test}</h1>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <span></span>
                </li>
              </ul>
            </div>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover>
      </span>
    );
  }
}

export default RecipePopOver;
