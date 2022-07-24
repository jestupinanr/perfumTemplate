import { AppContextType } from './index';

export const appProvider: AppContextType = {
  // Generic
  updateContext: old => old,

  // Auth
  isAuthenticated: true,

  // ChangeSecondColor
  ChangeSecondColor: false,

};
