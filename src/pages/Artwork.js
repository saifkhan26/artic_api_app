import { data } from "autoprefixer";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImage } from "../globalFunc";

const Artwork = () => {
    const [ artwork, setArtwork ] = useState()
    const artworkId = useParams().id
    const getArtwork = async (identifier) => {
        const url = `https://api.artic.edu/api/v1/artworks/${identifier}`
        const artworkRaw = await fetch(url, {
            method: 'GET', 
            headers: {
            'Content-Type': 'application/json'
            },
        })
        const artworkData = await artworkRaw.json()
        if(artworkData !== undefined){
            setArtwork(artworkData)
        }
    }
    const imgLink = getImage(artwork?.data?.image_id, 843)
    useEffect(() => {
        getArtwork(artworkId)
        console.log(artwork)
    }, [])
    return(
        <section>
            <div className="container">
                <div className="grid grid-cols-1 gap-3">
                    <img className="w-full object-contain" src={imgLink} alt="" />
                    <h1 className="text-6xl uppercase">{artwork?.data?.title}</h1>
                    <p className="ff-hamil text-8xl text-center text-primary">{artwork?.data?.artist_title}</p>
                    <p className="text-3xl">Category: {artwork?.data?.artwork_type_title}</p>
                    <p className="text-2xl flex gap-3">{artwork?.data?.category_titles.map(e => (<span className="bg-primary rounded text-secondary p-3">{e}</span>))}</p>
                    <p className="text-2xl flex gap-3"><span>{artwork?.data.date_start}</span>-<span>{artwork?.data.date_end}</span></p>
                    <p className="text-base leading-8"><span className="w-full block text-primary text-lg font-bold">History Behind the Artwork: </span>{artwork?.data?.exhibition_history}</p>
                    <p className="text-base leading-8"><span className="w-full block text-primary text-lg font-bold">Provenance Text:</span>{artwork?.data?.provenance_text}</p>
                    <p className="text-base leading-8"> <span className="w-full block text-primary text-lg font-bold">Publication History:</span>{artwork?.data?.publication_history}</p>
                </div>
            </div>
        </section>
    )
}

export default Artwork