import { useState, useEffect } from 'react'

export { HighlightText }

function HighlightText({paragraphs}) {
    const [focusedIndex, setFocusedIndex] = useState(0); //focused index starts at 0
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition)
        const windowHeight = window.innerHeight;
        const paragraphHeight = windowHeight / paragraphs.length;
        const newIndex = Math.floor(scrollPosition / paragraphHeight);
        // Update the focused index only if it has changed
        if (newIndex !== focusedIndex) {
          setFocusedIndex(newIndex);
        }
        // console.log("index: " + newIndex + ", scrollP: " + scrollPosition)
      };
      window.addEventListener('scroll', handleScroll);
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [focusedIndex, paragraphs.length]);
    return (
      <div style={{paddingLeft: '20%',  paddingRight: '20%'}}>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            style={{
              color: index === focusedIndex ? '#FFFFFF' : '#424242', //white : grey
              textAlign: 'left',
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    );
}