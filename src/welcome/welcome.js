import React from 'react';

export default function Welcome() {

    return (
        <div className="welcome-area" id="welcome">
            {/* ***** Header Text Start ***** */}
            <div className="header-text">
                <div className="container">
                    <div className="row">
                        <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                            <h1>Simple Chat App that we <em>CREATED</em></h1>
                            <p>ChatMe is a free opensource chat-application that is developed for you to connect to your loved ones. Use it free of charge and free of any privacy concerns.</p>
                            <a href="#about" className="main-button-slider">KNOW THE APP</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Header Text End ***** */}
        </div>
    )
}
