import React from 'react'

const Card = ({pix, title}) => {
  return (
    <div>
        <div class="card" style={{width: "18rem", height: "20rem"}}>
       <img src={pix} class="card-img-top" alt="" style={{width: "100px", height: "100px"}}/>
       <div class="card-body">
        <h5 class="card-title"> {title} </h5>
        <p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
        <a href="#" class="btn btn-primary"> Add to cart </a>
       </div>
    </div>
    </div>
  )
}

export default Card