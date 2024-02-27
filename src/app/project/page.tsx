'use client';

import { useCallback, useState } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ProjectList from "./project_list";
import './searchbar.css';
import './local.css';
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Project() {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const [searchInput, setSearchInput] = useState(() => {
        return searchParams.get('search') || '';
    });

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
        
            return params.toString()
        },
        [searchParams]
    )

    function onKeywordChangeHandler(searchInput: string) {
        setSearchInput(searchInput);
        router.push(pathName + '?' + createQueryString('search', searchInput));
    }

    return (
        <>
            <main>
                <div className="container">
                    <Navigation />
                    <div id="search-container" className="search-container mb-4 text-center" style={{ marginTop: '10%' }}>
                        <input placeholder="Search Project (ex: Android, Flutter, React, Dicoding, etc.)" id="searchElement" type="search" value={searchInput} onChange={(e) => onKeywordChangeHandler(e.target.value)} />
                        <button id="searchButtonElement" type="submit" className="btn btn-primary clickable1x">Search</button>
                    </div>
                    <div className="ms-4" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <p className="mt-4 me-3" style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Filter by Stack:</p>
                        <button id="filterFlutter" className="btn btn-primary me-3 mt-2 clickable2x">Backend</button>
                        <button id="filterFlutter" className="btn btn-primary me-3 mt-2 clickable2x">Mobile</button>
                        <button id="filterFlutter" className="btn btn-primary me-3 mt-2 clickable2x">Website</button>
                        <button id="filterFlutter" className="btn btn-primary me-3 mt-2 clickable2x">Flutter</button>
                        <button id="filterFlutter" className="btn btn-primary me-3 mt-2 clickable2x">React.js</button>
                        <button id="filterFlutter" className="btn btn-primary me-3 mt-2 clickable2x">React Native</button>
                        <button id="filterFlutter" className="btn btn-primary me-3 mt-2 clickable2x">Node.js</button>
                        <button id="filterFlutter" className="btn btn-primary me-3 mt-2 clickable2x">Express.js</button>
                        <button id="filterFlutter" className="btn btn-primary me-3 mt-2 clickable2x">Golang</button>
                        <button id="filterFlutter" className="btn btn-primary me-3 mt-2 clickable2x">Springboot</button>
                    </div>
                    <ProjectList searchInput={searchInput} />
                    <Footer />
                </div>
            </main>
        </>
    );
}
