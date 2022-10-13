import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function Contact({}: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<inputs>();
    const onSubmit: SubmitHandler<inputs> = (formdata) => {
        window.location.href = 'mailto:pedr02b211@gmail.com?subject=${formData.subject}&body=${formdata.name}. ${formData.message}';
    };
    return <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
    justify-evenly mx-auto items-center z-0' >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white-500 text-2xl' >
            Contact Me</h3>
        <div className='flex flex-col space-y-10' >
            <h4 className='text-4xl font-semibold text-center' >
                Contact Me!!!...
                <span className='decoration-[#cc33ff]/10 underline' ></span>
            </h4>

            <div className='space-y-10' > 
                <div className='flex items-center space-x-5 justify-center' >
                <PhoneIcon className='text-[#cc33ff] h-7 w-7 animate-pulse' />
                <p className='text-2xl text-[#cc33ff] animate-bounce ' >+44 2345 678910</p>
                </div>

                <div className='flex items-center space-x-5 justify-center' >
                <EnvelopeIcon className='text-[#cc33ff] h-7 w-7 animate-pulse' />
                <p className='text-2xl text-[#cc33ff] ' >pedr02b211@gamil.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center' >
                <MapPinIcon className='text-[#cc33ff] h-7 w-7 animate-pulse' />
                <p className='text-2xl text-[#cc33ff] ' >123 micky mouse street</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} 
                  className='flex flex-col space-y-2 w-fit mx-auto' >

                <div className='flex space-x-2' >
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')}  placeholder='Email' className='contactInput' type="email" />
                </div>

                <input {...register('subject')}  placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')}  placeholder='Message' className='contactInput' />

                <button type='submit' className='bg-[#cc33ff] py-5 px-10 rounded-md text-black font-bold' >Submit</button>

            </form>
        </div>
    </div>
}

export default Contact