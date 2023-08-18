// global vars

let hero = {
    object : null,
    slide : 1,
    slides_num : 3,
    add : 1,
    timing : 0,
};
let testimonial = {
    object : null,
    slide : 1,
    slides_num : 3,
    add : 1,
    timing : 0,
};


function carousel_bg(container)
{
    let width = container.object.clientWidth / container.slides_num;
    container.object.setAttribute('style', 'left: -' + (width * (container.slide - 1)).toString() + 'px;');
}

function carousel_title(object)
{
    // reset hero.titles
    object.titles.forEach(title => {
        title.removeAttribute('style');
    });

    // show title
    let title = object.titles[object.slide - 1];
    title.setAttribute('style', "display: block !important; animation: visible 1.5s; opacity: 1");
}


function carousel_buttons(object)
{
    // reset
    object.buttons.forEach(button => {
        button.removeAttribute('style');
    });

    // show button
    let button = object.buttons[object.slide - 1];
    button.setAttribute('style', 'background-color: var(--Ivory_White);');
}

// start
document.addEventListener('DOMContentLoaded', function() {
    // carousel hero
    hero.object = document.getElementById('bg-home');
    hero.titles = document.querySelectorAll('.title');
    hero.buttons = document.querySelectorAll('.scroll-button');

    // carousel testimonial
    testimonial.object = document.getElementById('testimonials-total');
    testimonial.titles = document.querySelectorAll('.testimonial');

    

    

    // window
    window.addEventListener('resize', () => {
        carousel_bg(hero);
        carousel_bg(testimonial);
    });

    // go back hero
    document.getElementById('precedent').addEventListener('click', function() {
        if (hero.slide != 1)
        {
            // reset timing
            hero.timing = 0;

            // slide
            hero.slide--;
            carousel_bg(hero);
            carousel_title(hero);
            carousel_buttons(hero);
        }
    })
    
    // go forth hero
    document.getElementById('suivant').addEventListener('click', function() {
        if (hero.slide != 3)
        {
            // reset timing
            hero.timing = 0;

            // slide
            hero.slide++;
            carousel_bg(hero);
            carousel_title(hero);
            carousel_buttons(hero);
        }
    })

    // hero.buttons
    hero.buttons.forEach(button => {
        button.addEventListener('click', () => {
            hero.slide = parseInt(button.id);

            hero.add = 1;

            carousel_bg(hero);
            carousel_title(hero);
            carousel_buttons(hero);

            hero.timing = 0;
        });
    });
    



    // go back testimonial
    document.getElementById('test-but-pre').addEventListener('click', function() {
        if (testimonial.slide != 1)
        {
            // reset timing
            testimonial.timing = 0;

            // slide
            testimonial.slide--;
            carousel_bg(testimonial);
            carousel_title(testimonial);
        }
    })
    
    // go forth testimonial
    document.getElementById('test-but-suiv').addEventListener('click', function() {
        if (testimonial.slide != 3)
        {
            // reset timing
            testimonial.timing = 0;

            // slide
            testimonial.slide++;
            carousel_bg(testimonial);
            carousel_title(testimonial);
        }
    })




    // autoscroll
    setInterval(function() {
        // add to timing
        hero.timing++;

        // return if not reach n seconds
        if (hero.timing < (hero.slides_num + 1))
        {
            return;
        }

        // else
        if (hero.slide == 1)
        {
            hero.add = 1;
        }
        else if (hero.slide == hero.slides_num)
        {
            hero.add = -1;
        }
        hero.slide += hero.add;

        carousel_bg(hero);
        carousel_title(hero);
        carousel_buttons(hero);

        hero.timing = 0;

    }, 1000);
})