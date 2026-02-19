import React from 'react'
import "./WhoAreWe.css"
import whoAreWe from "../../assets/whoarewe.jpg"

const WhoAreWe = () => {

    return (
        <div className="whoAreWe section-padding" id='whoAreWe'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="whoAreWe-image-parent">
                            <img src={whoAreWe} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="whoAreWe-data-parent">
                            <h3 className='sub-heading'>Who Are We</h3>
                            <h1 className="main-heading">We are Silver Moon Debt Collection, a professional Dubai-based agency.</h1>
                            <ul className="whoAreWe-description">
                                <li>We are a professional Dubai-based debt collection agency.</li>
                                <li>We operate on a simple 20% commission model — No recovery, No fee.</li>
                                <li>Our experienced agents speak English, Arabic & Urdu to support clients worldwide.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default WhoAreWe