import { styled } from 'styled-components';
import { sizes } from '../constants/devices';
import { motion, useTransform, useScroll } from 'framer-motion';

export { TryThis }

const CardBox = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px black solid;
    border-radius: 1rem;
    margin: 12rem auto 12rem auto;

    width: fit-content;
    height: fit-content;

    padding: 6rem;

    @media only screen and (max-width: ${sizes.tablet}) {
        margin: 8rem 0 8rem 0;
        padding: 1.6rem;
        column-count: 1;
        text-align: center;
        margin: auto;
    }
`;

const ContactColumn = styled.div`
    width: 52.1rem;
    text-align: left;

    @media only screen and (max-width: ${sizes.tablet}) {
        width: 26.2rem;
        text-align: center;
    }
`;

const ContactButton = styled.button`
    margin: 0;
    width: 20rem;
    height: 5.9rem;

    background-color: white;
    border: 1px black solid;
    border-radius: 0.5rem;

    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-size: 2rem;

    @media only screen and (max-width: ${sizes.tablet}) {
        width: 13rem;
        height: 5rem;
        font-size: 1.4rem;
    }
`;

const ContactHeader = styled.h2`
    margin: 0 0 3.2rem 0;
    width: 45rem;
    line-height: 95%;
    font-family: 'Noe Display Medium';
    font-weight: 500;
    font-size: 5rem;

    @media only screen and (max-width: ${sizes.tablet}) {
        margin: 0 0 1.6rem 0;
        font-size: 3.2rem;
    }
`;

const ContactBody = styled.p`
    margin: 0 0 2rem 0;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;

    @media only screen and (max-width: ${sizes.tablet}) {
        margin: 0 0 1.6rem 0;
        font-size: 1.6rem;
    }
`;

function TryThis({ text, scrollInfo }) {
    const { scrollYProgress } = useScroll();
    const visible = useTransform(scrollYProgress, scrollInfo, [0, 0, 1, 0])

    return (
        <motion.div style={{ opacity: visible }}>
            <CardBox>
                <ContactColumn>
                    <ContactHeader>{text.header}</ContactHeader>
                    <ContactBody>{text.body}</ContactBody>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <ContactButton onClick={() => window.location.href = "mailto:tom.ajello@lippincott.com"} >SELECT PLAYER</ContactButton>
                    </div>
                </ContactColumn>
            </CardBox>
        </motion.div>
    )
}