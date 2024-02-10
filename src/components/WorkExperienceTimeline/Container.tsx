import Link from 'next/link';
import Styles from '../../styles/Timeline.module.css'

interface ContainerProps {
  company: string;
  position: string;
  baseColor: string;
  textColor: string;
  type: string;
  startDate: string;
  endDate?: string | null;
  onRight?: boolean;
  website?: string | null;
}

function convertDate(startDate: string, endDate: string) {
  var startDateObject = new Date(startDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long'};
  const formattedStartDate = startDateObject.toLocaleDateString('en-US', options);
  if (endDate === 'Present') {
    return `${formattedStartDate} - Present`;
  } 
  
  var endDateObject = new Date(endDate);
  const formattedEndDate = endDateObject.toLocaleDateString('en-US', options);
  return `${formattedStartDate} - ${formattedEndDate}`;
}

export default function Container(props: ContainerProps) {
  const { startDate, endDate, company, position, website } = props;
  const experience_date = convertDate(startDate, endDate || 'Present');

  return (
    <div className={`${Styles.container} ${props.onRight ? Styles.right : Styles.left}`}>
      <Link href={`${website ? website : '#'}`} style={{ textDecoration: 'none' }} target="_blank" passHref>
        <div className={Styles.content}
          style={{ backgroundColor: props.baseColor, color: props.textColor }}>
          <h3>{position}</h3>
          <h5>{company}</h5>
          <div className={Styles.dateAndType}>
            {props.onRight ? (
              <p style={{ color: props.textColor }}>{experience_date} <span>#</span> {props.type}</p>
            ) : (
              <p style={{ color: props.textColor }}>{props.type} <span>#</span> {experience_date}</p>
            )}
          </div>
          <div className={Styles.separatedDateAndType}>
            <p style={{ color: props.textColor }}>{experience_date}<br /># {props.type}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
