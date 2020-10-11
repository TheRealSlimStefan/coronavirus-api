import React, { Component } from "react";
import Select from "./Select";
import { Bar } from "react-chartjs-2";
import "../styles/Main.css";

class Main extends Component {
  state = {
    data: {
      Global: {
        TotalConfirmed: 0,
        TotalRecovered: 0,
        TotalDeaths: 0,
      },
      actualCountry: {
        Country: "",
        TotalConfirmed: 0,
        TotalRecovered: 0,
        TotalDeaths: 0,
      },
    },
    isLoaded: false,
  };
  
  createMain = (data) => {
    if(this.props.type === "global"){
      return (
        <main>
          <Bar
            data={{
              labels: ["Confirmed", "Recovered", "Deaths"],
              datasets: [
                {
                  data: [
                    data.Global.TotalConfirmed,
                    data.Global.TotalRecovered,
                    data.Global.TotalDeaths,
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
              scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {
                          if(value >= 1000 && value < 100000) return (value / 1000) + "K";
                          else if(value >= 1000000) return (value / 1000000) + "M";
                        }
                    }
                }]
              }
            }}
          />
        </main>
      );
    } else if(this.props.type === "location"){
      return (
        <main>
          <Select handleChange={this.handleChange} countries={this.props.data.Countries}/>
          <Bar
            data={{
              labels: ["Confirmed", "Recovered", "Deaths"],
              datasets: [
                {
                  data: [
                    data.actualCountry.TotalConfirmed,
                    data.actualCountry.TotalRecovered,
                    data.actualCountry.TotalDeaths,
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
                text: `${data.actualCountry.Country}`,
                padding: 20,
                fontStyle: "normal",
                fontSize: 20,
              },
              legend: {
                display: false,
              },
              scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {
                          if(value >= 1000 && value < 100000) return (value / 1000) + "K";
                          else if(value >= 1000000) return (value / 1000000) + "M";
                        }
                    }
                }]
              }
            }}
          />
        </main>
      );
    }
  }  

  componentDidMount(){
    const {data} = this.props;

    this.setState({
      data: {
        Global : data.Global,
        actualCountry: data.Countries[0],
      },
      isLoaded: true,
    })
  }

  handleChange = (e) => {
    console.log(e.target.value);
    console.log(this.props.data.Countries);

    const country = this.props.data.Countries.filter(country => country.Country === e.target.value)[0];

    console.log(country.Country);

    const actualCountry = {
      Country: country.Country,
      TotalConfirmed: country.TotalConfirmed,
      TotalRecovered: country.TotalRecovered,
      TotalDeaths: country.TotalDeaths,
    }

    this.setState({
      data: {
        actualCountry,
      }
      
    })
  }

  render() {
    const { data, isLoaded } = this.state;
    console.log(data.actualCountry);

  return (
    <>
      {isLoaded ? this.createMain(data) : null} 
    </>
  )
  }
}

export default Main;
