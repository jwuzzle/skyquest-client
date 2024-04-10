import React from 'react'
import LandingPageBanner from '../../components/LandingPageBanner/LandingPageBanner'
import landingVideo from '../../assets/videos/landing_page.mp4'
import './LandingPage.scss'

const LandingPage = () => {
  return (
    <div>
        <LandingPageBanner 
            video={landingVideo}
            title="Adventure Awaits: Let's Build Memories Beyond Imagination"
            />
        <div>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante nec risus fermentum pharetra. Quisque ut volutpat libero. Nullam tincidunt, leo at tempus fermentum, libero felis cursus mi, eu vehicula magna eros id justo. In hac habitasse platea dictumst. Sed ac dapibus odio. Nullam in quam ac purus fermentum semper. Vivamus in diam eu libero tincidunt suscipit eget et odio. Sed accumsan quam vitae neque rutrum, a suscipit magna varius. Maecenas nec tortor sed libero condimentum vehicula. Curabitur dapibus justo vel libero malesuada efficitur. Donec vitae justo ac justo interdum semper. Curabitur vel sapien ac magna sodales sollicitudin. Nam id risus id lorem pellentesque auctor. Maecenas et diam vitae eros ultricies convallis eget id metus. Sed vel lorem non risus tincidunt congue eget id libero. Nunc lobortis libero nec faucibus tincidunt.</p>    
    </div>

            </div>
            

  )
}

export default LandingPage