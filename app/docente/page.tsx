"use client";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Timeline from "../components/Timeline";
import TextTimeline from "../components/TextTimeline";
import DocenciaPostsSection from "./components/DocenciaPostsSection";

export default function Docente() {

    return (
        <>
            <Navbar />
            <Timeline />
            {/* <TextTimeline /> */}
            <DocenciaPostsSection />
            <Footer />
        </>
    )
}