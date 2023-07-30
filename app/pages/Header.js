import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import LogOutButton from './LogOutButton'

const Header = () => {
    const session = false;

    if(session){
        return(
            <div className="sticky top-0 z-50 bg-slate-100 flex justify-between items-center p-10">
                <div className="flex space-x-2">
                    <Image className="rounded-full mx-2 object-contain" 
                            height={10}
                            width={50}
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png'
                            alt="Profile Picture"
                    />
                    <div>
                        <p className="text-green-600">Logged in as:</p>
                        <p className="font-bold text-lg">JavaScript</p>
                    </div>
                </div>

                <LogOutButton />
            </div>
        )
    }

  return (
    <div className="sticky top-0 z-50 bg-slate-100 flex justify-center items-center p-10">
        <div className="flex flex-col items-center space-y-5">
            <div className="flex space-x-2 items-center">
                <Image src="https://static.vecteezy.com/system/resources/previews/007/688/855/original/tv-logo-free-vector.jpg"
                alt="Logo"
                width={40}
                height={10} />

                <p className="text-blue-500">Welcome to TVLu-chat room</p>
            </div>

            <Link href="/auth/signin" className="bg-green-600 hover:bg-green-900 duration-75 text-white font-bold px-4 py-2 rounded">Sign In</Link>
        </div>
    </div>
  )
}

export default Header