'use client';

import { useState } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ProjectList from "./project_list";
import projectData from '../../data/projects.json';

export default function Project() {
    const [projects, setProjects] = useState(projectData);

    return (
        <>
            <main>
                <div className="container">
                    <Navigation />
                    <ProjectList />
                    <Footer />
                </div>
            </main>
        </>
    );
}
