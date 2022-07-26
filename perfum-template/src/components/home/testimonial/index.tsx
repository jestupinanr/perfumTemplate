import { useAppContext } from '../../../hooks';
import Carrousel from '../../common/carrousel';
import CartTestimonial from '../cartTertimonial'

const Testimonial = () => {
  const { ChangeSecondColor } = useAppContext();
  return (
    <div className='flex flex-col w-full gap-10 px-6 py-20 justify-center items-center lg:px-32 lg:flex-row lg:gap-0'>
      <div className={`${ChangeSecondColor ? 'text-primary' : 'text-white' } flex flex-col gap-6 lg:pr-20 lg:w-1/3`}>
        <h3 className='text-4xl font-bold'>Lorem ipsum</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nibh metus. Sed pharetra aliquam quam, id mattis est consectetur ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
      </div>
      <div className='w-full lg:w-2/3 lg:px-60'>
        <Carrousel slidesPerView={1} bulletsDirection='horizontal-banner'>
          <CartTestimonial />
          <CartTestimonial />
        </Carrousel>
        
      </div>
    </div>
  );
};

export default Testimonial;
