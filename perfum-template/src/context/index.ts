import { createContext } from 'react';

import { appProvider as provider } from './provider';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<AppContextType>(null!);

export interface AppContextType {
  // Generic
  updateContext: React.Dispatch<React.SetStateAction<AppContextType>>;

  // Auth
  isAuthenticated: boolean;

   // ChangeSecondColor
   ChangeSecondColor: boolean,

   //showNavbar
   showMenu: boolean;

}

export const appProvider: AppContextType = provider;
