'use client';

import React, { useState } from 'react'
import projectData from '../../data/certificates.json';
import Image from 'next/image';
import Badges from '@/components/Badges';

interface ProjectListProps {
    searchInput?: string | null;
}

export default function ProjectList(props: ProjectListProps) {
    const { searchInput } = props;

    const filteredCertificates = projectData.filter((project) => {
        return searchInput ? project.title.toLowerCase().includes(searchInput.toLowerCase()) || project.stack.includes(searchInput) || project.type.includes(searchInput) || project.issuer.includes(searchInput)
        : projectData;
    });

    const sortedCertificates = filteredCertificates.sort((a, b) => {
        return new Date(b.issuesDate).getTime() - new Date(a.issuesDate).getTime();
    });

    return (
        <section id="project-page" className="container">
            <h1 className="text-center mt-4">My Certificates</h1>
            <p className='text-center mb-3'>Load {filteredCertificates.length} of {projectData.length} certificates {searchInput ? `when search "${searchInput}"` : ''}</p>
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                {sortedCertificates.map((certificates) => (
                    <div className="col" key={certificates.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <span className="card-text">&lt;/&gt; {certificates.issuer}</span>
                                <h5 className="card-title" style={{ minHeight: '3.5em' }}>{certificates.title}</h5>
                                <hr />
                                {certificates.expiredDate ? (
                                    <p className="card-text">Issued Date:<br />{certificates.issuesDate} &gt;&gt; {certificates.expiredDate}</p>
                                ) : (
                                    <p className="card-text">Issued Date:<br />{certificates.issuesDate} &gt;&gt; Life Time</p>
                                )}
                                <hr />
                                <div style={{ display: 'flex', flexWrap: 'wrap' }} className='mx-1'>
                                    {certificates.provider.map((provider) => (
                                        <Badges key={provider.id} logo={provider.logo} url={provider.url} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
