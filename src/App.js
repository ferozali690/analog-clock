import React from "react";
import AnalogClock from "analog-clock-react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        width: "200px",
        useCustomTime: true,
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "lightblue",
        centerColor: "#459cff",
        handColors: {
          second: "green",
          minute: "blue",
          hour: "black",
        },
        seconds: 1,
        minutes: 10,
        hours: 22,
      },
    };
  }
  updateClock = () => {
    let asiaTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    let date = new Date(asiaTime);

    this.setState({
      options: {
        ...this.state.options,
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours(),
      },
    });
  };
  componentDidMount() {
    this.interval = setInterval(this.updateClock, 1000);
  }

  render() {
    return (
      <div className="App">
        <AnalogClock {...this.state.options} />
      </div>
    );
  }
}

export default App;
