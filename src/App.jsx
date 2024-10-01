import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import About from './routes/about/about';
import WhatWeProvide from './routes/what-we-provide/what-we-provide';
import Founder from './routes/founder/founder';
import BrawlersBoxing from './routes/brawlers-boxing/brawlers-boxing';
import TheGrappleHub from './routes/the-grapple-hub/the-grapple-hub';
import Contact from './routes/contact/contact';
import Footer from './components/footer';
import BBDATA from './data/brawlers-boxing.json';
import TGHDATA from './data/the-grapple-hub.json';
import Image from './components/gallery/image/Image';
import { useEffect, useState } from 'react';

function App() {

  const [imageId, setImageId] = useState(0);
  const [projectUrl, setProjectUrl] = useState("/");

  const handleSetImageId = (id, projectUrl) => {
    setImageId(id);
    setProjectUrl(projectUrl);
  }

  return (
    <>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-provide" element={<WhatWeProvide />} />
          <Route path='/founder' element={<Founder />} />
          <Route path="/brawlers-boxing" element={<BrawlersBoxing setImageId={handleSetImageId} />} />
          <Route path="/brawlers-boxing/:imageId" element={<Image id={imageId} data={BBDATA} projectUrl={projectUrl} />} />
          <Route path="/the-grapple-hub" element={<TheGrappleHub setImageId={handleSetImageId} />} />
          <Route path="/the-grapple-hub/:imageId" element={<Image id={imageId} data={TGHDATA} projectUrl={projectUrl} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </>
    
  )
}

export default App