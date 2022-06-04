import {React, useState} from 'react';
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from "react-switch";
import Rate from '../components/cmc/rate'

const styles ={
    trendingWrapper:`mx-24 my-20 max-w-screen-2xL`,
    h1: `text-3xl text-white`,
    flexcenter: `flex items-center`
}

const Trending = () => {
    const [checked,setChecked] = useState(false)

    return(
        <div className="text-white">
            <div className={styles.trendingWrapper}>
                <div className='flex justify-between'>
                    <h1 className={styles.h1}>Todays Cryptocurrencies Prices by SimCoinCap</h1>

                    <div className='flex'>
                        <p className='text-gray-400'>Hightlights &nbsp;</p>
                        <ReactSwitch checked={checked} onChange={()=> {setChecked(!checked)}} />
                    </div>
                </div>
                <br/>
                <div className='flex'>
                    <p className='text-gray-400'>The global cryto market cap is $1.22T, a &nbsp;</p>
                    <span><Rate isIncrement={false} rate ='2.18%' /></span>
                    <p> &nbsp; decrease over the last day.</p>
                </div>
                <br/>

                 <div className={styles.flexcenter}>
                {/*
                 <TrendingCard title ='Trending' icon{fire}
                 trendingData = {trendingData} />
                 <TraendingCard title ='Biggest Gainers' icon{gainers}
                 trendingData = {trendingData} />
                 <trendingCard title ='Recently Added' icon={recent}
                 trendingData = {trendingData} /> */
                }
                 </div>
            </div>
        </div>
    )
}

export default Trending