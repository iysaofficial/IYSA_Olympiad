'use client';

import './globals.css';
import HeroComp from '@/components/home/HeroComp'
import AboutMainComp from '@/components/home/AboutMainComp'
// import CriteriaComp from '@/components/home/CriteriaComp'
// import AssesmentCriteriaComp from '@/components/home/AssessmentCriteriaComp'
import CategoryComp from '@/components/home/CategoryComp'
import AfterEventComp from '@/components/home/AfterEventComp'   
import LogoComp from '@/components/home/LogoComp'
import NewsComp from '@/components/home/NewsComp'




export default function HomePage() {
    return(
        <>
        <HeroComp></HeroComp>
        <AboutMainComp></AboutMainComp>
        {/* <CriteriaComp></CriteriaComp>
        <AssesmentCriteriaComp></AssesmentCriteriaComp> */}
        <CategoryComp></CategoryComp>
        <AfterEventComp></AfterEventComp>
        <NewsComp></NewsComp>
        <LogoComp></LogoComp>
        </>
    )
}