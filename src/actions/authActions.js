import React from 'react';
import axios from 'axios';

import {
  LOG_IN,
} from './types';


export const login = data => dispatch => {
  console.log(data)
  try {
    return axios.post('http://127.0.0.1:8000/account/login/', data);
  } catch (error) {
    console.log(error)
    throw error.response
  }
}








