export async function checkImageURL(
    url:string,
    resCallback:()=> void,
    rejCallback?:()=> void
) {
    const img = new Image();

    img.onload = function() {
        resCallback();
    };

    img.onerror = function() {
        rejCallback && rejCallback();
    };

    img.src = url;
}