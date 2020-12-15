import { Component } from "react";
import "./App.css";
import Card from "./Card";
//Class Based Component
class App extends Component {
  state = {
    cardList: [
      {
        title: "abc1",
        subtitle: "xyz",
        desc: "lorep eps",
      },
      {
        title: "abc2",
        subtitle: "xyz",
        desc: "lorep eps",
      },
      {
        title: "abc3",
        subtitle: "xyz",
        desc: "lorep eps",
      },
      {
        title: "abc3",
        subtitle: "xyz",
        desc: "lorep eps",
      },
      {
        title: "abc4",
        subtitle: "xyz",
        desc: "lorep eps",
      },
    ],
  };

  updateCardList = () => {
    this.state.cardList.push({
      title: "abc5",
      subtitle: "xyz",
      desc: "lorep eps",
    });
    console.log(this.state.cardList);
    this.setState({ cardList: this.state.cardList }, () => {
      // alert("state updated");
    });
  };
  render() {
    return (
      <>
        <button onClick={this.updateCardList}>click me</button>
        <div className="row">
          {this.state.cardList.map((card, key) => {
            return (
              <Card
                key={key}
                title={card.title}
                subtitle={card.subtitle}
                desc={card.desc}
              />
            );
          })}
          {/* <Card title="abc1" subtitle="xyz" desc="lorep eps" />
          <Card title="abc2" subtitle="xyz" desc="lorep eps" />
          <Card title="abc3" subtitle="xyz" desc="lorep eps" />
          <Card title="abc4" subtitle="xyz" desc="lorep eps" />
          <Card title="abc5" subtitle="xyz" desc="lorep eps" />
          <Card title="abc6" subtitle="xyz" desc="lorep eps" /> */}
        </div>
      </>
    );
  }
}

export default App;
