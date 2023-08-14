// global vars
let slide = 1;
let add = 1; //for interval
let timing = 0; //for interval

function carousel(bg_home)
{
    let width = document.querySelector('#bg-home').clientWidth / 3;
    if (slide == 1)
    {
        bg_home.setAttribute('style', 'left: 0;');
    }
    else if (slide == 2)
    {
        bg_home.setAttribute('style', 'left: -' + width.toString() + 'px;');
    }
    else if (slide == 3)
    {
        bg_home.setAttribute('style', 'left: -' + (width * 2).toString() + 'px;');
    }
}

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
        arrow.addEventListener('click', function() {
            let content = arrow.content;
            if (window.getComputedStyle(arrow).transform == 'matrix(-1, 0, 0, -1, 0, 0)')
            {
                content.setAttribute('style', 'height: ' + content.height.toString() + 'px;');
                arrow.setAttribute('style', 'transform: rotate(0deg);')
            }
            else
            {
                content.setAttribute('style', 'height: 0;');
                arrow.setAttribute('style', 'transform: rotate(180deg);')
            }
        });
    });


    
    // carousel
    let bg_home = document.getElementById('bg-home');

    // window
    window.addEventListener('resize', () => {
        carousel(bg_home);
    });

    // go back
    document.getElementById('precedent').addEventListener('click', function() {
        if (slide != 1)
        {
            // reset timing
            timing = 0;

            // slide
            slide--;
            carousel(bg_home);
        }
    })
    
    // go forth
    document.getElementById('suivant').addEventListener('click', function() {
        if (slide != 3)
        {
            // reset timing
            timing = 0;

            // slide
            slide++;
            carousel(bg_home);
        }
    })

    // autoscroll
    setInterval(function() {
        // add to timing
        timing++;

        // return if not reach 3s
        if (timing < 4)
        {
            return;
        }

        // else
        if (slide == 1)
        {
            add = 1;
        }
        else if (slide == 3)
        {
            add = -1;
        }
        slide += add;
        carousel(bg_home);
        timing = 0;

    }, 1000);
})