import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getImage } from "../globalFunc";

const Artwork = ({data}) => {
    console.log(data)
    useEffect(() => {

    },[])
    return(
        <div className="artwork__card">
            <Link to={`artwork/${data?.id}`}><img className="object-cover w-full rounded overflow-hidden" src={getImage(data?.image_id, 300)}  alt="" /></Link>
            <div className="p-3">
                <p className="text-3xl mb-3">{data?.title}</p>
                <p className="uppercase text-xl mb-3">{data?.artist_title}</p>
                <p className="bg-primary flex gap-3 mb-3 p-1 rounded text-secondary font-bold justify-center"><span>{data.date_start}</span>-<span>{data.date_end}</span></p>
                <p className="flex gap-3 flex-wrap">{data?.category_titles.map(item => (
                    <span className="border-r-2 border-white last:border-r-0 pr-3">{item}</span>
                ))}</p>
            </div>
        </div>
    )
}

export default Artwork