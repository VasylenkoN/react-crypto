

export function percentDifference(a, b) {
    return +(100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2)
}

export function capitalize(srt){
    return srt.charAt(0).toUpperCase() + srt.substr(1)
}