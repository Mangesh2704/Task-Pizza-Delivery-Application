import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';
import axios from "axios";


function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();
  const options = props.options;
  const priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");


  const handleAddToCart = async () => {
    let food = [];

    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }

    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: 'UPDATE', id: props.foodItem._id, price: finalPrice, qty: qty });
        return;
      } else if (food.size !== size) {
          await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
          return
      }
      return
    }
    await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });

  }
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);


  return (
    <div>
        <div>
            <div class="card mt-3" style={{"width": "18rem", "maxHeight":"600px"}}>
                <img src={props.foodItem.img} class="card-img-top" alt="..." style={{height:"200px", objectFit:"fill"}}></img>
                <div class="card-body">
                    <h5 class="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded' style={{"width": "5rem"}} onChange={(e)=> setQty(e.target.value)}>
                            {Array.from(Array(6), (e,i)=>{
                                return(
                                    <option key={i+1} value={i+1}>{i+1} </option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 bg-success rounded' style={{"width": "5rem"}} ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                            {priceOptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        
                    </div> <br />
                    <div className='d-inline h-100 fs-5'>
                          Today's Price: ₹{finalPrice}/-
                        </div>
                    <hr>
                    </hr>
                    <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Card;
