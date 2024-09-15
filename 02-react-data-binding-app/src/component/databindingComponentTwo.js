export default function DataBindingg() {
    var menu = [
        {Category: "Electronics", Products: ['Samsung TV', 'Mobile']},
        {Category: "FootWear", Products: ['Nike Casuals', 'Lee Boot']},
    ]
    return (
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    menu.map(item=>
                        <li>{item.Category}
                            <ul>
                                {
                                    item.Products.map(product=>
                                        <li>{product}</li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>

            <h2>Select A Products</h2>
            <select>
                {
                    menu.map(item=>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product=>
                                    <option key={product}>{product}</option>
                                )
                            }
                        </optgroup>
                    )
                }
            </select>

        </div>
    )
}