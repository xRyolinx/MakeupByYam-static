// global vars
let slide = 1;
let add = 1; //for interval
let timing = 0; //for interval

function carousel_bg(bg_home)
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

function carousel_title(titles)
{
    // reset titles
    titles.forEach(title => {
        title.removeAttribute('style');
    });

    // show title
    let title = titles[slide - 1];
    title.setAttribute('style', "display: block; animation: visible 2s; opacity: 1");
}


function carousel_buttons(buttons)
{
    // reset
    buttons.forEach(button => {
        button.removeAttribute('style');
    });

    // show button
    let button = buttons[slide - 1];
    button.setAttribute('style', 'background-color: var(--Ivory_White);');
}

// start
document.addEventListener('DOMContentLoaded', function() {
    // carousel
    let bg_home = document.getElementById('bg-home');
    let titles = document.querySelectorAll('.title');
    let buttons = document.querySelectorAll('.scroll-button');
    
    // window
    window.addEventListener('resize', () => {
        carousel_bg(bg_home);
        carousel_title(titles);
        carousel_buttons(buttons);
    });

    // go back
    document.getElementById('precedent').addEventListener('click', function() {
        if (slide != 1)
        {
            // reset timing
            timing = 0;

            // slide
            slide--;
            carousel_bg(bg_home);
            carousel_title(titles);
            carousel_buttons(buttons);
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
            carousel_bg(bg_home);
            carousel_title(titles);
            carousel_buttons(buttons);
        }
    })

    // buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            slide = parseInt(button.id);

            add = 1;

            carousel_bg(bg_home);
            carousel_title(titles);
            carousel_buttons(buttons);

            timing = 0;
        });
    });

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

        carousel_bg(bg_home);
        carousel_title(titles);
        carousel_buttons(buttons);

        timing = 0;

    }, 1000);
})