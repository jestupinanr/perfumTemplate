import { profilePhotoDefault } from "../../../assets/images";
import { useAppContext } from "../../../hooks";

const CartTestimonial = () => {
  const { ChangeSecondColor } = useAppContext();
  return (
    <div className={`${ChangeSecondColor ? 'bg-primary text-white' : 'bg-white text-primary'} flex py-6 px-7 rounded-3xl`}>
      <div className='w-1/3'>
        <img src={profilePhotoDefault} alt='profilePhotoDefault' className='w-20 h-20' />
      </div>
      <div className='w-2/3 flex flex-col gap-3'>
        <span className='text-xl font-bold'>Lorem ipsum</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nibh metus. Sed pharetra aliquam quam, id mattis est consectetur ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nibh metus. Sed pharetra aliquam quam, id mattis est consectetur ac. </p>
      </div>
    </div>
);
}

export default CartTestimonial;
