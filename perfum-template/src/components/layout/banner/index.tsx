import { arrow } from '../../../assets/vectors';
import { useAppContext } from '../../../hooks';

const Banner = ( { description, img, title, handleChangeSlide }: BannerProps) => {
  const { ChangeSecondColor } = useAppContext();

  const handleChange = () => {
    handleChangeSlide(old => old === 1 ? 2 : 1 );
  };

  return(
    <div className='w-full flex lg:px-20'>
      <img src={arrow} alt='arrowLeft' className='cursor-pointer brightness-0' onClick={handleChange}/>
      <div className={`${ChangeSecondColor ? 'text-primary' : 'text-white'} flex flex-col-reverse lg:flex-row justify-center`}>
          <div className='flex flex-col gap-5 mt-20 lg:w-1/2 lg:ml-10 lg:pr-20 lg:gap-12'>
            <span className='font-bold text-xl lg:text-4xl'>
              { title }
            </span>
            <span className='lg:pr-64'>
              { description }
            </span>
          </div>
          <div className='flex justify-center lg:w-1/2'>
            <img src={img} alt={img} className='w-48 h-48 lg:w-auto lg:h-auto'/>
          </div>
      </div>
      <img src={arrow} 
        alt='arrowLeft'
        className='rotate-180 cursor-pointer brightness-0'
        onClick={handleChange} 
        
        />
    </div>
  );
}

interface BannerProps {
  title: string,
  description: string,
  img: string,
  handleChangeSlide: React.Dispatch<React.SetStateAction<number>>
}

export default Banner;
