export const getImage = (identifier, size) => {
    const url = `https://www.artic.edu/iiif/2/${identifier}/full/${size},/0/default.jpg`
    return url
};