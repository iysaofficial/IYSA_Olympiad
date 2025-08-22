import Link from "next/link"

const AboutMainComp = () =>{
    return(
        <>
        <section className="about-section">
        <div className="about-content">
            <img src="/assets/images/logo/IYSAOlympiad.webp" alt="" />
            <div className="about-text">
                <h1>IYSA Olympiad</h1>
                <h5>Objectives</h5>
                <p>An event for the achievement of talented young academics from various countries around the world in solving global problems</p>
                <h5>Competition Category</h5>
                <p>Online competition for Indonesia and International Participants</p>
                <Link href="/about">Read More</Link>
            </div>
        </div>
        </section>
        </>
    )
}

export default  AboutMainComp