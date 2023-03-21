import { Header } from "components"
import { FeaturedItems, Hero } from "./components"

const data = [
  {
  name: 'Hero Man',
  title: 'Desert King',
  bid: '0.5 ETH',
  image: 'https://images.unsplash.com/photo-1616166330003-8e1b0b2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
},
{
  name: 'Hero King',
  title: 'Desert King',
  bid: '0.5 ETH',
  image: 'https://images.unsplash.com/photo-1616166330003-8e1b0b2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
}
]

export const Homepage = () => {
  return (
    <div className="px-[32px]">
      <Header />
      <Hero />
      <FeaturedItems data={data}/>
    </div>

  )
}
