const AssesmentCriteriaComp = () => {
    return(
        <>
        <section className="criteria-section">
        <h1 className="section-header text-white">Assesment Criteria</h1>
        <div className="timeline">
            
            <div className="container-criteria left-container">
                <img src="/assets/images/logo/IYSAOlympiadBackground.png" alt="" />
                <div className="text-box">
                    <h2>1. Assesment Criteria</h2>
                    {/* <small>2018 - 2019</small> */}
                    <p>Assessment in the first half is done by a point system, Questions in multiple choice have points, True +2 False -1 No answer 0</p>
                    <span className="left-container-arrow"></span>
                </div>
            </div>

            <div className="container-criteria right-container">
                <img src="/assets/images/logo/IYSAOlympiadBackground.png" alt="" />
                <div className="text-box">
                    <h2>2. Assesment Criteria</h2>
                    {/* <small>2018 - 2019</small> */}
                    <p>The total score for each team will be ranked for each country and/or each representative as well as the global ranking</p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>
            
            <div className="container-criteria left-container">
                <img src="/assets/images/logo/IYSAOlympiadBackground.png" alt="" />
                <div className="text-box">
                    <h2>3. Assesment Criteria</h2>
                    {/* <small>2019 - 2020</small> */}
                    <p>Teams that qualify for the final round are the best participants for each country and or each representative from each level of education</p>
                    <span className="left-container-arrow"></span>
                </div>
            </div>

        </div>
        </section>
        </>
    )
}

export default AssesmentCriteriaComp