"use client";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Timeline from "../components/Timeline";
import TextTimeline from "../components/TextTimeline";

export default function Docente() {

    return (
        <>
            <Navbar />
            <Timeline />
            {/* <TextTimeline /> */}
            <Footer />
        </>
    )
}