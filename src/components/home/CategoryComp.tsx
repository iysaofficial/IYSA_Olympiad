import Link from "next/link"

const CategoryComp = () => {
    return(
        <> 
        <section className="category-section">
        <br />
        <br />
        <br />
        <div className="container">
            <div className="header-section">
                {/* <div className="section-subtitle-top">🌟 Platform Kompetisi</div> */}
                <h1 className="section-title">IYSA Olympiad Events</h1>
                <p className="section-subtitle">Levels of Education Through Science Competitions</p>
                <p className="section-description">Access international and national Olympiad competition platforms with the highest quality standards</p>
            </div>

            <div className="events-grid">
                <a href="https://iymo-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/IYMO.png" alt="IYMO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">International</div>
                        <div className="event-name">IYMO</div>
                        <div className="event-description">International Youth Math Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://nymo-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/NYMO.png" alt="NYMO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">National</div>
                        <div className="event-name">NYMO</div>
                        <div className="event-description">National Youth Math Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://iybo-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/IYBO.png" alt="IYBO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">International</div>
                        <div className="event-name">IYBO</div>
                        <div className="event-description">International Youth Biology Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://nybo-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/NYBO.png" alt="NYBO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">National</div>
                        <div className="event-name">NYBO</div>
                        <div className="event-description">National Youth Biology Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://iyco-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/IYCO.png" alt="IYCO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">International</div>
                        <div className="event-name">IYCO</div>
                        <div className="event-description">International Youth Chemistry Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://nyco-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/NYCO.png" alt="NYCO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">National</div>
                        <div className="event-name">NYCO</div>
                        <div className="event-description">National Youth Chemistry Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://iypo-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/IYPO.png" alt="IYPO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">International</div>
                        <div className="event-name">IYPO</div>
                        <div className="event-description">International Youth Physics Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://nypo-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/NYPO.png" alt="NYPO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">National</div>
                        <div className="event-name">NYPO</div>
                        <div className="event-description">National Youth Physics Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://iygo-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/IYGO.png" alt="IYGO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">International</div>
                        <div className="event-name">IYGO</div>
                        <div className="event-description">International Youth Geography Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://nygo-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/NYGO.png" alt="NYGO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">National</div>
                        <div className="event-name">NYGO</div>
                        <div className="event-description">National Youth Geography Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://iyeo-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/IYEO.png" alt="IYEO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">International</div>
                        <div className="event-name">IYEO</div>
                        <div className="event-description">International Youth Environmental Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://nyeo-iysa.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/NYEO.png" alt="NYEO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">National</div>
                        <div className="event-name">NYEO</div>
                        <div className="event-description">National Youth Environmental Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://wso.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/WSO.png" alt="WSO"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">International</div>
                        <div className="event-name">WSO</div>
                        <div className="event-description">World Science Olympiad</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>

                <a href="https://os2mn.or.id" target="_blank" className="event-card">
                    <div className="event-card-header">
                        <div className="event-logo">
                            <img src="/assets/images/logo/OSSMN.png" alt="OSSMN"/>
                        </div>
                    </div>
                    <div className="event-card-body">
                        <div className="event-type">National</div>
                        <div className="event-name">OS2MN</div>
                        <div className="event-description">Olimpiade Sains Siswa Madrasah Nasional</div>
                        <button className="event-btn">Go to website</button>
                    </div>
                </a>
            </div>
        </div>    
        <br />
        <br />
        <br />
        </section> 
        </>
    )
}

export default CategoryComp