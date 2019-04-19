import React, { Component } from 'react';
import FeaturesListItem from './FeaturesListItem'
import './FeaturesList.css'

class FeaturesList extends Component {
  

  render() {
   
    const features = Object.keys(this.props.features).map((value) => {
       return(
       <div className="feature" key={value}>
        <div className="feature__name">{value}</div>
        <ul className="feature__list">
            <FeaturesListItem  
                      category = {value}
                      items = {this.props.items}
                      features = {this.props.features}
                     onClickUpdate = {this.props.onClickUpdate}
                     />
            </ul>
            </div>
        
          )

      });
      return <div> {features}</div>
 }
}    


export default FeaturesList;