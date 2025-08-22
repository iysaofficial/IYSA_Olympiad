import Link from "next/link"

const AboutComp = () => {
    return(
        <>
        <section className="about-section">
            <div className="about-container">
                <div className="about-heading">
                    <br />
                    <h1 className="text-center">IYSA Olympiad</h1>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 after-event-video text-center">
                        <iframe className="mt-5"  width="100%" height="415" src="https://www.youtube.com/embed/NbIE8wAcq8k?si=WuuGaBvvlCN4JUZq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="col-md-5 text-justify mt-auto mb-auto">
                        <h1 className="fs-3 text-center">Objectives</h1>
                        <p className=" text-center">An event for the achievement of talented young academics from various countries around the world in solving global problems</p>
                        <h1 className="fs-3 text-center">Competition Category</h1>
                        <p className=" text-center">Online competition for Indonesia and International Participants</p>
                        <div className="about-social-icon text-center">
                            <h1 className="text-black fs-3">Follow Us</h1>
                            <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                            <Link href="https://www.instagram.com/iysa_official/?hl=id" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                            <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                            <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                            <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutComp