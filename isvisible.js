/*
isvisible.js 
v 0.1

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
            this.top = this.el[0].offsetTop;
            this.bottom = this.top + this.el.outerHeight();
        }
    };
    element.init();
    let parent = {
        el: element.el.parent(),
        init: function () {
            this.height = this.el.height();
            this.top = this.el.scrollTop();
            this.bottom = this.top + this.el.height();
        }
    }
    parent.init();
    
    return (parent.top <= element.top && parent.bottom > element.top) || (parent.top > element.top && parent.top < element.bottom);
};