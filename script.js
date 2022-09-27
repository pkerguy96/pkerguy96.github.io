/* FADE f you ahmed if ur reading this*/
const fadEL = document.querySelector('.fade');

let haScrolled = false;
window.addEventListener('scroll', function () {
    if (!haScrolled) {
        fadEL.style.opacity = '0.5';
        haScrolled = true;
    }

});
/* FILTERS */
const filersEl = document.querySelector('.filters');
const projectEl1 = document.querySelector('.project:nth-child(1)');
const projectEl2 = document.querySelector('.project:nth-child(2)');

const projectEl3 = document.querySelector('.project:nth-child(3)');
const projectEl4 = document.querySelector('.project:nth-child(4)');
const projectEl5 = document.querySelector('.project:nth-child(5)');

const projectEl6 = document.querySelector('.project:nth-child(6)');

const htmlEL = document.querySelector('html');
filersEl.addEventListener('click', function (e) {
    /* remove fade */
    fadEL.style.opacity = '0';
    /* make clicked button active */
    document.querySelector('.filter-btn--active').classList.remove('filter-btn--active');
    e.target.classList.add('filter-btn--active');
    /* change image opacity */
    htmlEL.style.setProperty('--default-opacity', '0.4');
    htmlEL.style.setProperty('--hover-opacity', '0.3');
    /* reorginize grid */
    const filtertext = e.target.textContent;
    if (filtertext === 'All') {
        projectEl1.style.opacity = '1';
        projectEl1.style.transform = 'scale(1)';
        projectEl2.style.opacity = '1';
        projectEl2.style.transform = 'scale(1)';
        projectEl3.style.opacity = '1';
        projectEl3.style.transform = 'scale(1)';
        projectEl4.style.opacity = '1';
        projectEl4.style.transform = 'scale(1)';
        projectEl5.style.opacity = '1';
        projectEl5.style.transform = 'scale(1)';
        projectEl6.style.opacity = '1';
        projectEl6.style.transform = 'scale(1)';
    } else if (filtertext === 'Front end') {
        projectEl1.style.opacity = '0';
        projectEl1.style.transform = 'scale(0)';
        projectEl2.style.opacity = '0';
        projectEl2.style.transform = 'scale(0)';
        projectEl5.style.opacity = '0';
        projectEl5.style.transform = 'scale(0)';
        projectEl6.style.opacity = '0';
        projectEl6.style.transform = 'scale(0)';

        projectEl3.style.transform = 'translateX(-650px)';
        projectEl3.style.opacity = '1';
        projectEl4.style.transform = 'translate(325px,-502px)';
        projectEl4.style.opacity = '1';


    }
    else if (filtertext === 'Backend') {
        projectEl1.style.opacity = '0';
        projectEl1.style.transform = 'scale(0)';
        projectEl2.style.opacity = '0';
        projectEl2.style.transform = 'scale(0)';
        projectEl3.style.opacity = '0';
        projectEl3.style.transform = 'scale(0)';
        projectEl4.style.opacity = '0';
        projectEl4.style.transform = 'scale(0)';

        projectEl5.style.transform = 'translate(-325px,-359px)';
        projectEl5.style.opacity = '1';

        projectEl6.style.transform = 'translate(-325px,-501px)';
        projectEl6.style.opacity = '1';

    }
    else if (filtertext === 'FullStack') {

        projectEl3.style.opacity = '0';
        projectEl3.style.transform = 'scale(0)';
        projectEl4.style.opacity = '0';
        projectEl4.style.transform = 'scale(0)';
        projectEl5.style.opacity = '0';
        projectEl5.style.transform = 'scale(0)';
        projectEl6.style.opacity = '0';
        projectEl6.style.transform = 'scale(0)';
        projectEl1.style.opacity = '1';
        projectEl1.style.transform = 'scale(1)';
        projectEl2.style.opacity = '1';
        projectEl2.style.transform = 'scale(1)';

    }
});