// start
document.addEventListener('DOMContentLoaded', function() {
    // drop-down menu
    // link content to its arrow
    let arrows = document.querySelectorAll('.drop-down-svg-container');
    arrows.forEach((arrow) => {
        let content = arrow.parentElement.parentElement.children[1];
        content.height = content.clientHeight;
        content.setAttribute('style', 'height: 0;');
        arrow.content = content;
    });

    // arrows
    arrows.forEach((arrow) => {
        // content
        let content = arrow.content;
        // svg
        arrow = arrow.children[0];
        arrow.addEventListener('click', function() {
            if (window.getComputedStyle(arrow).transform == 'matrix(-1, 0, 0, -1, 0, 0)')
            {
                content.setAttribute('style', 'height: ' + content.height.toString() + 'px; margin-top: 20px;');
                arrow.setAttribute('style', 'transform: rotate(0deg);')
            }
            else
            {
                content.setAttribute('style', 'height: 0;');
                arrow.setAttribute('style', 'transform: rotate(180deg);')
            }
        });
    });
});