import { useEffect, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        (async () => {
            const results = await fetch("/api/list").then(response => response.json());
            console.log(results);
            setRestaurants(results);
            
        })();
    }, []);
    console.log(restaurants)
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <h4>aaaa</h4>

            {
            // setTimeout(function(){
                restaurants.length!==0?<h4>{restaurants[0]._id}</h4> : ""
            // },3000)
            }
            {/* <h4>{restaurants[0]}</h4> */}
        </div>
    )
}
