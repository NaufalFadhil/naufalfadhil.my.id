import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react'

interface SearchbarProps {
    onSearchChangeHandler: (searchInput: string) => void;
}

export default function Searchbar(props: SearchbarProps) {
    const { onSearchChangeHandler } = props;
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const [searchInput, setSearchInput] = useState(() => {
        let params = searchParams.get('stack') || '';
        params =  params.charAt(0).toUpperCase() + params.slice(1);

        onSearchChangeHandler(params);
        return params;
    });

    function onUrlPathChangeHandler(searchInput: string) {
        setSearchInput(searchInput);
        onSearchChangeHandler(searchInput);
    }

    function onClickStackFilterHandler(stack: string) {
        setSearchInput(stack);
        onSearchChangeHandler(stack);
    }

    return (
        <>
            <div id="search-container" className="search-container mb-4 text-center" style={{ marginTop: '10%' }}>
                <input placeholder="Search Project (ex: Android, Flutter, React, Dicoding, etc.)" id="searchElement" type="search" value={searchInput} onChange={(e) => onUrlPathChangeHandler(e.target.value)} />
                <button id="searchButtonElement" type="submit" className="btn btn-primary clickable1x">Search</button>
            </div>
            <div className="ms-4" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <p className="mt-4 me-3" style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Filter by Stack:</p>
                <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Cloud Computing')}>Cloud Computing</button>
                <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Backend')}>Backend</button>
                <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Mobile')}>Mobile</button>
                <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Website')}>Website</button>
                <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Machine Learning')}>ML/AI</button>
                <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Cyber Security')}>Cyber Security</button>
            </div>
            <div className="ms-4" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <p className="mt-4 me-3" style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Filter by Issuer</p>
                <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Dicoding Indonesia')}>Dicoding</button>
                <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Google Cloud Skillboost')}>Google</button>
                <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('DQLab')}>DQLab</button>
                <button className="btn btn-primary me-3 my-2 p-3 clickable2x" onClickCapture={() => onClickStackFilterHandler('Progate')}>Progate</button>
            </div>
        </>
    )
}
