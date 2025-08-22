import '@/assets/css/Header.css'
import HeaderComp from '@/components/HeaderComp'
import '@/assets/css/about/About.css'
import AboutComp from '@/components/about/AboutComp'

const AboutPage = () => {
    return(
        <>
        <HeaderComp header={"About Page"}></HeaderComp>
        <AboutComp></AboutComp>
        </>
    )
}

export default AboutPage