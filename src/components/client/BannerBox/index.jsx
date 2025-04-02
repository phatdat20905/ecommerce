import React from 'react';
import { Link } from 'react-router-dom';

const BannerBox = (props) => {
    return (
        <div className="box bannerBox overflow-hidden rounded-lg group">
            <Link to={props.link} className='text-[16px] font-[600] link'>
                <img src={props.img} className='w-full transition-all group-hover:scale-105 group-hover:rotate-1' />
            </Link>
        </div>
    );
}

export default BannerBox;