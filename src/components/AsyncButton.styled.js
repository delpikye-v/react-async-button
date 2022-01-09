import styled, { keyframes } from 'styled-components'

// =========================================================
// =========================================================
const loadkingSpinner = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

// =========================================================
export const SpinnerLoading = styled.div`
    display: inline-block;
    position: relative;
    width: ${props => props.size}px;
    margin-right: ${props => props.size + 6}px;

    div {
        transform-origin: ${props => props.size}px 0px;
        animation: ${loadkingSpinner} 1.2s linear infinite;

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 2px;
            left: 1px;
            width: 7px;
            height: 2px;
            border-radius: 50%;
            background: ${props => props.color};
        }
    }
`

// =========================================================
// =========================================================
const loadkingHourglass = keyframes`
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
        transform: rotate(1800deg);
    }
`

// =========================================================
export const HourglassLoading = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    width: ${props => props.size}px;
    margin-right: ${props => props.size}px;

    &:after {
        content: ' ';
        display: block;
        position: absolute;
        border-radius: 50%;
        width: 0;
        height: 0;
        box-sizing: border-box;
        border: ${props => props.size}px solid gray;
        border-color: ${props => props.color} transparent ${props => props.color} transparent;
        animation: ${loadkingHourglass} 1.2s infinite;
    }
`

// =========================================================
// =========================================================
const loadkingRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const radius = 6
export const RingLoading = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    width: ${props => props.size}px;
    margin-right: ${props => props.size}px;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${props => props.size + radius}px;
        height: ${props => props.size + radius}px;
        border: ${radius - 2}px solid ${props => props.color};
        border-radius: 50%;
        animation: ${loadkingRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.color} transparent transparent transparent;
    }
`

// =========================================================
// =========================================================
export const DualRingLoading = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    width: ${props => props.size}px;
    margin-right: ${props => props.size}px;

    &::after {
        content: '';
        display: block;
        position: absolute;
        width: ${props => props.size + radius}px;
        height: ${props => props.size + radius}px;
        border: ${radius - 2}px solid ${props => props.color};
        border-radius: 50%;
        animation: ${loadkingRing} 1.2s linear infinite;
        border-color: ${props => props.color} transparent ${props => props.color} transparent;
    }
`
