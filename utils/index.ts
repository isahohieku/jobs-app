export const checkImageURL = (url: string): boolean => {
    if (!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$');
        return pattern.test(url);
    }
}