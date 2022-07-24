import { ferrariIcon } from "../../../assets/images";
import { useAppContext } from "../../../hooks";

const Navbar = () => {
  const { ChangeSecondColor } = useAppContext();

    return (
        <div className={`${ChangeSecondColor ? 'text-primary' : 'text-white'} font-bold flex justify-center lg:justify-between w-full lg:pl-32 lg:pr-48 mb-10 mt-5`}>          
          <img src={ferrariIcon} alt='ferrariIcon' />
          <div className='hidden lg:flex gap-12 justify-center items-center cursor-pointer'>
            <p className='bg-secundary p-2 rounded-3xl'>Inicio</p>
            <p>Acerca de</p>
            <p>Contactanos</p>
            <p>Ordenar Ahora</p>
          </div>
        </div>
    )
}

export default Navbar;