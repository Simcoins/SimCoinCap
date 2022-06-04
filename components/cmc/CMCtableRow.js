import React from 'react'
import Image from 'next/image'
import More from '../../assets/svg/more'
import Star from '../../assets/svg/star'
import Rate from './rate'
import { useRouter } from 'next/router'
import CoinNameRow from '../CoinNameRow'

const styles ={
    tableRow:  `text-white border-b border-gray-800 text-[0.93rem]`,
}

const CMCtableRow = ({
    starNum,
    coinName,
    coinIcon,
    coinSymbol = '---',
    price = '----',
    hRate = '---',
    dRate = '---',
    hRateIsIncrement,
    dRateIsIncrement,
    marketCapValue = '---',
    volumeValue = '---',
    volumeCryptoValue = '---',
    circulatingSupply = '---',

}) => {



      const router = useRouter()

      const viewCoinDetails = () => {
        router.push(
          `/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`,
        )
      }
    
      const viewPrice = () => {
        router.push(
          `/currencies/price?symbol=${coinSymbol}&coin=${coinName}&price=${price}`,
        )
      }

      const formatNum = num => {
        return Number(num.toFixed(2)).toLocaleString()
      }

    return (
        <tbody className={styles.tableRow}>
        <tr>
          <td>
            <Star />
          </td>
          <td>{starNum}</td>

          {coinIcon && coinIcon ? (
              <td className='cursor-pointer'>
                  <CoinNameRow
                  name={coinName}
                  icon={coinIcon}
                  clicked = {viewCoinDetails}
                  />
              </td>
          ) :( 
              <></>
          )}

<td className='cursor-pointer' onClick={viewPrice}>
          <p>${formatNum(price)}</p>
        </td>
        <td>
          <Rate isIncrement={hRateIsIncrement} rate={`${formatNum(hRate)}%`} />
        </td>
        <td>
          <Rate isIncrement={dRateIsIncrement} rate={`${formatNum(dRate)}%`} />
        </td>

        <td>
          <div>
            <p>${formatNum(marketCapValue)}</p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(volumeValue)}</p>
            <p className='text-gray-400'>
              {formatNum(volumeCryptoValue)} {coinSymbol}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(circulatingSupply)}</p>
          </div>
        </td>

      </tr>
    </tbody>
  )
}

export default CMCtableRow
