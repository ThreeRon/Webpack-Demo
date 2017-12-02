/**
 * Created by luo on 2017/9/4.
 */
import Layer from './components/layer/layer.js';
import Slides from './components/slides/slides.js';
import './css/common.css';


const  App = function () {

    var mainLayer;
    var tpl;

    //Layer
    mainLayer = document.getElementById("news-layer");
    var layer = new Layer();
    tpl;
    // block #1
    tpl = layer.tpl;
    // block #2
    tpl = tpl + layer.ejsTpl({
        name:'Date News',
        arr : ['apple', 'orange', 'peer', 'banana']
    });
    mainLayer.innerHTML = tpl;

    // slides
    mainLayer = document.getElementById("slides");
    var slides = new Slides();
    tpl = slides.tpl();
    mainLayer.innerHTML = tpl;
    var slideCom = slides.slides;
    new slideCom().fade();

}


new App();