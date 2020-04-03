import $ from 'jQuery';

const loadHtmlSucess = [];

export function onLoadHtmlSucess(callBack) {
    if(!loadHtmlSucess.includes(callBack)){
        loadHtmlSucess.push(callBack);
    }   
} 

function loadIncludes(parent){
    if(!parent) parent = 'body';

    $(parent).find('[wm-include]').each((i, e) => {
        const url = $(e).attr('wm-include');
        $.ajax({
            url,
            success(data){
                console.log(data)
                $(e).html(data);
                $(e).removeAttr('wm-include');

              // loadHtmlSucess.forEach(fn => fn())
                
                loadIncludes(e);
            }
        })
    })
}

loadIncludes();
import '../plugins/cityButtons.js'
