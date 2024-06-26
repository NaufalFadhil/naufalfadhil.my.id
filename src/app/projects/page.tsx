'use client';

import { useCallback, useState, Suspense } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ProjectList from "./project_list";
import './searchbar.css';
import './local.css';
import Searchbar from "./searchbar";

export default function Project() {
    const [searchInput, setSearchInput] = useState('');

    function onSearchChangeHandler(searchInput: string) {
        setSearchInput(searchInput);
    }

    return (
        <>
            <main>
                <div className="container">
                    <Navigation />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Searchbar onSearchChangeHandler={onSearchChangeHandler} />
                    </Suspense>
                    <ProjectList searchInput={searchInput} />
                    <Footer />
                </div>
            </main>
        </>
    );
}
