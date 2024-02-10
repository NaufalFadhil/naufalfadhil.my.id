import Style from '../../styles/Home.module.css';

export default function Summary() {
  return (
    <section id="summary">
        <div className="container mt-10">
            <h2 className="title mb-3">Summary</h2>
            <p className={Style.textSummary}>
                Hello World! My name is Naufal Fadhil, I'm infromatics engineering student at Gunadarma University. 
                <br className={Style.summaryBreakLine} /> I love collaboration, challenge, competition, learn technologies & create a new things to problem solve. 
                <br className={Style.summaryBreakLine} /> I learn technology by self-taught, learning about out of college curriculum. 
                <br className={Style.summaryBreakLine} /> I have a good and fast understanding for learn new knowledge.
                <br className={Style.summaryBreakLine} /> I can use all technologies but now I'm focused in web developer.
            </p>
        </div>
    </section>
  )
}
