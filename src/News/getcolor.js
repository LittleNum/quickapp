const normalbg = '#FFFFFF'
const readbg = '#FFFAFA'
const titlenormal = '#000000'
const titlereaded = '#666666'

export function getColor(type, readed) {
    console.info('getcolor ', type, readed)
    switch (type) {
        case 0: return readed ? readbg : normalbg
        case 1: return readed ? titlereaded : titlenormal
    }
    return '#000000'
}
