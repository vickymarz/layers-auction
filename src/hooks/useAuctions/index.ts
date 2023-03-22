import { useQuery } from 'react-query'
import axios from 'axios'

const getAuctionData = async () => {
  const response = await axios.get('https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b')
  return response.data
}

export const useAuctions = () => {
  return useQuery('auctions-data', getAuctionData)
}
