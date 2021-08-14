import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ViewMovieContext } from "../../../contexts/ViewMovieContext";
import { movieProvider, providerInfo } from "../../../lib/indexTypes";
import styles from "./provider-area.module.scss"
import { ProviderAreaProps } from "../types";


export default function ProviderArea({providers}: ProviderAreaProps) {
    const photoHalfUrl = "https://image.tmdb.org/t/p/w200";
    const {selectedMovie} = useContext(ViewMovieContext);


    var insertedProviders: [string] = [""];
    var providersList = [];
    if(providers.flatrate) {
        providersList.push(...providers.flatrate);
    }
    if(providers.buy) {
        providersList.push(...providers.buy);
    }
    if(providers.rent) {
        providersList.push(...providers.rent);
    }
    const allProviders: [providerInfo] = providersList as [providerInfo];
    if(allProviders.length <2){
        return (<></>);
    }

    useEffect(() => {
        resetProviders(actualTypeId);
    }, [selectedMovie])

    
    const [viewProviders, setViewProviders] = useState<[providerInfo]>(allProviders);
    const [actualTypeId, setActualTypeId] = useState(-1);

    function resetProviders(providerTypeId: number) {
        insertedProviders = [""];

        if (actualTypeId === providerTypeId) {
            setViewProviders([...allProviders]); //reset
            setActualTypeId(-1);
            return;
        }

        try {
            if(providerTypeId === 0) {
                setViewProviders([...providers.flatrate]);
                setActualTypeId(providerTypeId);
            }
            if(providerTypeId === 1) {
                setViewProviders([...providers.buy]);
                setActualTypeId(providerTypeId);
            }
            if(providerTypeId === 2) {
                setViewProviders([...providers.rent]);
                setActualTypeId(providerTypeId);
            }
        } catch {
            setViewProviders([...allProviders]); //reset
            setActualTypeId(-1);
            return;
        }
    }

    return ( 
    <div className={styles.container}>
        <h3>Provedores:</h3>
        {providers.flatrate ? (
        <button 
            onClick={() => resetProviders(0)}
            style={{borderColor:  actualTypeId == 0 ? "#fff" : ""}}
        >Stream
        </button>) : (<></>)}

        {providers.buy ? (
        <button 
            onClick={() => resetProviders(1)}
            style={{borderColor:  actualTypeId == 1 ? "#fff" : ""}}
        >Comprar
        </button>) : (<></>)}
        
        {providers.rent ? (
        <button 
            onClick={() => resetProviders(2)}
            style={{borderColor:  actualTypeId == 2 ? "#fff" : ""}}
        >Alugar
        </button>) : (<></>)}


        <ul className={styles.main}>
            {viewProviders.map((provider) => {
                if(insertedProviders.indexOf(provider.provider_name) >= 0) {
                    // to prevent same provider
                    return (<></>);
                }

                return (
                <li 
                    tabIndex={insertedProviders.length + 50} 
                    key={insertedProviders.length}
                    title={provider.provider_name}>
                    <span className={styles.providerImg + " img"}>
                        <Image
                            layout="fill"
                            src={photoHalfUrl + provider.logo_path}
                            alt={"Provedor: " + provider.provider_name}
                        />
                    </span>
                    <p>{insertedProviders.push(provider.provider_name) - 1}</p>
                    {/* 
                        go to discover section when are finished
                        https://api.themoviedb.org/3/discover/movie?api_key=###&with_watch_providers=8&watch_region=BR
                        get movies by the watch provider
                    */}
                </li>);
            })} 

        </ul>
    </div>
    );
}