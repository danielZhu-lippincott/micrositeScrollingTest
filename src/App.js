import { useState } from 'react'
import { scroll, useScroll } from "framer-motion"
import './App.css';

// import pages
import { NamingSection } from './sections/NamingSection';
import { ManifestoSection } from './sections/ManifestoSection'

import { Item } from './sections/Section'
import { TransformingContent } from './interactions/TransformingContent'
import { ScrollingGif } from './interactions/ScrollingGif'
import { ScrollingMovie } from './interactions/ScrollingMovie'
import { Background } from './interactions/Background'

//import content constants
import NAMING_STRINGS from './constants/textContent';
import { useImageLoader } from './constants/manifestoImgContent'; //usage: NamingIMAGES.cloud
import { useNamingImageLoader } from './constants/imgContent';

function App() {
  const MANIFESTO_IMAGES = useImageLoader();
  const NAMING_IMAGES = useNamingImageLoader();

  return (
    <div className="App">
      <div className='App-header'>
        <NamingSection images={NAMING_IMAGES} text={NAMING_STRINGS}></NamingSection>
        {/* <ManifestoSection images={MANIFESTO_IMAGES} /> */}
      </div>
    </div>
  );
}

export default App;