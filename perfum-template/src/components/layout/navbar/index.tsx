import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ferrariIcon } from "../../../assets/images";
import { useAppContext } from "../../../hooks";
import MenuMobile from "../menuMobile";

const Navbar = () => {
  const { ChangeSecondColor, updateContext } = useAppContext();

  const showNavbar  = () => updateContext(old => ({ ...old, showMenu: true }));

    return (
        <div className={`${ChangeSecondColor ? 'text-primary' : 'text-white'} font-bold flex px-8 justify-between items-center w-full lg:pl-32 lg:pr-48 mb-10 mt-5`}>          
          <img src={ferrariIcon} alt='ferrariIcon' />
          <div>
            <FontAwesomeIcon icon={faBars} className='text-4xl lg:hidden' onClick={showNavbar}/>
          </div>
          <div className='hidden lg:flex gap-12 justify-center items-center cursor-pointer'>
            <a href='#banner'>Inicio</a>
            <a href='#info'>Acerca de</a>
            <a href='#form'>Contactanos</a>
            <a href='#form'>Ordenar Ahora</a>
          </div>
          <MenuMobile/>
        </div>
    )
}

export default Navbar;