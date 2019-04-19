import React,{Component} from 'react';
import './Summary.css'

class SummaryItem extends Component{
    render(){
        const summary = Object.keys(this.props.items)
        .map(key => <div className="summary__option" key={key} >
        
          <div className="summary__option__label" >{key}  </div>
          <div className="summary__option__value">{this.props.items[key].name}</div>
          <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(this.props.items[key].cost) }
          </div>
      </div>)
      
        return(
            <div>
            {summary}
            </div>
        )
    }
}

export default SummaryItem;