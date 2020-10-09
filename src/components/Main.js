import React, { Component } from "react";
import Select from "./Select";
import { Bar } from "react-chartjs-2";
import "../styles/Main.css";

class Main extends Component {
  state = {};

  global = (
    <main>
      <Bar
        data={{
          labels: ["Confirmed", "Recovered", "Deaths"],
          datasets: [
            {
              data: [
                this.props.data.TotalConfirmed,
                this.props.data.TotalRecovered,
                this.props.data.TotalDeaths,
              ],
              backgroundColor: [
                "rgba(255, 0, 0, 0.5)",
                "rgba(59, 178, 226, 0.5)",
                "rgba(0, 0, 0, 0.5)",
              ],
              borderColor: [
                "rgb(255, 0, 0)",
                "rgb(59, 178, 226)",
                "rgb(0, 0, 0)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={40}
        height={50}
        options={{
          title: {
            display: true,
            text: "Global Data",
            padding: 20,
            fontStyle: "normal",
            fontSize: 20,
          },
          legend: {
            display: false,
          },
        }}
      />
    </main>
  );

  location = (
    <main>
      <Select />
      <Bar
        data={{
          labels: ["Confirmed", "Recovered", "Deaths"],
          datasets: [
            {
              data: [
                this.props.data.TotalConfirmed,
                this.props.data.TotalRecovered,
                this.props.data.TotalDeaths,
              ],
              backgroundColor: [
                "rgba(255, 0, 0, 0.5)",
                "rgba(59, 178, 226, 0.5)",
                "rgba(0, 0, 0, 0.5)",
              ],
              borderColor: [
                "rgb(255, 0, 0)",
                "rgb(59, 178, 226)",
                "rgb(0, 0, 0)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={40}
        height={50}
        options={{
          title: {
            display: true,
            text: "Global Data",
            padding: 20,
            fontStyle: "normal",
            fontSize: 20,
          },
          legend: {
            display: false,
          },
        }}
      />
    </main>
  );

  render() {
    return this.props.type === "global" ? this.global : this.location;
  }
}

export default Main;
