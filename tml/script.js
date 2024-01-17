function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('responsive');
}

window.onload = function () {
    const header = document.querySelector('header');
    const canvas = document.getElementById('blurCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = header.clientWidth;
    canvas.height = header.clientHeight;

    const img = new Image();
    img.src = 'bg4.1.jpg';
    img.onload = function () {
        const aspectRatio = img.width / img.height;

        let newWidth = canvas.width;
        let newHeight = canvas.width / aspectRatio;

        if (newHeight > canvas.height) {
            newHeight = canvas.height;
            newWidth = canvas.height * aspectRatio;
        }

        const x = (canvas.width - newWidth) / 2;
        const y = (canvas.height - newHeight) / 2;

        ctx.drawImage(img, x, y, newWidth, newHeight);
        ctx.filter = 'blur(5px)'; 
        ctx.drawImage(canvas, 0, 0);
    };
};