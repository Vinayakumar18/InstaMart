import React from 'react'
import { useCart, useDispatchCart } from '../state_management/ContextReducer';

const Card = (props) => {
    let dispatch = useDispatchCart();
    let data = useCart();
    const Addtocart = async () => {
        await dispatch({ type: "ADD", id: props.id, name: props.name, price: props.price})
    }
    const RemovefromCart = async()=>{
        await dispatch({ type: "REMOVE", id: props.id })
    }

    return (
        <div className='relative border-2 rounded mt-6 w-full h-full p-3 '>
            <img src={props.img} alt="" className=' w-full h-60 object-cover' />
            <div className='grid grid-cols-2 text-center mt-2 w-full divide-x-2'>
                <h1 className='font-bold text-xl'>{props.price}</h1>
                <h1 className='font-bold text-lg mb-3'>{props.name}</h1>
            </div>
            {
                data.some(i=>i.id===props.id) ? 
                <button className=' bg-lime-300 w-16 h-10 mb-1 rounded hover:bg-lime-600' onClick={RemovefromCart}> - </button> :
                <button className=' bg-lime-300 w-16 h-10 mb-1 rounded hover:bg-lime-600' onClick={Addtocart}> + </button>
            }
        </div>
    )
}

export default Card