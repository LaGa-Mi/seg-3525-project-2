import {Container} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import HomeRow from "./sub-components/HomeRow.jsx"

export default function Home(props) {
    return (
        <>
        <PageTop
            h1="KeywordsKeywordsKeywords"
            h2="SloganSloganSlogan"
            button="Contact Us"
            buttonTo="/contactUs"
            img={require("../resources/yardWorkbg.jpg")}
            alt="Yard Work"
            source="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.brotherslpm.ca%2F&psig=AOvVaw2Wrgpke7bS3pDDKtPL-Uck&ust=1719768279245000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDWgZ2qgYcDFQAAAAAdAAAAABAE"
            active="home"
            large={true}
        />
        <Container>
            <div className="mt-5">
                <h1 className="display-3">Who we are</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate libero et diam efficitur, vitae laoreet ipsum elementum.
                Fusce vitae porta massa. Etiam finibus, diam vel dignissim blandit, neque magna pharetra velit, in tristique est enim sed risus.
                Nulla felis massa, consequat vel porttitor at, laoreet sit amet metus. Donec sem est, sagittis quis ultricies eget, vehicula ac ipsum.
                Mauris dignissim egestas aliquet. Nulla facilisi. Nunc posuere velit arcu, a vulputate justo vestibulum a. Aenean vulputate mi non
                tortor cursus, vel commodo magna scelerisque.</p>
            </div>
            <div className="mt-5">
                <HomeRow
                imgPos="left"
                title="Yard Work"
                description="Nunc bibendum consectetur malesuada. Sed in sapien ac ex tristique sodales ut in nisl. Cras eu fermentum risus. Nam efficitur
                eros ante, ac elementum quam dignissim id. Integer quam lectus, vulputate in tincidunt id, pulvinar nec sem."
                to="/Services/YardWork"
                img={require("../resources/placeholder.png")}
                />
                <HomeRow
                imgPos="right"
                title="Car Washing"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat id mauris ac tincidunt. Aenean nec purus
                mattis dui blandit ullamcorper elementum vitae diam."
                to="/Services/CarWashing"
                img={require("../resources/placeholder.png")}
                />
                <HomeRow
                imgPos="left"
                title="Dog Walking"
                description="Sed leo lorem, maximus non facilisis vel, imperdiet a quam. Suspendisse congue leo sed purus condimentum, sit amet consequat
                felis lobortis."
                to="/Services/CarWashing"
                img={require("../resources/placeholder.png")}
                />
            </div>
        </Container>
        <PageBottom/>
        </>
    )
  }