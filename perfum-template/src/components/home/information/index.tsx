import { perfumeBlack, perfumeRed } from "../../../assets/images";
import { useAppContext } from "../../../hooks";

const Information = () => {
  const { ChangeSecondColor } = useAppContext();

  return(
    <div className={`${ChangeSecondColor ? 'bg-primary text-white' : 'bg-white text-primary'} flex flex-col justify-center items-center w-full py-10 rounded-t-3xl lg:flex-row`} id='info'>
        <div className='lg:w-1/3 flex justify-center'>
          { ChangeSecondColor 
          ?
            <img src={perfumeBlack} alt='perfumeRed' className='h-56 lg:h-[500px]'/>
          :
            <img src={perfumeRed} alt='perfumeRed' className='h-56 lg:h-[500px]'/>
          }
        </div>
        <div className='flex flex-col gap-10 mt-8 lg:flex-row lg:w-2/3 lg:gap-0 lg:mt-0'>
          <div className='w-full text-center px-4 flex flex-col justify-center items-center gap-3 lg:px-32 w-full'>
            <span className='text-4xl font-bold'>1</span>
            <h3 className='font-bold text-2xl'>Lorem ipsum dolor </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nibh metus. Sed pharetra aliquam quam, id mattis est consectetur ac.
            </p>
          </div>
          <div className='w-full text-center px-4 flex flex-col justify-center items-center gap-3 lg:px-32 w-full'>
            <span className='text-4xl font-bold'>2</span>
            <h3 className='font-bold text-2xl'>Lorem ipsum dolor </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nibh metus. Sed pharetra aliquam quam, id mattis est consectetur ac.
            </p>
          </div>
        </div>
    </div>
  );
};

export default Information;