import LandingPageBanner from "../../components/LandingPageBanner/LandingPageBanner";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import SignupBanner from "../../components/SignupBanner/SignupBanner";
import DestinationCard from "../../components/Cards/DestinationCards/DestinationCards";
import landingVideo from "../../assets/videos/landing_page_video.mp4";
import landingImage1 from "../../assets/images/landing-page1.svg";
import airplaneIcon from "../../assets/icons/plane-solid.svg";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <LandingPageBanner
        video={landingVideo}
        title="Adventure Awaits: Let's Build Memories Beyond Imagination"
      />
      <InfoBanner
        header="Explore. Save. Connect."
        subheader="Your Ultimate Digital Travel Companion"
        image={landingImage1}
        icon={airplaneIcon}
        iconalt="airplane icon"
        imagalt="laptop with travel images"
      />
      <SignupBanner header="Ready for an adventure?" />
      <section className="landingpage__top-destinations">
        <h1>Top Destinations</h1>
        <div className="top-destinations__cards">
          <DestinationCard 
          title="Paris, France"
          description="The City of Light, where romance and art intertwine. From the iconic Eiffel Tower to the charming cobblestone streets lined with cafes, every corner tells a story. Lose yourself in the grandeur of the Louvre or stroll along the Seine at sunset. Indulge in culinary delights and savor the enchanting melodies of street musicians. Paris captivates with its timeless allure, leaving you longing to return."/>
          <DestinationCard 
          title="Tokyo, Japan"
          description="From the serene temples of Kyoto to the bustling streets of Tokyo, every step unveils a rich tapestry of culture and history. Explore the tranquil gardens, adorned with cherry blossoms in spring, or marvel at the futuristic skyscrapers towering over the skyline. Indulge in the exquisite cuisine, from sushi to ramen, and experience the warmth of Japanese hospitality. Whether you're immersing yourself in the vibrant energy of city life or finding tranquility in the countryside, Japan offers a journey of discovery and wonder at every turn." />
          <DestinationCard 
          title="Machu Picchu, Peru"
          description="Fthe ancient Incan citadel cradled amidst the Andes. Its majestic ruins, shrouded in mist, evoke a sense of wonder and mystery. Trek through rugged landscapes to reach this sacred site, where llamas roam and history whispers through the stone walls. Machu Picchu enchants with its breathtaking beauty, leaving visitors spellbound by its ancient allure." />
        </div>
      </section>

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
