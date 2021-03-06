/*!
 * jQuery smartscroll plugin
 * Original author: @responsivewemmobile
 * Version 1.0 2013-01-16
 * Further changes, comments: @responsivewemmobile.com
 */
;
(function(e, c, a, g) {
    var d = "smartscroll",
        f = {
            section: ".section",
            anchor: ".scroll",
            fullscreen: false,
            activelink: "active",
            nav: true,
            controls: true,
            totop: true,
            speed: 1000,
            totopspeed: 1000
        };
    timeline = [];
    offsets = [];
    current = null;

    function b(i, h) {
        this.options = e.extend({}, f, h);
        this._defaults = f;
        this._name = d;
        this.init()
    }
    b.prototype.init = function() {
        var h = this;
        h.sizeSection();
        h.generateNavigationTimeline();
        var i = this.closestSection(e(c).scrollTop());
        h.setControlLinks(i);
        h.navSelect(timeline[i]);
        h.toTopAnchor();
        e(h.options.anchor).each(function() {
            e(this).bind("click", function(j) {
                j.preventDefault();
                h.goToSection(this.href)
            })
        });
        if (!h.options.nav) {
            e(".smartscroll-nav").css({
                display: "none"
            })
        }
        e(c).bind("resize", function() {
            h.sizeSection();
            h.sizeSection();
            h.generateNavigationTimeline();
            var j = h.closestSection(e(c).scrollTop());
            h.setControlLinks(j);
            h.navSelect(timeline[j]);
            h.toTopAnchor()
        });
        e(c).bind("scroll", function() {
            var j = h.closestSection(e(c).scrollTop());
            h.setControlLinks(j);
            h.navSelect(timeline[j]);
            if (e(this).scrollTop() > 300) {
                e("a.smartscroll-totop").stop().animate({
                    opacity: 1
                }, 100)
            } else {
                e("a.smartscroll-totop").stop().animate({
                    opacity: 0
                }, 100)
            }
        })
    };
    b.prototype.toTopAnchor = function() {
        if (this.options.totop) {
            e("a.smartscroll-totop").css({
                opacity: 0
            });
            this.backToTop()
        } else {
            e("a.smartscroll-totop").css({
                display: "none"
            })
        }
    };
    b.prototype.backToTop = function() {
        var h = this;
        e("a.smartscroll-totop").bind("click", function() {
            e("html, body").stop().animate({
                scrollTop: 0
            }, h.options.totopspeed);
            return false
        })
    };
    b.prototype.goToSection = function(k) {
        var i = this;
        var m = k.split("#");
        var h = m[1];
        var l = e("#" + h).offset();
        var j = l.top;
        e("html, body").stop().animate({
            scrollTop: j
        }, i.options.speed)
    };
    b.prototype.closestSection = function(i) {
        y = i;
        var h = [];
        e.each(offsets, function() {
            h.push(Math.abs(this - y))
        });
        min = Math.min.apply(Math, h);
        return e.inArray(min, h)
    };
    b.prototype.setControlLinks = function(h) {
        if (this.options.controls) {
            if (h == 0) {
                e(".smartscroll-controls > a.next").attr("href", timeline[h + 1]);
                e(".smartscroll-controls > a.prev").stop().animate({
                    opacity: 0
                }, 100)
            } else {
                if (h == timeline.length - 1) {
                    e(".smartscroll-controls > a.prev").attr("href", timeline[h - 1]);
                    e(".smartscroll-controls > a.next").stop().animate({
                        opacity: 0
                    }, 100)
                } else {
                    e(".smartscroll-controls > a.next").stop().animate({
                        opacity: 1
                    }, 100);
                    e(".smartscroll-controls > a.prev").stop().animate({
                        opacity: 1
                    }, 100);
                    e(".smartscroll-controls > a.next").attr("href", timeline[h + 1]);
                    e(".smartscroll-controls > a.prev").attr("href", timeline[h - 1])
                }
            }
        } else {
            e(".smartscroll-controls").css({
                display: "none"
            })
        }
    };
    b.prototype.generateNavigationTimeline = function() {
        e(this.options.section).each(function(h) {
            timeline[h] = "#" + e(this).attr("id");
            offsets[h] = Math.round(e(this).position().top)
        })
    };
    b.prototype.sizeSection = function() {
        if (this.options.fullscreen) {
            e(this.options.section).css({
                "min-width": e(c).width(),
                "min-height": e(c).height()
            })
        }
    };
    b.prototype.navSelect = function(h) {
        e(this.options.anchor).parent().removeClass(this.options.activelink);
        e('.smartscroll-nav a[href="' + h + '"]' + this.options.anchor).parent().addClass(this.options.activelink)
    };
    e.fn[d] = function(h) {
        return this.each(function() {
            if (!e.data(this, "plugin_" + d)) {
                e.data(this, "plugin_" + d, new b(this, h))
            }
        })
    }
})(jQuery, window, document);