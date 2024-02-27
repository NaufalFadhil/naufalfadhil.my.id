import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function Supports() {
  return (
    <>
      <main>
          <div className="container">
              <Navigation />
              <section id="support-page" className="container" style={{ marginTop: '8rem' }}>
                  <h1 className="text-center">Support Me</h1>
                  <div className="row">
                      <div className="col-sm-6">
                          <a href="https://bit.ly/NaufalFadhil-Saweria">
                              <div className="card mt-5">
                                  <h1 className="text-center">saweria.co</h1>
                              </div>
                          </a>
                      </div>
                      <div className="col-sm-6">
                          <a href="https://bit.ly/NaufalFadhil-PayPal">
                              <div className="card mt-5">
                                  <h1 className="text-center">Paypal</h1>
                              </div>
                          </a>
                      </div>
                  </div>
              </section>
              <Footer />
          </div>
      </main>
    </>
  )
}
