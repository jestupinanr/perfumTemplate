import { ferrariLogo } from "../../../assets/images";
import { useAppContext } from "../../../hooks";
import Button from "../../form/button";
import TextField from "../../form/textField";

const Form = () => {
  const { ChangeSecondColor } = useAppContext();
  return (
    <div className={`${ChangeSecondColor ? 'bg-primary text-white' : 'bg-white text-primary'} w-full flex flex-col rounded-t-3xl py-20 px-2 lg:px-40 lg:flex-row`} id='form'>
      <div className={`${ChangeSecondColor ? 'bg-white' : 'bg-primary'} py-16 flex flex-col gap-6 px-12 rounded-3xl lg:w-1/2`}>
          <span className={`${ChangeSecondColor ? 'text-primary' : 'text-white'} text-4xl mb-8`}>Ordena Ahora</span>
          <TextField name='name' value='' handler={()=> {}} placeholder='Nombre'/>
          <TextField name='email' value='' handler={()=> {}} placeholder='Email'/>
          <TextField name='telefono' value='' handler={()=> {}} placeholder='Telefono'/>
          <Button className='bg-secundary text-white mt-9'>Ordenar ahora</Button>
      </div>
      <div className='flex flex-col gap-4 pt-8 justify-center items-center text-center lg:w-1/2 lg:pt-0 lg:gap-0'>
          <span className='text-xl font-bold px-8 lg:text-4xl lg:px-36'>La Nueva generacion de perfumeria disponible ahora</span>
          <img src={ferrariLogo} alt='ferrariLogo' />
      </div>
    </div>
  );
};

export default Form;
