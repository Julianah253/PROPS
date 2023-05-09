import React from 'react'
import Card from './components/card/Card'
import CardTwo from './components/cardTwo/CardTwo';
import Fetch from './components/fetch/Fetch';
import FetchUsers from './components/fetchusers/FetchUsers';

const App = () => {
// let imageOne = "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=1600";
// let imageTwo = "https://images.pexels.com/photos/389696/pexels-photo-389696.jpeg?auto=compress&cs=tinysrgb&w=1600";
// let imageThree = "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1600"
// let imageFour = "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/Z/159155_1679339070.jpg"


  
  return (
    <div>
      {/* <Card pix={imageOne} title= "Image 1"/> */}
      {/* <Card pix={imageTwo} title= "Image 2"/> */}
      {/* <Card pix={imageThree} title= "Image 3"/> */}
      {/* <Card pix={imageFour} title= "Image 4"/> */}

      {/* <CardTwo brand="Kia" color="black"/> */}
      {/* <CardTwo brand="Toyota" color="red"/> */}

      {/* <Fetch/> */}

      <FetchUsers/>
    </div>
  )
}

export default App