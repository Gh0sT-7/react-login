import logo from '../assets/logo.png';
// import headerClasses from './Header.module.css';

import { styled } from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	margin-top: 2rem;
	margin-bottom: 2rem;

    & img {
        object-fit: contain;
        margin-bottom: 2rem;
        width: 11rem;
        height: 11rem;
    }

    & h1 {
        margin: 0;
        font-size: 1.5rem;
        font-family: 'Pacifico', cursive;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.4em;
        color: #9a3412;
    }

    & p {
        margin: 0;
        text-align: center;
        color: #a39191;
    }

    @media (min-width: 768px) {
        & {
            margin-bottom: 4rem;
        }

        & h1 {
            font-size: 2.25rem;
        }
    }
`;

export default function Header() {
    return (
/*         <header>
            <img src={logo} alt="A canvas" />
            <h1>ReactArt</h1>
            <p className={headerClasses.paragraph}>A community of artists and art-lovers.</p>
        </header> */

        <StyledHeader>
            <img src={logo} alt="A canvas" />
            <h1>ReactArt</h1>
            <p>A community of artists and art-lovers.</p>
        </StyledHeader>
    );
}
