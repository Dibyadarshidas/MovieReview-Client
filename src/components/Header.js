import {Link} from 'react-router-dom';
const Header = () => {
    return ( <>
    <header className="site-header" >
        <Link to="/" ><h1>Movie Review 🍿</h1></Link> 
    </header>
    </> );
}
 
export default Header;