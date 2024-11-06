import Product from "./Product.jsx";

function ProductTab(){
    let options=["high-tech","durable","fast"];
    let options2={a:"high-tech",b:"durable",c:"fast"};
       return(
        <div>
            <Product title="phone" price={20000} features={options} features2={options2} />
            <Product title="laptop" price={90000} features2={{b:"high-tech"}} />
            {/* <Product title="pen" price={20} /> */}
        </div>
       )
}

export default ProductTab;