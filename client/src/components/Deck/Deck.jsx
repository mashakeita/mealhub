import React, { Component } from "react";
import Card from "../Card/Card";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  render() {
    return (
      <div className="image__viewport">
        <div className="image__container">
          {this.state.cards}
          <div className="image__data">
            <div className="image__ingredients"></div>
            <Card id="" key=""></Card>
            <Card className="" id="" key="" />
            <Card className="" id="" key="" />
            <Card className="" id="" key="" />
            <Card className="" id="" key="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Deck;
