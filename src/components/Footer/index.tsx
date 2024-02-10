import Style from '../../styles/Home.module.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        // id="desktop-footer" is not used in the project
        <footer id={Style.homeFooter} className='mt-4 mb-5'>
            <nav className="copyright">
                <ul className="nav" >
                    <li className="nav-item">
                        <div className={Style.footerContent}>
                            <p className="nav-link text-center">Copyright &copy; 2020-{year}<br className={Style.footerBreakLine} /> Naufal Fadhil Athallah</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
