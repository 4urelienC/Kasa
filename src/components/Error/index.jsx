import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="Error">
            <h1 className="Error__title">404</h1>
            <p className="Error__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="Error__link">Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error