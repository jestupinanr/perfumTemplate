import Form from '../../components/home/form';
import Information from '../../components/home/information';
import Testimonial from '../../components/home/testimonial';
import Banner from '../../components/layout/banner';
import Page from '../../components/layout/page';

import { perfumeBlackBanner, perfumeRedBanner } from '../../assets/images';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../hooks';

const Home = () => {
  const [numberBanner, setNumberBanner] = useState(1);
  const { ChangeSecondColor, updateContext } = useAppContext();
  useEffect(() => {
    updateContext(old => ({ ...old , ChangeSecondColor: numberBanner === 1 ? false : true}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberBanner])
  

  return (
    <Page className={`${ChangeSecondColor ? 'bg-white' : 'bg-primary'} overflow-auto`}>
      {/* Banner */}
      { numberBanner === 1 
       ?
       <Banner 
        title='La Nueva generacion de perfumeria disponible ahora'
        description='Disfruta de la nueva fragancia con mas tiempo de duración'
        img={perfumeRedBanner}
        handleChangeSlide={setNumberBanner}
       />
       :
       <Banner 
        title='La Nueva generacion de perfumeria disponible ahora'
        description='Disfruta de la nueva fragancia con mas tiempo de duración'
        img={perfumeBlackBanner}
        handleChangeSlide={setNumberBanner}
       />
      }
      <Information />
      <Testimonial />
      <Form/>
    </Page>
  )
};

export default Home;
