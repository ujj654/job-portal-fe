import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
   
    return (
        <div className='max-w-7xl mx-auto my-20 px-4'>
            
            <h1 className='text-[28px] md:text-3xl sm:text-2xl lg:text-4xl font-bold text-center md:text-left '>
                <span className='text-[#28A745]'>Recent & best </span> 
                career opportunities
            </h1>
            

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
                {
                    allJobs.length <= 0 
                        ? <span>No Job Available</span> 
                        : allJobs?.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
                }
            </div>
        </div>
    )
}

export default LatestJobs
