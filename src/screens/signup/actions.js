/**
 * Filename: Registration actions.js
 */

import {RegisterAction} from './constants';

export const registerCustomer = ({newUser}) => ({
  type: RegisterAction.REGISTER,
  payload: {
    user: newUser,
  },
});
