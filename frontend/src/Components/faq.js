import { useState } from 'react'
import '../styles/faq.css'
import { AiOutlinePlus } from 'react-icons/ai'

const FAQ = () => {
    const [displayVals, setDisplayVals] = useState(["none","none","none", "none","none"])
    const toggleFAQDisplay = (params) => () => {
        if(displayVals[params]=="none"){
            setDisplayVals(displayVals[params] = "block")
            setDisplayVals([...displayVals])
        }
        else{
            setDisplayVals(displayVals[params] = "none")
            setDisplayVals([...displayVals])
        }
        console.log(displayVals)
    }

    return(
        <>
        <section id='faq-container'>
            <h1>FAQs</h1>
            <div>
                <div onClick={toggleFAQDisplay(0)}>
                    <p>How do I create an online shoping app?</p>
                    <p><AiOutlinePlus/></p>
                </div>
                <div style={{display: displayVals[0]}}>
                    <p>Creating your own mobile commerce app can be expensive and require a lot of time.
                    That's why shopify Plus merchants partner with mobile commerce experts like Adiya Solutions
                    to build and maintain their apps.
                    </p>
                </div>
            </div>
            <div>
                <div onClick={toggleFAQDisplay(1)}>
                    <p>How do I create an online shoping app?</p>
                    <p><AiOutlinePlus/></p>
                </div>
                <div style={{display: displayVals[1]}}>
                    <p>Creating your own mobile commerce app can be expensive and require a lot of time.
                    That's why shopify Plus merchants partner with mobile commerce experts like Adiya Solutions
                    to build and maintain their apps.
                    </p>
                </div>
            </div>
            <div>
                <div onClick={toggleFAQDisplay(2)}>
                    <p>How do I create an online shoping app?</p>
                    <p><AiOutlinePlus/></p>
                </div>
                <div style={{display: displayVals[2]}}>
                    <p>Creating your own mobile commerce app can be expensive and require a lot of time.
                    That's why shopify Plus merchants partner with mobile commerce experts like Adiya Solutions
                    to build and maintain their apps.
                    </p>
                </div>
            </div>
            <div>
                <div onClick={toggleFAQDisplay(3)}>
                    <p>How do I create an online shoping app?</p>
                    <p><AiOutlinePlus/></p>
                </div>
                <div style={{display: displayVals[3]}}>
                    <p>Creating your own mobile commerce app can be expensive and require a lot of time.
                    That's why shopify Plus merchants partner with mobile commerce experts like Adiya Solutions
                    to build and maintain their apps.
                    </p>
                </div>
            </div>
            <div>
                <div onClick={toggleFAQDisplay(4)}>
                    <p>How do I create an online shoping app?</p>
                    <p><AiOutlinePlus/></p>
                </div>
                <div style={{display: displayVals[4]}}>
                    <p>Creating your own mobile commerce app can be expensive and require a lot of time.
                    That's why shopify Plus merchants partner with mobile commerce experts like Adiya Solutions
                    to build and maintain their apps.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}

export default FAQ;