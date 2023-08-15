import React from 'react'
import incomingCall from './incoming.svg'
import outgoingCall from './outgoing.svg'

export const Call = ({state='incoming'}) => {
  return (
    <div><img src={state==='incoming'? incomingCall : outgoingCall} alt="" /></div>
  )
}
