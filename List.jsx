import PropTypes  from 'prop-types';

export default function List(props){

    const category = props.category;
     const itemsList = props.items;
   
     
     //fruits.sort((a, b) => a.name.localeCompare(b.name)); //AlPHABETICAL ORDER
     //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER
     //fruits.sort((a,b) => a.calories - b.calories);  //NUMERICAL NUMER
     //fruits.sort((a,b) => b.calories - a.calories); // REVISE NUMERICAL NUMBER

       // const lowCalFruits = fruits.filter(furits => furits.calories < 100); // LOW CALORIES
        //const highCalFruits = fruits.filter(furits => furits.calories >= 100); // HIGH CALORIES


    const listItems =  itemsList.map( item => <li key={item.id}> 
                                                         {item.name}: &nbsp;
                                                         <b>{item.calories} </b> </li>);
     
    return(<>
              <h3 className="list-category">{category}</h3>
             <ul className="list-items">{listItems}</ul> 

    </>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                                calories: PropTypes.number })),
}
List.defaultProps  = {
    category: "Category",
    items: [],
}

