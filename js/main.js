let moreText = document.getElementById('more').onclick = function(){
        document.getElementById('more-text').style.display = 'block';
        document.getElementById('more').style.display = 'none';
        document.getElementById('less').style.display = 'block';
}
let lessText = document.getElementById('less').onclick = function(){
        document.getElementById('more-text').style.display = 'none';
        document.getElementById('more').style.display = 'block';
        document.getElementById('less').style.display = 'none';
}


const moreContent = document.getElementById('more-one').onclick = function(){
    document.getElementById('more-text-one').style.display = 'block';
    document.getElementById('more-one').style.display = 'none';
    document.getElementById('less-one').style.display = 'block';
}
const lessContent = document.getElementById('less-one').onclick = function(){
    document.getElementById('more-text-one').style.display = 'none';
    document.getElementById('more-one').style.display = 'block';
    document.getElementById('less-one').style.display = 'none';
}


const more = document.getElementById('more-two').onclick = function(){
    document.getElementById('more-text-two').style.display = 'block';
    document.getElementById('more-two').style.display = 'none';
    document.getElementById('less-two').style.display = 'block';
}
const less = document.getElementById('less-two').onclick = function(){
    document.getElementById('more-text-two').style.display = 'none';
    document.getElementById('more-two').style.display = 'block';
    document.getElementById('less-two').style.display = 'none';
}
