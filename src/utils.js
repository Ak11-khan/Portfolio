// dynamically import our image into different components

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`,import.meta.url).href;
}