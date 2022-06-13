import { Component } from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import { image } from "./img.js";
import dice1 from "./images/dice1.svg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstCard: {},
      secondCard: {},
      game: false,
      btnName: "Go Roll",
      score1: 0,
      score2: 0,
      p1: "",
      p2: "",
    };

    this.startGame = this.startGame.bind(this);
    this.setTime = this.setTime.bind(this);

    document.body.style = "background: #777;";
  }

  startGame() {
    let randomFirstDice1 = Math.ceil(Math.random() * 6);
    let randomFirstDice2 = Math.ceil(Math.random() * 6);
    let randomSecondDice1 = Math.ceil(Math.random() * 6);
    let randomSecondDice2 = Math.ceil(Math.random() * 6);

    let result1 = randomFirstDice1 + randomFirstDice2;
    let result2 = randomSecondDice1 + randomSecondDice2;

    if (this.state.game) {
      return;
    }

    this.setState({
      firstCard: {
        dice1: image[`dice${randomFirstDice1}`],
        dice2: image[`dice${randomFirstDice2}`],
      },
      secondCard: {
        dice3: image[`dice${randomSecondDice1}`],
        dice4: image[`dice${randomSecondDice2}`],
      },
      game: true,
      btnName: "Rolling...",
    });

    console.log(result1, "first");
    console.log(result2, "second");

    if (result1 > result2) {
      this.setState({
        score1: this.state.score1 + 1,
        p1: <h5 className="pWin">Win</h5>,
        p2: <h5 className="pLost">Lost</h5>,
      });
    } else if (result1 < result2) {
      this.setState({
        score2: this.state.score2 + 1,
        p1: <h5 className="pLost">Lost</h5>,
        p2: <h5 className="pWin">Win</h5>,
      });
    } else {
      this.setState({
        p1: <h5 className="pDraw">Draw</h5>,
        p2: <h5 className="pDraw">Draw</h5>,
      });
    }

    this.setTime();
  }

  setTime() {
    setTimeout(() => {
      this.setState({ game: false, btnName: "Go Roll" });
    }, 1000);
  }

  render() {
    return (
      <div className="App container">
        <h1 className="game-header pt-5 pb-3 display-1">DICE GAME</h1>
        <h6 className="text-white mb-4">DICE GAME</h6>
        <button className="game-btn" onClick={this.startGame}>
          {this.state.btnName}
        </button>
        <div className="d-flex">
          <Card border="light" className="card-m">
            <Card.Header className="card-h text-white">
              <h1 className="px-2">Player 1</h1>
              <h5>Score: {this.state.score1}</h5>
              {this.state.p1}
            </Card.Header>
            <Card.Body className="card-b mb-5 mt-5">
              {this.state.game ? (
                <img
                  src={this.state.firstCard.dice1}
                  className="img-shake"
                  width="100"
                />
              ) : this.state.p1 ? (
                <img src={this.state.firstCard.dice1} width="100" />
              ) : (
                <img src={dice1} width="100" />
              )}
              {this.state.game ? (
                <img
                  src={this.state.firstCard.dice2}
                  className="img-shake"
                  width="100"
                />
              ) : this.state.p1 ? (
                <img src={this.state.firstCard.dice2} width="100" />
              ) : (
                <img src={dice1} width="100" />
              )}
            </Card.Body>
          </Card>
          <Card border="light" className="card-m">
            <Card.Header className="card-h text-white">
              <h1 className="px-2">Player 2</h1>
              <h5>Score: {this.state.score2}</h5>
              {this.state.p2}
            </Card.Header>
            <Card.Body className="card-b mb-5 mt-5">
              {this.state.game ? (
                <img
                  src={this.state.secondCard.dice3}
                  className="img-shake"
                  width="100"
                />
              ) : this.state.p2 ? (
                <img src={this.state.secondCard.dice3} width="100" />
              ) : (
                <img src={dice1} width="100" />
              )}
              {this.state.game ? (
                <img
                  src={this.state.secondCard.dice4}
                  className="img-shake"
                  width="100"
                />
              ) : this.state.p2 ? (
                <img src={this.state.secondCard.dice4} width="100" />
              ) : (
                <img src={dice1} width="100" />
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
