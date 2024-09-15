export default function BindingCollection(){
    var categories = ["All","Electronics","Footwear"];
    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    // categories.toString()
                    //     categories.join()
                    //     categories.map(function (category) {
                    //         return (
                    //             <li>{category}</li>
                    //         )
                    //     })
                    categories.map(category=>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
            <h2>Select Category</h2>
            <select>
                {
                    categories.map(category=>
                        <option key={category} value={category}>{category}</option>
                    )
                }
            </select>
        </div>
    )
}