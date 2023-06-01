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
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex-col h-[650px] min-h-[400px] max-w-[80vw] max-h-[90vh] min-w-[600px] bg-slate-50 rounded-[16px] block">
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <ul className='flex items-center px-[16px]'>
                            <li className='flex-1 text-[#0F1419]'><RxCross2 className='cursor-pointer  h-[34px] w-[34px] hover:bg-slate-100 rounded-full p-[8px]' /></li>
                            <li className=''><BsTwitter className="h-[46px] twitter-color cursor-pointer w-[46px] p-[10px]" /></li>
                            <li className='flex-1'></li>
                        </ul>
                        <div className='m-auto'>
                            <div className='min-w-[364px] max-w-[364px] px-[16px] pb-[32px] flex flex-col'>
                                <h1 className='my-[20px] leading-[36px]  text-[31px] font-bold text-black'>Sign in to Twitter</h1>
                                <div className='h-[40px] rounded-full text-center flex items-center cursor-pointer justify-center border my-[12px]'>
                                    <span><FcGoogle style={{ height: "20px", width: "20px", marginRight: "4px" }} /> </span>
                                    <Link href={`https://accounts.google.com/v3/signin/identifier?dsh=S-552825725%3A1685531282082152&ifkv=Af_xneHgOCqFQ7D7sp4SIwFS1rW4lV5l-z0mJCEX-5NfqClO4LuvHTCa2JdeYCjXxFzove7Bg9y-&flowName=GlifWebSignIn&flowEntry=ServiceLogin`}>
                                        <span> Sign in with Google</span>
                                    </Link>
                                </div>
                                <div className='py-[12px] h-[40px] rounded-full text-center flex items-center cursor-pointer justify-center border font-bold'>
                                    <span ><AiFillApple style={{ height: "20px", width: "20px", marginRight: "4px" }} /></span>
                                    <Link href={`https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&path=%2Faccount%2F&rv=1`}>
                                        <span>Sign in with Apple</span>
                                    </Link>
                                </div>
                                <div className='flex justify-center items-center mx-[-4px]'>
                                    <div className='h-[0.2px] flex-1 bg-slate-400 mx-[4px]'></div>
                                    <div className='text-[17px] text-[#0F1419]'>or</div>
                                    <div className='h-[0.2px] flex-1 bg-slate-400 mx-[4px]'></div>
                                </div>
                                <div className='rounded-[4px] border mt-[16px pb-[8px] pt-[12px]'>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Phone, email, or username' className='w-full outline-none pl-2 bg-transparent' />
                                </div>
                                <div className='bg-black text-white rounded-full text-center cursor-pointer my-[12px]'>
                                    <button onClick={handleLogin} className='py-[12px] font-bold ' type='submit'>Next</button>
                                </div>
                                <button className=' w-full'><Link href={`forgot`}>Forgot password?</Link></button>
                                <div className='mt-[40px] text-[15px]'>
                                    <span className='text-[#536471]'>Don't have an account? </span>
                                    <span className='text-[#1D9BF0]'><Link href={`/signup`}>Sign up</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Loginuser;
