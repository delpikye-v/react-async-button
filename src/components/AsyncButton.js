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

/** Theme type */
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

/**
 * Case 1: Using isAsync (change state isAsync = true/false)
 * Case 2: Using timeout (set timeout restore)
 * Case 3: Using asyncFunc (pass a promise func)
 */
const AsyncButton = ({
    className,
    theme = 'ring',
    indicatorColor = '#000000',
    isAsync = false, // case 1
    onClick,
    size = 10, // size of indicator
    text = 'Button',
    loadingText,
    timeout = 0, // case 2
    asyncFunc, // case 3
    ...props
}) => {
    const [isFetch, setFetch] = useState(false)

    // case 1
    useEffect(() => setFetch(isAsync), [isAsync])

    const makeClassName = () => `button-async ${className || ''}`.trim()
    const handleClick = evt => {
        isFunc(onClick) && onClick(evt)
        setFetch(true)

        // case 3
        if (asyncFunc && isFunc(asyncFunc)) {
            Promise.resolve(asyncFunc()).finally(() => setFetch(false))
            return
        }

        // case 2
        timeout && setTimeout(() => setFetch(false), timeout * 1000)
    }

    return (
        <button className={makeClassName()} onClick={handleClick} disabled={isFetch} {...props}>
            {isFetch && <Loading color={indicatorColor} size={size} theme={theme} />}
            <div className="label">{isFetch ? loadingText || text : text}</div>
        </button>
    )
}

export default AsyncButton

AsyncButton.prototype = {
    className: PropsType.string,
    theme: PropsType.string,
    indicatorColor: PropsType.string,
    isAsync: PropsType.bool,
    onClick: PropsType.func,
    size: PropsType.number,
    text: PropsType.any,
    loadingText: PropsType.any,
    timeout: PropsType.string,
    asyncFunc: PropsType.func
}
