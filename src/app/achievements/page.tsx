import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React from 'react'
import Image from 'next/image'

export default function Achievements() {
    return (
        <>
        <main>
            <div className="container">
                <Navigation />
                <section id="main-achievements" className="mb-5 main-section">
                    <h1 className="text-center mb-4">My Achievement</h1>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <Image src="../assets/images/logo/trophy_winner.svg" alt="..." width={150} height={150} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><span>One</span> of 50 Winners</h5>
                                    <p className="card-text">IDCamp Challenge: Mengubah Dunia Melalui Inovasi Teknologi<br />Project: Google University</p>
                                    <p className="card-text"><small className="text-muted">August 2020</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4 next-bg-darkblue">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <Image src="../assets/images/logo/trophy_silver.svg" alt="..." width={150} height={150} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><span>2nd</span> Position of Winner</h5>
                                    <p className="card-text">Bogor Independence Year 2018<br />Project: Smart Park v.2.0</p>
                                    <p className="card-text"><small className="text-muted">August 2018</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <Image src="../assets/images/logo/trophy_bronze.svg" alt="..." width={150} height={150} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><span>3rd</span> Position of Winner</h5>
                                    <p className="card-text">Bogor Young Scientist Fair 2018<br />Project: Smart Park</p>
                                    <p className="card-text"><small className="text-muted">September 2018</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-center mb-4">My Journey</h1>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <Image src="../assets/images/logo/trophy_fail.svg" alt="..." width={150} height={150} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Participation</h5>
                                    <p className="card-text">KOMPRES 14<br />Live Coding</p>
                                    <p className="card-text"><small className="text-muted">January 2022</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <Image src="../assets/images/logo/trophy_fail.svg" alt="..." width={150} height={150} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Participation</h5>
                                    <p className="card-text">CCUG Hackfest 0x05<br />Capture The Flag</p>
                                    <p className="card-text"><small className="text-muted">January 2022</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <Image src="../assets/images/logo/trophy_fail.svg" alt="..." width={150} height={150} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Participation</h5>
                                    <p className="card-text">SRIFOTON 2021<br />Competitive Programming</p>
                                    <p className="card-text"><small className="text-muted">October 2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <Image src="../assets/images/logo/trophy_fail.svg" alt="..." width={150} height={150} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Participation</h5>
                                    <p className="card-text">CCUG Hackfest 0x04<br />Capture The Flag</p>
                                    <p className="card-text"><small className="text-muted">January 2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <Image src="../assets/images/logo/trophy_fail.svg" alt="..." width={150} height={150} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Participation</h5>
                                    <p className="card-text">IDCAMP: Anak Indonesia Bijak Beraktivitas di Depan Layar<br />Inovation</p>
                                    <p className="card-text"><small className="text-muted">August 2020</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <Image src="../assets/images/logo/trophy_fail.svg" alt="..." width={150} height={150} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Participation</h5>
                                    <p className="card-text">IDCamp Web Developer Challenge: Aplikasi Liburan Akhir Tahun<br />Inovation</p>
                                    <p className="card-text"><small className="text-muted">December 2019</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
        </>
    )
}
