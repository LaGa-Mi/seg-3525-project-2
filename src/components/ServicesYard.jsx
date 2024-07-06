import { Container } from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"

export default function ServicesYard(props) {
    return (
        <>
        <PageTop
            h1="KeywordsKeywordsKeywords"
            h2="SloganSloganSlogan"
            img={require("../resources/placeholder.png")}
            alt=""
            source=""
        />
        <Container className="mt-5">
            <h1>This page is mainly for esthetics, not very important to test the "processus cognitifs"</h1>
        </Container>
        <PageBottom/>
        </>
    )
}