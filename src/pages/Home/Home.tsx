import Intro from '../../components/Intro/Intro';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Overview from '../../components/Overview/Overview';
import Features from '../../components/Features/Features';
// import {PreOrderForm} from "../../components/PreOrderForm/PreOrderForm.tsx";
// import {useEffect, useState} from "react";

export default function Home() {
    return (
        <div id="page" className="relative">
            <Intro/>
            <Header/>
            <main className="overflow-x-hidden">
                <Hero/>
                <Overview />
                <Features />
            </main>
        </div>
    );
}