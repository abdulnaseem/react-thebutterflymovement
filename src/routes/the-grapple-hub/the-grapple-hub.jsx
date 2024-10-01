import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from "../../components/gallery/Gallery";
import DATA from '../../data/the-grapple-hub.json';
import TGHLogo from '../../assets/images/tgh-logo.jpg';
import './the-grapple-hub.css';

const TheGrappleHub = ({setImageId}) => {

    const tghUrl = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* <h1 className="tgh-title p-5 text-center text-6xl font-bold tracking-tight sm:text-6xl">Brawlers Boxing</h1> */}
            <div className="tgh-section">
                <div className="tgh-inner-section">
                    <img className="tgh-logo" src={TGHLogo} alt="" />
                </div>
                <h3 className="tgh-sub-heading text-center text-2xl font-bold tracking-tight sm:text-2xl">Est 2022</h3>
                <p className="p-10 tgh-text">The Grapple Hub was founded by Coach.H in 2022 after piloting the project for 2 years. This community project promotes the sport of Brazilian Jiu Jitsu and grappling in the heart of the East End, Tower Hamlets. It is a safe space for people to enjoy themselves, have fun and learn useful life skills with an aim to reduce the rates of delinquency and violent crimes in the area. The club follows the teachings of Bradley Hill, the youngest 2nd Degree Black Belt in United Kingdom. Coach Bradley Hill oversees the curriculum and Grading and having since open its doors, the club has gained a variety of medals and reputation.</p>
            </div>

            <div className="the-grapple-hub-gallery text-center pb-8">
                <Gallery data={DATA} setImageId={setImageId} projectUrl={tghUrl.pathname} />
            </div>
        </>

    )
}

export default TheGrappleHub;