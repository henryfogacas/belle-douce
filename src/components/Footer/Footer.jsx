import Link from '../Link/Link'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <img className='logo' src="images/footer2.png" alt="Footer do site" />
            <h3>Chame no Whatsapp ou no Instagram e garanta seus brownies agora mesmo</h3>
            <Link />
        </footer>
    )
}

export default Footer