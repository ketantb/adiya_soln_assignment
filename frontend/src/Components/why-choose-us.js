import '../styles/whychooseus.css'
// import whyChooseUsImg from '../Assets/why-choose-us.jpg'
// import whyChooseUsImg from '../Assets/whychooseus-2.png'
import whyChooseUsImg from '../Assets/manwithlaptop.png'

const WhyChooseUs = () => {
    return (
        <>
            <section className="why-choose-us-container">
                <section className="why-choose-us-left-block">
                    <h3>Why Choose Adiya Solutions?</h3>
                    <div>
                        <p class="why-choose-us-dummy-bullets">1</p>
                        <div>
                            <h4>Process Enablement</h4>
                            <p>
                                We work very closely with clients to provide consulting, maintaining,
                                and facilitating process re-engineering as required to enable client for success in this changing world.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p class="why-choose-us-dummy-bullets">2</p>
                        <div>
                            <h4>Process Enablement</h4>
                            <p>
                                We work very closely with clients to provide consulting, maintaining,
                                and facilitating process re-engineering as required to enable client for success in this changing world.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p class="why-choose-us-dummy-bullets">3</p>
                        <div>
                            <h4>Process Enablement</h4>
                            <p>
                                We work very closely with clients to provide consulting, maintaining,
                                and facilitating process re-engineering as required to enable client for success in this changing world.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="why-choose-us-right-block">
                    <img src={whyChooseUsImg} alt="" />
                </section>
            </section>
        </>
    )
}

export default WhyChooseUs;