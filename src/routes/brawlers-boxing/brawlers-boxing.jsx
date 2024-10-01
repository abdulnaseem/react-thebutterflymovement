import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from "../../components/gallery/Gallery";
import DATA from '../../data/brawlers-boxing.json';
import BBLogo from '../../assets/images/brawlers-boxing.jpeg';
import './brawlers-boxing.css';

const BrawlersBoxing = ({setImageId}) => {

    const bbUrl = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* <h1 className="bb-title p-5 text-center text-6xl font-bold tracking-tight sm:text-6xl">Brawlers Boxing</h1> */}
            <div className="bb-section">
                <div className="bb-inner-section">
                    <img className="bb-logo" src={BBLogo} alt="" />
                </div>
                <h3 className="bb-sub-heading text-center text-2xl font-bold tracking-tight sm:text-2xl">Est 2013</h3>
                <p className="p-10 bb-text">The love for sports inspired Coach. H to give back to the wider community and harbour community cohesion using his skills, knowledge and experience. Shortly after the London 2012 Olympics, Coach.H initiated and founded a community project called ‘Brawlers Boxing’. The project arose to tackle youth delinquency and promote physical participation & better health. The movement went on to transform many lives, and along the way, won the ‘Tower Hamlets Community Safety Awards’ by Metropolitan Police and ‘The English Asian Business Awards’ (finalist) by Lloyds Bank.</p>
            </div>

            <div className="brawlers-boxing-gallery text-center pb-8">
                <Gallery data={DATA} setImageId={setImageId} projectUrl={bbUrl.pathname} />
            </div>
        </>

    )
}

export default BrawlersBoxing;