import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);

    const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

    return (
        <div className='min-h-screen bg-[#353839]'>
            <Navbar />
            <div className='mt-5 px-4 sm:px-6 lg:px-8'>
                <div className='lg:hidden mb-4'>
                    <Button onClick={toggleFilter} variant="outline" className="w-full ">
                        <Menu className="mr-2 h-4 w-4 " /> Filter Jobs
                    </Button>
                </div>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <AnimatePresence>
                        {(isFilterOpen || window.innerWidth >= 1024) && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className='lg:w-[30vh]'
                            >
                                <FilterCard />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {filterJobs.length <= 0 ? (
                        <span className="text-white text-center w-full">Job not found</span>
                    ) : (
                        <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                                {filterJobs.map((job) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.3 }}
                                        key={job?._id}
                                        className='h-full flex'
                                    >
                                        <Job job={job} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Jobs