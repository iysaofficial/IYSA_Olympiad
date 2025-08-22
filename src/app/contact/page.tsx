import '@/assets/css/Header.css'
import HeaderComp from '@/components/HeaderComp'
import '@/assets/css/contact/Contact.css'
import ContactComp from '@/components/contact/ContactComp'


const ContactPage = () => {
    return(
        <>
        <HeaderComp header={"Contact Page"}></HeaderComp>
        <ContactComp></ContactComp>
        </>
    )
}

export default ContactPage