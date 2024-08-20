import styles from "./Page.module.css"
import ContactForm from "@/app/booking/contactForm/ContactForm";
const page = () => {
    return (
        <>
        <h1 className={styles.title}>Design Booking</h1>
            <ContactForm/>
        </>
    )
}

export default page;