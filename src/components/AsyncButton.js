import React, { useEffect, useState } from 'react'
import PropsType from 'prop-types'

import { DualRingLoading, HourglassLoading, RingLoading, SpinnerLoading } from './AsyncButton.styled'
import './AsyncButton.styles.scss'

const spinnerCounter = new Array(12).fill('')
const ringCounter = new Array(4).fill('')

// theme name
const themeConfig = {
    ring: true,
    dualRing: true,
    spinner: true,
    hourglass: true
}

const Loading = ({ theme, color, size }) => {
    const name = themeConfig[theme] ? theme : 'ring'
    switch (name) {
        case 'spinner':
            return (
                <SpinnerLoading color={color} size={size} className="loadking-spinner">
                    {spinnerCounter.map((_item, index) => (
                        <div key={index}></div>
                    ))}
                </SpinnerLoading>
            )
        case 'hourglass':
            return <HourglassLoading size={size} color={color} className="loadking-hourglass"></HourglassLoading>
        case 'ring':
            return (
                <RingLoading size={size} color={color} className="loadking-ring">
                    {ringCounter.map((_item, index) => (
                        <div key={index}></div>
                    ))}
                </RingLoading>
            )
        case 'dualRing':
            return <DualRingLoading size={size} color={color} className="loadking-dual-ring" />
        default:
            return <></>
    }
}
const isFunc = func => typeof func === 'function'

const AsyncButton = ({
    className,
    theme = 'ring',
    color = '#000000',
    isAsync = false,
    onClick,
    size = 10,
    text = 'Button',
    loadingText,
    timeout = 0, // when you don't use isAsync
    ...props
}) => {
    const [isFetch, setFetch] = useState()

    useEffect(() => setFetch(isAsync), [isAsync])

    const makeClassName = () => `button-async ${className || ''}`.trim()
    const handleClick = evt => {
        isFunc(onClick) && onClick(evt)
        setFetch(true)
        timeout && setTimeout(() => setFetch(false), timeout * 1000)
    }

    return (
        <button className={makeClassName()} onClick={handleClick} disabled={isFetch} {...props}>
            {isFetch && <Loading color={color} size={size} theme={theme} />}
            <div className="label">{loadingText || text}</div>
        </button>
    )
}

export default AsyncButton

AsyncButton.prototype = {
    className: PropsType.string,
    theme: PropsType.string,
    color: PropsType.string,
    isAsync: PropsType.bool,
    onClick: PropsType.func,
    size: PropsType.number,
    text: PropsType.any,
    loadingText: PropsType.any,
    timeout: PropsType.string
}
