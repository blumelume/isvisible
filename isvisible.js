/*
isvisible.js
*/

$.fn.isvisible = function() {
    let t = this;
    
    let element = {
        el: t,
        init: function () {
            this.height = this.el.innerHeight();
            this.width = this.el.innerWidth();
            this.top = this.el.offset().top;
            this.bottom = this.top + this.height;
            this.left = this.el.offset().left;
            this.right = this.left + this.width;
        }
    };
    element.init();
    let parent = {
        el: element.el.parent(),
        init: function () {
            this.height = this.el.innerHeight();
            this.width = this.el.innerWidth();
            this.outerHeight = this.el.outerHeight();
            this.outerWidth = this.el.outerWidth();
            this.scrollHeight = this.el.prop('scrollHeight');
            this.scrollWidth = this.el.prop('scrollWidth');
            this.top = 0;
            this.bottom = this.top + this.height;
            this.left = 0;
            this.right = this.left + this.width;
        }
    }
    parent.init();
    
    if (parent.scrollHeight > parent.outerHeight) { // Vertical Scrolling
        return (parent.top <= element.top && parent.bottom > element.top) || (parent.top > element.top && parent.top < element.bottom);
    } else if (parent.scrollWidth > parent.outerWidth) { // Horizontal Scrolling
        return (parent.left <= element.left && parent.right > element.left) || (parent.left > element.left && parent.left < element.right);
    }
};