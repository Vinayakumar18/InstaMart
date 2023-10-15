import React from 'react'
import { useCart } from '../state_management/ContextReducer'

const Mycart = () => {
    let data = useCart()
    if (data.length === 0) {
        return (
            <div>
                <div className='w-full text-center font-bold text-white text-3xl mt-36 bg-transparent'>Cart is Empty!!!</div>
            </div>
        )
    }
    return (
        <div>
            <table className='rounded w-full'>
                <thead className='bg-gray-200 border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3 text-md font-semibold tracking-wide text-center'>Product ID</th>
                        <th className='p-3 text-md font-semibold tracking-wide text-center'>Name</th>
                        <th className='p-3 text-md font-semibold tracking-wide text-center'>Price</th>
                    </tr>
                </thead>
                <tbody className='bg-gray-50 border-b-1 border-gray-100'>
                    {data.map((item) => {
                        return (
                            <tr>
                                <td className='p-3 text-sm text-center'>{item.id}</td>
                                <td className='p-3 text-sm text-center'>{item.name}</td>
                                <td className='p-3 text-sm text-center'>{item.price}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Mycart