import '../App.css'
import logo from '/images/logo.png'

function Header() {
  return (
    <div className='header common'>
      <img src={logo} alt="Logo" />
      KLU Store
    </div>
  )
}

export default Header
