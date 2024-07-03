import {Container} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"

export default function AboutUsOurMission(props) {
    return (
        <>
        <PageTop
            h1="Our Mission"
            h2="Where it all started"
            img={require("../resources/placeholder.png")}
            alt=""
            source=""
            active="aboutUs/ourMission"
        />
        <Container className="mt-5">
            <h1 className="display-3">Our History</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Elit eget gravida cum sociis natoque penatibus et magnis dis. Nibh sit amet commodo nulla. Aliquam
                purus sit amet luctus venenatis. Dolor sit amet consectetur adipiscing elit ut. Bibendum at varius vel pharetra
                vel. Purus gravida quis blandit turpis cursus in hac habitasse. Laoreet suspendisse interdum consectetur libero
                id. Sed libero enim sed faucibus turpis in eu mi. In pellentesque massa placerat duis ultricies lacus sed.
                Bibendum at varius vel pharetra vel turpis nunc eget lorem. Ornare lectus sit amet est placerat.</p>
            <div className="d-flex mt-5" style={{width:"100%"}}>
                <div style={{width:"40%"}}><img src={require("../resources/placeholder.png")} style={{width:"100%", objectFit:"contain"}}></img></div>
                <div className="d-flex flex-column align-items-end justify-content-center" style={{width:"60%"}}>
                    <div className="d-flex flex-column" style={{width:"90%"}}>
                        <h1 className="display-5"> Where Do We Offer Services</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum. Imperdiet nulla malesuada
                            pellentesque elit. Risus pretium quam vulputate dignissim. Risus in hendrerit gravida rutrum quisque.
                            Purus ut faucibus pulvinar elementum integer. Orci a scelerisque purus semper eget duis at.</p>
                    </div>
                </div>
            </div>
        </Container>
        <PageBottom/>
        </>
    )
  }