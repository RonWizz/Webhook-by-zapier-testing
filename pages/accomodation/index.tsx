import { NextPage } from "next";
import { Accomodation } from "../../devlink";
import { AccSecond } from "../../devlink";
import { AccThird } from "../../devlink";
import { Footer } from "../../devlink";
const Accomodate: NextPage = () => {
    return (
        <>
        <Accomodation />
        <AccSecond />
        <AccThird />
        <Footer />
        </>
    );
};

export default Accomodate;
