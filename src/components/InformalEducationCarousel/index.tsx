"use client";
import InfomalEducationData from '../../data/informal_education.json';
import Carousel from '../Carousel';

export default function InformalEducationCarousel() {
  // sort by start year
  const informalEducation = InfomalEducationData.sort((a, b) => b.start_year - a.start_year);
  
  return (
    <div>
      <h1 className={`mt-5 title`}>Informal Education</h1>
      <Carousel />
    </div>
  )
}
