import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactSVG } from "react-svg";
//Components
import Artwork from "../components/Artwork";
//Svg
import bannerPath from '../assets/svgs/Path.svg'


const Home = () => {
    const [page, setPage] = useState(1);
    const [artworks, setArtworks] = useState();

    const url = `https://api.artic.edu/api/v1/artworks?page=${page}`
    const getData = async () => {
        const response = await fetch(url, {
            method: 'GET', 
            headers: {
            'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        if(data !== undefined){
            setArtworks(data)
        }
    }
    const nextPage = () => {
        setPage(page + 1)
    }
    const prevPage = () => {
        page <= 0 ? setPage(1) : setPage(page - 1)
    }
    useEffect(() => {
        getData()
        console.log(artworks)
    },[page])
    return(
        <>
        <section className="banner__section relative overflow-hidden grid grid-cols-1 items-center">
            <ReactSVG className="absolute -inset-x-2 inset-0 z-0 grid grid-cols-1 items-center" src={bannerPath}/>
            <div className="container">
                <div className="grid grid-cols-1 gap-3 text-center">
                    <p className="font-bold text-2xl uppercase">Welcome to </p>
                    <p className="ff-hamil text-9xl text-primary">Art Institue </p>
                    <p className="font-bold text-7xl uppercase">of Chicago</p>
                </div>
            </div>
        </section>
        <section className="artwork__section">
            <div className="container">
                <div className="grid grid-cols-3 gap-3">
                    {artworks !== undefined ? (
                        artworks.data?.map((item, index) => (
                            <Artwork data={item} index={index}/>
                        ))
                    ) : null}
                </div>
                <ul className="pagination flex justify-center items-center gap-3 mt-6">
                    <li className='btn rounded text-secondary font-bold' onClick={e => prevPage()}>Previous Page</li>
                    <li>{page}</li>
                    <li className="btn rounded text-secondary font-bold" onClick={e => nextPage()}>Next Page</li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Home