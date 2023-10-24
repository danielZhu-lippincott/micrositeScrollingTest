import PropTypes from "prop-types"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useMotionValueEvent } from "framer-motion"
import { ArticleBody, ArticleSubHeading, ArticleHeader } from "../ArticleStyles"

export { OpacityContent, OpacityHeading, OpacityParagraph, OpacitySubheading }

function OpacityContent({ child, scrollInfo, baseOpacity }) {

    let opacityTransform = [baseOpacity, 1, 1, baseOpacity]
    if (scrollInfo.length == 6) { opacityTransform = [baseOpacity, baseOpacity, 1, 1, baseOpacity, baseOpacity] }
    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]

    const { scrollYProgress } = useScroll();

    //Calculate Transforms
    const opacity = useTransform(scrollYProgress, scrollInfo, opacityTransform)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])

    return (
        <motion.div style={{
            position: "fixed",
            opacity: opacity,
            display: visible
        }}>
            {child}
        </motion.div>
    )
}

OpacityContent.defaultProps = {
    baseOpacity: 0.15
}

OpacityContent.propTypes = {
    child: PropTypes.any,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
    baseOpacity: PropTypes.number
}

//Opacity Paragraph
function OpacityParagraph({ text, scrollInfo, baseOpacity, dark, simpleFade }) {
    let scrollReference = [scrollInfo[0], scrollInfo[1], scrollInfo[1], scrollInfo[2], scrollInfo[2], scrollInfo[3]]
    let opacityTransform = [baseOpacity, baseOpacity, 1, 1, baseOpacity, baseOpacity]

    if (simpleFade) {
        scrollReference = scrollInfo
        opacityTransform = [baseOpacity, 1, 1, baseOpacity]
    }

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const { scrollYProgress } = useScroll();

    //Calculate Transforms
    const opacity = useTransform(scrollYProgress, scrollReference, opacityTransform)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])

    let color = 'black'
    if (dark) { color = 'white' }

    return (
        <>
            {text.map(string =>
                <motion.div key={string} style={{ opacity: opacity, display: visible, color: color }}>
                    <ArticleBody>
                        {string}
                    </ArticleBody>
                </motion.div>
            )}
        </>
    )
}

OpacityParagraph.defaultProps = {
    baseOpacity: 0.15,
    dark: true,
    simpleFade: false,
}

OpacityParagraph.propTypes = {
    child: PropTypes.any,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
    baseOpacity: PropTypes.number,
    dark: PropTypes.bool,
    simpleFade: PropTypes.bool,
}

//Opacity Subheading
function OpacitySubheading({ text, scrollInfo, baseOpacity, simpleFade, dark }) {
    let scrollReference = [scrollInfo[0], scrollInfo[1], scrollInfo[1], scrollInfo[2], scrollInfo[2], scrollInfo[3]]
    let opacityTransform = [baseOpacity, baseOpacity, 1, 1, baseOpacity, baseOpacity]

    if (simpleFade) {
        scrollReference = scrollInfo
        opacityTransform = [baseOpacity, 1, 1, baseOpacity]
    }

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const { scrollYProgress } = useScroll();

    //Calculate Transforms
    const opacity = useTransform(scrollYProgress, scrollReference, opacityTransform)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])

    let color = 'black'
    if (dark) { color = 'white' }

    return (
        <>
            {text.map(string =>
                <motion.div key={string} style={{ opacity: opacity, display: visible, color: color }}>
                    <ArticleSubHeading>
                        {string}
                    </ArticleSubHeading>
                </motion.div>
            )}
        </>
    )
}

OpacitySubheading.defaultProps = {
    baseOpacity: 0.15,
    dark: true,
    simpleFade: false,
}

OpacitySubheading.propTypes = {
    child: PropTypes.any,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
    baseOpacity: PropTypes.number,
    dark: PropTypes.bool,
    simpleFade: PropTypes.bool,
}

// Opacity Header
function OpacityHeading({ text, scrollInfo, baseOpacity, dark, simpleFade }) {
    let scrollReference = [scrollInfo[0], scrollInfo[1], scrollInfo[1], scrollInfo[2], scrollInfo[2], scrollInfo[3]]
    let opacityTransform = [baseOpacity, baseOpacity, 1, 1, baseOpacity, baseOpacity]

    if (simpleFade) {
        scrollReference = scrollInfo
        opacityTransform = [baseOpacity, 1, 1, baseOpacity]
    }

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const { scrollYProgress } = useScroll();

    //Calculate Transforms
    const opacity = useTransform(scrollYProgress, scrollReference, opacityTransform)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])

    let color = 'black'
    if (dark) { color = 'white' }

    return (
        <>
            {text.map(string =>
                <motion.div key={string} style={{ opacity: opacity, display: visible, color: color}}>
                    <ArticleHeader>
                        {string}
                    </ArticleHeader>
                </motion.div>
            )}
        </>
    )
}

OpacityHeading.defaultProps = {
    baseOpacity: 0.15,
    dark: true,
    simpleFade: false,
}

OpacityHeading.propTypes = {
    child: PropTypes.any,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
    baseOpacity: PropTypes.number,
    dark: PropTypes.bool,
    simpleFade: PropTypes.bool,
}