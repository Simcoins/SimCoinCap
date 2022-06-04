import type { NextPage } from 'next'
import Header from '../components/header'
import Trending from '../components/Trending'
import CMCTABLE from '../components/cmc/CMCTABLE'



const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='min-10'></div>
      <Trending />
      <div className='min-20'></div>
      <CMCTABLE />
     
    </div>
  )
}

export default Home
