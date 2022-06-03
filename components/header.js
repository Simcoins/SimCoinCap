import React from "react";
import Image from "next/image";
import Search from '../assets/svg/search'

const styles = {
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWraapper: `flex justify-center h-full max-w-screen-xL mx-auto px-4`,
    nav: `flex justif-center item-center gap-[20px]`,
    navItem:`relative mr-1 cursor-pointer hover:opacity-60`,
    badge:`rounded-full bg-blue-600 h-1 w-1 adsoblute bottom-5 right-0 top-1 ring-4`,
    inputcontainer:`flex items-center justify-center p-2 rounded bg-[#171924]`,
    input:`bg-transparent outline-none text-white w-70 mL-3`,
}

const header = () =>{
    return(
        <div className={styles.header}>
            <Image
            src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
            alt='logo'
            width={220}
            height={220}
            />

            <div className={styles.headerWraapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                          <div className={styles.navlink}
                          >Cryptocurrencies</div>
                          <div className={styles.badge}/>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}
                          >Exchanges</div>
                          <div className={styles.badge}/>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}
                          >NFT</div>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}
                          >Portfolio</div>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}
                          >Watchlist</div>
                          <div className={styles.badge}/>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}
                          >Products</div>
                          <div className={styles.badge}/>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}
                          >Learn</div>
                    </div>
                </nav>

                <div className='flex items-center'>
                    {/* <ConnectButtom/> */}
                    <div className={styles.inputcontainer}>
                     <Search/>
                        <input className={styles.input} placeholder =
                        'Search'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header