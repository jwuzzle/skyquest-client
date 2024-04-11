import LandingPageBanner from "../../components/LandingPageBanner/LandingPageBanner";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import SignupBanner from "../../components/SignupBanner/SignupBanner";
import landingVideo from "../../assets/videos/landing_page_video.mp4";
import landingImage1 from "../../assets/images/landing-page1.svg";
import airplaneIcon from "../../assets/icons/plane-solid.svg";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div>
      <LandingPageBanner
        video={landingVideo}
        title="Adventure Awaits: Let's Build Memories Beyond Imagination"
      />
      <InfoBanner
        header="Explore. Save. Connect."
        subheader="Your Ultimate Digital Travel Companion"
        value1="Explore more, spend less. Our tools help you discover the world affordably, connecting you with unforgettable experiences."
        value2="Maximize your points. Find the best flight options for your credit card rewards, unlocking endless travel possibilities."
        value3="Embark on exciting challenges and earn rewards! Whether it's exploring all states or all continents, we've got adventures for every type of traveler."
        value4="Personalized recommendations. Let us guide you to your next dream destination with tailored suggestions based on your preferences."
        image={landingImage1}
        icon={airplaneIcon}
        iconalt="airplane icon"
        imagalt="laptop with travel images"
      />
      <SignupBanner header="Ready for an adventure?" />

      <div>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante
          nec risus fermentum pharetra. Quisque ut volutpat libero. Nullam
          tincidunt, leo at tempus fermentum, libero felis cursus mi, eu
          vehicula magna eros id justo. In hac habitasse platea dictumst. Sed ac
          dapibus odio. Nullam in quam ac purus fermentum semper. Vivamus in
          diam eu libero tincidunt suscipit eget et odio. Sed accumsan quam
          vitae neque rutrum, a suscipit magna varius. Maecenas nec tortor sed
          libero condimentum vehicula. Curabitur dapibus justo vel libero
          malesuada efficitur. Donec vitae justo ac justo interdum semper.
          Curabitur vel sapien ac magna sodales sollicitudin. Nam id risus id
          lorem pellentesque auctor. Maecenas et diam vitae eros ultricies
          convallis eget id metus. Sed vel lorem non risus tincidunt congue eget
          id libero. Nunc lobortis libero nec faucibus tincidunt.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
