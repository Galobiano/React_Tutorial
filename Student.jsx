import PropTypes from 'prop-types'


//props (short for "properties") are an object because they allow you to pass multiple values
export default function Student(props){

    return(
       

        <div className= 'card'>
         <img  src={props.image} alt="profile" width="200px" />
         <p>Name: {props.name}</p>
         <p>Element: {props.element}</p>
        </div>



    );
}


// propsTypes = that ensures that the passed value is of the correct datatype

/*Student.PropTypes  = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent:PropTypes.bool
}


//  defaultProps = case they are not passed from the parent component 
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}*/