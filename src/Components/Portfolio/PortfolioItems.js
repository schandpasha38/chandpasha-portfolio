import React from 'react';
import * as PortfolioImage from './assets';

const PortfolioItems = () => {

    const portfolioList = [
        {
            id: 1,
            projectName: "Chand Portfolio",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["React", "React Router", "React Helmet"],
            githubLink: "https://github.com/schandpasha38/chandpasha-portfolio",
            liveLink: "",
            imglink: PortfolioImage.ChandPortfolio,
            imgAlt: "Chand Portfolio"
        }, {
            id: 2,
            projectName: "Image Details Chrome Extension",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["HTML", "CSS", "javascript"],
            githubLink: "https://github.com/schandpasha38/Chrome-Extension-Image-Details",
            liveLink: "",
            imglink: PortfolioImage.Imagedetails,
            imgAlt: "Image Details Chrome Extension"
        }, {
            id: 3,
            projectName: "Landing Page with CSS Animation with video Background",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["HTML", "CSS"],
            githubLink: "https://github.com/schandpasha38/Landing-Page-With-CSS-Animation",
            liveLink: "",
            imglink: PortfolioImage.LandingPagecssAnnimation,
            imgAlt: "Landing Page with CSS Animation"
        }, {
            id: 4,
            projectName: "RGB Color Guessing Game",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["HTML", "CSS", "Javascript"],
            githubLink: "https://github.com/schandpasha38/RGB-Color-Guessing-Game",
            liveLink: "",
            imglink: PortfolioImage.RGBColorGuessingGame,
            imgAlt: "RGB Color Guessing Game"
        }, {
            id: 5,
            projectName: "Todo App using Local Storage",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["HTML", "CSS", "Javascript"],
            githubLink: "https://github.com/schandpasha38/Todo-Using-Local-Storage",
            liveLink: "",
            imglink: PortfolioImage.TodoAppusingLocalStorage,
            imgAlt: "Todo App using Local Storage"
        }, {
            id: 6,
            projectName: "User Profiles Using Random User Ajax",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["HTML", "CSS", "Javascript", "Ajax"],
            githubLink: "https://github.com/schandpasha38/User-Profiles-Using-Random-User-Ajax",
            liveLink: "",
            imglink: PortfolioImage.UserProfilesUsingRandomUser,
            imgAlt: "User Profiles Using Random User Ajax"
        }, {
            id: 7,
            projectName: "Freelance Portfolio",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["HTML", "CSS"],
            githubLink: "https://github.com/schandpasha38/Freelance-Portfolio",
            liveLink: "",
            imglink: PortfolioImage.FreelancePortfolio,
            imgAlt: "Freelance Portfolio"
        }, {
            id: 8,
            projectName: "Omnifood Landing Page",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["HTML", "CSS"],
            githubLink: "https://github.com/schandpasha38/Omnifood",
            liveLink: "",
            imglink: PortfolioImage.OmnifoodLandingPage,
            imgAlt: "Omnifood Landing Page"
        }, {
            id: 9,
            projectName: "Chand Pasha Portfolio-Old",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["React"],
            imglink: PortfolioImage.ChandPortfolioold,
            githubLink: "",
            liveLink: "https://chandpashaportfolio.web.app/",
            imgAlt: "Chand Pasha Portfolio-Old"
        }, {
            id: 10,
            projectName: "ProjectMouse-X-Y-coordinates",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["HTML", "CSS", "Javascript"],
            githubLink: "https://github.com/schandpasha38/ProjectMouse-X-Y-coordinates",
            liveLink: "",
            imglink: PortfolioImage.ProjectMouseXYcoordinates,
            imgAlt: "ProjectMouse-X-Y-coordinates"
        }, {
            id: 11,
            projectName: "Keyboard Keypress App",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eius error deleniti corrupti qui reprehenderit odit iusto aspernatur! Inventore voluptatibus cum eaque unde quis laborum incidunt tempora aliquid blanditiis?",
            techUsed: ["HTML", "CSS", "Javascript"],
            githubLink: "https://github.com/schandpasha38/Keyboard-Keypress-App",
            liveLink: "",
            imglink: PortfolioImage.KeyboardKeypressApp,
            imgAlt: "Keyboard Keypress App"
        }
    ]

    return (
        portfolioList.map((portfolio, i) => {
            return (
                <div className="portfolioItem" key={portfolio.id}>

                    <div className="portfolio-imageContainer">
                        <img src={portfolio.imglink} alt="" />
                    </div>

                    <div className="portfolio-discription">
                        <div className="portfolio-title">
                            <h2>{portfolio.projectName}</h2>
                            <p>{portfolio.discription}</p>
                            <div className="portfoliotechused">
                                <h3>Technology</h3>
                                <ul>
                                    {portfolio.techUsed.map((techused) => {
                                        return (
                                            <li key={techused}>{techused}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="portfolio-links">
                                {portfolio.githubLink ? <a href={portfolio.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a> : ""}
                                {portfolio.liveLink ? <a href={portfolio.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a> : ""}
                            </div>
                        </div>
                    </div>

                </div>
            )
        })
    )
}

export default PortfolioItems;