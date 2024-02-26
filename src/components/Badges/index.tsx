import Link from 'next/link';
import React from 'react'

interface Project {
  url?: string | null;
  logo: string;
}

// Badges component

function BadgeItems(logo: string) {
  return (
    <div className='me-2 my-1 inline-block'>
      {logo === 'HTML' && (<img alt="HTML" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>)}
      {logo === 'CSS' && (<img alt="CSS" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>)}
      {logo === 'Javascript' && (<img alt="Javascript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>)}
      {logo === 'SASS' && (<img alt="SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"/>)}
      {logo === 'Bootstrap 5' && (<img alt="Bootstrap 5" src="https://img.shields.io/badge/bootstrap%205-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>)}

      {logo === 'React.js' && (<img alt="React.js" src="https://img.shields.io/badge/REACT.JS-%23000000.svg?style=for-the-badge&logo=react&logoColor=61DAFB"/>)}
      {logo === 'Next.js' && (<img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />)}
      {logo === 'Gatsby' && (<img alt="Gatsby" src="https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white" />)}
      {logo === 'Vue.js' && (<img alt="Vue.js" src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" />)}
      {logo === 'Nuxt.js' && (<img alt="Nuxt.js" src="https://img.shields.io/badge/Nuxt.js-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white" />)}

      {logo === 'Node.js' && (<img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />)}
      {logo === 'Express.js' && (<img alt="Express" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />)}

      {logo === 'Python' && (<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />)}
      {logo === 'Flask' && (<img alt="Flask" src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" />)}
      {logo === 'Django' && (<img alt="Django" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" />)}

      {logo === 'Github Repository' && (<img alt="GitHub" src="https://img.shields.io/badge/REPOSITORY-%23323330.svg?style=for-the-badge&logo=GITHUB&logoColor=white" />)}
      {logo === 'Github Hosted' && (<img alt="Github Hosted" src="https://img.shields.io/badge/HOSTED-%23323330.svg?style=for-the-badge&logo=GITHUB&logoColor=white" />)}
      {logo === 'Github Private' && (<img alt="Github Private" src="https://img.shields.io/badge/PRIVATE-%23323330.svg?style=for-the-badge&logo=GITHUB&logoColor=white" />)}

      {logo === 'Netlify' && (<img alt="Netlify" src="https://img.shields.io/badge/NETLIFY-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=white" />)}
      {logo === 'Netlify Hosted' && (<img alt="Netlify Hosted" src="https://img.shields.io/badge/HOSTED-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" />)}
      {logo === 'Play Store' && (<img alt="Play Store" src="https://img.shields.io/badge/Play%20Store-414141?style=for-the-badge&logo=google-play&logoColor=white" />)}

      {logo === 'Kotlin' && (<img alt="Kotlin" src="https://img.shields.io/badge/kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white" />)}
      {logo === 'Java' && (<img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" />)}
      {logo === 'Dart' && (<img alt="Dart" src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white" />)}
      {logo === 'Flutter' && (<img alt="Flutter" src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white" />)}
      {logo === 'Android' && (<img alt="Android" src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" />)}
      {logo === 'React Native' && (<img alt="React Native" src="https://img.shields.io/badge/REACT%20NATIVE-%23000000.svg?style=for-the-badge&logo=react&logoColor=61DAFB"/>)}

      {logo === 'Firebase' && (<img alt="Firebase" src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />)}
      {logo === 'SQLite' && (<img alt="SQLite" src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" />)}
      {logo === 'MySQL' && (<img alt="MySQL" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />)}
      {logo === 'PostgreSQL' && (<img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />)}
      {logo === 'MongoDB' && (<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />)}

      {logo === 'API' && (<img alt="API" src="https://img.shields.io/badge/API-005571?style=for-the-badge" />)}
    </div>
  )
}

export default function Badges(props: Project) {
  const { url, logo } = props;

  if (url) {
    return (
      <Link href={url} style={{ textDecoration: 'none' }} target="_blank" passHref>
        {BadgeItems(logo)}
      </Link>
    )
  } else {
    return (
      <>
        {BadgeItems(logo)}
      </>
    )
  }
}
