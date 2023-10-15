import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../state_management/ContextReducer';
import Modal from '../Modal';
import Mycart from './Mycart';

export const Header = () => {
    const [cartView, setcartView] = useState(false)
    let data = useCart();
    return (
        <div className='bg-amber-600 flex flex-row justify-between '>
            <a href="/" className='font-bold text-2xl p-3'>InstaMart</a>
            <button onClick={setcartView} className='font-bold border mx-12 my-3 px-3 py-1 w-16 rounded hover:bg-amber-700'><div className='flex justify-between'><FiShoppingCart />{data.length}</div></button>
            {cartView ? <Modal onClose={() => setcartView(false)} > <Mycart/> </Modal> : null}
        </div>
    )
}
