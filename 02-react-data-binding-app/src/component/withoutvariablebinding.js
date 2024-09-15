import { useState } from "react";

export default function Statebinding(){
    const [getproducts,setProducts] = useState(["TV","Mobile","Shoes"])
    return(
        <div className="container">
            <ol>
                {
                    getproducts.map(product=>
                        <li key={product}>{product}</li>
                    )
                }
            </ol>
        </div>
    )
}