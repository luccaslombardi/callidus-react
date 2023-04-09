import { Header } from './components/Header'
import { CampainAds } from './screens/CampainAds'
import { OtherServices } from './screens/OtherServices'
import { Principal } from './screens/Principal'
import { SitesDevelopment } from './screens/SitesDevelopment'
import { SocialMediaStaff } from './screens/SocialMediaStaff'
import { WhoWeAre } from './screens/WhoWeAre'


export function App() {
  return (
    <>
      <Header />
      <Principal />
      <WhoWeAre />
      <SocialMediaStaff />
      <SitesDevelopment />
      <CampainAds />
      <OtherServices />
    </>
  )
}


