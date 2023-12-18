import { AlertCircle } from 'lucide-react'
import React from 'react'

const AlertMessage = ({message}) => {
  return (
    <div className='flex bg-red-500 p-3 rounded '><AlertCircle /><span className='ml-2'>{message}</span></div>
  )
}

export default AlertMessage