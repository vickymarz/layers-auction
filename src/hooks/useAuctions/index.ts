import {useQuery} from 'react-query'
import axios from 'axios'

const getAuctionData = async () => {
   const response = await axios.get('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20')
   return response
}
export const useAuctions = (onSuccess: () => void, onError: () => void) => {
    return useQuery('auctions-data', getAuctionData, {
        onSuccess,
        onError,
    })
   }
