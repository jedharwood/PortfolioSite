import { JSX } from 'react';
// import { SvgButton } from "./svg-button";
import { SvgAnchor } from './svg-anchor';

export const Footer = (): JSX.Element => {
    // scroll to top button

    return (
        <footer className='flex w-full justify-center p-2'>
            {/* <SvgButton onClickFunction={() => window.scrollTo(0, 0)} screenReaderText="link to LinkedIn page" buttonType="burger-menu"/> */}
            <SvgAnchor
                label='Link to LinkedIn page'
                href='https://uk.linkedin.com/in/jed-harwood-39aaba194'
                buttonType='linked-in'
            />
            <SvgAnchor
                label='Link to github page'
                href='https://github.com/jedharwood'
                buttonType='github'
            />
        </footer>
    );
};
