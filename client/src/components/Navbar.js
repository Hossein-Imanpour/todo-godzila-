const Navbar = () => {
    return ( <>
        <header className=" bg-warning nav-parent">
        <section className="align-baseline">
        <h1 className="">Todo-List</h1>
        </section>
            <section className="">
                <button className="btn bg-danger btnn" >Add member</button>
                <button className="btn bg-danger btnn">History</button>
                <button className="btn bg-danger btnn">Members</button>
                <button className="btn bg-danger btnn">Home</button>
            </section>
        </header>
    </> );
}
 
export default Navbar;