import { useState } from 'react';
//Componentes
import { ModalCart } from './modal-cart';
//Interfaces
import { CartShopAPI } from '../src/models-data/CartShopAPI';
//Funciones

interface CartShopProps {    
    myCartInStorage: CartShopAPI| null;
    setMyCartInStorage: React.Dispatch<React.SetStateAction<CartShopAPI | null>>;
  }
  
  //Carrito
  export const CartShop: React.FC<CartShopProps> = ({myCartInStorage,setMyCartInStorage}) => {
  
    //States del ModalCart
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    return(
      <div className="cart_container col-sm-6">
        {/* Cuando se presione cualquier parte del Carrito, se abre el modal */}
        <a onClick={handleShow}>
            <div className="cart-info">
                <i className="fas fa-shopping-cart"></i>                    
                <div className="notify-cart">{myCartInStorage?.allProduct.length}</div>
            </div>                    
            <p className="col-sm-6">Mi carrito</p>                                                                   
            
        </a>  
  
        {/* Llamamos al carrito desde modal_cart.tsx 
        Le pasamos los useState al modal principal para mantener la referencia de todos los datos, en caso de usarlos
        */}
        <ModalCart 
          show={show}
          handleClose={handleClose}
          myCartInStorage={myCartInStorage}
          setMyCartInStorage={setMyCartInStorage}
        />                                                    
      </div>           
    );
  }