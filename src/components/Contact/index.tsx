export default function Contact() {
  return (
    <section id="desktop-contact" className="mt-10">
        <h2 className="title">
            Contact
        </h2>
        <div className="row">
            <div className="col-sm-6 mt-3">
                <p className="nata-text">
                    Please contact me via email in form message if you want to contact me for a bussiness.
                </p>
                <p className="nata-text">
                    If you want to message me as anonym for say hello / ask/ support / critics / hate / impression / love me. You can check the checkbox "Anonym?" it will directed you to www.secreto.site everyone can see your message also.
                </p>
                <p className="nata-text">
                    If you want to fast respon for ask me you can contact me via social media.
                </p>
                <a href="https://www.instagram.com/nf_athallah/" style={{ textDecoration: 'none'}} className="mx-3">
                    <img src="https://img.shields.io/badge/INSTAGRAM-purple.svg?style=for-the-badge&logo=instagram&logoColor=white" />
                </a>
                <a href="https://twitter.com/nf_athallah" style={{ textDecoration: 'none'}} className="mx-3">
                    <img src="https://img.shields.io/badge/TWITTER-blue.svg?style=for-the-badge&logo=twitter&logoColor=white" />
                </a>
                <a href="https://bit.ly/NaufalFadhil-LinkedIn" style={{ textDecoration: 'none'}} className="mx-3">
                    <img src="https://img.shields.io/badge/LINKEDIN-blue.svg?style=for-the-badge&logo=linkedin&logoColor=white" />
                </a>
                <p className="nata-text-thirdy mt-2">
                    Stay Safe, Stay Healty! You have a familiy and Your family need you! <br />Wear your medical mask Okay?!
                </p>
            </div>
            {/* <div className="col-sm-6">
                <form >
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label nata-text">Message</label>
                        {/* <!-- <input type="text" className="form-control" id="exampleInputPassword1"> --> 
                        <br />
                        <textarea name="message" id="yourMessage" cols="80%" rows="8" placeholder="Leave me your message here >_<" style={{ padding: '10px' }}></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="anonymCheck" onClick="redirectToNGL(); return false" />
                        <label className="form-check-label nata-text" htmlFor="anonymCheck">Anonym?</label>
                    </div>
                    <button className="btn btn-outline-primary">Submit</button>
                </form>
            </div> */}
        </div>
    </section>
  )
}
