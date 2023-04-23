import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { WhatsApp } from './components/WhatsApp'
import { MobileFooter } from './components/mobile/MobileFooter'
import { MobileHeader } from './components/mobile/MobileHeader'
import { MobileWhatsApp } from './components/mobile/MobileWhatsApp'
import { CampainAds } from './screens/CampainAds'
import { OtherServices } from './screens/OtherServices'
import { Principal } from './screens/Principal'
import { SitesDevelopment } from './screens/SitesDevelopment'
import { SocialMediaStaff } from './screens/SocialMediaStaff'
import { WhoWeAre } from './screens/WhoWeAre'
import { MobileCampainAds } from './screens/mobile/MobileCampainAds'
import { MobileOtherServices } from './screens/mobile/MobileOtherServices'
import { MobilePrincipal } from './screens/mobile/MobilePrincipal'
import { MobileSitesDevelopment } from './screens/mobile/MobileSitesDevelopment'
import { MobileSocialMediaStaff } from './screens/mobile/MobileSocialMediaStaff'
import { MobileWhoWeAre } from './screens/mobile/MobileWhoWeAre'


export function App() {
  return (
    <>
      <div className="hidden lg:flex lg:flex-col">
        <WhatsApp />
        <Header />
        <Principal />
        <WhoWeAre />
        <SocialMediaStaff />
        <SitesDevelopment />
        <CampainAds />
        <OtherServices />
        <Footer />
      </div>

      <div className="flex flex-col lg:hidden">

        <MobileHeader />
        <MobilePrincipal />
        <MobileWhoWeAre />
        <MobileSocialMediaStaff />
        <MobileSitesDevelopment />
        <MobileCampainAds />
        <MobileOtherServices />
        <MobileFooter />
      </div>
    </>
  )
}


