
function Nav(props){

    return (
        <nav className="main-nav">
            <ul>
            { props.list.map(i => {
                return <li>{i}</li>;
                })            
            }
            </ul>
        </nav>
    )
}

export default Nav;