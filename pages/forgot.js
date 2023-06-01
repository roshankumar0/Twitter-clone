import { useDispatch, useSelector } from 'react-redux';
import { Login, updateEmail } from '../store/cartSlice';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { RxCross2 } from 'react-icons/rx'
import { BsTwitter } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import Link from 'next/link';

const Loginuser = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(Login({ email, password }));
    };

    const isLoggedIn = useSelector((state) => state.names.isLoggedIn);
    const userEmail = useSelector((state) => state.names.email);

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/');
        }
    }, [isLoggedIn]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emails = email.split(',');
        dispatch(updateEmail(emails));
    };

    return (
        <div className=' min-h-screen w-full'>
            <div className="absolute left-[50%] flex justify-between top-[50%] translate-x-[-50%] max-w-[600px] translate-y-[-50%] flex-col h-[650px] min-h-[400px] max-h-[90vh] min-w-[600px] bg-slate-50 rounded-[16px] ">
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <ul className='flex items-center px-[16px]'>
                            <li className='flex-1  text-[#0F1419]'><RxCross2 className='cursor-pointer  h-[34px] w-[34px] hover:bg-slate-100 rounded-full p-[8px]' /></li>
                            <li className=''><BsTwitter className="h-[46px] twitter-color cursor-pointer w-[46px] p-[10px]" /></li>
                            <li className='flex-1'></li>
                        </ul>
                        <div className='m-auto'>
                            <div className='min-w-[364px] px-[80px] items-center flex flex-col'>
                                <div className='my-[20px] flex flex-col'>
                                    <h1 className=' leading-[36px]  text-[31px] font-bold text-black'>Find your Twitter account</h1>
                                    <p>Enter the email, phone number, or username associated with your account to change your password.</p>
                                </div>
                                <div className='w-full relative h-[56px]'>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='text'
                                        placeholder='Email, phone number, or username'
                                        className='w-full h-[56px] min-h-[56px] outline-none px-[8px] bg-transparent focus:placeholder:text-[#1D9BF0] focus:placeholder:text-[13px] focus:placeholder:translate-y-[-19px] absolute focus:text-black focus:border-[#1D9BF0] rounded-[4px] focus:placeholder:transition-all transition duration-00 ease-linear border-2'
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
                <div className='px-[80px] my-[24px]'>
                    <div className='bg-gray-500 min-h-[52px] flex justify-center items-center text-white rounded-full text-center cursor-pointer my-[12px] px-[80px]'>
                        <button onClick={handleLogin} className='px-[80px] font-bold ' type='submit'>Next</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Loginuser;
