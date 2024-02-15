import Image from 'next/image'
import Style from '../../styles/Home.module.css'

export default function Features() {
  return (
    <section>
        <div>
            <h2 className="title m-3">
                Features
            </h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6">
                <div className="col">
                    <div className={Style.imageContainer}>
                        <Image className="images" src="assets/images/button/button-achievement.svg" alt="button achievement" width={180} height={180} />
                    </div>
                </div>
                <div className="col">
                    <div className={Style.imageContainer}>
                        <Image className="images" src="assets/images/button/button-sosmed.svg" alt="button sosmed" width={180} height={180} />
                    </div>
                </div>
                <div className="col">
                    <div className={Style.imageContainer}>
                        <Image className="images" src="assets/images/button/button-project.svg" alt="button project" width={180} height={180} />
                    </div>
                </div>
                <div className="col">
                    <div className={Style.imageContainer}>
                        <Image className="images" src="assets/images/button/button-skill.svg" alt="button skill" width={180} height={180} />
                    </div>
                </div>
                <div className="col">
                    <div className={Style.imageContainer}>
                        <Image className="images" src="assets/images/button/button-asset.svg" alt="button asset" width={180} height={180} />
                    </div>
                </div>
                <div className="col">
                    <div className={Style.imageContainer}>
                        <Image className="images" src="assets/images/button/button-support.svg" alt="button project" width={180} height={180} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
