import { Header } from "components"
import { FeaturedItems, Hero } from "./components"
import { useAuctions } from "hooks"

export const Homepage = () => {

  const { isLoading, isError, data } = useAuctions()
  return (
    <div className="p-[16px] md:p-[32px]">
      <Header />
      <Hero />
      <FeaturedItems data={data?.data} isLoading={isLoading} isError={isError}/>
    </div>

  )
}
