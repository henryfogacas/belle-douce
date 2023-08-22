import './Link.css'

const Link = () => {
    return (
        <div className="links">
      <a
        className="link"
        href="https://api.whatsapp.com/send?phone=5551982690619&text=Olá..."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="images/whatsapp-logo.png" alt="Logo Whatsapp" />
      </a>

      <a
        className="link"
        href="https://www.instagram.com/belledouceb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="images/logo-instagram.png" alt="Logo Instagram" />
      </a>
    </div>
    )
}

export default Link