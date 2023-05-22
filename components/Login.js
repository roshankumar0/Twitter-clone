import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <ul className='bg-slate-100 rounded-lg flex flex-col py-[12px]'>
      <Link href={`login`} className='py-[12px] px-[16px] hover:bg-slate-200'>
        <li className=''>Add an existing account</li>
      </Link>
      <Link href={`logout`} className='py-[12px] px-[16px] hover:bg-slate-200'>
        <li className=''> Log out @ROSHNN01</li>
      </Link>
    </ul>
  )
}

export default Login
