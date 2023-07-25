import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

  const img3 = 'https://rukminim2.flixcart.com/image/832/832/kxdl3m80/mouse/d/s/z/m220-silent-wireless-optical-mouse-with-bluetooth-white-logitech-original-imag9u9qdhkjjzhz.jpeg?q=70';

const Home = () => {

  const dispatch = useDispatch();

  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    // {
    //   name: "Mouse",
    //   price: 550,
    //   imgSrc: img3,
    //   id: "sdjfdlaajsdbhjabhsjdfdfv",
    // },
  ];

  const addtoCartHandler = (options) =>{
    console.log(options);
    dispatch({type:'addToCart',payload:options}); 
    toast.success("Added to carty")
    dispatch({
      type: 'calculatePrice',
    })
  }


  return (
    <div className='home'>
    {
      productList.map((i)=>(
        <ProductCart key={i.id}
        imgSrc={i.imgSrc}
        name={i.name}
        price={i.price}
        id={i.id}
        handler={addtoCartHandler}
        />
      ))
    }
    </div>
  )
}

const ProductCart = ({name,id,price,handler,imgSrc}) =>(
    <div className='productCard'>
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4> $ {price}</h4>
        <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
    </div>
)
  

export default Home
