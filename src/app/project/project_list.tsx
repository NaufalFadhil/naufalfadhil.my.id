'use client';

import React, { useState } from 'react'
import projectData from '../../data/projects.json';
import Image from 'next/image';
import Badges from '@/components/Badges';

interface ProjectListProps {
    searchInput?: string | null;
}

export default function ProjectList(props: ProjectListProps) {
    const { searchInput } = props;

    const filteredProjects = projectData.filter((project) => {
        // console.log('project.stack', project.stack.filter(str => str.includes(searchInput ? searchInput : '')));
        // const filteredStack = project.stack.filter(str => str.includes(searchInput ? searchInput : ''));
        // console.log('filteredStack', filteredStack);
        // console.log('stack', project.stack.includes(searchInput ? searchInput : ''));

        return searchInput ? project.title.toLowerCase().includes(searchInput.toLowerCase()) || project.stack.includes(searchInput)
        : projectData;
    });

    return (
        <section id="project-page" className="container">
            <h1 className="text-center mt-3 mb-4">My Portofolio</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {filteredProjects.map((project) => (
                    <div className="col" key={project.id}>
                        <div className="card h-100">
                            {/* <a href={project.url ? project.url : '#'} target="_blank" rel="noreferrer">
                                <Image src={project.thumbnail} className="card-img-top" alt="project image" width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} />
                            </a> */}
                            <Image 
                                src={project.thumbnail} 
                                className="card-img-top" 
                                alt="project image" 
                                width={0} height={0} sizes='100vw' 
                                style={{ width: '100%', height: 'auto' }} 
                            />
                            <div className="card-body">
                                <h4 className="card-title">{project.title}</h4>
                                <p className="card-text" style={{ minHeight: '4.5em' }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }} className='mx-1'>
                                    {project.provider.map((provider) => (
                                        <Badges key={provider.id} logo={provider.logo} url={provider.url} />
                                    ))}
                                </div>
                                <hr />
                                <div style={{ display: 'flex', flexWrap: 'wrap' }} className='mx-1'>
                                    {project.stack.map((badge, index) => (
                                        <Badges key={index} logo={badge} />
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
