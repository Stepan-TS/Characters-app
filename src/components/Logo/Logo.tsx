import './Logo.scss';
import logo from './../../image/logo.png';

const Logo: React.FC = () => (
  <img
    className='logo'
    src={logo}
    alt='logo'
  />
)

export default Logo;