import LandingPageBanner from "../../components/LandingPageBanner/LandingPageBanner";
import UnauthenticatedHeader from "../../components/Header/UnauthenticatedHeader"
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import InfoBannerTwo from "../../components/InfoBanner/InfoBannerTwo";
import SignupBanner from "../../components/SignupBanner/SignupBanner";
import landingVideo from "../../assets/videos/landing_page_video.mp4";
import landingImage1 from "../../assets/images/landing-page1.svg";
import landingImage2 from "../../assets/images/landing-page2.svg";
import airplaneIcon from "../../assets/icons/plane-solid.svg";
import SliderCards from "../../components/Slider/SliderCards"
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landingpage">
    <div>
      <UnauthenticatedHeader />
      <LandingPageBanner
        video={landingVideo}
        title="Your Adventure Awaits, Discover the World."
      />
      <InfoBanner
        header="Explore. Save. Connect."
        subheader="Your Ultimate Digital Travel Companion"
        image={landingImage1}
        icon={airplaneIcon}
        iconalt="airplane icon"
        imagalt="laptop with travel images"
      />
      <InfoBannerTwo
        header="See More, Spend Less."
        subheader="Let Your Traveling Keep You Earning"
        image={landingImage2}
        icon={airplaneIcon}
        iconalt="airplane icon"
        imagalt="globe with travel images"
      />
      <SliderCards />
      <SignupBanner header="Ready for an adventure?" />
    </div>
    </div>
  );
};

export default LandingPage;
