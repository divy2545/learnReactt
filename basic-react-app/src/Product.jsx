// import "./Product.css"

// function Product({title,price=1,features, features2}){
//     // console.log(title);
//     if(price>70000){
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>price: {price}</h5>
//             <p>{features}</p>
//             <p>{features2.b }</p>
//             <p>discount of 5%</p>
//         </div>
//     )
// }
// else{
//     return (
//         <div className="Product">
//         <h3>{title}</h3>
//         <h5>price: {price}</h5>
//         <p>{features}</p>
//         <p>{features2.b }</p>
//     </div>
//     )
// }
// }

// export default Product;


//===========================================================================================


import "./Product.css"

function Product({title,price=1,features, features2}){
    let isDiscount= price>30000;
    let styles= {backgroundColor: isDiscount ? "pink" : "" }
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>price: {price}</h5>
            <p>{features}</p>
            <p>{features2.b }</p>
            {/* { price>20000 ? <p> discount of 5% </p> : null } */}
            {isDiscount && <p>discount of 5%</p>}
        </div>
    )
}


export default Product;