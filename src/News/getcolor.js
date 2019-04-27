const normalbg = '#FFFFFF'
const readbg = '#FFFAFA'
const titlenormal = '#000000'
const titleread = '#cccccc'

export function getColor(type, read) {
    switch (type) {
        case 0: return read ? readbg : normalbg
        case 1: return read ? titleread : titlenormal
    }
    return '#000000'
}
