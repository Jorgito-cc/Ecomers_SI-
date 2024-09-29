import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/features/cart/cartSlice'
import {toast} from 'react-toastify'
import { CiHeart } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import './product-card.css'

export const ProductCard = ({title , productItem}) => {
    const dispatch = useDispatch () ; 
    const router = useNavigate() ; 

    const handelClick = ()=>{
        router(`/shop/${productItem.id}`)
    };
    /* para agrar al carrito  */
    const handelAdd = (productItem) =>{
      dispatch(addToCart({product: productItem , num :1 })) ; 
      /* entana modal  */
      toast.success("!El producto ha sido añadido al carrito !!!")
    }
  return (
    <>
    {/* containerrr */}
    <div className='product container'>
{title === "Combos" ? (
        <span className='discount'>{productItem.discount} Combo 2x1 </span>
      ): null }
        
        <img  loading="lazy"
        onClick={()=>handelClick()}
           src={productItem.imgUrl} alt="imagenes de combosss" />
              {/* producto de que le gusta al cliente .. sera de pinta nomas  */}
           <div className='product-like'>
           <CiHeart />
           </div>
            {/* detalle de productos */}
            <div className='product-details'>
              {/* el usuario dara click en el nombre lo cual lo dirigira a otro  */}
              <h3 onClick={()=>handelClick()}>{productItem.productName}</h3>
              <div className='rate'>
              <FaStar />

              <FaStar />

              <FaStar />

              </div>
              <div className='price'>
                <h4 >${productItem.price}</h4>
                <button className='add' type='submit' aria-label='Add' onClick={()=>handelAdd(productItem)}>
                <IoAddCircleOutline />
                </button>
              </div>

            </div>
    </div>
    </>
  )
}
