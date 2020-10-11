import React, {Component} from "react";
import Option from "./Option";
import "../styles/Select.css";

class Select extends Component {
  state = {
    size: 1,
  }

  handleClick = () => {
    if(this.state.size === 1) this.setState({
      size: 4,
    }); else this.setState({
      size: 1,
    })  
  }

  handleOnMouseDown = () => {
    if(this.state.size === 1) this.setState({
      size: 4,
    }); 
  }

  render(){
    const {size} = this.state; 
    
    const options = this.props.countries.map(country => <Option key={country.CountryCode} country={country} clik={this.handleClick}/>)

    return (
      <select onMouseDown={this.handleOnMouseDown} onClick={this.handleClick} onChange={this.props.handleChange} size={size}>
        {options}
      </select>
    );
  }
  
};

export default Select;
