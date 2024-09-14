export default function DataBindingComponent() {
    var product = {
        Name: "Samsung Tv",
        Price: 43342,
        Stock:true
    }
    var size = {
        width:330,
        height:100
    }
    return(
        <div className="container">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dd><input className="form-control" type="text" value={product.Name}/></dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock===true) ? "Available":"Out Of Stock"}</dd>
            </dl>
            <h2> Property Binding</h2>
            <table border="1" width={size.width} height={size.height}>
                <tr>
                    <td>Welcome to React</td>
                </tr>
            </table>
        </div>
    )

}