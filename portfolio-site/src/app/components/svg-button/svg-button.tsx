import { JSX } from 'react';
import * as images from './svg-images';

type ButtonSize = 'regular' | 'large' | 'xl';
type ButtonType =
    | 'burger-menu'
    | 'scroll-to-top'
    | 'form-success'
    | 'complete-failure';
type SvgButtonProps = {
    onClickFunction: () => void;
    label: string;
    buttonType: ButtonType;
    size?: ButtonSize;
};

const svgButtonContentMap: Record<ButtonType, JSX.Element> = {
    'burger-menu': images.burgerMenuSvg,
    'scroll-to-top': images.upChevronSvg,
    'form-success': images.manekiNekoSvg,
    'complete-failure': images.skullSvg,
};

const svgButtonSizeMap: Record<ButtonSize, string> = {
    regular: 'h-12 w-12',
    large: 'h-20 w-20',
    xl: 'h-50 w-50',
};

const SvgButton = ({
    onClickFunction,
    label,
    buttonType,
    size = 'regular',
}: SvgButtonProps): JSX.Element => (
    <button
        type='button'
        className={`svg-button p-2 ${svgButtonSizeMap[size]}`}
        aria-controls={buttonType}
        aria-expanded='false'
        aria-label={label}
        onClick={onClickFunction}
    >
        {svgButtonContentMap[buttonType]}
    </button>
);

export default SvgButton;
