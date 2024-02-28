import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function Achievements() {
    return (
        <div className='container'>
            <Navigation />
            <header id="header-link">
                <img src="/assets/images/logo/N22-Logo-Primary.svg" className="rounded mx-auto d-block" alt="Logo N" width="70" />
                <h1 className="text-center my-3">Naufal Fadhil Athallah</h1>
                <h5 className="text-center">Alien Gabut</h5>
                <h5 className="text-center">#StayAtYourHome #covid-19</h5>
            </header>
            <main id="main-link" className="mb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/2YvA9b5" className="text-center m-2 btn btn-sec">
                                Website
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/NaufalFadhil-GitHub" className="text-center m-2 btn btn-ter">
                                Github
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/NaufalFadhil-LinkedIn" className="text-center m-2 btn btn-sec">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://instagram.com/nf_athallah" className="text-center m-2 btn btn-ter">
                                Instagram
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://twitter.com/nf_athallah" className="text-center m-2 btn btn-sec">
                                Twitter
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/NaufalFadhil-Facebook" className="text-center m-2 btn btn-ter">
                                Facebook
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://www.youtube.com/channel/UCkVuysdR_4AZmtouLHr6z5w" className="text-center m-2 btn btn-sec">
                                Youtube
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/3dmF4j5" className="text-center m-2 btn btn-ter">
                                Medium
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/NaufalFadhil-BlogGunadarma" className="text-center m-2 btn btn-sec">
                                Blogspot
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/NaufalFadhil-PayPal" className="text-center m-2 btn btn-ter">
                                PayPal
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/NaufalFadhil-Saweria" className="text-center m-2 btn btn-sec">
                                Saweria
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/2SBDdjn" className="text-center m-2 btn btn-ter">
                                Certificates
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/3AeTYlm" className="text-center m-2 btn btn-sec">
                                Behance
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/3Accnzl" className="text-center m-2 btn btn-ter">
                                Dribbble
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/35Wchhs" className="text-center m-2 btn btn-sec">
                                Dicoding
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/3y3YPnB" className="text-center m-2 btn btn-ter">
                                Secreto
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="https://bit.ly/2UTAN0x" className="text-center m-2 btn btn-sec">
                                BuildWithAngga
                            </a>
                        </div>
                        <div className="col-sm-4 mt-4 text-center mx-auto">
                            <a href="../" className="text-center m-2 btn btn-danger">
                                Back to Home Site
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
