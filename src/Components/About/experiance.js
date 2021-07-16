import React from 'react'

const Workexperiance = () => {

    const experiance = [
        {
            id: 1,
            comName: "Landmark Group",
            designation: "Front End Developer",
            timeline: "Sep - 2020 to Present",
            kra: [
                "Maintaining, optimizing, troubleshooting, and improving websites",
                "Collaborated with product team members to implement new feature developments",
                "Implemented new google analytics events across site",
                "Implemented new mobile number based login system from existing email based login",
            ]
        },
        {
            id: 1,
            comName: "Ajio.com",
            designation: "Senior MIS Executive",
            timeline: "Dec - 2016 to Nov - 2019",
            kra: [
                "Helped In Creating Custom Javascript For Converting Json Data Into Required Format Like Html, Ms Excel Etc.",
                "Helped in Creating Custom JavaScript to Track Search Results of the Competitor Site like Myntra.",
                "Built a Google Chrome Extension Which Generates Image Information like Image Actual & Used Dimension, Size, Banner Name, Image Name, Alt details.",
                "Creating And Presenting Daily, Weekly, Monthly, And Quarterly Reports Relating To Conversion Rate & Event Tracking From Google Analytics 360 To Product Management Manager.",
                "Produce Daily, Weekly, Monthly, And Quarterly Reports Relating To Google App Rating On Google Play Store To Product Management Manager."
            ]
        },
        {
            id: 2,
            comName: "Reliance Retail Ltd.",
            designation: "Catalogue Management",
            timeline: "Dec - 2014 to Dec - 2016",
            kra: [
                "Populating Daily Weekly Report on Jira Status Report of Ongoing Stories & Defects.",
                "Conducted QA & Questionnaire Sessions with 8 Batches of Interns Hired From various Colleges for Testing Ajio Site and Creating and Assigning All the Defects to the Respective Stockholders.",
                "Creating And Populating In Depth Report On Defects, Questionnaires And Product Reviews Received From The Interns.",
                "Product Specification Html Template Creation as Content Writer’s Needs.",
                "Produce Daily, Weekly, Monthly, And Quarterly Reports Relating To Conversion Rate & Event Tracking From Google Analytics 360 To Product Management Manager."
            ]
        },
        {
            id: 3,
            comName: "Homeshop18.com",
            designation: "Catalogue Executive",
            timeline: "Aug - 2012 to Dec - 2014",
            kra: [
                "Product Specification Html Template Creation as Content Writer’s Needs.",
                "Marketing Emailer Template Creation.",
                "Vendor Wise Data Management for Future Updates and Uploads."
            ]
        }
    ]

    return (
        experiance.map((job) => {
            return (
                <div className="job" key={job.id}>
                    <h3 className="about-text-title">{job.comName}</h3>
                    <p className="job-designation">{job.designation}</p>
                    <p className="job-timeline">{job.timeline}</p>
                    <ul>
                        {job.kra.map((kra, i) => {
                            return <li key={i}>{kra}</li>
                        })}
                    </ul>
                </div>
            )
        })
    )
}

export default Workexperiance;