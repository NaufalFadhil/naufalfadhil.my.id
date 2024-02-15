'use client';

import React, { use, useEffect, useState } from 'react'
import Styles from '../../styles/Timeline.module.css'
import Container from './Container'
import experienceData from '../../data/experience.json'

interface Experience {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  website: string | null;
  base_color: string;
  text_color: string;
}

export default function EducationTimeline() {
  return (
    <section id="education" className="align-content-center mt-10">
      <h2 className="title m-3 mb-4">Formal Education</h2>
      <div className={Styles.timeline}>
        <Container 
          name="Gunadarma University"
          startYear="2019"
          endYear="2023"
          baseColor="#892CDC"
          textColor="#F3F3F3"
          website="https://www.gunadarma.ac.id/"
        />
        <Container 
          name="SMK Bangun Nusa Bangsa"
          startYear="2016"
          endYear="2019"
          baseColor="#BBE1FA"
          textColor="#0F4C75"
          website="https://smkbnb.com/"
          onRight
        />
        <Container 
          name="SMP Citra Nusa"
          startYear="2013"
          endYear="2016"
          baseColor="#3282B8"
          textColor="#DFEAF2"
          website="https://smpcitranusa.sch.id/"
        />
      </div>
    </section>
  )
}
