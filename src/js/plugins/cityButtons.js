import $ from 'jQuery';
import { onLoadHtmlSucess } from './../core/includes';

const duration = 300;

function filterByCity(city = null) {
    $('[wm-city]').each((i, e) => {
        const isTarget = $(e).attr('wm-city') === city || city === null;
        if (isTarget) {
            $(e).parent().removeClass('d-none');
            $(e).fadeIn(duration);
        } else {
            $(e).parent().addClass('d-none');
            $(e).fadeOut(duration);
        }
    });
}


$.fn.cityButtons = function () {
    const cities = new Set();
    console.log('buttons')
    $('[wm-city]').each((i, e) => {
        cities.add($(e).attr('wm-city'));
    });
    
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city);
        btn.click(e => filterByCity(city));
        return btn;
    });
    
    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas').click(e => filterByCity());
    btns.push(btnAll);
    
    const btnGroup = $('<div>').addClass(['btn-group']).append(btns);
    
    $(this).html(btnGroup);
    return this;

}

//onLoadHtmlSucess(function() {
    //})
    
  const initButtons = setInterval(() => {
      $('[wm-city-buttons]').cityButtons();      
}, 3000) 

