import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ferrariIcon } from "../../../assets/images";
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useAppContext } from "../../../hooks";

const Footer = () =>  {
  const { ChangeSecondColor } = useAppContext();
  return (
    <footer className={`${ChangeSecondColor ? 'text-primary' : 'text-white'} flex flex-col w-full items-center pt-8 pb-20 gap-6 lg:px-40 lg:flex-row lg:pt-20 lg:justify-between`}>
      <img src={ferrariIcon} alt='ferrariIcon'/>  
      <div className='flex flex-col font-bold gap-6 justify-center items-center lg:flex-row'>
        <span>Contactanos</span>
        <span>Quienes somos</span>
        <span>Tel: 123456789</span>
      </div>
      <div className='flex mt-7 gap-3'>
        <FontAwesomeIcon icon={faFacebook} className='text-lg lg:text-5xl' />
        <FontAwesomeIcon icon={faInstagram} className='text-lg lg:text-5xl' />
        <FontAwesomeIcon icon={faLinkedin} className='text-lg lg:text-5xl' />
      </div>
    </footer>
  
  );
};



export default Footer;
