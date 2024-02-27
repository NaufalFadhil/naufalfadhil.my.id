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

    function onClickStackFilterHandler(stack: string) {
        setSearchInput(stack);
        router.push(pathName + '?' + createQueryString('search', stack));
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
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Backend')}>Backend</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Mobile')}>Mobile</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Website')}>Website</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Machine Learning')}>Machine Learning</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Flutter')}>Flutter</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('React.js')}>React.js</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('React Native')}>React Native</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Node.js')}>Node.js</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Express.js')}>Express.js</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Golang')}>Golang</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Springboot')}>Springboot</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Laravel')}>Laravel</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Codeigniter')}>Codeigniter</button>
                        <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Flask')}>Flask</button>
                    </div>
                    <ProjectList searchInput={searchInput} />
                    <Footer />
                </div>
            </main>
        </>
    );
}
