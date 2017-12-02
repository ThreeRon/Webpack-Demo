/**
 * Created by luo on 2017/9/8.
 */

import tpl from './slides.tpl';
import './slides.less';
import $ from 'jquery';


function slides() {

    var SlidesComponent = function() {
        var slideBox = $(".slides-box");
        var slidesItems = $(".slides-box li");
        var slidesMenu = $(".slides-menu");
        var slideHeight = $(slidesItems[0]).height();
        var slideNum = slidesItems.length;
        var timeOutId = 0;
        var index = 0;

        this.init = function () {
            for(var i=0; i<slideNum; i++){
                var $menuItem  = $("<li index='"+i+"'>"+(i+1)+"</li>");
                $menuItem.on('click',function (e) {
                    //清除自动滚动
                    clearTimeout(timeOutId);
                    //添加和清除当前导航效果
                    $(this).addClass("active").siblings("li").removeClass("active");
                    //设置滚动图片显示／隐藏
                    index = $(this).attr('index');
                    $(slidesItems[index]).fadeIn().siblings("li").fadeOut();
                });
                slidesMenu.append($menuItem);
            }
        }
        this.fade = function () {
            clearTimeout(timeOutId);
            var slidesMenuItems = $(".slides-menu li");
            if(slidesMenuItems.length > 0 ){
                $(slidesMenuItems[index]).addClass("active").siblings("li").removeClass("active");
                $(slidesItems[index]).fadeIn().siblings("li").fadeOut();
                if(index < slideNum-1) index++;
                else index = 0;

                timeOutId = setTimeout(function(){
                    this.fade();
                }.bind(this),2000);
            }else {
                this.init();
                this.fade();
            }
        }
    }

    return {
        name : 'slides',
        tpl : tpl,
        slides : SlidesComponent
    }
}


export default slides;
