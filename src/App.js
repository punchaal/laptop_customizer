import React, { Component } from 'react';
import './App.css';
import SummaryList from './Summary/SummaryList';
import FeaturesList from './FeaturesList/FeaturesList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: {
        "Processor": {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        "Display": {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature = (feature,newValue)=> {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    console.log(this.props.features)
    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>      
        <main>
          <section className="main__form">
          <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <FeaturesList items ={this.state.selected}
                      features={this.props.features}
                      onClickUpdate = {(feature,newValue)=>this.updateFeature(feature,newValue)} />
                      </section>
                      <section className="main__summary">
                      <h3>NEW GREENLEAF 2018</h3>
        <SummaryList items = {this.state.selected}
                 />
                 </section>
        </main>
      </div>
    );
  }
}

export default App;  