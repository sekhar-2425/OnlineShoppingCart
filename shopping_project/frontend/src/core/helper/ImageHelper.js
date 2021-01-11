import React from 'react'

 const ImageHelper=({product})=>{
     const imageurl=product ?product.image:'https://rukminim1.flixcart.com/image/612/612/kg8avm80/cases-covers/back-cover/g/q/s/spigen-acs01559-original-imafwgb2yvff9bpd.jpeg?q=70'
    return (
        <div className="rounded border border-success p-2">
            <img src={imageurl}
            style={{maxHeight:"100%",maxWidth:"100%"}}
            className="mb-3 rounded"
            alt=""/>
        </div>
    )
}

export default ImageHelper