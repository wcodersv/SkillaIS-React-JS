import React from 'react';
import IncomingCall from
  '../../ui/TableComponents/IconCall/IncomingCall';
import Avatar1 from '../../ui/TableComponents/Avatar1';
import DotRaiting from '../../ui/DotRating';

import './CallRow.css';


export const CallRow = () => {
  return (
    <div className='call_wrapper'>
      <IncomingCall />
      <p className='time'>19:00</p>
      <Avatar1 />
      <p className='phone'>+7 (987) 567-17-12</p>
      <p className='work'>Rabota.ru</p>
      <DotRaiting></DotRaiting>
      <p className='duration'>00:40</p>
    </div>
  );
};
