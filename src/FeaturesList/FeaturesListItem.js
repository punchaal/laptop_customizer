import React,{Component} from 'react';
import './FeaturesList.css'

class FeaturesListItem extends Component{
    
    render(){
         const key = this.props.category;
          const options = this.props.features[key].map((item, index) => {
            const selectedClass = item.name === this.props.items[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
        console.log(this.props.category)
        return <li key={item.name} className="feature__item">
              <div className={featureClass}
                
                onClick={e => this.props.onClickUpdate(key, item)}>
                  { item.name }
                  ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
              </div>
            </li>
          });
    
        return <div>
        
        {options}
        
            </div>
            
        }
        
    }


export default FeaturesListItem;