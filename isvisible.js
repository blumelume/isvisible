/*
isvisible.js 
v 0.1.5

Copyright (c) 2022, Maximilian Rudolph
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree. 
*/

$.fn.isvisible = function() {
    let t = this;
    
    let element = {
        el: t,
        init: function () {
            this.height = this.el.outerHeight();
            this.width = this.el.outerWidth();
            this.top = this.el[0].offsetTop;
            this.bottom = this.top + this.height;
            this.left = this.el.offset().left;
            this.right = this.left + this.width;
        }
    };
    element.init();
    let parent = {
        el: element.el.parent(),
        init: function () {
            this.innerHeight = this.el.height();
            this.innerWidth = this.el.width();
            this.scrollHeight = this.el.prop('scrollHeight');
            this.scrollWidth = this.el.prop('scrollWidth');
            this.top = this.el.scrollTop();
            this.bottom = this.top + this.innerHeight;
            this.left = this.el.scrollLeft();
            this.right = this.left + this.innerWidth;
        }
    }
    parent.init();

    if (parent.scrollHeight > parent.innerHeight) { // Vertical Scrolling
        return (parent.top <= element.top && parent.bottom > element.top) || (parent.top > element.top && parent.top < element.bottom);
    } else if (parent.scrollWidth > parent.innerWidth) { // Horizontal Scrolling
        return (parent.left <= element.left && parent.right > element.left) || (parent.left > element.left && parent.left < element.right);
    }
};