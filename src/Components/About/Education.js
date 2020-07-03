import React from 'react'

const Education = () => {

    const education = [
        
        {
            id: 1,
            colName: "G E S Pre University",
            combination: "Geography, Economics, Business Studies, Accountancy (GEBA)",
            timeline: "(2006 to 2007)"
        },
        {
            id: 2,
            colName: "Dr. CV Raman University",
            combination: "Bachelors in Computer Application (BCA)",
            timeline: "(2016 to 2018)"
        }
    ]

    return (
        education.map((education) => {
            return (
                <div className="education" key={education.id}>
                    <h3 className="about-text-title">{education.colName}</h3>
                    <p className="education-designation">{education.combination}</p>
                    <p className="education-timeline">{education.timeline}</p>
                </div>
            )
        })
    )
}

export default Education;