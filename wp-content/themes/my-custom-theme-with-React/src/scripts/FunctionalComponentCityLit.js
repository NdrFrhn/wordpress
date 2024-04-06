import React from 'react';

// Functional Component: Create a functional component that displays a list of items. 
// The items should be passed in as an array prop. Bonus challenge: 
// Allow the user to remove items from the list by clicking on them.

class FunctionalComponentCityLit extends React.Component {
  constructor(props) {
  super(props);
  this.state = { 'items': props.items }
 }

 removeItem = (item) => {
    const index = this.props.items.indexOf(item);
    this.setState( {'items': this.props.items.splice(index, 1)})
    console.log(this.state);
 }

 render() {
  return (
    <div className="container">
      <h1>ITEMS</h1>
      {this.props.items.map((item) => {
        return (
          <li>{item}
            <button 
              className='btn btn-outline-danger'
              onClick={() => {this.removeItem(item)}} >
              Remove Item
            </button>
          </li>
        )
      })}
    </div>
  )
 }

}

export default FunctionalComponentCityLit;