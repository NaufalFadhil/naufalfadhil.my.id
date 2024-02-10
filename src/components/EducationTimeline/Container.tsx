import Link from 'next/link';
import styles from '../../styles/Timeline.module.css'

interface ContainerProps {
  name: string;
  startYear: string;
  endYear: string;
  baseColor: string;
  textColor: string;
  website: string;
  onRight?: boolean;
}

export default function Container(props: ContainerProps) {
  const { startYear, endYear, name, website } = props;

  return (
    <div className={`${styles.container} ${props.onRight ? styles.right : styles.left}`}>
      <Link href={`${website ? website : '#'}`} style={{ textDecoration: 'none' }} target="_blank" passHref>
        <div className={`${styles.content} ${styles.contentEducation}`}
          style={{ backgroundColor: props.baseColor, color: props.textColor }}>
          <h3>{name}</h3>
          <h5 style={{ color: props.textColor }}>{startYear} - {endYear}</h5>
        </div>
      </Link>
    </div>
  )
}
