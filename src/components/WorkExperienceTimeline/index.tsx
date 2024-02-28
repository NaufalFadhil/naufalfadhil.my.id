'use client';

import { useState } from 'react'
import styles from '../../styles/Timeline.module.css'
import Container from './Container'
import experienceData from '../../data/experience.json'
import Link from 'next/link';

export default function WorkExperienceTimeline() {
  const [showData, setShowData]= useState(false);
  const [experienceList, setExperienceList] = useState(experienceData.filter(item => !item.softdelete).slice(0, 3));
  const experienceLeft = experienceData.length - 3;

  const showClickHandler = () => {
    setShowData(true);
    const filterActiveExperience = experienceData.filter(item => !item.softdelete)
    setExperienceList(filterActiveExperience);
  }

  return (
    <section id="experience" className="align-content-center mt-5">
      <h2 className="title m-3 mb-4">Work Experience</h2>
      <div className={styles.timeline}>
        <div className={`${styles.container} ${styles.left}`}>
          <Link href='mailto:hello.naufalfadhil@gmail.com' style={{ textDecoration: 'none' }} passHref>
            <div className={styles.content} style={{ backgroundColor: '#FF0000', color: '#FFF' }}>
              <h3>Looking for New Opportunities..</h3>
              <h5 style={{ textDecoration: 'underline', textUnderlineOffset: '5px' }}>Hire Me!!</h5>
            </div>
          </Link>
        </div>

        {experienceList.map((exp, index) => (
          <Container 
            key={exp.company} 
            baseColor={exp.base_color}
            textColor={exp.text_color}
            startDate={exp.start_date}
            position={exp.position}
            endDate={exp.end_date} 
            type={exp.type}
            company={exp.company}
            onRight={index % 2 === 0}
            website={exp.website}
          />
        ))}
      </div>

      {!showData && (
        <div className='text-center mt-3 mb-5'>
          <button onClick={showClickHandler} className="btn primary-button">See More (+{experienceLeft})</button>
        </div>
      )}
    </section>
  )
}
