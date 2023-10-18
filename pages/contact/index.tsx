import Link from 'next/link';
import { NextPage } from "next";
import { Contact } from "../../devlink";
import { ContactSecond } from "../../devlink";
import { ContactMap } from "../../devlink";
import { Footer } from "../../devlink";
const contact: NextPage = () => {
    return (
        <>
        <Contact />
        <ContactSecond />
        <ContactMap />
        <Footer />
        </>
    );
};

export default contact;
