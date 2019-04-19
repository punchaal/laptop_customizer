import React,{Component} from 'react';
import SummaryItem from './SummaryItem'
import './Summary.css'

class SummaryList extends Component{

render(){
const total = Object.keys(this.props.items)
  .reduce((acc, curr) => acc + this.props.items[curr].cost, 0); 

return(
  <div>
<SummaryItem items = {this.props.items}></SummaryItem>
  <div className="summary__total">
    <div className="summary__total__label">Your Price: </div>
    <div className="summary__total__value">
    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
        .format(total) }
    </div>
  </div>
  </div>
        )
    }
}

export default SummaryList;