import React from 'react';

const Simple = () => {
    const containerStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '100px',
        padding: '40px',
    };

    const leftContainerStyle = {
        paddingLeft: '60px',
    };

    const rightContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '15px',
    };

    const headerStyle = {
        color: 'var(--IwayPlus-RED, #E63F31)',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
        letterSpacing: '0.2px',
        textTransform: 'capitalize',
    };

    const subHeaderStyle = {
        color: 'var(--Text_Blue, #213757)',
        fontFamily: '"Plus Jakarta Sans"',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        textTransform: 'capitalize',
    };

    const paragraphStyle = {
        color: 'rgba(33, 55, 87, 0.90)',
        fontFamily: '"Plus Jakarta Sans"',
        fontSize: '21px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '30px', // 150%
    };

    const callToActionStyle = {
        color: '#E63F31',
        fontFamily: '"Plus Jakarta Sans"',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        textTransform: 'capitalize',
    };

    const listItemStyle = {
        color: 'rgba(33, 55, 87, 0.90)',
        fontFamily: '"Plus Jakarta Sans"',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '30px', // 150%
    };

    return (
        <div style={containerStyle}>
            <div style={leftContainerStyle}>
                {/* Add your SVG here */}
                <svg xmlns="http://www.w3.org/2000/svg" width="360" height="361" viewBox="0 0 460 461" fill="none">
                    <g filter="url(#filter0_d_2796_2088)">
                        <path d="M276.154 103.423H430M353.077 26.5V180.346M30 52.141C30 45.3406 32.7015 38.8187 37.5101 34.0101C42.3187 29.2015 48.8406 26.5 55.641 26.5H158.205C165.006 26.5 171.527 29.2015 176.336 34.0101C181.145 38.8187 183.846 45.3406 183.846 52.141V154.705C183.846 161.506 181.145 168.027 176.336 172.836C171.527 177.645 165.006 180.346 158.205 180.346H55.641C48.8406 180.346 42.3187 177.645 37.5101 172.836C32.7015 168.027 30 161.506 30 154.705V52.141ZM30 298.295C30 291.494 32.7015 284.973 37.5101 280.164C42.3187 275.355 48.8406 272.654 55.641 272.654H158.205C165.006 272.654 171.527 275.355 176.336 280.164C181.145 284.973 183.846 291.494 183.846 298.295V400.859C183.846 407.659 181.145 414.181 176.336 418.99C171.527 423.799 165.006 426.5 158.205 426.5H55.641C48.8406 426.5 42.3187 423.799 37.5101 418.99C32.7015 414.181 30 407.659 30 400.859V298.295ZM276.154 298.295C276.154 291.494 278.855 284.973 283.664 280.164C288.473 275.355 294.994 272.654 301.795 272.654H404.359C411.159 272.654 417.681 275.355 422.49 280.164C427.299 284.973 430 291.494 430 298.295V400.859C430 407.659 427.299 414.181 422.49 418.99C417.681 423.799 411.159 426.5 404.359 426.5H301.795C294.994 426.5 288.473 423.799 283.664 418.99C278.855 414.181 276.154 407.659 276.154 400.859V298.295Z" stroke="#E63F31" stroke-opacity="0.1" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_2796_2088" x="0" y="0.5" width="460" height="460" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2796_2088"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2796_2088" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div style={rightContainerStyle}>
                <div style={headerStyle}>Iwayplus Maps</div>
                <div style={subHeaderStyle}>
                    Navigate with pinpoint precision Indoor Navigation Evolved:
                </div>
                <div style={paragraphStyle}>
                    <ul style={{ paddingLeft: '20px' }}>
                        <li style={listItemStyle}>Effortlessly Find Your Way: Explore interactive maps and receive turn-by-turn guidance (online & offline) on both iOS and Android devices </li>
                        <li style={listItemStyle}>Key feature 2: Answer 2</li>
                        <li style={listItemStyle}>Key feature 3: Answer 3</li>
                        {/* Add more bullet points and answers as needed */}
                    </ul>
                </div>
                <div style={callToActionStyle}>
                    Download Iwaymaps today and conquer any indoor space with confidence!
                </div>
            </div>
        </div>
    );
};

export default Simple;
