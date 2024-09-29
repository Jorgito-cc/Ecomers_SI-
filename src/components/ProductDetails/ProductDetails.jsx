import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {addToCart} from '../../redux/features/cart/cartSlice'
import './productDetails.css'
import { FaStar } from "react-icons/fa";
export const ProductDetails = ({selectedProduct}) => {
    const dispath = useDispatch() ; 
    const [quantity, setQuantity] = useState(1) ; 

    const handleQuatity = (e) =>{
            setQuantity(e.target.value)
    }

    const handelAdd = (selectedProduct , quantity) =>{
        dispath(addToCart({product: selectedProduct , num : quantity}));
        toast.success("!El producto ha sido añadido al carrito")
    }
  return (
    <>
    <section className='product-page'>
        <div className='container'>
            <div className='fila'>
                <div className='col'>
                    <img  loading='lazy' src={selectedProduct ?.imgUrl} alt="producto detalle " />
                </div>

                <div className='col2'>
                    <h2 >{selectedProduct?.productName}</h2>
                    <div className='rate'>
                        <div className='stars'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                        <span > {selectedProduct?.avgrating} calificaciones</span>

                    </div>
                    {/* infformacion */}
                    <div className='info'>
                        <span >categoriaa :{selectedProduct?.category}</span>
                    </div>

                    <p>{selectedProduct?.shortDesc}</p>
                    <input type="number" className='qty-input' value={quantity} onChange={handleQuatity} />
                    <button aria-label='Add' className='add' onClick={()=> handelAdd(selectedProduct,quantity)}>anadir al carrito</button>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}
