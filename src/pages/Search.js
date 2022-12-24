import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Search = () => {
    const [searchArtwork, setSearchArtwork] = useState();
    const [searchQuery, setSearchQuery] = useState();

    const url = 'https://api.artic.edu/api/v1/artworks/search'

    useEffect(() => {
        console.log(searchArtwork)
        if(searchQuery === ''){
            return
        }
        const getData = () =>  setTimeout( async () => {
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                'Content-Type': 'application/json'
                },
            })
            const data = await response.json();
            setSearchArtwork(data)
        }, 2000);
        getData()
        return () => clearTimeout(getData)
    },[searchQuery])

    return(
        <section className="search__section grid grid-cols-1 items-center">
            <div className="container">
                <h1 className="text-6xl text-center mb-8">Search for <span className="text-9xl ff-hamil text-primary">Artworks</span>here</h1>
                <div className="">
                    <input type="text" name="" id="" onChange={e => setSearchQuery(e.target.value)} className="text-center bg-transparent p-6 rounded focus:border-yellow-600 focus:border-2 outline-none transition-all border-transparent w-full" placeholder="Search Here..." />
                </div>
            </div>
        </section>
    )
}

export default Search

