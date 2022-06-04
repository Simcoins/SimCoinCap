import React from "react";
import Image from "next/image";
import Search from '../assets/svg/search'
import { ConnectButton } from "web3uikit";

const styles = {
    header: `bg-[#031326] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWraapper: `flex justify-center h-full max-w-screen-xL mx-auto px-4`,
    nav: `flex justif-center item-center gap-[20px]`,
    navItem:`relative mr-1 cursor-pointer hover:opacity-60`,
    badge:`rounded-full bg-blue-600 h-0.5 w-15  bottom-5 `,
    inputcontainer:`flex items-center justify-center p-2 rounded bg-[#171924]`,
    input:`bg-transparent outline-none text-white w-70 mL-3`,
    navlink:`text-white flex mx-[10px]`
}

const header = () =>{
    return(
        <div className={styles.header}>
            <Image
            src='https://cdn.discordapp.com/attachments/883585531240398850/982558647454404608/Simcoincap.png'
            alt='logo'
            width={220}
            height={220}
            />

            <div className={styles.headerWraapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                          <div className={styles.navlink}>Cryptocurrencies</div>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}>Exchanges</div>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}>NFT</div>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}>Portfolio</div>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}>Watchlist</div>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}>Products</div>
                    </div>

                    <div className={styles.navItem}>
                          <div className={styles.navlink}>Learn</div>
                    </div>
                </nav>

                <div className='flex items-center'>
                    <ConnectButton/>
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