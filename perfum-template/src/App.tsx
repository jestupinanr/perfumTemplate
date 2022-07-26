import { useState } from 'react';
import './App.css';
import { AppContext, appProvider } from './context';
import Home from './views/home/Home';
import SwiperCore, { Autoplay } from 'swiper'

function App() {
   // Updatable Provider
   const [provider, setProvider] = useState(appProvider);
   SwiperCore.use([Autoplay])

  return (
    <AppContext.Provider value={{ ...provider, updateContext: setProvider }}>
      <Home/>
    </AppContext.Provider>
  );
}

export default App;
