import React from 'react'
import '../HomePage/Home.css'

import Header from './components/Header'
import Navigator from './components/Navigator'
import About from './components/About'
import Channeling from './components/Channeling'
import Speech from './components/Speech'
import Team from './components/Team'
import Contact from './components/Contact'
import Donate from './components/Donate'
import Footer from './components/Footer'
import Elder from './components/Elder'

function Home() {
    return (
        <div className='Home_Page'>

            {/* -----Navigation Section----- */}
            <section>
                <Navigator />
            </section>

            {/* -----Header Section----- */}
            <section>
                <Header />
            </section>

            {/* -----About Section----- */}
            <section>
                <About />
            </section>

            {/* -----Channeling Section */}
            <section>
                <Channeling />
            </section>

            {/* -----Elder Section----- */}
            <section>
                <Elder />
            </section>


            {/* -----Speech Section----- */}
            <section>
                <Speech />
            </section>

            {/* -----Team Section----- */}
            <section>
                <Team />
            </section>

            {/* -----Contact Section */}
            <section>
                <Contact />
            </section>

            {/* -----Donate Section----- */}
            <section>
                <Donate />
            </section>

            {/* -----Footer Section----- */}
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Home