import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col gap-5 my-10 sm:my-16 lg:my-20'>
                <span className='mx-auto px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-100 text-red-600 text-xs sm:text-sm font-medium'>
                    Find Your Dream Job
                </span>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
                    Shine Your Future <br /> with <span className='text-[#28A745]'>Talent Trove</span>
                </h1>
                <p className='text-sm sm:text-base max-w-2xl mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!
                </p>
                <div className='flex w-full sm:w-4/5 lg:w-3/5 xl:w-1/2 shadow-lg border border-[#708090] rounded-full items-center gap-2 mx-auto bg-[#696969] shadow-white'>
                    <input
                        type="text"
                        placeholder='Search your career options'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full bg-[#696969] text-white placeholder-gray-300 px-4 py-2 rounded-l-full text-sm sm:text-base'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#007BFF] px-3 sm:px-4 py-2">
                        <Search className='h-4 w-4 sm:h-5 sm:w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection