import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export async function GET(
    req: NextRequest
) {
    const headers = Object.fromEntries(req.headers.entries());
    const colorScheme = headers['sec-ch-prefers-color-scheme'] || 'light';
    const darkSvgPathColor = '#ec7d4e';
    const lightSvgPathColor = '#c32b2e';
    const svgPathColor = colorScheme === 'light' ? lightSvgPathColor : darkSvgPathColor;

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: svgPathColor,
                    width: '100%',
                    height: '100%',
                }}
            >
                <svg
                    viewBox='0 0 512 512'
                    width='32px'
                    height='32px'
                    fill='currentColor'
                >
                    <g
                        strokeWidth='0'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <rect x='185.541' width='140.918' height='46.972' />
                        <rect
                            x='185.541'
                            y='465.028'
                            width='140.918'
                            height='46.972'
                        />
                        <path d='M86.899,265.945v65.779c0,3.33,0.22,6.606,0.495,9.872h337.212c0.275-3.266,0.495-6.541,0.495-9.872v-65.743 H87.064C87.009,265.982,86.955,265.945,86.899,265.945z' />
                        <path d='M424.606,170.404H87.394c-0.275,3.266-0.495,6.54-0.495,9.871v65.78c0.056,0,0.11-0.036,0.165-0.036h338.037 v-65.744C425.101,176.944,424.881,173.67,424.606,170.404z' />
                        <path d='M310.587,65.762H201.413c-52.909,0-97.303,35.926-110.45,84.679h330.074 C407.89,101.688,363.495,65.762,310.587,65.762z' />
                        <path d='M201.413,446.238h109.174c52.908,0,97.303-35.926,110.449-84.679H90.963 C104.11,410.312,148.504,446.238,201.413,446.238z' />
                    </g>
                </svg>
            </div>
        ),
        {
            ...size,
        },
    );
}
