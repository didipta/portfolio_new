import React from 'react';
import img from "../Component/img/loading.gif"
const Loading = () => {
    return (
        <div className="flex justify-center items-center mb-5">
            <img src={img} alt="" className="w-8"></img>
        </div>
    );
};

export default Loading;