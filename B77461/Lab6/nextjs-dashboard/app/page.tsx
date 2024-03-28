'use client';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar/page";
import Cart from './shoppingCar/page';
import '../app/css/style.css';

export default function Home() {

  const [isCartActive, setIsCartActive] = useState(false);
  const [count, setCount] = useState(0);
  const [idList, setIdList] = useState([]);
  const [cart, setCart] = useState(
    {
      carrito: {
        productos: [],
        subtotal: 0,
        porcentajeImpuesto: 13,
        total: 0,
        direccionEntrega: '',
        metodosDePago: {}
      },
      metodosDePago: [],
      necesitaVerificacion: false
    }
  );

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
    const storedIdList = JSON.parse(localStorage.getItem('idList'));
    if (storedIdList) {
      setIdList(storedIdList);
    }
    const storedCount = JSON.parse(localStorage.getItem('count'));
    if (storedCount) {
      setCount(storedCount);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('idList', JSON.stringify(idList));
    localStorage.setItem('count', JSON.stringify(count));
  }, [cart, idList, count]);

  function productAlreadyAdded({ product }) {
    return idList.includes(product.id);
  }

  function addProductToCart({ product }) {
    const newProductos = [...cart.carrito.productos, product];
    setCart(cart => ({
      ...cart,
      carrito: {
        ...cart.carrito,
        productos: newProductos
      }
    }));
    console.log(newProductos);
  }

  function removeProduct( product ) {
    const newProductos = cart.carrito.productos.filter((prod) => prod.id !== product.id);
    const newSubTotal = newProductos.reduce((acc, curr) => acc + curr.price, 0);
    const newTotal = newSubTotal + (newSubTotal * (cart.carrito.porcentajeImpuesto / 100));

    setCart((prevCart) => ({
        ...prevCart,
        carrito: {
            ...prevCart.carrito,
            productos: newProductos,
            subtotal: newSubTotal,
            total: newTotal
        }
    }));

    setCount(count - 1); // Restar 1 al contador count
}

  function calculateTotals({ product }) {
    const newSubTotal = cart.carrito.subtotal + product.price;
    const newTotal = newSubTotal + (newSubTotal * (cart.carrito.porcentajeImpuesto / 100));

    setCart(cart => ({
      ...cart,
      carrito: {
        ...cart.carrito,
        subtotal: newSubTotal,
        total: newTotal
      }
    }));
  }

  const handleAddToCart = ({ product }) => {
    if (!productAlreadyAdded({ product })) {
      setIdList([...idList, product.id]);
      addProductToCart({ product });
      calculateTotals({ product });
      setCount(count + 1);
    }
  };

  const toggleCart = ({ action }) => {
    setIsCartActive(action ? true : false);
  };

  const products = [
    { id: 1, name: 'Audifonos', description: 'Audifonos RGB', imageUrl: 'https://tienda.starware.com.ar/wp-content/uploads/2021/05/auriculares-gamer-headset-eksa-e1000-v-surround-71-rgb-pc-ps4-verde-2331-3792.jpg', price: 60.0 },
    { id: 2, name: 'Teclado', description: 'Teclado mecánico RGB', imageUrl: 'https://kuwait.gccgamers.com/razer-deathstalker-v2/assets/product.webp', price: 75.0 },
    { id: 3, name: 'Mouse', description: 'Mouse inalámbrico', imageUrl: 'https://static3.tcdn.com.br/img/img_prod/374123/mouse_gamer_impact_rgb_12400_dpi_m908_redragon_29921_3_20190927170055.jpg', price: 35.0 },
    { id: 4, name: 'Monitor', description: 'Monitor LCD', imageUrl: 'https://i5.walmartimages.ca/images/Large/956/188/6000199956188.jpg', price: 200.0 },
    { id: 5, name: 'CASE', description: 'Case CPU', imageUrl: 'https://th.bing.com/th/id/OIP.mhKR13PBP5mQP85l2c4DWgHaHa?rs=1&pid=ImgDetMain', price: 450.0 },
    { id: 6, name: 'MousePad', description: 'MousePad HYPER X', imageUrl: 'https://s3.amazonaws.com/static.spdigital.cl/img/products/new_web/1500590806008-36964857_0168832511.jpg', price: 15.0 },
    { id: 7, name: 'Laptop', description: 'Laptop ASUS', imageUrl: 'https://resources.claroshop.com/medios-plazavip/s2/10252/1145258/5d13a10bac9b0-laptop-gamer-asus-rog-strix-scar-ii-i7-16gb-512gb-rtx-2070-1600x1600.jpg', price: 1000.0 },
    { id: 8, name: 'Tarjeta de Video', description: 'Tarjeta Nvidia 4060', imageUrl: 'https://ddtech.mx/assets/uploads/861311bd60bf6ede94bfe7ab01e705a3.png', price: 600.0 },
    { id: 9, name: 'Control', description: 'Control STEAM', imageUrl: 'https://th.bing.com/th/id/OIP.lNj-nw7kO0Q73XjkAvaQkwHaJJ?rs=1&pid=ImgDetMain', price: 150.0 },
    { id: 10, name: 'Gafas VR', description: 'Gafas VR PS4', imageUrl: 'https://www.discoazul.com/uploads/media/images/gafas-playstation-vr-ps4-1.jpg', price: 500.0 },
    { id: 11, name: 'Pantalla', description: 'Pantalla LG OLED', imageUrl: 'https://th.bing.com/th/id/OIP.nC89zBQSGxR8hyVnocBvlQHaGb?rs=1&pid=ImgDetMain', price: 750.0 },
    { id: 12, name: 'Celular', description: 'ASUS ROG', imageUrl: 'https://www.latercera.com/resizer/E392-vfE0PVd1xTj8wEKR6Ud7Z0=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/3QACWYB2FNENTINU4KTAXU2D2A.jpg', price: 900.0 },
  ];

  const Product = ({ product, handleAddToCart }) => {
    const { id, name, description, imageUrl, price } = product;
    return (
      <div className="card" style={{ width: '20rem' }}>
        <div className="col">
          <div className="card-body">
            <img className="card-img-top"
              src={imageUrl}
              width="500" height="110" />
            <h5>{name}</h5>
            <p>Precio: ${price}</p>
            <p>Descripción: {description}</p>
            <button type="button" className="btn btn-buy"  onClick={() => handleAddToCart({ product })}>Agregar</button>
          </div>
        </div>
      </div>
    );
  };

  const MyRow = () => {
    return (
      <>
        <h1>Lista de productos</h1>
        <div className="row justify-content-md-center">
          {products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)}
        </div>
      </>
    );
  };

  const CarouselItem = ({ product, active }) => {
    return <div className={active ? "carousel-item active" : "carousel-item"}>
      <img src={product.imageUrl} width="100%" />
      <div className="container">
        <div className="carousel-caption">
          <h1>{product.name}</h1>
          <p className="opacity-75">Precio: ${product.price}</p>
          <p className="opacity-75">Descripción: {product.description}</p>
        </div>
      </div>
    </div>
  }

  const Carousel = () => {
    return (
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
            aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          {products.map(product => <CarouselItem product={product} active={1} />)}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }

  return (
    <div className="d-grid gap-2">
      <NavBar productCount={count} toggleCart={(action) => toggleCart({ action })} />
      {isCartActive ? <Cart cart={cart} setCart={setCart} toggleCart={(action) => toggleCart({ action })} removeProduct={removeProduct} /> : <MyRow />}

      {/* <Carousel />*/}
    </div>
  );
}