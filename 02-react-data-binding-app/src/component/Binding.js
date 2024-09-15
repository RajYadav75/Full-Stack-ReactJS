export default function OneWayBinding() {
    var userName = "John";
    return (
        <div className="container">
            <h2>User Details</h2>
            <label for="name">User Name: </label>
            <input type="text" id="name" value={userName} />
            <br />
            Hello ! {userName}
        </div>
    );
}