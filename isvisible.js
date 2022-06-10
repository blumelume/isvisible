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
        height: t.outerHeight(),
        top: t[0].offsetTop,
        bottom: t.offset().top + t.outerHeight()
    }
    let parent = {
        el: element.el.parent(),
        height: element.el.parent().height(),
        top: element.el.parent().scrollTop(),
        bottom: element.el.parent().scrollTop() + element.el.parent().height()
    }
    
    return (parent.top <= element.top && parent.bottom > element.top) || (parent.top > element.top && parent.top < element.bottom);
};