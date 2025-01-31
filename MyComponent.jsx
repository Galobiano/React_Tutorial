import React, {useState} from 'react'

export default function MyComponent(){

    const [name, setName] = useState("");
    const [quantity, setQauntity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");



    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQauntity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }
    
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange = {handleNameChange} />
            <p>Name: {name}</p>
        
        <input value={quantity} onChange={handleQuantityChange} type='number' />
            <p>Quantity: {quantity}</p>
        
            <textarea value={comment} onChange={handleCommentChange}  placeholder='Enter delivery instruction'></textarea>
            <p>Comment: {comment}</p>


        <select value={payment}  onChange={handlePaymentChange}>
          
          <option value="">Select option:</option>
          <option value="Visa">Visa</option>
          <option value="Master Card">Master Card</option>
          <option value="Gift Card">Gift Card</option>
        </select>
        <p>Payment: {payment}</p>
        



        {/* Radio */}
        <label>
            <input type="radio" value="Pick up" 
              checked={shipping === "Pick up"}
              onChange={handleShippingChange}/>
            Pick up
        </label>
        <label> <br />
            <input type="radio" value="Delivery" 
            checked = {shipping === "Delivery"}
            onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
        </div>
    );
}