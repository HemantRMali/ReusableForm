/**
 * Filename: Registration actions.js
 */

import {RegisterAction} from './contants';

export const registerCustomer = ({newUser}) => ({
  type: RegisterAction.REGISTER,
  payload: {
    user: newUser,
  },
});
