import {useState} from "react";

import {Accordion, Form} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import JobPosting from "./sub-components/JobPosting.jsx";

const jobs = [
    [
        "Financial Analyst",
        ["Analyze financial data", "Prepare financial reports", "Assist in budgeting and forecasting"],
        [60000, 80000],
        ["Finance/Accounting"],
        [],
        ["Full-Time"]
    ],
    [
        "Yard Work Supervisor",
        ["Supervise yard work team", "Ensure safety standards are met", "Coordinate schedules and tasks"],
        [35000, 45000],
        ["Outdoor Work", "Management"],
        ["Yard Work"],
        ["Full-Time", "Part-Time"]
    ],
    [
        "HR Specialist",
        ["Manage recruitment process", "Handle employee relations", "Conduct training sessions"],
        [50000, 70000],
        ["Human Resources"],
        [],
        ["Full-Time"]
    ],
    [
        "Dog Walker",
        ["Walk dogs", "Ensure pets' safety", "Provide exercise for pets"],
        [15000, 20000],
        ["Outdoor Work"],
        ["Dog Walking"],
        ["Part-Time"]
    ],
    [
        "Car Wash Attendant",
        ["Clean and wash cars", "Maintain car wash equipment", "Provide excellent customer service"],
        [20000, 30000],
        ["Outdoor Work"],
        ["Car Washing"],
        ["Full-Time", "Part-Time"]
    ],
    [
        "Payroll Accountant",
        ["Manage payroll processing", "Ensure compliance with tax regulations", "Prepare payroll reports"],
        [55000, 75000],
        ["Finance/Accounting"],
        [],
        ["Full-Time"]
    ],
    [
        "Human Resources Manager",
        ["Oversee HR department", "Develop HR policies", "Ensure legal compliance"],
        [70000, 90000],
        ["Management", "Human Resources"],
        [],
        ["Full-Time"]
    ]
];

export default function Careers(props) {
    const [checkedSector, setCheckedSector] = useState([]);
    const [checkedBranch, setCheckedBranch] = useState([]);
    const [checkedAvailability, setCheckedAvailability] = useState([]);

    const onchangeSector = (e) => {
        !e.target.checked ? setCheckedSector(checkedSector.filter((each) => each !== e.target.value)) : setCheckedSector([...checkedSector, e.target.value]);
    };
    const onchangeBranch = (e) => {
        !e.target.checked ? setCheckedBranch(checkedBranch.filter((each) => each !== e.target.value)) : setCheckedBranch([...checkedBranch, e.target.value]);
    };
    const onchangeAvailability = (e) => {
        !e.target.checked ? setCheckedAvailability(checkedAvailability.filter((each) => each !== e.target.value)) : setCheckedAvailability([...checkedAvailability, e.target.value]);
    };

    const displayPosting = (jobSectors, jobBranches, jobAvailibilities) => {
        let retVal = true;
        let temp = true;

        temp = true;
        if (checkedSector.length > 0 && jobSectors.length > 0) {
            temp = false;
            for (let i = 0; i < jobSectors.length; i++) {
                if (checkedSector.includes(jobSectors[i])) temp = true;
            }
        }
        retVal &&= temp;
        temp = true;
        if (checkedBranch.length > 0 && jobBranches.length > 0) {
            temp = false;
            for (let i = 0; i < jobBranches.length; i++) {
                if (checkedBranch.includes(jobBranches[i])) temp = true;
            }
        }
        retVal &&= temp;
        temp = true;
        if (checkedAvailability.length > 0 && jobAvailibilities.length > 0) {
            temp = false;
            for (let i = 0; i < jobAvailibilities.length; i++) {
                if (checkedAvailability.includes(jobAvailibilities[i])) temp = true;
            }
        }
        retVal &&= temp;

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
            active="careers"
        />
        <div className="d-flex m-5">
            <div style={{width:"20%"}}>
                <Accordion defaultActiveKey={['-1']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Sector</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {[
                                ["Finance/Accounting", "Finance/Accounting"],
                                ["Outdoor Work", "Outdoor Work"],
                                ["Management", "Management"],
                                ["Human Resources", "Human Resources"]
                                ].map((elem, index) => {
                                    return (
                                    <Form.Check
                                        key={elem[1]}

                                        id={index}
                                        type="checkbox"
                                        label={elem[0]}
                                        value={elem[1]}
                                        onChange={onchangeSector}
                                    />
                                    )
                                })}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Branch</Accordion.Header>
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
                                        onChange={onchangeBranch}
                                    />
                                    )
                                })}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Availability</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {[
                                ["Part-Time", "Part-Time"],
                                ["Full-Time", "Full-Time"]
                                ].map((elem, index) => {
                                    return (
                                    <Form.Check
                                        key={elem[1]}

                                        id={index}
                                        type="checkbox"
                                        label={elem[0]}
                                        value={elem[1]}
                                        onChange={onchangeAvailability}
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
                        <JobPosting
                        key={index}

                        title={elem[0]}
                        responsibilities={elem[1]}
                        salary={elem[2]}
                        display={displayPosting(elem[3], elem[4], elem[5])}
                        />
                    )
                })}
            </div>
        </div>
        <PageBottom />
        </>
    )
}