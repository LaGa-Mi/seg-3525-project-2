import {useState} from "react";

import {Accordion, Form} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import Media from "./sub-components/Media.jsx";

const jobs = [
    [
        "Fall Yard Work Tips",
        require("../resources/placeholder.png"),
        "Learn essential yard work tips for maintaining your garden, lawn, and trees during the fall season.",
        "Gardening Today",
        "Article",
        "#",
        ["Yard Work"],
        ["Gardening", "Lawn Care", "Trees/Hedges"],
        ["Fall"]
    ],
    [
        "Winter Car Washing Guide",
        require("../resources/placeholder.png"),
        "Discover the best practices for washing your car during the winter to prevent salt and grime buildup.",
        "Auto Care Weekly",
        "Video",
        "#",
        ["Car Washing"],
        ["Maintenance/Prevention"],
        ["Winter"]
    ],
    [
        "Best Dog Walking Routes in Spring",
        require("../resources/placeholder.png"),
        "Explore the best dog walking routes to enjoy with your pet during the spring season.",
        "Pet Walks Magazine",
        "Article",
        "#",
        ["Dog Walking"],
        ["Walk Locations"],
        ["Spring"]
    ],
    [
        "Summer Lawn Care Tips",
        require("../resources/placeholder.png"),
        "Keep your lawn green and healthy during the hot summer months with these expert tips.",
        "Lawn Care Monthly",
        "Article",
        "#",
        ["Yard Work"],
        ["Lawn Care"],
        ["Summer"]
    ],    
    [
        "How to Trim Hedges in Spring",
        require("../resources/placeholder.png"),
        "A comprehensive guide on trimming hedges effectively during the spring season for optimal growth.",
        "Gardeners' World",
        "Video",
        "#",
        ["Yard Work"],
        ["Trees/Hedges"],
        ["Spring"]
    ],    
    [
        "Summer Dog Health Tips",
        require("../resources/placeholder.png"),
        "Learn important health tips to keep your dog safe and healthy during the summer.",
        "Healthy Pets",
        "Article",
        "#",
        ["Dog Walking"],
        ["Dog Health"],
        ["Summer"]
    ],    
    [
        "Hardscape Ideas for Winter",
        require("../resources/placeholder.png"),
        "Get inspired by these hardscape design ideas to enhance your outdoor space even during the winter.",
        "Outdoor Design Journal",
        "Video",
        "#",
        ["Yard Work"],
        ["Hardscape"],
        ["Winter"]
    ],    
    [
        "Car Cleaning Tips for Spring",
        require("../resources/placeholder.png"),
        "Find out the best car cleaning tips to refresh your vehicle after the winter season.",
        "Spring Car Care",
        "Article",
        "#",
        ["Car Washing"],
        ["Cleaning"],
        ["Spring"]
    ]    
];

const allCategories = [["Gardening", "Lawn Care", "Trees/Hedges", "Hardscape"], ["Maintenance/Prevention", "Cleaning"], ["Dog Health", "Walk Locations", "Meetups"]];

export default function LearnMore(props) {
    const [checkedFormat, setCheckedFormat] = useState([]);
    const [checkedServices, setCheckedServices] = useState([]);
    const [checkedCategory, setCheckedCategory] = useState([]);
    const [checkedSeason, setCheckedSeason] = useState([]);

    const onchangeFormat = (e) => {
        !e.target.checked ? setCheckedFormat(checkedFormat.filter((each) => each !== e.target.value)) : setCheckedFormat([...checkedFormat, e.target.value]);
    };
    const onchangeServices = (e) => {
        !e.target.checked ? setCheckedServices(checkedServices.filter((each) => each !== e.target.value)) : setCheckedServices([...checkedServices, e.target.value]);
    };
    const onchangeCategory = (e) => {
        !e.target.checked ? setCheckedCategory(checkedCategory.filter((each) => each !== e.target.value)) : setCheckedCategory([...checkedCategory, e.target.value]);
    };
    const onchangeSeason = (e) => {
        !e.target.checked ? setCheckedSeason(checkedSeason.filter((each) => each !== e.target.value)) : setCheckedSeason([...checkedSeason, e.target.value]);
    };

    const displayMedia = (format, services, categories, seasons) => {
        let retVal = true;
        let temp = true;

        if (checkedFormat.length > 0 && categories.length > 0) {
            temp = false;
            for (let i = 0; i < categories.length; i++) {
                if (checkedFormat.includes(format)) temp = true;
            }
        }
        retVal &&= temp;
        temp = true;
        if (checkedServices.length > 0 && categories.length > 0) {
            temp = false;
            for (let i = 0; i < categories.length; i++) {
                if (checkedServices.includes(services[i])) temp = true;
            }
        }
        retVal &&= temp;
        temp = true;
        if (checkedCategory.length > 0 && categories.length > 0) {
            temp = false;
            for (let i = 0; i < categories.length; i++) {
                if (checkedCategory.includes(categories[i])) temp = true;
            }
        }
        retVal &&= temp;
        temp = true;
        if (checkedSeason.length > 0 && seasons.length > 0) {
            temp = false;
            for (let i = 0; i < seasons.length; i++) {
                if (checkedSeason.includes(seasons[i])) temp = true;
            }
        }
        retVal &&= temp;

        return retVal;
    }

    const getCategories = () => {
        let retVal = [];
        let ind = 0;

        if (checkedServices.length > 0) {
            for (let i = 0; i < checkedServices.length; i++) {
                switch (checkedServices[i]) {
                    case "Yard Work":
                        ind = 0;
                        break;
                    case "Car Washing":
                        ind = 1;
                        break;
                    case "Dog Walking":
                        ind = 2;
                        break;
                }
                for (let j = 0; j < allCategories[ind].length; j++)
                    retVal.push(allCategories[ind][j]);
            }
        } else {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < allCategories[i].length; j++)
                    retVal.push(allCategories[i][j]);
            }
        }

        return retVal;
    }

    return (
        <>
        <PageTop
            h1="KeywordsKeywordsKeywords"
            h2="SloganSloganSlogan"
            img={require("../resources/placeholder.png")}
            alt=""
            source=""
            active="learnMore"
        />
        <div className="d-flex m-5">
            <div style={{width:"20%"}}>
                <Accordion defaultActiveKey={['-1']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Format</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {[
                                ["Article", "Article"],
                                ["Video", "Video"]
                                ].map((elem, index) => {
                                    return (
                                    <Form.Check
                                        key={elem[1]}

                                        id={index}
                                        type="checkbox"
                                        label={elem[0]}
                                        value={elem[1]}
                                        onChange={onchangeFormat}
                                    />
                                    )
                                })}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Services</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {[
                                ["Yard Work", "Yard Work"],
                                ["Car Washing", "Car Washing"],
                                ["Dog Walking", "Dog Walking"],
                                ].map((elem, index) => {
                                    return (
                                    <Form.Check
                                        key={elem[1]}

                                        id={index}
                                        type="checkbox"
                                        label={elem[0]}
                                        value={elem[1]}
                                        onChange={onchangeServices}
                                    />
                                    )
                                })}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Category</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {getCategories().map((elem, index) => {
                                    return (
                                    <Form.Check
                                        key={elem}

                                        id={index}
                                        type="checkbox"
                                        label={elem}
                                        value={elem}
                                        onChange={onchangeCategory}
                                    />
                                    )
                                })}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Season</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {[
                                ["Fall", "Fall"],
                                ["Winter", "Winter"],
                                ["Spring", "Spring"],
                                ["Summer", "Summer"]
                                ].map((elem, index) => {
                                    return (
                                    <Form.Check
                                        key={elem[1]}

                                        id={index}
                                        type="checkbox"
                                        label={elem[0]}
                                        value={elem[1]}
                                        onChange={onchangeSeason}
                                    />
                                    )
                                })}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="d-flex flex-wrap justify-content-center" style={{width:"80%", rowGap:"4rem"}}>
                {jobs.map((elem, index) => {
                    return (
                        <Media
                        key={index}

                        title={elem[0]}
                        image={elem[1]}
                        description={elem[2]}
                        publisher={elem[3]}
                        display={displayMedia(elem[5], elem[6], elem[7], elem[8])}
                        isVideo={elem[4] === "Video"}
                        />
                    )
                })}
            </div>
        </div>
        <PageBottom />
        </>
    )
}