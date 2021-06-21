import Navigation from './Navigation'
import UserInfo from './UserInfo'
function Header() {
    return(
        <header>
        <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" className="logo"></img>
        
        <UserInfo />
        <Navigation />
        
        </header>
    )
}

export default Header;