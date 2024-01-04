import logo from '../../assets/LOGO_FOOT.png'
import { Link } from 'react-router-dom'
//import './index.css'

function Footer() {
    return (
        <div className='kasa-footer'>
            <img src={logo} alt='Kasa' className='kasa-footer__logo' />

            <p className='kasa-footer__txt'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer