import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-gray-900 border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-medium text-blue-900 text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-white'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg text-green-900 my-2'>{job?.title}</h1>
                <p className='text-sm text-white'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#28A745] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards