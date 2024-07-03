import {Container} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import ExpertCard from "./sub-components/ExpertCard.jsx"

export default function AboutUsOurTeam(props) {
    return (
        <>
        <PageTop
            h1="Meet Our Team"
            h2="The students that make it all happen!"
            img={require("../resources/placeholder.png")}
            alt=""
            source=""
            active="aboutUs/ourTeam"
        />
        <Container className="mt-5">
            <h1 className="display-4">Yard Work<span className="style-line-long"></span></h1>
            <ExpertCard
                name="First Name Last Name"
                title="Specialty Specialist"
                description="Amet volutpat consequat mauris nunc congue. Eros in cursus turpis massa tincidunt
                dui ut. Eget egestas purus viverra accumsan in nisl. Blandit turpis cursus in hac habitasse.
                Eleifend donec pretium vulputate sapien nec. "
            />
            <ExpertCard
                name="First Name Last Name"
                title="Specialty Specialist"
                description="Amet volutpat consequat mauris nunc congue. Eros in cursus turpis massa tincidunt
                dui ut. Eget egestas purus viverra accumsan in nisl. Blandit turpis cursus in hac habitasse.
                Eleifend donec pretium vulputate sapien nec. "
            />
            <h1 className="display-4 mt-5">Car Washing<span className="style-line-long"></span></h1>
            <ExpertCard
                name="First Name Last Name"
                title="Specialty Specialist"
                description="Amet volutpat consequat mauris nunc congue. Eros in cursus turpis massa tincidunt
                dui ut. Eget egestas purus viverra accumsan in nisl. Blandit turpis cursus in hac habitasse.
                Eleifend donec pretium vulputate sapien nec. "
            />
            <ExpertCard
                name="First Name Last Name"
                title="Specialty Specialist"
                description="Amet volutpat consequat mauris nunc congue. Eros in cursus turpis massa tincidunt
                dui ut. Eget egestas purus viverra accumsan in nisl. Blandit turpis cursus in hac habitasse.
                Eleifend donec pretium vulputate sapien nec. "
            />
            <h1 className="display-4 mt-5">Dog Walking<span className="style-line-long"></span></h1>
            <ExpertCard
                name="First Name Last Name"
                title="Specialty Specialist"
                description="Amet volutpat consequat mauris nunc congue. Eros in cursus turpis massa tincidunt
                dui ut. Eget egestas purus viverra accumsan in nisl. Blandit turpis cursus in hac habitasse.
                Eleifend donec pretium vulputate sapien nec. "
            />
        </Container>
        <PageBottom/>
        </>
    )
  }