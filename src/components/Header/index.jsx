import logo from '../../assets/LOGO_KASA.png'
import { Link } from 'react-router-dom'
//import './index.css'

function Banner() {
    //const title = 'Kasa'
    return (
        <div className='kasa-banner'>
            <img src={logo} alt='Kasa' className='kasa-banner__logo' />

            <nav className='kasa-banner__nav'>
                <Link to="/" className="kasa-banner__nav__link">Accueil</Link>
                <Link to="/a-propos" className="kasa-banner__nav__link">A Propos</Link>
            </nav>
        </div>
    )
}

export default Banner