
import HomeBanner from "../../components/pages/home/homeBanner";
import DiscoverTrustedSection from "../../components/pages/home/DiscoverTrustedSection";
import PassionSection from "../../components/pages/home/PassionSection";
import DownloadSection from "../../components/pages/home/DownloadSection";

export default function Home() {
  return (
    <>
        <HomeBanner />
        <DiscoverTrustedSection />
        {/* <ShowcaseSection/>  */}
        <PassionSection />
        <DownloadSection />
    </>
  );
}
