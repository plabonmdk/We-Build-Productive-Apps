import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const RatingChart = ({rating}) => {
    
    
    return (
        <div className='w-full h-100 mt-5 max-w-[2000px] mx-auto'>
            <div>
                <h2 className='text-xl font-bold'>Ratings</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={[...rating].reverse()}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={70} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#FF8811" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
        </div>
    );
};

export default RatingChart;