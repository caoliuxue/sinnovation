/**
 * Created by caoliuxue on 2017/12/8.
 */
(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a)return a(o, !0);
                if (i)return i(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var f = n[o] = {exports: {}};
            t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, f, f.exports, e, t, n, r)
        }
        return n[o].exports
    }

    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
        var _slicedToArray = function () {
            function sliceIterator(arr, i) {
                var _arr = [], _n = !0, _d = !1, _e = void 0;
                try {
                    for (var _s,
                             _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0);
                } catch (err) {
                    _d = !0, _e = err
                } finally {
                    try {
                        !_n && _i["return"] && _i["return"]()
                    } finally {
                        if (_d)throw _e
                    }
                }
                return _arr
            }

            return function (arr, i) {
                if (Array.isArray(arr))return arr;
                if (Symbol.iterator in Object(arr))return sliceIterator(arr, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var descriptor,
                         i = 0; i < props.length; i++)descriptor = props[i], descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }

            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")
        }

        function style(e) {
            return {
                "application-header-container": "wdappchrome-a",
                "wd-icon-background": "wd-icon-background",
                "wd-icon-fill": "wd-icon-fill",
                "wd-icon-accent": "wd-icon-accent",
                "centering-container": "wdappchrome-b",
                "focus-styling": "wdappchrome-c",
                "focus-styling-alternate-prereq": "wdappchrome-d",
                "focus-styling-alternate": "wdappchrome-e",
                "box-sizing-border-box": "wdappchrome-f",
                "application-header": "wdappchrome-g",
                "l-container": "wdappchrome-h",
                "r-container": "wdappchrome-i",
                "home-button-container": "wdappchrome-j",
                "home-button": "wdappchrome-k",
                "home-icon-container": "wdappchrome-l",
                "wd-icon-workday": "wd-icon-workday",
                "home-button-branded": "wdappchrome-m",
                "branded-logo": "wdappchrome-n",
                "branded-logo-responsive": "wdappchrome-o",
                "vertical-separator": "wdappchrome-p",
                "preview-button-container": "wdappchrome-q",
                "preview-button": "wdappchrome-r",
                "preview-icon-container": "wdappchrome-s",
                "count-badge": "wdappchrome-t",
                "count-badge-annotation": "wdappchrome-u",
                "search-region": "wdappchrome-v",
                "search-region-responsive": "wdappchrome-w",
                "search-input": "wdappchrome-x",
                "search-button": "wdappchrome-y",
                "wd-icon-search": "wd-icon-search",
                "generic-search-button": "wdappchrome-z",
                "search-icon-container": "wdappchrome-aa",
                "focusable-search-button": "wdappchrome-ab",
                "clear-button": "wdappchrome-ac",
                "clear-icon-container": "wdappchrome-ad",
                "wd-icon-x": "wd-icon-x",
                "search-popup": "wdappchrome-ae",
                "search-popup-container": "wdappchrome-af",
                "search-popup-responsive": "wdappchrome-ag",
                "horizontal-separator": "wdappchrome-ah",
                "autocomplete-list": "wdappchrome-ai",
                "autocomplete-list-item": "wdappchrome-aj",
                "autocomplete-item-type": "wdappchrome-ak",
                "search-overlay-popup": "wdappchrome-al",
                "search-overlay-popup-content": "wdappchrome-am",
                "search-overlay-popup-cancel": "wdappchrome-an",
                overlay: "wdappchrome-ao",
                banner: "wdappchrome-ap",
                "banner-close-button": "wdappchrome-aq",
                anchor: "wdappchrome-ar",
                "hammy-container": "wdappchrome-as",
                "hammy-button": "wdappchrome-at",
                "user-photo": "wdappchrome-au",
                "hammy-popup": "wdappchrome-av",
                "responsive-hammy-popup": "wdappchrome-aw",
                "hammy-anchor": "wdappchrome-ax",
                "hammy-item-label-container": "wdappchrome-ay",
                "hammy-item-suffix-container": "wdappchrome-az",
                "hammy-item-prefix-container": "wdappchrome-aaa",
                "hammy-item": "wdappchrome-aab",
                "hammy-user-item": "wdappchrome-aac",
                "hammy-user-photo-container": "wdappchrome-aad",
                "hammy-user-photo": "wdappchrome-aae",
                "hammy-user-texts": "wdappchrome-aaf",
                "hammy-user-name": "wdappchrome-aag",
                "hammy-well": "wdappchrome-aah",
                "hammy-item-prefix-and-text-container": "wdappchrome-aai",
                "hammy-item-icon": "wdappchrome-aaj",
                "hammy-item-text-default": "wdappchrome-aak",
                "hammy-item-text-with-prefix-icon": "wdappchrome-aal",
                "signout-container": "wdappchrome-aam",
                "signout-button": "wdappchrome-aan",
                "hammy-submenu-header": "wdappchrome-aao",
                "hammy-submenu-back-button": "wdappchrome-aap",
                "hammy-submenu-back-button-container": "wdappchrome-aaq",
                "hammy-submenu": "wdappchrome-aar",
                "hammy-submenu-main": "wdappchrome-aas",
                "disabled-item": "wdappchrome-aat",
                "delegate-item": "wdappchrome-aau",
                "wd-icon-check": "wd-icon-check",
                "delegatable-person": "wdappchrome-aav",
                "context-popup": "wdappchrome-aaw",
                "context-popup-container": "wdappchrome-aax",
                "contextmenu-item": "wdappchrome-aay"
            }[e]
        }

        function injectStyles() {
            var e = null !== document.querySelector("style[data-css-id=\"wd-application-chrome\"]");
            if (!e) {
                var _o = document.createElement("style");
                _o.type = "text/css", _o.setAttribute("data-css-id", "wd-application-chrome"), _o.appendChild(document.createTextNode(".wdappchrome-a .wd-icon-background{color:#fff}.wdappchrome-a .wd-icon-accent,.wdappchrome-a .wd-icon-fill{color:#787878}.wdappchrome-b{display:flex;justify-content:center;align-items:center}[dir] .wdappchrome-c{box-shadow:inset 0 0 0 2px #005cb9}.wdappchrome-d{box-sizing:border-box}[dir] .wdappchrome-d{border:2px solid transparent}[dir] .wdappchrome-e{border-color:#005cb9}.wdappchrome-f{box-sizing:border-box}.wdappchrome-g{display:flex;justify-content:center;align-items:center;justify-content:space-between;position:relative;height:64px}[dir] .wdappchrome-g{background-color:#fff}.wdappchrome-g .wdappchrome-h,.wdappchrome-g .wdappchrome-i,.wdappchrome-j{display:flex;align-items:center}.wdappchrome-j{justify-content:center}.wdappchrome-k{outline:none;transition:all .12s ease-in;position:relative;top:0;width:48px;height:48px;color:#86959e;box-sizing:border-box}[dir] .wdappchrome-k{padding:2px;cursor:pointer;background-color:transparent;margin:0 8px;border-radius:3px;border:2px solid transparent}.wdappchrome-k .wdappchrome-l{display:flex;justify-content:center;align-items:center}.wdappchrome-k .wdappchrome-l>.wd-icon-workday{width:36px;height:36px}.wdappchrome-k .wdappchrome-l>.wd-icon-workday .wd-icon-accent{color:#ffa126}.wdappchrome-k .wdappchrome-l>.wd-icon-workday .wd-icon-fill{color:#005cb9}[dir] .wdappchrome-k:focus{border-color:#005cb9}[dir] .wdappchrome-k:active{box-shadow:none}.wdappchrome-m{outline:none;transition:all .12s ease-in;position:relative;top:0;width:48px;height:48px;color:#86959e;box-sizing:border-box;height:auto;width:auto}[dir] .wdappchrome-m{padding:2px;cursor:pointer;background-color:transparent;margin:0 8px;border-radius:3px;border:2px solid transparent;margin:0 16px}.wdappchrome-m .wdappchrome-l{display:flex;justify-content:center;align-items:center}.wdappchrome-m .wdappchrome-l>.wd-icon-workday{width:36px;height:36px}.wdappchrome-m .wdappchrome-l>.wd-icon-workday .wd-icon-accent{color:#ffa126}.wdappchrome-m .wdappchrome-l>.wd-icon-workday .wd-icon-fill{color:#005cb9}[dir] .wdappchrome-m:focus{border-color:#005cb9}[dir] .wdappchrome-m:active{box-shadow:none}.wdappchrome-m .wdappchrome-n{width:97px;height:39px}.wdappchrome-m .wdappchrome-o{width:48px;height:48px}.wdappchrome-p{height:64px;width:1px}[dir] .wdappchrome-p{background-color:#cad4d9}.wdappchrome-q,.wdappchrome-r{position:relative}.wdappchrome-r{outline:none;transition:all .2s ease-in;height:44px;width:44px;box-sizing:border-box;color:#86959e}[dir] .wdappchrome-r{cursor:pointer;background-color:transparent;border:2px solid transparent;border-radius:3px;margin:0 11px}.wdappchrome-r .wdappchrome-s{display:flex;justify-content:center;align-items:center}.wdappchrome-r:empty{display:none}[dir] .wdappchrome-r:focus{border-color:#005cb9}[dir=ltr] .wdappchrome-r:focus .wd-icon-accent,[dir=ltr] .wdappchrome-r:focus .wd-icon-fill,[dir=rtl] .wdappchrome-r:focus .wd-icon-accent,[dir=rtl] .wdappchrome-r:focus .wd-icon-fill{color:#005cb9!important}.wdappchrome-r:hover .wd-icon-accent,.wdappchrome-r:hover .wd-icon-fill{color:#3f4e59}.wdappchrome-t{line-height:2;min-width:14px;min-height:20px;color:#fff;font-size:10px;font-weight:500}[dir] .wdappchrome-t{cursor:pointer;text-align:center;border-radius:100px;background-color:#ffa126;padding:0 3px}.wdappchrome-t:empty{display:none}.wdappchrome-u{line-height:2;min-width:14px;min-height:20px;color:#fff;font-size:10px;font-weight:500;min-width:12px;min-height:18px;line-height:1.8;position:absolute;top:2px}[dir] .wdappchrome-u{cursor:pointer;text-align:center;border-radius:100px;background-color:#ffa126;padding:0 3px}[dir=ltr] .wdappchrome-u{right:13px}[dir=rtl] .wdappchrome-u{left:13px}.wdappchrome-u:empty{display:none}.wdappchrome-v{position:relative;height:48px}[dir] .wdappchrome-v{margin:8px}.wdappchrome-w{position:relative;height:48px;flex:4}[dir] .wdappchrome-w{margin:8px}.wdappchrome-w .wdappchrome-x{width:100%}.wdappchrome-x{color:#333;width:320px;height:48px;box-sizing:border-box;vertical-align:top;text-indent:37px}[dir] .wdappchrome-x{border-radius:3px;background-color:hsla(0,0%,100%,0);padding:0;border:2px solid transparent}.wdappchrome-x::-webkit-search-cancel-button{display:none}[dir] .wdappchrome-x:focus{border-color:#005cb9}[dir=ltr] .wdappchrome-x:focus+.wdappchrome-y .wd-icon-search .wd-icon-fill,[dir=rtl] .wdappchrome-x:focus+.wdappchrome-y .wd-icon-search .wd-icon-fill{color:#005cb9!important}.wdappchrome-z{height:44px;width:44px;position:absolute;top:0;outline:none;color:#86959e}[dir] .wdappchrome-z{background-color:#fff;padding:0;cursor:pointer;border:none}[dir=ltr] .wdappchrome-z{left:0}[dir=rtl] .wdappchrome-z{right:0}.wdappchrome-z .wdappchrome-aa{display:flex;justify-content:center;align-items:center}.wdappchrome-z .wdappchrome-aa .wd-icon-search{width:24px;height:24px}[dir] .wdappchrome-z.wdappchrome-ab:focus{box-shadow:inset 0 0 0 2px #005cb9}[dir=ltr] .wdappchrome-z.wdappchrome-ab:focus .wd-icon-search .wd-icon-fill,[dir=rtl] .wdappchrome-z.wdappchrome-ab:focus .wd-icon-search .wd-icon-fill{color:#005cb9!important}.wdappchrome-z:hover .wd-icon-fill{color:#3f4e59}.wdappchrome-y{height:44px;width:44px;position:absolute;top:0;outline:none;color:#86959e;width:31px}[dir] .wdappchrome-y{background-color:#fff;padding:0;cursor:pointer;border:none}[dir=ltr] .wdappchrome-y{left:0;margin:2px 0 0 2px}[dir=rtl] .wdappchrome-y{right:0;margin:2px 2px 0 0}.wdappchrome-y .wdappchrome-aa{display:flex;justify-content:center;align-items:center}.wdappchrome-y .wdappchrome-aa .wd-icon-search{width:24px;height:24px}[dir] .wdappchrome-y.wdappchrome-ab:focus{box-shadow:inset 0 0 0 2px #005cb9}[dir=ltr] .wdappchrome-y.wdappchrome-ab:focus .wd-icon-search .wd-icon-fill,[dir=rtl] .wdappchrome-y.wdappchrome-ab:focus .wd-icon-search .wd-icon-fill{color:#005cb9!important}.wdappchrome-y:hover .wd-icon-fill{color:#3f4e59}.wdappchrome-ac{display:none;position:absolute;height:100%;top:0;outline:none}[dir] .wdappchrome-ac{padding:0;cursor:pointer;border:none;background-color:transparent}[dir=ltr] .wdappchrome-ac{right:8px}[dir=rtl] .wdappchrome-ac{left:8px}.wdappchrome-ac .wdappchrome-ad{display:flex;justify-content:center;align-items:center}.wdappchrome-ac .wdappchrome-ad .wd-icon-x{width:18px;height:18px}[dir=ltr] .wdappchrome-ac:active,[dir=ltr] .wdappchrome-ac:focus,[dir=rtl] .wdappchrome-ac:active,[dir=rtl] .wdappchrome-ac:focus{color:#005cb9!important}.wdappchrome-ac:hover .wd-icon-fill{color:#3f4e59}.wdappchrome-ae{min-width:576px;max-width:1032px}[dir=ltr] .wdappchrome-ae,[dir=rtl] .wdappchrome-ae{border-top-right-radius:0;border-top-left-radius:0;padding:0!important;border-left:none!important;border-right:none!important}[dir=ltr] .wdappchrome-af,[dir=rtl] .wdappchrome-af{padding:0!important}.wdappchrome-ag.wdappchrome-ae{min-width:0;max-width:none}[dir=ltr] .wdappchrome-ag.wdappchrome-ae{left:0!important;width:100%!important}[dir=rtl] .wdappchrome-ag.wdappchrome-ae{right:0!important;width:100%!important}.wdappchrome-ag.wdappchrome-ae .wdappchrome-ah{width:100%}.wdappchrome-ai{position:relative;font-size:13px;color:#333}[dir] .wdappchrome-ai{padding:16px 0}[dir=ltr] .wdappchrome-ai{text-align:left}[dir=rtl] .wdappchrome-ai{text-align:right}[dir] .wdappchrome-aj{padding:8px 24px;cursor:pointer}[dir] .wdappchrome-aj:active,[dir] .wdappchrome-aj:focus{box-shadow:inset 0 0 0 2px #005cb9}[dir] .wdappchrome-aj:hover{background-color:#e6ebee}.wdappchrome-ak{color:#9ea9b0}.wdappchrome-al{position:absolute;top:0;height:100%;width:100%;z-index:2}[dir] .wdappchrome-al{background-color:#fff}[dir=ltr] .wdappchrome-al{right:0}[dir=rtl] .wdappchrome-al{left:0}.wdappchrome-am{display:flex;justify-content:center;align-items:center;justify-content:space-between;height:100%;width:100%}[dir] .wdappchrome-an{margin:0 8px}[dir] .wdappchrome-an:focus{box-shadow:inset 0 0 0 2px #005cb9;border:none}.wdappchrome-ao{top:0;width:100%;z-index:1}[dir] .wdappchrome-ao{background-color:hsla(0,0%,100%,.85)}[dir=ltr] .wdappchrome-ao{right:0}[dir=rtl] .wdappchrome-ao{left:0}.wdappchrome-ap{position:relative;height:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500}[dir=ltr] .wdappchrome-ap{padding:6px 32px 6px 8px}[dir=rtl] .wdappchrome-ap{padding:6px 8px 6px 32px}.wdappchrome-aq{position:absolute;width:16px;height:16px;outline:none}[dir] .wdappchrome-aq{border:none;border-radius:99px;cursor:pointer;background-color:transparent}[dir=ltr] .wdappchrome-aq{right:8px}[dir=rtl] .wdappchrome-aq{left:8px}[dir] .wdappchrome-aq:active,[dir] .wdappchrome-aq:focus{box-shadow:inset 0 0 0 2px #005cb9}.wdappchrome-aq>.wd-icon-x{width:12px;height:12px}[dir=ltr] .wdappchrome-aq>.wd-icon-x{margin:-2px 0 0 -4px}[dir=rtl] .wdappchrome-aq>.wd-icon-x{margin:-2px -4px 0 0}.wdappchrome-aq>.wd-icon-x .wd-icon-fill{color:inherit}.wdappchrome-ar{position:absolute;touch-action:none;display:block;width:0;height:0;pointer-events:none;z-index:-1}[dir] .wdappchrome-ar{border:10px solid #cad4d9}[dir=ltr] .wdappchrome-ar,[dir=rtl] .wdappchrome-ar{border-top-color:transparent!important;border-right-color:transparent!important;border-left-color:transparent!important}.wdappchrome-ar:before{display:block;position:absolute;width:0;height:0;pointer-events:none;content:\" \";font-size:0;top:-9px}[dir] .wdappchrome-ar:before{border:10px solid #fff}[dir=ltr] .wdappchrome-ar:before{left:-10px}[dir=ltr] .wdappchrome-ar:before,[dir=rtl] .wdappchrome-ar:before{border-top-color:transparent!important;border-right-color:transparent!important;border-left-color:transparent!important}[dir=rtl] .wdappchrome-ar:before{right:-10px}.wdappchrome-as{display:inline-block}.wdappchrome-at{outline:none;transition:all .2s ease-in;position:relative;height:44px;width:44px;box-sizing:border-box;color:#86959e}[dir] .wdappchrome-at{cursor:pointer;background-color:transparent;border:2px solid transparent;border-radius:3px;margin:0 11px;border-radius:100px;padding:0}.wdappchrome-at .wdappchrome-s{display:flex;justify-content:center;align-items:center}.wdappchrome-at:empty{display:none}[dir] .wdappchrome-at:focus{border-color:#005cb9}[dir=ltr] .wdappchrome-at:focus .wd-icon-accent,[dir=ltr] .wdappchrome-at:focus .wd-icon-fill,[dir=rtl] .wdappchrome-at:focus .wd-icon-accent,[dir=rtl] .wdappchrome-at:focus .wd-icon-fill{color:#005cb9!important}.wdappchrome-at:hover .wd-icon-accent,.wdappchrome-at:hover .wd-icon-fill{color:#3f4e59}[dir] .wdappchrome-at:hover{box-shadow:inset 0 0 0 2px #e6ebee}.wdappchrome-au{width:32px;height:32px}[dir=ltr] .wdappchrome-au,[dir=rtl] .wdappchrome-au{border-radius:100px!important}.wdappchrome-av{position:absolute;width:320px;z-index:9999;font-size:13px;color:#333}[dir] .wdappchrome-av{border-radius:3px;box-shadow:0 8px 16px 0 rgba(81,96,115,.18);background-color:#fff;border:1px solid #cad4d9}[dir=ltr] .wdappchrome-av{right:0}[dir=rtl] .wdappchrome-av{left:0}.wdappchrome-aw{position:absolute;width:320px;z-index:9999;font-size:13px;color:#333;width:100%;top:64px}[dir] .wdappchrome-aw{border-radius:3px;box-shadow:0 8px 16px 0 rgba(81,96,115,.18);background-color:#fff;border:1px solid #cad4d9}[dir=ltr] .wdappchrome-aw{right:0}[dir=rtl] .wdappchrome-aw{left:0}.wdappchrome-ax{position:absolute;touch-action:none;display:block;width:0;height:0;pointer-events:none;z-index:-1;top:-20px}[dir] .wdappchrome-ax{border:10px solid #cad4d9}[dir=ltr] .wdappchrome-ax{right:21px}[dir=ltr] .wdappchrome-ax,[dir=rtl] .wdappchrome-ax{border-top-color:transparent!important;border-right-color:transparent!important;border-left-color:transparent!important}[dir=rtl] .wdappchrome-ax{left:21px}.wdappchrome-ax:before{display:block;position:absolute;width:0;height:0;pointer-events:none;content:\" \";font-size:0;top:-9px}[dir] .wdappchrome-ax:before{border:10px solid #fff}[dir=ltr] .wdappchrome-ax:before{left:-10px}[dir=ltr] .wdappchrome-ax:before,[dir=rtl] .wdappchrome-ax:before{border-top-color:transparent!important;border-right-color:transparent!important;border-left-color:transparent!important}[dir=rtl] .wdappchrome-ax:before{right:-10px}.wdappchrome-ay{width:100%}[dir=ltr] .wdappchrome-az{float:right}[dir=ltr] .wdappchrome-aaa,[dir=rtl] .wdappchrome-az{float:left}[dir=rtl] .wdappchrome-aaa{float:right}.wdappchrome-aab{min-height:24px;display:flex;align-items:center}[dir] .wdappchrome-aab{cursor:pointer;padding:8px 24px}[dir] .wdappchrome-aab:hover{background-color:#e6ebee}[dir] .wdappchrome-aab:active,[dir] .wdappchrome-aab:focus{box-shadow:inset 0 0 0 2px #005cb9;background-color:#fff}.wdappchrome-aac{min-height:24px;align-items:center;height:auto;display:flex;justify-content:flex-start}[dir] .wdappchrome-aac{cursor:pointer;padding:8px 24px;padding:24px 16px;border-bottom:1px solid #cad4d9}[dir] .wdappchrome-aac:active,[dir] .wdappchrome-aac:focus{box-shadow:inset 0 0 0 2px #005cb9;background-color:#fff}[dir] .wdappchrome-aac:hover{background-color:#e6ebee}.wdappchrome-aac .wdappchrome-aad{display:flex;justify-content:center;align-items:center}.wdappchrome-aac .wdappchrome-aae{min-width:40px;min-height:40px}[dir=ltr] .wdappchrome-aac .wdappchrome-aae,[dir=rtl] .wdappchrome-aac .wdappchrome-aae{border:none!important}.wdappchrome-aac .wdappchrome-aaf{text-indent:16px;overflow:hidden}.wdappchrome-aac .wdappchrome-aag{font-size:16px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wdappchrome-aah{overflow-y:auto}.wdappchrome-aai,.wdappchrome-aaj{display:flex;align-items:center}.wdappchrome-aak{text-indent:48px}.wdappchrome-aal{text-indent:24px}.wdappchrome-aam{display:flex;justify-content:center}[dir=ltr] .wdappchrome-aam,[dir=rtl] .wdappchrome-aam{padding:24px 0!important}[dir] .wdappchrome-aam:focus .wdappchrome-aan{background-color:#f38b00;box-shadow:inset 0 0 0 2px #005cb9}.wdappchrome-aan{height:40px;width:176px;color:#fff;font-size:14px;font-weight:500;outline:none}[dir] .wdappchrome-aan{background-color:#ffa126;text-align:center;border-radius:100px;border:none;cursor:pointer}[dir] .wdappchrome-aan:active,[dir] .wdappchrome-aan:hover{background-color:#f38b00}.wdappchrome-aao{display:flex;justify-content:center;align-items:center;position:relative;height:29px;justify-content:space-between;font-size:16px;font-weight:500}.wdappchrome-aap{display:flex;justify-content:center;align-items:center;outline:none;color:#86959e}[dir] .wdappchrome-aap{cursor:pointer;border:none;background-color:transparent}[dir=ltr] .wdappchrome-aap{padding-left:24px}[dir=rtl] .wdappchrome-aap{padding-right:24px}.wdappchrome-aap>.wd-icon-arrow-left,.wdappchrome-aaq{height:24px;width:24px}.wdappchrome-aaq{display:inline-block;position:relative}[dir=ltr] .wdappchrome-aaq{padding-right:24px}[dir=rtl] .wdappchrome-aaq{padding-left:24px}.wdappchrome-aar{min-height:370px}[dir] .wdappchrome-aar{padding:24px 0}.wdappchrome-aar .wdappchrome-aas{overflow-y:scroll}[dir] .wdappchrome-aar .wdappchrome-aas{padding:6px 0}.wdappchrome-aar .wdappchrome-aak{text-indent:0}.wdappchrome-aat{color:#9ea9b0;font-weight:400}.wdappchrome-aau{min-height:24px;display:flex;align-items:center;height:56px}[dir] .wdappchrome-aau{cursor:pointer;padding:8px 24px;padding:0 18px}[dir] .wdappchrome-aau:hover{background-color:#e6ebee}[dir] .wdappchrome-aau:active,[dir] .wdappchrome-aau:focus{box-shadow:inset 0 0 0 2px #005cb9;background-color:#fff}.wdappchrome-aau .wd-icon-check .wd-icon-fill{color:#005cb9}.wdappchrome-aav{width:40px;height:40px}[dir] .wdappchrome-aav{border-radius:100px}.wdappchrome-a input[type=search]::-ms-clear{width:0;height:0}[dir=ltr] .wdappchrome-a input[type=search]::-ms-clear,[dir=rtl] .wdappchrome-a input[type=search]::-ms-clear{display:none!important}.wdappchrome-a input[type=search]::-ms-reveal{width:0;height:0}[dir=ltr] .wdappchrome-a input[type=search]::-ms-reveal,[dir=rtl] .wdappchrome-a input[type=search]::-ms-reveal{display:none!important}.wdappchrome-a input[type=search]{-webkit-appearance:none}[dir=ltr] .wdappchrome-aaw,[dir=ltr] .wdappchrome-aax,[dir=rtl] .wdappchrome-aaw,[dir=rtl] .wdappchrome-aax{padding:0!important}[dir] .wdappchrome-aay{padding:8px 10px 7px;cursor:pointer}[dir] .wdappchrome-aay:hover{background-color:#e6ebee}[dir=ltr] :export{wd-icon-arrow-left:wd-icon-arrow-left}[dir=rtl] :export{wd-icon-arrow-right:wd-icon-arrow-left}")), document.head.appendChild(_o)
            }
        }

        var Key;
        (function (e) {
            e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.Space = 32] = "Space", e[e.LeftArrow = 37] = "LeftArrow", e[e.UpArrow = 38] = "UpArrow", e[e.RightArrow = 39] = "RightArrow", e[e.DownArrow = 40] = "DownArrow", e[e.Delete = 46] = "Delete"
        })(Key || (Key = {}));
        var Menu = function () {
            function Menu() {
                _classCallCheck(this, Menu), this.rootElement = document.createElement("ul"), this.items = [], this.wells = [], this.addToWell = !1, this.indexedItems = new Map, this.hideableItems = []
            }

            return _createClass(Menu, [{
                key: "render", value: function render(e, t) {
                    return new Uint32Array([e, t])
                }
            }, {
                key: "focusFirstItem", value: function focusFirstItem() {
                    this.items[0] && (this.items[0].focus(), this.setAriaAttributeOnFocus(0))
                }
            }, {
                key: "add", value: function add(e, t, o) {
                    if (e.tabIndex = 0, this.addToWell) {
                        if (this.openWell().lastElementChild instanceof HTMLLIElement) {
                            var n = this.openWell().lastElementChild;
                            this.items.splice(this.items.indexOf(n) + 1, 0, e)
                        } else this.items.push(e);
                        this.openWell().appendChild(e)
                    } else this.rootElement.appendChild(e), this.items.push(e);
                    o && this.indexedItems.set(o, e), this.addKeyboardNavigationHandlers(e), t && workday.interaction.button(e, t), this.setNvdaAriaAttributes()
                }
            }, {
                key: "hide", value: function hide(e) {
                    0 <= this.items.indexOf(e) && (this.setItemVisibility(e, !1), this.hideableItems.push(e), this.setNvdaAriaAttributes())
                }
            }, {
                key: "remove", value: function remove(e) {
                    var t = this.items.indexOf(e);
                    if (-1 < t) {
                        this.items.splice(t, 1);
                        var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
                        try {
                            for (var _step,
                                     _iterator = this.indexedItems[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                                var _ref = _step.value, _ref2 = _slicedToArray(_ref, 2), o = _ref2[0], n = _ref2[1];
                                n === e && this.indexedItems.delete(o)
                            }
                        } catch (err) {
                            _didIteratorError = !0, _iteratorError = err
                        } finally {
                            try {
                                !_iteratorNormalCompletion && _iterator.return && _iterator.return()
                            } finally {
                                if (_didIteratorError)throw _iteratorError
                            }
                        }
                        var r = this.hideableItems.indexOf(e);
                        return -1 < r && this.hideableItems.splice(r), this.rootElement.removeChild(e), 0 < this.items.length && (t >= this.items.length && t--, this.items[t].focus(), this.setAriaAttributeOnFocus(t)), this.setNvdaAriaAttributes(), !0
                    }
                    return !1
                }
            }, {
                key: "toggleHideableVisibility", value: function toggleHideableVisibility(e) {
                    for (var t = 0; t < this.hideableItems.length; t++)this.setItemVisibility(this.hideableItems[t], e);
                    this.setNvdaAriaAttributes()
                }
            }, {
                key: "get", value: function get(e) {
                    return this.indexedItems.get(e)
                }
            }, {
                key: "openWell", value: function openWell() {
                    if (this.addToWell && 0 < this.wells.length)return this.wells[this.wells.length - 1];
                    this.addToWell = !0;
                    var e = document.createElement("div");
                    return this.wells.push(e), this.rootElement.appendChild(e), e
                }
            }, {
                key: "closeWell", value: function closeWell() {
                    this.addToWell = !1
                }
            }, {
                key: "reopenLastWell", value: function reopenLastWell() {
                    return this.addToWell || 0 == this.wells.length ? null : (this.addToWell = !0, this.wells[this.wells.length - 1])
                }
            }, {
                key: "clear", value: function clear() {
                    this.rootElement.innerHTML = "", this.addToWell = !1, this.items = [], this.wells = [], this.indexedItems = new Map
                }
            }, {
                key: "addKeyboardNavigationHandlers", value: function addKeyboardNavigationHandlers(e) {
                    var _this = this;
                    e.addEventListener("keydown", function (t) {
                        if (t.keyCode === Key.DownArrow) {
                            if (_this.items[_this.items.length - 1] === e) _this.items[0].focus(), _this.setAriaAttributeOnFocus(0); else for (var _o2 = _this.items.indexOf(e) + 1; _o2 < _this.items.length; _o2++)if ("none" !== _this.items[_o2].style.display) {
                                _this.items[_o2].focus(), _this.setAriaAttributeOnFocus(_o2);
                                break
                            }
                            t.preventDefault()
                        } else if (t.keyCode === Key.UpArrow) {
                            if (_this.items[0] === e) _this.items[_this.items.length - 1].focus(), _this.setAriaAttributeOnFocus(_this.items.length - 1); else for (var _o4 = _this.items.indexOf(e) - 1; 0 <= _o4; _o4--)if ("none" !== _this.items[_o4].style.display) {
                                _this.items[_o4].focus(), _this.setAriaAttributeOnFocus(_o4);
                                break
                            }
                            t.preventDefault()
                        }
                    })
                }
            }, {
                key: "setNvdaAriaAttributes", value: function setNvdaAriaAttributes() {
                    for (var n, e = 0, t = this.items.length - this.getNumberOfHiddenItems(),
                             o = 0; o < this.items.length; o++)n = this.items[o], "none" === n.style.display ? (n.removeAttribute("aria-posinset"), n.removeAttribute("aria-setsize"), n.removeAttribute("tabindex")) : (e += 1, n.setAttribute("aria-posinset", e + ""), n.setAttribute("aria-setsize", t + ""), n.setAttribute("tabindex", "-2"))
                }
            }, {
                key: "getNumberOfHiddenItems", value: function getNumberOfHiddenItems() {
                    for (var o, e = 0,
                             t = 0; t < this.hideableItems.length; t++)o = this.hideableItems[t], "none" === o.style.display && (e += 1);
                    return e
                }
            }, {
                key: "setAriaAttributeOnFocus", value: function setAriaAttributeOnFocus(e) {
                    for (var t = 0; t < this.items.length; t++) {
                        var o = this.items[t], n = t == e;
                        o.setAttribute("data-automation-selected", n + ""), o.setAttribute("aria-selected", n + "")
                    }
                }
            }, {
                key: "setItemVisibility", value: function setItemVisibility(e, t) {
                    e.style.display = t ? "" : "none"
                }
            }]), Menu
        }();
        var Escape = function () {
            function Escape() {
                _classCallCheck(this, Escape)
            }

            return _createClass(Escape, null, [{
                key: "safe", value: function safe(e) {
                    return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }
            }]), Escape
        }();
        var TextDecorator = function () {
            function TextDecorator() {
                _classCallCheck(this, TextDecorator)
            }

            return _createClass(TextDecorator, null, [{
                key: "decorateBold", value: function decorateBold(e, t) {
                    var o = TextDecorator.BOLD_OPEN_TAG;
                    if (e = Escape.safe(e), "" === t.trim()) o += e; else {
                        var n = TextDecorator.tokenizeAlphanumericOnly(t);
                        n = TextDecorator.sortByLength(n);
                        for (var l, r = TextDecorator.createTokenMatchingRegexp(n), p = TextDecorator.splitBy(e, r),
                                 d = 0; d < p.length; d++)l = p[d], o += l.toLocaleLowerCase().match(r) ? TextDecorator.UNBOLD_OPEN_TAG + l + TextDecorator.STYLE_CLOSE_TAG : l
                    }
                    return o += TextDecorator.STYLE_CLOSE_TAG, o
                }
            }, {
                key: "tokenizeAlphanumericOnly", value: function tokenizeAlphanumericOnly(e) {
                    return e = TextDecorator.alphanumericOnly(e), e.split(/(\s+)/).filter(function (t) {
                        return "" !== t.trim()
                    })
                }
            }, {
                key: "alphanumericOnly", value: function alphanumericOnly(e) {
                    return e.trim().replace(/[^a-zA-Z0-9~\s]/, "")
                }
            }, {
                key: "splitBy", value: function splitBy(e, t) {
                    var o = e.split(t);
                    return o.filter(function (n) {
                        return "" !== n
                    })
                }
            }, {
                key: "sortByLength", value: function sortByLength(e) {
                    return e.sort(function (t, o) {
                        return t.length >= o.length ? -1 : 1
                    })
                }
            }, {
                key: "createTokenMatchingRegexp", value: function createTokenMatchingRegexp(e) {
                    return new RegExp("(" + e.join("|") + ")", "gi")
                }
            }]), TextDecorator
        }();
        TextDecorator.BOLD_OPEN_TAG = "<span style=\"font-weight:500\">", TextDecorator.UNBOLD_OPEN_TAG = "<span style=\"font-weight:400\" data-automation-id=\"searchInputAutoCompleteResultToken\">", TextDecorator.STYLE_CLOSE_TAG = "</span>";
        var SearchInputOverlay = function () {
            function SearchInputOverlay() {
                _classCallCheck(this, SearchInputOverlay), this.rootElement = document.createElement("div"), this.rootElement.className = style("search-overlay-popup"), this.contentContainer = document.createElement("div"), this.contentContainer.className = style("search-overlay-popup-content"), this.rootElement.appendChild(this.contentContainer);
                var e = workday.widget.render("commandButton");
                e && (this.cancelButton = e, this.cancelButton.label = workday.translate("WDRES.BUTTON.Cancel"), this.cancelButton.type = "Tertiary", this.cancelButton.rootElement.className += " " + style("search-overlay-popup-cancel"), this.contentContainer.appendChild(this.cancelButton.rootElement), this.cancelButton.rootElement.setAttribute("data-automation-id", "searchInputOverlayClose")), this.overlay = document.createElement("div"), this.overlay.className = style("overlay"), this.rootElement.appendChild(this.overlay)
            }

            return _createClass(SearchInputOverlay, [{
                key: "render", value: function render(e, t) {
                    return this.overlay.style.height = t + "px", new Uint32Array([e, t])
                }
            }, {
                key: "addCancelCommand", value: function addCancelCommand(e) {
                    this.cancelButton.addCommand(e)
                }
            }, {
                key: "addOverlayClickHandler", value: function addOverlayClickHandler(e) {
                    this.overlay.addEventListener("click", e)
                }
            }, {
                key: "addContent", value: function addContent(e) {
                    this.contentContainer.insertBefore(e, this.cancelButton.rootElement)
                }
            }, {
                key: "show", value: function show(e) {
                    this.rootElement.style.display = e ? "" : "none"
                }
            }, {
                key: "isVisible", value: function isVisible() {
                    return "" === this.rootElement.style.display
                }
            }]), SearchInputOverlay
        }();
        require("../woolthree/com/workday/ui/woolthree/application/application_pb"), require("../woolthree/com/workday/ui/woolthree/task/task_pb");
        var SearchInput = function () {
            function SearchInput() {
                _classCallCheck(this, SearchInput), this.rootElement = document.createElement("div"), this.container = document.createElement("div"), this.searchInputLabel = "", this.contextMenuInitializer = function () {
                }, injectStyles(), this.rootElement.setAttribute("role", "search"), this.rootElement.id = "wd-searchInput", this.rootElement.setAttribute("data-automation-mode", "popup"), this.container.className = style("search-region"), this.rootElement.appendChild(this.container), this.initSearchInput(), this.initOverlay(), this.initSearchPopup(), this.rootElement.appendChild(this.overlay.rootElement), this.hideAutocompletePopup(), this.resetAutocomplete(), this.initSearchKeyboardNavigation(), this.initClosePopupOnClickOutside()
            }

            return _createClass(SearchInput, [{
                key: "render", value: function render(e, t) {
                    var o = this.responsiveMode;
                    return this.responsiveMode = e <= ApplicationHeaderView.SEARCH_RESPONSIVE_BREAK_POINT, this.stayOutOfSight = e <= ApplicationHeaderView.HEADER_RESPONSIVE_BREAK_POINT, this.stayOutOfSightIfNecessary(), this.responsiveMode ? (this.rootElement.setAttribute("data-automation-mode", "overlay"), this.overlay.render(e, t), !o && this.goResponsive()) : !this.responsiveMode && o && (this.rootElement.setAttribute("data-automation-mode", "popup"), this.goNonResponsive()), new Uint32Array([e, t])
                }
            }, {
                key: "setVisible", value: function setVisible(e) {
                    this.rootElement.style.display = e ? "" : "none"
                }
            }, {
                key: "isResponsive", value: function isResponsive() {
                    return this.responsiveMode
                }
            }, {
                key: "setSearchLabel", value: function setSearchLabel(e) {
                    this.searchInputLabel = e, this.searchInput && this.searchButton && (this.searchInput.placeholder = this.searchInputLabel, this.searchButton.title = e, this.searchButton.setAttribute("aria-label", e))
                }
            }, {
                key: "focus", value: function focus() {
                    this.focusElement.focus()
                }
            }, {
                key: "getSearchInput", value: function getSearchInput() {
                    return this.searchInput
                }
            }, {
                key: "getSearchInputValue", value: function getSearchInputValue() {
                    return this.searchInput.value
                }
            }, {
                key: "clearSearchInput", value: function clearSearchInput() {
                    this.searchInput.value = ""
                }
            }, {
                key: "setSearchCommand", value: function setSearchCommand(e) {
                    var _this2 = this;
                    this.searchCommand = function () {
                        e(_this2.searchInput.value), _this2.hideOverlay()
                    }, this.searchInput.addEventListener("keydown", function (t) {
                        Key.Enter === t.keyCode && _this2.searchCommand()
                    })
                }
            }, {
                key: "renderAutocompleteResults", value: function renderAutocompleteResults(e) {
                    var _this8 = this;
                    if (0 == e.length)return void this.hideAutocompletePopup();
                    this.resetAutocomplete();
                    for (var _loop = function (t) {
                        var o = e[t], n = _this8.constructAutocompleteItem(o.getLabel(), o.getType());
                        _this8.autocompleteList.add(n, function () {
                            _this8.hideAutocompletePopup(), workday.task.go(o.getTask().getUri()), _this8.hideOverlay()
                        }), _this8.contextMenuInitializer(n, {text: o.getLabel(), url: o.getTask().getUri()})
                    }, t = 0; t < e.length; t++)_loop(t);
                    this.showAutocompletePopup()
                }
            }, {
                key: "hideAutocompletePopup", value: function hideAutocompletePopup() {
                    this.autocompletePopupController.hide(), document.removeEventListener("click", this.closeOnClickOutsideCallback)
                }
            }, {
                key: "showAutocompletePopup", value: function showAutocompletePopup() {
                    this.autocompletePopupController.show(this.responsiveMode ? this.container : this.rootElement), document.addEventListener("click", this.closeOnClickOutsideCallback)
                }
            }, {
                key: "isAutocompletePopupVisible", value: function isAutocompletePopupVisible() {
                    return this.autocompletePopupController.visible
                }
            }, {
                key: "createSearchButton", value: function createSearchButton() {
                    var e = document.createElement("button");
                    e.className = style("generic-search-button"), e.classList.add(style("focusable-search-button")), e.setAttribute("data-automation-id", "searchInputSearchIcon"), e.tabIndex = -1;
                    var t = document.createElement("div");
                    return t.className = style("search-icon-container"), workday.icon.insert("wd-icon-search", t), e.appendChild(t), this.initSearchButtonInteraction(e), e
                }
            }, {
                key: "setClearCommand", value: function setClearCommand(e) {
                    this.clearButton.addEventListener("mousedown", function () {
                        e()
                    })
                }
            }, {
                key: "setClearButtonVisible", value: function setClearButtonVisible(e) {
                    this.clearButton.style.display = e ? "initial" : "none", this.searchInput.style.paddingRight = e ? "28px" : "0"
                }
            }, {
                key: "setContextMenuInitializer", value: function setContextMenuInitializer(e) {
                    this.contextMenuInitializer = e
                }
            }, {
                key: "goResponsive", value: function goResponsive() {
                    this.setSearchButtonFocusable(!0), this.autocompletePopupController.rootElement.classList.add(style("search-popup-responsive")), this.container.className = style("search-region-responsive"), this.isAutocompletePopupVisible() ? this.setOverlayVisible(!0) : this.setInputVisible(!1)
                }
            }, {
                key: "goNonResponsive", value: function goNonResponsive() {
                    this.overlay.isVisible() && this.setOverlayVisible(!1), this.setInputVisible(!0), this.setVisible(!0), this.setClearButtonVisible(!1), this.setSearchButtonFocusable(!1), this.autocompletePopupController.rootElement.classList.remove(style("search-popup-responsive")), this.autocompletePopupController.rootElement.style.width = "auto", this.container.className = style("search-region")
                }
            }, {
                key: "stayOutOfSightIfNecessary", value: function stayOutOfSightIfNecessary() {
                    this.overlay.isVisible() || this.setVisible(!this.stayOutOfSight)
                }
            }, {
                key: "initSearchInput", value: function initSearchInput() {
                    var _this3 = this;
                    this.searchInput = document.createElement("input"), this.searchInput.className = style("search-input"), this.searchInput.type = "search", this.searchInput.setAttribute("data-automation-id", "globalSearchInput"), this.container.appendChild(this.searchInput), this.focusElement = this.searchInput, this.searchInput.addEventListener("keydown", function (e) {
                        Key.Escape === e.keyCode && _this3.isAutocompletePopupVisible() && (_this3.hideAutocompletePopup(), e.preventDefault(), e.stopPropagation())
                    }), this.initSearchButton(), this.initClearButton()
                }
            }, {
                key: "initSearchButton", value: function initSearchButton() {
                    this.searchButton = this.createSearchButton(), this.searchButton.classList.add(style("search-button")), this.container.appendChild(this.searchButton)
                }
            }, {
                key: "initClearButton", value: function initClearButton() {
                    this.clearButton = document.createElement("button"), this.clearButton.className = style("clear-button");
                    var e = document.createElement("div");
                    e.className = style("clear-icon-container"), workday.icon.insert("wd-icon-x", e), this.clearButton.tabIndex = -1, this.clearButton.appendChild(e), this.container.appendChild(this.clearButton)
                }
            }, {
                key: "initOverlay", value: function initOverlay() {
                    var _this4 = this;
                    this.overlay = new SearchInputOverlay, this.overlay.show(!1), this.overlay.addCancelCommand(function () {
                        _this4.hideOverlay()
                    }), this.overlay.addOverlayClickHandler(function () {
                        _this4.hideOverlay()
                    })
                }
            }, {
                key: "initSearchPopup", value: function initSearchPopup() {
                    this.autocompletePopupController = workday.popup.create([workday.popup.anchorable(!1, ["BOTTOM"]), workday.popup.autohidable()]), this.autocompletePopupController.rootElement.classList.add(style("search-popup")), this.autocompletePopupController.rootElement.setAttribute("data-automation-id", "searchInputAutocompletePopup"), this.autocompletePopupController.containerElement.classList.add(style("search-popup-container"))
                }
            }, {
                key: "initClosePopupOnClickOutside", value: function initClosePopupOnClickOutside() {
                    var _this5 = this;
                    this.closeOnClickOutsideCallback = function (e) {
                        e.target === _this5.searchInput || e.target === _this5.autocompletePopupController.rootElement || e.target === _this5.autocompleteList.rootElement || _this5.hideAutocompletePopup()
                    }
                }
            }, {
                key: "initSearchButtonInteraction", value: function initSearchButtonInteraction(e) {
                    var _this6 = this;
                    workday.interaction.button(e, function () {
                        _this6.responsiveMode && !_this6.overlay.isVisible() ? (_this6.setOverlayVisible(!0), _this6.focus()) : 0 < _this6.searchInput.value.length ? _this6.searchCommand() : _this6.focus()
                    })
                }
            }, {
                key: "setOverlayVisible", value: function setOverlayVisible(e) {
                    return e ? void(this.setVisible(!0), this.setInputVisible(!0), this.overlay.addContent(this.container), this.setSearchButtonFocusable(!1), this.overlay.show(!0), document.body.style.overflowY = "hidden") : void this.hideOverlay()
                }
            }, {
                key: "setSearchButtonFocusable", value: function setSearchButtonFocusable(e) {
                    e ? (this.searchButton.tabIndex = 0, this.searchButton.className = style("search-button") + " " + style("focusable-search-button")) : (this.searchButton.tabIndex = -1, this.searchButton.className = style("search-button"))
                }
            }, {
                key: "hideOverlay", value: function hideOverlay() {
                    this.overlay.isVisible() && (this.rootElement.appendChild(this.container), this.overlay.show(!1), this.setSearchButtonFocusable(!0), this.stayOutOfSight ? this.setVisible(!1) : this.responsiveMode && this.setInputVisible(!1), document.body.style.overflowY = "scroll")
                }
            }, {
                key: "setInputVisible", value: function setInputVisible(e) {
                    this.searchInput.style.display = e ? "" : "none"
                }
            }, {
                key: "initSearchKeyboardNavigation", value: function initSearchKeyboardNavigation() {
                    var _this7 = this;
                    this.searchInput.addEventListener("keydown", function (e) {
                        _this7.isAutocompletePopupVisible() && e.keyCode === Key.DownArrow && (_this7.autocompleteList.focusFirstItem(), e.preventDefault())
                    }), this.autocompletePopupController.containerElement.addEventListener("keydown", function (e) {
                        _this7.isAutocompletePopupVisible() && [Key.Escape, Key.Enter].some(function (t) {
                            return t === e.keyCode
                        }) && (_this7.hideAutocompletePopup(), Key.Escape === e.keyCode && _this7.focus(), e.stopPropagation())
                    })
                }
            }, {
                key: "constructAutocompleteItem", value: function constructAutocompleteItem(e, t) {
                    var o = document.createElement("li");
                    o.className = style("autocomplete-list-item"), o.setAttribute("data-automation-id", "searchInputAutoCompleteResult");
                    var n = document.createElement("span");
                    n.setAttribute("data-automation-id", "searchInputAutoCompleteResultFullText");
                    var r = document.createElement("span");
                    return r.className = style("autocomplete-item-type"), r.setAttribute("data-automation-id", "searchInputAutoCompleteResultType"), n.innerHTML = TextDecorator.decorateBold(e, this.searchInput.value), r.textContent = " - " + t, o.appendChild(n), o.appendChild(r), o
                }
            }, {
                key: "resetAutocomplete", value: function resetAutocomplete() {
                    if (this.autocompleteList && this.autocompleteList.rootElement.parentNode) {
                        var e = this.autocompleteList.rootElement.parentNode;
                        e.removeChild(this.autocompleteList.rootElement)
                    }
                    this.autocompleteList = new Menu, this.autocompleteList.rootElement.className = style("autocomplete-list"), this.autocompletePopupController.containerElement.appendChild(this.autocompleteList.rootElement)
                }
            }]), SearchInput
        }();
        var HammySubmenu = function () {
            function HammySubmenu(e, t) {
                _classCallCheck(this, HammySubmenu), this.rootElement = document.createElement("div"), this.menu = new Menu, this.submenuLabel = document.createElement("h1"), injectStyles();
                var o = this.createHeader(e, t);
                this.rootElement.appendChild(o), this.initMenu(t), this.rootElement.className = style("hammy-submenu"), this.rootElement.style.display = "none"
            }

            return _createClass(HammySubmenu, [{
                key: "render", value: function render(e, t) {
                    var o = 0;
                    return o += HammySubmenu.SUBMENU_HEADING_HEIGHT + 2 * (2 * HammySubmenu.SUBMENU_LIST_VERTICAL_PADDING) + 2 * HammySubmenu.SUBMENU_VERTICAL_PADDING, this.menu.rootElement.style.maxHeight = t - o + "px", new Uint32Array([e, t])
                }
            }, {
                key: "remove", value: function remove(e) {
                    return this.menu.remove(e)
                }
            }, {
                key: "createHeader", value: function createHeader(e, t) {
                    var o = document.createElement("div");
                    o.className = style("hammy-submenu-header"), this.submenuLabel.textContent = e, o.appendChild(this.createBackButton(t)), o.appendChild(this.submenuLabel);
                    var n = document.createElement("span");
                    return n.className = style("hammy-submenu-back-button-container"), o.appendChild(n), o
                }
            }, {
                key: "createBackButton", value: function createBackButton(e) {
                    var t = document.createElement("button");
                    return "rtl" === workday.browser.dir ? workday.icon.insert("wd-icon-arrow-right", t) : workday.icon.insert("wd-icon-arrow-left", t), t.className = style("hammy-submenu-back-button"), workday.interaction.button(t, e), t
                }
            }, {
                key: "initMenu", value: function initMenu(e) {
                    this.rootElement.appendChild(this.menu.rootElement), this.menu.rootElement.className = style("hammy-submenu-main"), this.menu.rootElement.addEventListener("keyup", function (t) {
                        "rtl" === workday.browser.dir ? Key.RightArrow === t.keyCode && e() : Key.LeftArrow === t.keyCode && e()
                    })
                }
            }]), HammySubmenu
        }();
        HammySubmenu.SUBMENU_LIST_VERTICAL_PADDING = 6, HammySubmenu.SUBMENU_HEADING_HEIGHT = 29, HammySubmenu.SUBMENU_VERTICAL_PADDING = 24;
        var XMLHttpRequestImpl = function () {
            function XMLHttpRequestImpl() {
                _classCallCheck(this, XMLHttpRequestImpl), this.xhr = new XMLHttpRequest
            }

            return _createClass(XMLHttpRequestImpl, [{
                key: "open", value: function open(e, t, o) {
                    this.xhr.open(e, t, o)
                }
            }, {
                key: "setOnLoad", value: function setOnLoad(e) {
                    this.xhr.onload = e
                }
            }, {
                key: "setTimeout", value: function setTimeout(e) {
                    this.xhr.timeout = e
                }
            }, {
                key: "overrideMimeType", value: function overrideMimeType(e) {
                    this.xhr.overrideMimeType(e)
                }
            }, {
                key: "send", value: function send() {
                    this.xhr.send()
                }
            }, {
                key: "getStatus", value: function getStatus() {
                    return this.xhr.status
                }
            }, {
                key: "getResponseText", value: function getResponseText() {
                    return this.xhr.responseText
                }
            }]), XMLHttpRequestImpl
        }();
        var XMLHttpRequestProvider = function () {
            function XMLHttpRequestProvider() {
                _classCallCheck(this, XMLHttpRequestProvider)
            }

            return _createClass(XMLHttpRequestProvider, [{
                key: "get", value: function get() {
                    return new XMLHttpRequestImpl
                }
            }]), XMLHttpRequestProvider
        }();
        var Uri = function () {
            function Uri() {
                _classCallCheck(this, Uri)
            }

            return _createClass(Uri, null, [{
                key: "appendHtmld", value: function appendHtmld(e) {
                    return e.endsWith(Uri.HTMLD) || (e = e + Uri.HTMLD), e
                }
            }, {
                key: "convertDataUrltoHtmlWrapperUrl", value: function convertDataUrltoHtmlWrapperUrl(e) {
                    var t = e.indexOf("/"), o = e.indexOf("/", t + 1);
                    return 0 < o && (e = e.substring(0, o) + this.HTML_WRAPPER_MODIFIER + e.substring(o)), e
                }
            }, {
                key: "addHttpToAbsolutePath", value: function addHttpToAbsolutePath(e) {
                    return "/" === e[0] || e.startsWith(Uri.HTTP) || (e = Uri.HTTP + "://" + e), e
                }
            }, {
                key: "addParam", value: function addParam(e, t, o) {
                    return -1 < e.indexOf(Uri.PARAM_STARTER) ? e + Uri.AMPERSAND + encodeURIComponent(t) + "=" + encodeURIComponent(o) : e + Uri.PARAM_STARTER + encodeURIComponent(t) + "=" + encodeURIComponent(o)
                }
            }, {
                key: "addClientRequestId", value: function addClientRequestId(e) {
                    return Uri.addParam(e, Uri.CLIENT_REQUEST_ID_PARAM, workday.id.generateAlphanumeric())
                }
            }]), Uri
        }();
        Uri.AUTOCOMPLETE_PARAM = "autocomplete", Uri.QUERY_PARAM = "q", Uri.CLIENT_REQUEST_ID_PARAM = "clientRequestId", Uri.HTMLD = ".htmld", Uri.HTTP = "http", Uri.HTML_WRAPPER_MODIFIER = "/d", Uri.AMPERSAND = "&", Uri.PARAM_STARTER = "?";
        var HammyController = function () {
            function HammyController() {
                _classCallCheck(this, HammyController), this.xhrProvider = new XMLHttpRequestProvider, this.menuListeners = []
            }

            return _createClass(HammyController, [{
                key: "setHammyMenu", value: function setHammyMenu(e) {
                    this.hammyMenu = e, this.hammyMenu.setMenuListener(this)
                }
            }, {
                key: "addUserProfile", value: function addUserProfile() {
                    var _this9 = this, e = this.getUserProfileTask();
                    e ? this.hammyMenu.addUserItem(function () {
                        workday.task.go(e), _this9.show(!1)
                    }) : this.hammyMenu.applyDisabledStyling(this.hammyMenu.addUserItem())
                }
            }, {
                key: "addHammyMenuTask", value: function addHammyMenuTask(e, t, o) {
                    var _this10 = this;
                    if (!this.isIgnoredTask(t.getUri())) {
                        var _n2 = {label: e, taskUri: t.getUri()};
                        if (o)return _n2.onSelect = function () {
                            window.open(Uri.addHttpToAbsolutePath(t.getUri()))
                        }, void this.hammyMenu.addExternalLink(_n2);
                        _n2.onSelect = function () {
                            workday.task.go(t.getUri()), _this10.show(!1)
                        };
                        var _r = this.hammyMenu.addTask(_n2);
                        (this.isInboxTask(t.getUri()) || this.isNotificationsTask(t.getUri())) && this.hammyMenu.setHideUnlessResponsive(_r)
                    }
                }
            }, {
                key: "show", value: function show(e) {
                    this.hammyMenu.show(e)
                }
            }, {
                key: "addDelegatedSubtask", value: function addDelegatedSubtask(e, t) {
                    var _this11 = this, o = workday.translate("WDRES.DELEGATIONS.WindowTitle"), n = void 0;
                    e.actingAs && (n = document.createElement("span"), workday.icon.insert("wd-icon-check", n));
                    var r = this.hammyMenu.addDelegateSubmenuTask({
                        groupLabel: o,
                        label: e.name,
                        onSelect: function onSelect() {
                            e.actingAs || (_this11.switchUsers(e.uri), _this11.show(!1))
                        },
                        prefixIcon: e.getImage(),
                        suffixIcon: n,
                        type: t
                    });
                    r && e.self && !e.actingAs && this.hammyMenu.applyDisabledStyling(r)
                }
            }, {
                key: "addSignoutButton", value: function addSignoutButton(e, t) {
                    this.hammyMenu.addSignoutButton(e, t)
                }
            }, {
                key: "addHammyMenuSubtask", value: function addHammyMenuSubtask(e) {
                    var _this12 = this, t = this.isIgnoredTask(e.taskUri);
                    (!t || e.onSelect) && (t || e.onSelect || (e.onSelect = function () {
                        workday.task.go(e.taskUri), _this12.show(!1)
                    }), this.hammyMenu.addSubmenuTask(e))
                }
            }, {
                key: "clearHammySubMenu", value: function clearHammySubMenu(e) {
                    var t = this.hammyMenu.getSubmenu(e);
                    t && t.menu.clear()
                }
            }, {
                key: "registerMenuListener", value: function registerMenuListener(e) {
                    var t = this;
                    return this.menuListeners.push(e), {
                        cancel: function cancel() {
                            t.menuListeners.splice(t.menuListeners.indexOf(e), 1)
                        }
                    }
                }
            }, {
                key: "getHammyMenuAnchor", value: function getHammyMenuAnchor() {
                    return this.hammyMenu.getHammyButton()
                }
            }, {
                key: "onOpenOrClose", value: function onOpenOrClose(e) {
                    this.menuListeners.forEach(function (t) {
                        t.onOpenOrClose(e)
                    })
                }
            }, {
                key: "getUserProfileTask", value: function getUserProfileTask() {
                    return workday.places.userProfile
                }
            }, {
                key: "remove", value: function remove(e, t) {
                    return this.hammyMenu.remove(e, t)
                }
            }, {
                key: "isIgnoredTask", value: function isIgnoredTask(e) {
                    return !e || e.endsWith(HammyController.TASKS.inbox) || e.endsWith(HammyController.TASKS.inbox_preview_skeleton) || e.endsWith(HammyController.TASKS.unified_inbox_actions_items_count) || e.endsWith(HammyController.TASKS.notification_preview_skeleton) || e.endsWith(HammyController.TASKS.dashboard)
                }
            }, {
                key: "isInboxTask", value: function isInboxTask(e) {
                    return e.endsWith(HammyController.TASKS.inbox_skeleton)
                }
            }, {
                key: "isNotificationsTask", value: function isNotificationsTask(e) {
                    return e.endsWith(HammyController.TASKS.notifications)
                }
            }, {
                key: "switchUsers", value: function switchUsers(e) {
                    var t = this.xhrProvider.get();
                    t.open("GET", e, !0), t.setTimeout(5e3), t.setOnLoad(function () {
                        200 <= t.getStatus() && 300 > t.getStatus() && t.getResponseText().includes("Success") && workday.task.go(workday.places.home)
                    }), t.send()
                }
            }]), HammyController
        }();
        HammyController.TASKS = {
            my_xpresso: "2997$3284",
            home: "2997$6670",
            my_team: "2997$3301",
            dashboard: "2997$1661",
            workbench: "2997$3301",
            my_workday: "2997$2273",
            my_workday2: "2997$3538",
            site_map: "2997$103",
            favorites: "2997$83",
            audit: "2997$179",
            development: "2997$100",
            w_drive: "2997$1605",
            worksheets: "2998$27243",
            workdrive: "2998$32990",
            delegation_dashboard: "2997$4439",
            notifications: "2998$23221",
            inbox: "2997$209",
            unified_inbox_actions_items_count: "2998$18348",
            inbox_preview_skeleton: "2998$18349",
            inbox_skeleton: "2998$17139",
            notification_preview_skeleton: "2998$34445"
        };
        var TaskGroupType$1 = proto.com.workday.ui.woolthree.application.TaskGroupType;
        var HammyMenuItem = function () {
            function HammyMenuItem(e) {
                _classCallCheck(this, HammyMenuItem), this.rootElement = document.createElement("li"), this.label = "", this.label = e.label, this.rootElement.className = style("hammy-item"), this.labelContainer = document.createElement("span"), this.labelContainer.className = style("hammy-item-label-container"), this.labelDiv = document.createElement("div"), this.labelDiv.textContent = this.label, this.labelDiv.className = style("hammy-item-text-default"), this.labelContainer.appendChild(this.labelDiv), this.rootElement.appendChild(this.labelContainer), this.ensureAutomationId(this.rootElement, e.taskUri, e.type)
            }

            return _createClass(HammyMenuItem, [{
                key: "getRootElement", value: function getRootElement() {
                    return this.rootElement
                }
            }, {
                key: "setSubLabel", value: function setSubLabel(e) {
                    this.subLabelSpan = document.createElement("div"), this.subLabelSpan.textContent = e, this.subLabelSpan.className = style("hammy-item-text-default"), this.labelContainer.appendChild(this.subLabelSpan)
                }
            }, {
                key: "setPrefixIcon", value: function setPrefixIcon(e) {
                    e && (this.labelDiv.className = style("hammy-item-text-with-prefix-icon"), this.subLabelSpan && (this.subLabelSpan.className = style("hammy-item-text-with-prefix-icon")), this.prefixContainer = document.createElement("span"), this.prefixContainer.className = style("hammy-item-prefix-container"), this.setIcon(this.prefixContainer, e), this.rootElement.insertBefore(this.prefixContainer, this.rootElement.firstChild))
                }
            }, {
                key: "setSuffixIcon", value: function setSuffixIcon(e) {
                    this.suffixContainer = document.createElement("span"), this.suffixContainer.className = style("hammy-item-suffix-container"), this.setIcon(this.suffixContainer, e), this.rootElement.appendChild(this.suffixContainer)
                }
            }, {
                key: "setIcon", value: function setIcon(e, t) {
                    t && e.appendChild(t)
                }
            }, {
                key: "render", value: function render(e, t) {
                    return new Uint32Array([e, t])
                }
            }, {
                key: "ensureAutomationId", value: function ensureAutomationId(e, t, o) {
                    var n = "";
                    return TaskGroupType$1.ACCOUNT === o ? n = "hammy_account_tasks_item" : TaskGroupType$1.DELEGATE === o ? n = "hammy_switch_account_item" : TaskGroupType$1.RECOVERY === o && (n = "hammy_recovery_item"), "" == n ? void(!t || (t.endsWith(HammyController.TASKS.home) ? n = "wd_menu_Home" : t.endsWith(HammyController.TASKS.inbox_skeleton) ? n = "hammy_inbox_link" : t.endsWith(HammyController.TASKS.notifications) ? n = "hammy_notifications_link" : t.endsWith(HammyController.TASKS.my_xpresso) ? n = "wd_menu_MyExpresso" : t.endsWith(HammyController.TASKS.workbench) ? n = "wd_menu_Workbench" : t.endsWith(HammyController.TASKS.site_map) ? n = "wd_menu_SiteMap" : t.endsWith(HammyController.TASKS.favorites) ? n = "wd_menu_Favorites" : t.endsWith(HammyController.TASKS.audit) ? n = "wd_menu_Audit" : t.endsWith(HammyController.TASKS.development) ? n = "wd_menu_Development" : t.endsWith(HammyController.TASKS.worksheets) ? n = "wd_menu_Worksheets" : t.endsWith(HammyController.TASKS.workdrive) ? n = "wd_menu_Workdrive" : t.endsWith(HammyController.TASKS.w_drive) ? n = "wd_menu_WDrive" : t.includes("/help/") ? n = "wd_menu_Help" : t.includes("workday.com") && (n = "wd_menu_Support"), "" != n && e.setAttribute("data-automation-id", n))) : void e.setAttribute("data-automation-id", n)
                }
            }], [{
                key: "create", value: function create(e) {
                    var t = new HammyMenuItem(e);
                    return e.subLabel && t.setSubLabel(e.subLabel), t
                }
            }]), HammyMenuItem
        }();
        var TaskGroupType = proto.com.workday.ui.woolthree.application.TaskGroupType;
        var HammyMenu = function () {
            function HammyMenu() {
                _classCallCheck(this, HammyMenu), this.rootElement = document.createElement("div"), this.mainMenu = new Menu, this.anchor = document.createElement("span"), this.hammyButton = null, this.currentMenuWell = null, this.groupItems = [], this.inboxBadge = document.createElement("span"), this.notificationsBadge = document.createElement("span"), this.displayingResponsive = !1, this.currentHeight = 0, this.currentWidth = 0, injectStyles(), this.rootElement.className = style("hammy-popup"), this.rootElement.appendChild(this.anchor), this.rootElement.appendChild(this.mainMenu.rootElement), this.rootElement.setAttribute("data-automation-id", "hammyMenu"), this.anchor.className = style("hammy-anchor"), this.subMenus = new Map, this.initCloseHandlers(), this.initInboxAndNotificationsBadges()
            }

            return _createClass(HammyMenu, [{
                key: "render", value: function render(e, t) {
                    this.displayingResponsive = e <= ApplicationHeaderView.HEADER_RESPONSIVE_BREAK_POINT, this.rootElement.style.maxHeight = t + "px";
                    var o = 0;
                    return this.currentMenuWell && (this.userProfileItem && (o += 2 * HammyMenu.USER_ITEM_PADDING_VERTICAL + HammyMenu.USER_ITEM_PHOTO_SIZE), this.signoutContainer && (o += 2 * HammyMenu.SIGNOUT_ITEM_PADDING_VERTICAL + HammyMenu.SIGNOUT_ITEM_BUTTON_HEIGHT), this.currentMenuWell.className = style("hammy-well"), this.currentMenuWell.style.maxHeight = t - o + "px"), this.showHideIfResponsiveItems(this.displayingResponsive), this.addResponsiveStyles(), this.renderSubmenus(e, t), this.currentHeight = t, this.currentWidth = e, new Uint32Array([e, t])
                }
            }, {
                key: "setHammyButton", value: function setHammyButton(e) {
                    this.hammyButton = e
                }
            }, {
                key: "getHammyButton", value: function getHammyButton() {
                    return this.hammyButton
                }
            }, {
                key: "addUserItem", value: function addUserItem(e) {
                    if (!this.userProfileItem) {
                        var _t2 = workday.user.name, _o5 = this.createListItem();
                        _o5.className = style("hammy-user-item");
                        var n = workday.user.createPhoto(46, 46);
                        n.className = style("hammy-user-photo");
                        var r = document.createElement("span");
                        r.className = style("hammy-user-photo-container"), r.appendChild(n);
                        var p = document.createElement("span");
                        p.className = style("hammy-user-texts");
                        var d = document.createElement("div");
                        if (d.textContent = _t2, d.className = style("hammy-user-name"), p.appendChild(d), e) {
                            var _l = document.createElement("div");
                            _l.textContent = workday.translate("WDRES.APPLICATION.HEADER.ViewProfile"), _l.setAttribute("data-automation-id", "hammy_profile_link"), p.appendChild(_l)
                        }
                        _o5.appendChild(r), _o5.appendChild(p), this.mainMenu.add(_o5, e), this.userProfileItem = _o5, this.userProfileItem.setAttribute("data-automation-id", "hammy_current_user_item")
                    }
                    return this.userProfileItem
                }
            }, {
                key: "addExternalLink", value: function addExternalLink(e) {
                    e.suffixIcon = this.createIcon("wd-icon-ext-link"), this.addTask(e)
                }
            }, {
                key: "addTask", value: function addTask(e, t) {
                    var o = e.onSelect, n = e.prefixIcon || this.chooseAppropriatePrefixIconForTask(e.taskUri),
                        r = e.suffixIcon || this.chooseAppropriateSuffixIconForTask(e.taskUri), p = e.indexLabel || "",
                        d = HammyMenuItem.create(e);
                    return e.deleteEnabled ? (d.setPrefixIcon(this.createDeleteIcon(d.getRootElement(), e.groupLabel, e.onDelete)), this.setRemoveKeyHandler(d.getRootElement(), e.groupLabel, e.onDelete), d.getRootElement().setAttribute("aria-describedby", workday.translate("WDRES.MONIKER.TOOLTIP.HitDeleteButtonToClearValue", [d.label]))) : d.setPrefixIcon(n), d.setSuffixIcon(r), t ? t.add(d.getRootElement(), o, p) : (!this.mainMenu.reopenLastWell() && (this.currentMenuWell = this.mainMenu.openWell()), this.mainMenu.add(d.getRootElement(), o, p)), d.getRootElement()
                }
            }, {
                key: "createDeleteIcon", value: function createDeleteIcon(e, t, o) {
                    var _this13 = this, n = this.createIcon("wd-icon-x");
                    return n.addEventListener("click", function (r) {
                        return _this13.remove(e, t), o && o(), r.stopPropagation(), !1
                    }), n
                }
            }, {
                key: "setRemoveKeyHandler", value: function setRemoveKeyHandler(e, t, o) {
                    var _this14 = this;
                    e.addEventListener("keyup", function (n) {
                        (Key.Delete === n.keyCode || Key.Backspace === n.keyCode) && (_this14.remove(e, t), o && o())
                    })
                }
            }, {
                key: "setHideUnlessResponsive", value: function setHideUnlessResponsive(e) {
                    this.mainMenu.hide(e)
                }
            }, {
                key: "addSubmenuTask", value: function addSubmenuTask(e) {
                    var t = e.groupLabel || "", o = void 0 !== e.type && 0 <= e.type ? e.type : TaskGroupType.NONE,
                        n = this.getSubmenu(t, o);
                    return n ? this.addTask(e, n.menu) : null
                }
            }, {
                key: "getSubmenu", value: function getSubmenu(e, t) {
                    return "undefined" == typeof t || this.subMenus.get(e) || this.createSubmenu(e, t), this.subMenus.get(e)
                }
            }, {
                key: "addDelegateSubmenuTask", value: function addDelegateSubmenuTask(e) {
                    var t = this.addSubmenuTask(e);
                    return t && (t.className = style("delegate-item")), t
                }
            }, {
                key: "applyDisabledStyling", value: function applyDisabledStyling(e) {
                    e.className += " " + style("disabled-item")
                }
            }, {
                key: "addSignoutButton", value: function addSignoutButton(e, t) {
                    this.signoutContainer || (this.signoutContainer = document.createElement("li"), this.signoutContainer.className = style("signout-container"), this.signoutContainer.setAttribute("data-automation-id", "Sign_Out"), this.signoutButton = document.createElement("button"), this.signoutButton.className = style("signout-button"), this.signoutButton.textContent = e, this.signoutButton.tabIndex = -1, this.signoutContainer.appendChild(this.signoutButton), this.mainMenu.closeWell(), this.mainMenu.add(this.signoutContainer), this.addSignoutContainerInteractionHandlers(t))
                }
            }, {
                key: "show", value: function show(e, t) {
                    e ? (this.ensureMainMenuVisible(), this.rootElement.style.display = "", document.addEventListener("click", this.closeOnInteractOutside), t && this.mainMenu.focusFirstItem(), this.displayingResponsive && (document.body.style.overflowY = "hidden")) : (this.rootElement.style.display = "none", document.removeEventListener("click", this.closeOnInteractOutside), document.body.style.overflowY = "scroll"), this.menuListener && this.menuListener.onOpenOrClose(e)
                }
            }, {
                key: "toggleDisplay", value: function toggleDisplay(e) {
                    this.isDisplayed() ? this.show(!1, e) : this.show(!0, e)
                }
            }, {
                key: "isDisplayed", value: function isDisplayed() {
                    return "" === this.rootElement.style.display
                }
            }, {
                key: "getInboxBadge", value: function getInboxBadge() {
                    return this.inboxBadge
                }
            }, {
                key: "getNotificationsBadge", value: function getNotificationsBadge() {
                    return this.notificationsBadge
                }
            }, {
                key: "setMenuListener", value: function setMenuListener(e) {
                    this.menuListener = e
                }
            }, {
                key: "remove", value: function remove(e, t) {
                    if (t) {
                        var _o6 = this.subMenus.get(t);
                        return !!_o6 && _o6.remove(e)
                    }
                    return this.mainMenu.remove(e)
                }
            }, {
                key: "addResponsiveStyles", value: function addResponsiveStyles() {
                    this.rootElement.className = this.displayingResponsive ? style("responsive-hammy-popup") : style("hammy-popup")
                }
            }, {
                key: "renderSubmenus", value: function renderSubmenus(e, t) {
                    this.subMenus.forEach(function (o) {
                        o.render(e, t)
                    })
                }
            }, {
                key: "showHideIfResponsiveItems", value: function showHideIfResponsiveItems(e) {
                    this.mainMenu.toggleHideableVisibility(e)
                }
            }, {
                key: "initCloseHandlers", value: function initCloseHandlers() {
                    var _this15 = this;
                    this.rootElement.addEventListener("keyup", function (e) {
                        (e.keyCode === Key.Escape || e.keyCode === Key.Tab) && (_this15.show(!1), _this15.hammyButton && _this15.hammyButton.focus(), e.preventDefault(), e.stopPropagation())
                    }), this.initializeCloseOnInteractOutside(), this.rootElement.addEventListener("blur", this.closeOnInteractOutside, !0)
                }
            }, {
                key: "initializeCloseOnInteractOutside", value: function initializeCloseOnInteractOutside() {
                    var _this16 = this;
                    this.closeOnInteractOutside = function (e) {
                        var t = e.target;
                        if (e instanceof FocusEvent && (t = e.relatedTarget), !!t) {
                            var _o7 = !(e instanceof FocusEvent);
                            _o7 && _this16.isHammyButton(t) || _this16.isSubElement(t) || _this16.show(!1)
                        }
                    }
                }
            }, {
                key: "isHammyButton", value: function isHammyButton(e) {
                    return !!this.hammyButton && (e === this.hammyButton || this.hammyButton.contains(e))
                }
            }, {
                key: "isSubElement", value: function isSubElement(e) {
                    if (e === this.rootElement || this.rootElement.contains(e))return !0;
                    var t = !1;
                    return this.subMenus.forEach(function (o) {
                        o.rootElement.contains(e) && (t = !0)
                    }), t
                }
            }, {
                key: "addSignoutContainerInteractionHandlers",
                value: function addSignoutContainerInteractionHandlers(e) {
                    this.signoutContainer && (this.signoutContainer.addEventListener("keydown", function (t) {
                        [Key.Space, Key.Enter].some(function (o) {
                            return o === t.keyCode
                        }) && (t.preventDefault(), t.stopPropagation(), e())
                    }), this.signoutButton.addEventListener("click", function () {
                        e()
                    }))
                }
            }, {
                key: "ensureMainMenuVisible", value: function ensureMainMenuVisible() {
                    var _this17 = this;
                    this.subMenus.forEach(function (e) {
                        e && (e.rootElement.style.display = "none", e.rootElement.parentElement === _this17.rootElement && _this17.rootElement.removeChild(e.rootElement))
                    }), this.mainMenu.rootElement.style.display = ""
                }
            }, {
                key: "createSubmenu", value: function createSubmenu(e, t) {
                    var _this18 = this,
                        o = "rtl" === workday.browser.dir ? this.createIcon("wd-icon-chevron-left") : this.createIcon("wd-icon-chevron-right"),
                        n = this.chooseAppropriatePrefixIconForTask("", t), r = this.addTask({
                            label: e, onSelect: function onSelect() {
                                _this18.displaySubmenu(e)
                            }, prefixIcon: n, suffixIcon: o, indexLabel: e, type: t
                        });
                    return r.setAttribute("aria-haspopup", "true"), r.addEventListener("keyup", function (p) {
                        "rtl" === workday.browser.dir ? Key.LeftArrow === p.keyCode && _this18.displaySubmenu(e, !0) : Key.RightArrow === p.keyCode && _this18.displaySubmenu(e, !0)
                    }), this.createSubmenuFor(e, t), this.groupItems.push(r), r
                }
            }, {
                key: "displaySubmenu", value: function displaySubmenu(e, t) {
                    var o = this.subMenus.get(e);
                    o && (this.mainMenu.rootElement.style.display = "none", this.rootElement.appendChild(o.rootElement), o.rootElement.style.display = "", t && o.menu.focusFirstItem())
                }
            }, {
                key: "hideSubmenu", value: function hideSubmenu(e) {
                    var t = this.subMenus.get(e);
                    if (t) {
                        t.rootElement.style.display = "none", this.rootElement.removeChild(t.rootElement), this.mainMenu.rootElement.style.display = "";
                        var _o8 = this.mainMenu.get(e);
                        _o8 && _o8.focus()
                    }
                }
            }, {
                key: "createSubmenuFor", value: function createSubmenuFor(e, t) {
                    var _this19 = this, o = new HammySubmenu(e, function () {
                        _this19.hideSubmenu(e)
                    });
                    return o.render(this.currentWidth, this.currentHeight), this.subMenus.set(e, o), TaskGroupType.ACCOUNT === t ? (o.rootElement.setAttribute("data-automation-id", "hammy_account_tasks_popup"), o.menu.rootElement.setAttribute("data-automation-id", "hammy_account_submenu")) : TaskGroupType.DELEGATE === t ? (o.rootElement.setAttribute("data-automation-id", "hammy_switch_user_popup"), o.menu.rootElement.setAttribute("data-automation-id", "hammy_switch_account_submenu")) : TaskGroupType.RECOVERY === t && (o.rootElement.setAttribute("data-automation-id", "hammy_recovery_popup"), o.menu.rootElement.setAttribute("data-automation-id", "hammy_recovery_submenu")), o
                }
            }, {
                key: "createListItem", value: function createListItem() {
                    var e = document.createElement("li");
                    return e.className = style("hammy-item"), e
                }
            }, {
                key: "createIcon", value: function createIcon(e) {
                    var t = document.createElement("span");
                    return workday.icon.insert(e, t), t.className = style("hammy-item-icon"), t
                }
            }, {
                key: "chooseAppropriatePrefixIconForTask", value: function chooseAppropriatePrefixIconForTask(e, t) {
                    var o = void 0;
                    return (TaskGroupType.ACCOUNT === t ? o = this.createIcon("wd-icon-user") : TaskGroupType.DELEGATE === t && (o = this.createIcon("wd-icon-switch")), o || !e) ? o : (e.endsWith(HammyController.TASKS.home) ? o = this.createIcon("wd-icon-home") : e.endsWith(HammyController.TASKS.inbox_skeleton) ? o = this.createIcon("wd-icon-inbox") : e.endsWith(HammyController.TASKS.notifications) ? o = this.createIcon("wd-icon-notifications") : e.endsWith(HammyController.TASKS.my_xpresso) ? o = this.createIcon("wd-icon-tools") : e.endsWith(HammyController.TASKS.my_team) ? o = this.createIcon("wd-icon-contact-card-matrix-manager") : e.endsWith(HammyController.TASKS.workbench) ? o = this.createIcon("wd-icon-contact-card-desk") : e.endsWith(HammyController.TASKS.my_workday) || e.endsWith(HammyController.TASKS.my_workday2) || e.endsWith(HammyController.TASKS.site_map) ? o = this.createIcon("wd-icon-endpoints") : e.endsWith(HammyController.TASKS.favorites) ? o = this.createIcon("wd-icon-star") : e.endsWith(HammyController.TASKS.audit) ? o = this.createIcon("wd-icon-paste") : e.endsWith(HammyController.TASKS.development) ? o = this.createIcon("wd-icon-webpage") : e.endsWith(HammyController.TASKS.worksheets) ? o = this.createIcon("wd-icon-worksheets") : e.endsWith(HammyController.TASKS.workdrive) ? o = this.createIcon("wd-icon-folder-close") : e.endsWith(HammyController.TASKS.w_drive) ? o = this.createIcon("wd-icon-avatar") : e.endsWith(HammyController.TASKS.delegation_dashboard) ? o = this.createIcon("wd-icon-proxy-user") : e.includes("/help/") ? o = this.createIcon("wd-icon-question") : e.includes("workday.com") && (o = this.createIcon("wd-icon-document")), o)
                }
            }, {
                key: "chooseAppropriateSuffixIconForTask", value: function chooseAppropriateSuffixIconForTask(e) {
                    var t = void 0;
                    return e ? (e.endsWith(HammyController.TASKS.inbox_skeleton) ? t = this.inboxBadge : e.endsWith(HammyController.TASKS.notifications) && (t = this.notificationsBadge), t) : t
                }
            }, {
                key: "initInboxAndNotificationsBadges", value: function initInboxAndNotificationsBadges() {
                    this.inboxBadge.className = style("count-badge"), this.notificationsBadge.className = style("count-badge")
                }
            }]), HammyMenu
        }();
        HammyMenu.USER_ITEM_PADDING_VERTICAL = 24, HammyMenu.USER_ITEM_PHOTO_SIZE = 46, HammyMenu.SIGNOUT_ITEM_PADDING_VERTICAL = 24, HammyMenu.SIGNOUT_ITEM_BUTTON_HEIGHT = 40, require("../woolthree/com/workday/ui/woolthree/application/application_pb");
        var ApplicationHeaderView = function () {
            function ApplicationHeaderView() {
                _classCallCheck(this, ApplicationHeaderView), this.rootElement = document.createElement("div"), this.applicationBannerElement = document.createElement("div"), this.applicationHeaderElement = document.createElement("div"), this.leftContainer = document.createElement("div"), this.rightContainer = document.createElement("div"), this.homeButtonContainer = document.createElement("div"), this.homeButton = null, this.brandedHomeButtonResponsive = null, this.homeButtonLabel = "", this.separator = document.createElement("div"), this.search = new SearchInput, this.alternateSearchButtonContainer = document.createElement("div"), this.previewInboxButtonContainer = document.createElement("div"), this.previewInboxButton = document.createElement("button"), this.inboxCountBadge = document.createElement("span"), this.previewNotificationButtonContainer = document.createElement("div"), this.previewNotificationButton = document.createElement("button"), this.notificationsCountBadge = document.createElement("span"), this.hammyButtonContainer = document.createElement("div"), this.hammyMenu = new HammyMenu, this.displayingResponsive = !1, injectStyles(), this.rootElement.appendChild(this.applicationBannerElement), this.rootElement.setAttribute("role", "banner"), this.initApplicationHeader(), this.alternateSearchButton = this.search.createSearchButton(), this.alternateSearchButton.setAttribute("data-automation-id", "searchInputSearchIconAlt"), this.alternateSearchButton.tabIndex = 0
            }

            return _createClass(ApplicationHeaderView, [{
                key: "render", value: function render(e, t) {
                    var r = this.applicationBannerElement.childElementCount, p = t - 64 - r * 28;
                    this.hammyMenu.render(e, p), this.search.render(e, p);
                    var d = this.displayingResponsive;
                    return this.displayingResponsive = e <= ApplicationHeaderView.HEADER_RESPONSIVE_BREAK_POINT, this.showPreviewButtons(!this.displayingResponsive), this.displayingResponsive && !d ? (this.brandedHomeButtonResponsive && this.showAsHomeButton(this.brandedHomeButtonResponsive), this.alternateSearchButtonContainer.appendChild(this.alternateSearchButton), this.separator.style.display = "none") : !this.displayingResponsive && d && (this.homeButton && this.showAsHomeButton(this.homeButton), this.alternateSearchButtonContainer.removeChild(this.alternateSearchButton), this.separator.style.display = ""), new Uint32Array([e, p])
                }
            }, {
                key: "setHomeButtonVisibility", value: function setHomeButtonVisibility(e) {
                    this.homeButton && (e ? this.homeButtonContainer.style.visibility = "visible" : this.homeButtonContainer.style.display = "hidden")
                }
            }, {
                key: "setSearchInputVisibility", value: function setSearchInputVisibility(e) {
                    this.search.setVisible(e)
                }
            }, {
                key: "setHomeButtonLabel", value: function setHomeButtonLabel(e) {
                    this.homeButtonLabel = e, "" === this.homeButtonLabel && this.homeButton ? (this.homeButton.removeAttribute("aria-label"), this.homeButton.title = "") : "" !== this.homeButtonLabel && this.homeButton && (this.homeButton.setAttribute("aria-label", this.homeButtonLabel), this.homeButton.title = this.homeButtonLabel)
                }
            }, {
                key: "createBrandedLogoResponsiveIfNecessary",
                value: function createBrandedLogoResponsiveIfNecessary(e) {
                    !this.brandedHomeButtonResponsive && e && (this.brandedHomeButtonResponsive = this.createHomeButton(e), e.className = style("branded-logo-responsive"))
                }
            }, {
                key: "setSearchLabel", value: function setSearchLabel(e) {
                    this.search.setSearchLabel(e)
                }
            }, {
                key: "addBanner", value: function addBanner(e, t, o, n) {
                    if (e && "" !== e) {
                        var _r2 = document.createElement("div");
                        if (_r2.setAttribute("data-automation-id", "banner"), _r2.style.backgroundColor = t, _r2.style.color = o, _r2.className = style("banner"), n) {
                            var d = this, _l2 = document.createElement("button");
                            _l2.className = style("banner-close-button"), _l2.style.color = o, _l2.setAttribute("data-automation-id", "bannerCloseButton"), workday.icon.insert("wd-icon-x", _l2), workday.interaction.button(_l2, function () {
                                d.applicationBannerElement.removeChild(_r2)
                            }), _r2.appendChild(_l2)
                        }
                        var _p = document.createElement("span");
                        _p.innerText = e, _p.title = e, _r2.appendChild(_p), this.applicationBannerElement.appendChild(_r2)
                    }
                }
            }, {
                key: "getVisibleBannerCount", value: function getVisibleBannerCount() {
                    return this.applicationBannerElement.childElementCount
                }
            }, {
                key: "getSearchInput", value: function getSearchInput() {
                    return this.search
                }
            }, {
                key: "getBadgePairs", value: function getBadgePairs() {
                    return [[this.inboxCountBadge, this.notificationsCountBadge], [this.hammyMenu.getInboxBadge(), this.hammyMenu.getNotificationsBadge()]]
                }
            }, {
                key: "addInboxShortcut", value: function addInboxShortcut(e) {
                    this.initInboxButton(), workday.interaction.button(this.previewInboxButton, e), workday.interaction.button(this.inboxCountBadge, e), this.previewInboxButtonContainer.style.display = ""
                }
            }, {
                key: "addNotificationsShortcut", value: function addNotificationsShortcut(e) {
                    this.initNotificationsButton(), workday.interaction.button(this.previewNotificationButton, e), workday.interaction.button(this.notificationsCountBadge, e), this.previewNotificationButtonContainer.style.display = ""
                }
            }, {
                key: "displayAutocompleteResults", value: function displayAutocompleteResults(e) {
                    this.search.renderAutocompleteResults(e)
                }
            }, {
                key: "getHammyMenu", value: function getHammyMenu() {
                    return this.hammyMenu
                }
            }, {
                key: "getHammyButton", value: function getHammyButton() {
                    return this.hammyButtonContainer
                }
            }, {
                key: "showPreviewButtons", value: function showPreviewButtons(e) {
                    this.previewNotificationButtonContainer.style.display = e ? "" : "none", this.previewInboxButtonContainer.style.display = e ? "" : "none"
                }
            }, {
                key: "showAsHomeButton", value: function showAsHomeButton(e) {
                    this.homeButtonContainer && (this.homeButtonContainer.firstChild && this.homeButtonContainer.removeChild(this.homeButtonContainer.firstChild), this.homeButtonContainer.appendChild(e))
                }
            }, {
                key: "initApplicationHeader", value: function initApplicationHeader() {
                    this.rootElement.appendChild(this.applicationHeaderElement), this.rootElement.className = style("application-header-container"), this.applicationHeaderElement.className = style("application-header"), this.applicationHeaderElement.setAttribute("data-automation-id", "appHeader"), this.initLeftContainer(), this.initRightContainer()
                }
            }, {
                key: "initLeftContainer", value: function initLeftContainer() {
                    this.applicationHeaderElement.appendChild(this.leftContainer), this.leftContainer.className = style("l-container"), this.initHomeButton(), this.initSeparator(), this.leftContainer.appendChild(this.search.rootElement)
                }
            }, {
                key: "createHomeButton", value: function createHomeButton(e) {
                    var t = document.createElement("button");
                    t.setAttribute("data-automation-id", "wd_header_home_icon");
                    var o = document.createElement("div");
                    return o.className = style("home-icon-container"), e ? (t.className = style("home-button-branded"), e.className = style("branded-logo"), o.appendChild(e)) : (t.className = style("home-button"), workday.icon.insert("wd-icon-workday", o)), t.appendChild(o), t
                }
            }, {
                key: "initHomeButton", value: function initHomeButton() {
                    var _this20 = this;
                    this.homeButton = this.createHomeButton(workday.branding.createLogo()), this.createBrandedLogoResponsiveIfNecessary(workday.branding.createLogoResponsive()), this.setHomeButtonLabel(this.homeButtonLabel), this.homeButtonContainer.appendChild(this.homeButton), this.homeButtonContainer.className = style("home-button-container"), this.leftContainer.appendChild(this.homeButtonContainer), workday.interaction.button(this.homeButton, function () {
                        workday.task.go(workday.places.home), _this20.getHammyMenu().show(!1)
                    })
                }
            }, {
                key: "initSeparator", value: function initSeparator() {
                    this.leftContainer.appendChild(this.separator), this.separator.className = style("vertical-separator")
                }
            }, {
                key: "initRightContainer", value: function initRightContainer() {
                    this.applicationHeaderElement.appendChild(this.rightContainer), this.rightContainer.className = style("r-container"), this.initAlternateSearchButtonContainer(), this.initHammy()
                }
            }, {
                key: "initAlternateSearchButtonContainer", value: function initAlternateSearchButtonContainer() {
                    this.rightContainer.appendChild(this.alternateSearchButtonContainer), this.alternateSearchButtonContainer.className = style("preview-button")
                }
            }, {
                key: "initInboxButton", value: function initInboxButton() {
                    this.rightContainer.insertBefore(this.previewInboxButtonContainer, this.hammyButtonContainer), this.previewInboxButtonContainer.className = style("preview-button-container"), this.previewInboxButtonContainer.appendChild(this.previewInboxButton), this.previewInboxButton.className = style("preview-button"), this.previewInboxButton.setAttribute("data-automation-id", "inbox_preview"), this.previewInboxButton.title = workday.translate("WDRES.QUICKTIPS.Inbox"), this.previewInboxButton.setAttribute("aria-label", workday.translate("WDRES.QUICKTIPS.Inbox")), this.previewInboxButton.setAttribute("aria-describedby", ApplicationHeaderView.INBOX_BADGE_ID);
                    var e = document.createElement("div");
                    e.className = style("preview-icon-container"), workday.icon.insert("wd-icon-inbox-large", e), this.previewInboxButton.appendChild(e), this.inboxCountBadge.className = style("count-badge-annotation"), this.inboxCountBadge.setAttribute("data-automation-id", "wd_inbox_badge"), this.inboxCountBadge.setAttribute("id", ApplicationHeaderView.INBOX_BADGE_ID), this.inboxCountBadge.setAttribute("aria-hidden", "true"), this.previewInboxButtonContainer.appendChild(this.inboxCountBadge)
                }
            }, {
                key: "initNotificationsButton", value: function initNotificationsButton() {
                    this.previewInboxButtonContainer.parentElement ? this.rightContainer.insertBefore(this.previewNotificationButtonContainer, this.previewInboxButtonContainer) : this.rightContainer.insertBefore(this.previewNotificationButtonContainer, this.hammyButtonContainer), this.previewNotificationButtonContainer.className = style("preview-button-container"), this.previewNotificationButtonContainer.appendChild(this.previewNotificationButton), this.previewNotificationButton.className = style("preview-button"), this.previewNotificationButton.setAttribute("data-automation-id", "notification_preview"), this.previewNotificationButton.title = workday.translate("WDRES.NOTIFICATIONS.LABEL.Notifications"), this.previewNotificationButton.setAttribute("aria-label", workday.translate("WDRES.NOTIFICATIONS.LABEL.Notifications")), this.previewNotificationButton.setAttribute("aria-describedby", ApplicationHeaderView.NOTIFICATION_BADGE_ID);
                    var e = document.createElement("div");
                    e.className = style("preview-icon-container"), workday.icon.insert("wd-icon-notifications-large", e), this.previewNotificationButton.appendChild(e), this.notificationsCountBadge.className = style("count-badge-annotation"), this.notificationsCountBadge.setAttribute("data-automation-id", "wd_notifications_badge"), this.notificationsCountBadge.setAttribute("id", ApplicationHeaderView.NOTIFICATION_BADGE_ID), this.notificationsCountBadge.setAttribute("aria-hidden", "true"), this.previewNotificationButtonContainer.appendChild(this.notificationsCountBadge)
                }
            }, {
                key: "initHammy", value: function initHammy() {
                    this.rightContainer.appendChild(this.hammyButtonContainer), this.hammyButtonContainer.className = style("hammy-container"), this.initUserPhotoButton(), this.hammyMenu.show(!1), this.hammyButtonContainer.appendChild(this.hammyMenu.rootElement)
                }
            }, {
                key: "initUserPhotoButton", value: function initUserPhotoButton() {
                    var _this21 = this, e = workday.user.createPhoto();
                    e.className = style("user-photo"), e.setAttribute("style", "none");
                    var t = document.createElement("button");
                    t.className = style("hammy-button"), t.setAttribute("data-automation-id", "Current_User"), t.setAttribute("aria-haspopup", "true");
                    var o = document.createElement("div");
                    o.className = style("preview-icon-container"), o.appendChild(e), t.appendChild(o), t.addEventListener("keydown", function (n) {
                        [Key.Space, Key.Enter].some(function (r) {
                            return r === n.keyCode
                        }) ? (_this21.hammyMenu.toggleDisplay(!0), n.preventDefault(), n.stopPropagation()) : Key.Escape === n.keyCode && _this21.hammyMenu.show(!1)
                    }), t.addEventListener("mouseup", function (n) {
                        1 === n.which && _this21.hammyMenu.toggleDisplay()
                    }), this.hammyMenu.setHammyButton(t), this.hammyButtonContainer.appendChild(t)
                }
            }]), ApplicationHeaderView
        }();
        ApplicationHeaderView.BASE_HEIGHT = 64, ApplicationHeaderView.BANNER_HEIGHT = 28, ApplicationHeaderView.HEADER_RESPONSIVE_BREAK_POINT = 420, ApplicationHeaderView.SEARCH_RESPONSIVE_BREAK_POINT = 698, ApplicationHeaderView.NOTIFICATION_BADGE_ID = "notification-badge-id", ApplicationHeaderView.INBOX_BADGE_ID = "inbox-badge-id", require("../woolthree/com/workday/ui/woolthree/application/search_pb"), require("../woolthree/com/workday/ui/woolthree/task/task_pb");
        var TaskRequest$1 = proto.com.workday.ui.woolthree.task.TaskRequest,
            SearchModel = proto.com.workday.ui.woolthree.application.SearchModel,
            SearchItem = proto.com.workday.ui.woolthree.application.SearchItem;
        var Autocompleter = function () {
            function Autocompleter(e) {
                _classCallCheck(this, Autocompleter), this.currentRequestId = null, this.xhr = null, this.autocompleteUri = e
            }

            return _createClass(Autocompleter, [{
                key: "execute", value: function execute(e, t) {
                    var _this22 = this;
                    this.currentRequestId && this.cancel(), this.currentRequestId = setTimeout(function () {
                        _this22.sendAutocompleteRequest(e, t)
                    }, Autocompleter.AUTO_COMPLETE_DELAY)
                }
            }, {
                key: "cancel", value: function cancel() {
                    this.currentRequestId && clearTimeout(this.currentRequestId), this.currentRequestId = null, this.xhr && this.xhr.abort()
                }
            }, {
                key: "createXhr", value: function createXhr() {
                    return new XMLHttpRequest
                }
            }, {
                key: "sendAutocompleteRequest", value: function sendAutocompleteRequest(e, t) {
                    this.xhr && this.xhr.abort();
                    var o = this.createXhr();
                    this.xhr = o, o.overrideMimeType("text/xml"), o.open("GET", this.constructAutocompleteQueryString(e), !0), o.responseType = "document", o.timeout = Autocompleter.AUTO_COMPLETE_TIMEOUT, o.onload = function () {
                        if (200 <= o.status && 300 > o.status) {
                            var r = Autocompleter.extractSearchModel(o.responseXML);
                            t(r)
                        }
                    }, o.send()
                }
            }, {
                key: "constructAutocompleteQueryString", value: function constructAutocompleteQueryString(e) {
                    var t = Uri.addParam(this.autocompleteUri, Uri.QUERY_PARAM, e);
                    return t = Uri.addParam(t, Uri.AUTOCOMPLETE_PARAM, "true"), Uri.addClientRequestId(t)
                }
            }], [{
                key: "extractSearchModel", value: function extractSearchModel(e) {
                    var t = new SearchModel, o = e.getElementsByTagName("wml:Search_Result_Entry");
                    0 === o.length && (o = e.getElementsByTagName("Search_Result_Entry"));
                    for (var p, n = [],
                             r = 0; r < o.length; r++)p = o.item(r), n.push(Autocompleter.createSearchItem(p));
                    return t.setItemsList(n), t
                }
            }, {
                key: "createSearchItem", value: function createSearchItem(e) {
                    var t = new SearchItem, o = e.getAttribute("Label") || "", n = e.getAttribute("Class_Label") || "",
                        r = e.getAttribute("URI") || "";
                    t.setLabel(o), t.setType(n);
                    var p = new TaskRequest$1;
                    return p.setUri(r), t.setTask(p), t
                }
            }]), Autocompleter
        }();
        Autocompleter.AUTO_COMPLETE_DELAY = 200, Autocompleter.AUTO_COMPLETE_TIMEOUT = 5e3;
        var SearchController = function () {
            function SearchController() {
                _classCallCheck(this, SearchController), this.searchUri = null, this.autocompleter = null, this.lastAutocompleteQuery = "", this.searchInput = null, this.clearInitialized = !1
            }

            return _createClass(SearchController, [{
                key: "setSearchUri", value: function setSearchUri(e) {
                    this.searchUri = e, this.autocompleter || this.setAutocompleter(new Autocompleter(e))
                }
            }, {
                key: "setSearchInput", value: function setSearchInput(e) {
                    this.searchInput = e
                }
            }, {
                key: "enableAutocomplete", value: function enableAutocomplete(e, t) {
                    var _this23 = this;
                    if (this.searchInput) {
                        var _o9 = this.searchInput, _n3 = _o9.getSearchInput();
                        _n3.addEventListener("keyup", function (r) {
                            if (Key.Enter === r.keyCode) _this23.clearAutocomplete(t); else if (_n3.value.length < SearchController.AUTO_COMPLETE_MIN_SEARCH_CHAR) _this23.lastAutocompleteQuery = "", _this23.clearAutocomplete(t); else {
                                if (_o9.isAutocompletePopupVisible() && Key.DownArrow === r.keyCode)return;
                                (_this23.lastAutocompleteQuery !== _n3.value || Key.DownArrow === r.keyCode) && _this23.executeAutocomplete(_n3.value, e)
                            }
                        })
                    }
                }
            }, {
                key: "clearAutocomplete", value: function clearAutocomplete(e) {
                    this.autocompleter && this.autocompleter.cancel(), e()
                }
            }, {
                key: "enableSearch", value: function enableSearch(e) {
                    var _this24 = this;
                    this.searchInput && (this.searchInput.setSearchCommand(function (t) {
                        _this24.executeSearch(t), e && e()
                    }), this.enableClear())
                }
            }, {
                key: "determineClearButtonVisibility", value: function determineClearButtonVisibility() {
                    this.searchInput && this.searchInput.setClearButtonVisible(this.searchInput.isResponsive() && "" !== this.searchInput.getSearchInputValue())
                }
            }, {
                key: "clearInput", value: function clearInput() {
                    var _this25 = this;
                    this.searchInput && (this.searchInput.clearSearchInput(), setTimeout(function () {
                        _this25.searchInput && _this25.searchInput.focus()
                    }, 50))
                }
            }, {
                key: "setAutocompleter", value: function setAutocompleter(e) {
                    this.autocompleter = e
                }
            }, {
                key: "executeAutocomplete", value: function executeAutocomplete(e, t) {
                    this.autocompleter && this.searchUri && (this.lastAutocompleteQuery = e, this.autocompleter.execute(e, t))
                }
            }, {
                key: "enableClear", value: function enableClear() {
                    var _this26 = this;
                    if (this.searchInput && !this.clearInitialized) {
                        var _e2 = this.searchInput, _t3 = _e2.getSearchInput();
                        _e2.setClearCommand(function () {
                            _this26.clearInput()
                        }), _t3.addEventListener("keyup", function () {
                            _this26.determineClearButtonVisibility()
                        }), _t3.addEventListener("focus", function () {
                            _this26.determineClearButtonVisibility()
                        }), _t3.addEventListener("blur", function (o) {
                            var n = o.relatedTarget;
                            n === _e2.clearButton || _e2.clearButton.contains(n) || _e2.setClearButtonVisible(!1)
                        }), this.clearInitialized = !0
                    }
                }
            }, {
                key: "executeSearch", value: function executeSearch(e) {
                    this.searchUri && (e = e.trim(), "" !== e && workday.task.go(Uri.addParam(this.searchUri, Uri.QUERY_PARAM, e)))
                }
            }]), SearchController
        }();
        SearchController.AUTO_COMPLETE_MIN_SEARCH_CHAR = 3;
        var BadgeCountController = function () {
            function BadgeCountController(e, t) {
                _classCallCheck(this, BadgeCountController), this.countUri = this.configureUri(e), this.xhrProvider = t ? t : new XMLHttpRequestProvider
            }

            return _createClass(BadgeCountController, [{
                key: "updateCount", value: function updateCount(e, t) {
                    var _this27 = this, o = this.xhrProvider.get();
                    o.open("GET", this.countUri, !0), o.setTimeout(5e3), o.setOnLoad(function () {
                        200 <= o.getStatus() && 300 > o.getStatus() && _this27.extractAndSetCount(JSON.parse(o.getResponseText()), e, t)
                    }), o.send()
                }
            }, {
                key: "subscribeForPushNotifications", value: function subscribeForPushNotifications(e, t) {
                    workday._.notifications.subscribeToCounts(e, t)
                }
            }, {
                key: "configureUri", value: function configureUri(e) {
                    return Uri.addClientRequestId(Uri.appendHtmld(e))
                }
            }, {
                key: "extractAndSetCount", value: function extractAndSetCount(e, t, o) {
                    var n = e.actionItemsCount, r = e.notificationItemsCount;
                    t.textContent = 0 === n ? "" : n + "", o.textContent = 0 === r ? "" : r + "", t.setAttribute("aria-label", n + " " + workday.translate("WDRES.APPLICATION.HEADER.Items")), o.setAttribute("aria-label", r + " " + workday.translate("WDRES.APPLICATION.HEADER.Items"))
                }
            }]), BadgeCountController
        }();
        var DelegatablePerson = function () {
            function DelegatablePerson(e, t, o, n, r) {
                _classCallCheck(this, DelegatablePerson), this.self = !1, this.actingAs = !1, this.image = document.createElement("img"), this.name = e, this.uri = t, this.imageUri = o, this.self = n, this.actingAs = r, this.self && !this.actingAs && (this.name = this.name + " " + workday.translate("WDRES.DELEGATIONS.Self"))
            }

            return _createClass(DelegatablePerson, [{
                key: "getImage", value: function getImage() {
                    if (this.imageUri && "" !== this.imageUri.trim()) {
                        if (this.imageUri && "" !== this.imageUri.trim()) {
                            var e = DelegatablePerson.getDevicePixelRatio();
                            this.image.src = Uri.addParam(this.imageUri, "scaleWidth", "" + DelegatablePerson.WORKER_SIZE * e), this.image.src = Uri.addParam(this.image.src, "scaleHeight", "" + DelegatablePerson.WORKER_SIZE * e), this.image.className = style("delegatable-person")
                        }
                        return this.name && (this.image.alt = this.name), this.image
                    }
                }
            }], [{
                key: "getDevicePixelRatio", value: function getDevicePixelRatio() {
                    return window.devicePixelRatio || 1
                }
            }]), DelegatablePerson
        }();
        DelegatablePerson.WORKER_SIZE = 40;
        var DelegatesGroupTaskPopulator = function () {
            function DelegatesGroupTaskPopulator() {
                _classCallCheck(this, DelegatesGroupTaskPopulator)
            }

            return _createClass(DelegatesGroupTaskPopulator, [{
                key: "fetch", value: function fetch(e, t) {
                    var _this28 = this, o = this.createXhr();
                    o.overrideMimeType("text/xml"), o.open("GET", this.configureUri(e.getRemoteUri()), !0), o.responseType = "document", o.timeout = 5e3, o.onload = function () {
                        200 <= o.status && 300 > o.status && t(_this28.extractTasks(o.responseXML))
                    }, o.send()
                }
            }, {
                key: "createXhr", value: function createXhr() {
                    return new XMLHttpRequest
                }
            }, {
                key: "extractTasks", value: function extractTasks(e) {
                    var t = [], o = e.getElementsByTagName("wul:Delegatable_Worker");
                    0 === o.length && (o = e.getElementsByTagName("Delegatable_Worker"));
                    var n = e.getElementsByTagName("wul:Switch_Task");
                    if (0 === n.length && (n = e.getElementsByTagName("Switch_Task")), 0 === n.length)return t;
                    var r = n[0].getAttribute("URI") || "";
                    r.endsWith("[IID]") && (r = r.replace("[IID]", ""));
                    for (var d,
                             _p2 = 0; _p2 < o.length; _p2++)d = o.item(_p2), t.push(this.createDelegatedPerson(d, r));
                    return t
                }
            }, {
                key: "createDelegatedPerson", value: function createDelegatedPerson(e, t) {
                    var o = e.getAttribute("Name") || "", n = this.configureUri(t + e.getAttribute("IID")) || "",
                        r = e.getAttribute("Image") || "", p = "1" == e.getAttribute("Self"),
                        d = "1" == e.getAttribute("Acting_As");
                    return new DelegatablePerson(o, n, r, p, d)
                }
            }, {
                key: "configureUri", value: function configureUri(e) {
                    return Uri.addClientRequestId(Uri.appendHtmld(e))
                }
            }]), DelegatesGroupTaskPopulator
        }();
        var ContextMenu = function () {
            function ContextMenu() {
                _classCallCheck(this, ContextMenu), this.popupController = workday.popup.create([workday.popup.anchorable(!1), workday.popup.autohidable()]), this.menu = new Menu, this.popupController.rootElement.appendChild(this.menu.rootElement), this.popupController.rootElement.classList.add(style("context-popup")), this.popupController.containerElement.classList.add(style("context-popup-container"))
            }

            return _createClass(ContextMenu, [{
                key: "show", value: function show(e, t) {
                    e ? this.popupController.show(t, !0) : this.popupController.hide(!0)
                }
            }, {
                key: "clear", value: function clear() {
                    this.menu.clear()
                }
            }, {
                key: "addOpenInNewWindowItem", value: function addOpenInNewWindowItem(e) {
                    var _this29 = this, t = document.createElement("li");
                    t.className = style("contextmenu-item"), t.innerText = workday.translate("WDRES.MONIKER.CONTEXTMENUITEM.SeeInNewWindow"), this.menu.add(t, function () {
                        window.open(e), _this29.show(!1)
                    })
                }
            }, {
                key: "addCopyUrl", value: function addCopyUrl(e) {
                    this.addCopyItem(workday.translate("WDRES.MONIKER.CONTEXTMENUITEM.CopyURL"), window.location.origin + e)
                }
            }, {
                key: "addCopyText", value: function addCopyText(e) {
                    this.addCopyItem(workday.translate("WDRES.MONIKER.CONTEXTMENUITEM.CopyText"), e)
                }
            }, {
                key: "addCopyItem", value: function addCopyItem(e, t) {
                    var _this30 = this;
                    if (Clipboard) {
                        var _o10 = document.createElement("li");
                        _o10.className = style("contextmenu-item"), _o10.innerText = e, _o10.setAttribute("data-clipboard-text", t);
                        var _n4 = new Clipboard(_o10);
                        this.menu.add(_o10), _o10.addEventListener("click", function () {
                            _this30.show(!1), _n4.destroy()
                        })
                    }
                }
            }]), ContextMenu
        }();
        var ContextMenuController = function () {
            function ContextMenuController() {
                _classCallCheck(this, ContextMenuController)
            }

            return _createClass(ContextMenuController, [{
                key: "enableContextMenu",
                value: function enableContextMenu(e, t) {
                    var _this31 = this;
                    e.addEventListener("contextmenu", function (o) {
                        o.stopPropagation(), o.preventDefault(), _this31.showContextMenu(t, {
                            left: o.clientX,
                            top: o.clientY,
                            isInNestedContainer: !0
                        })
                    }), t.url && this.addSpecialClickHandlers(e, this.convertTaskUriToHtmlWrapperUri(t.url))
                }
            }, {
                key: "createContextMenu", value: function createContextMenu() {
                    return new ContextMenu
                }
            }, {
                key: "showContextMenu", value: function showContextMenu(e, t) {
                    var o = this.createContextMenu();
                    this.addDefaultItems(o, e), o.show(!0, t)
                }
            }, {
                key: "addDefaultItems", value: function addDefaultItems(e, t) {
                    if (t.url) {
                        var _o11 = Uri.appendHtmld(Uri.convertDataUrltoHtmlWrapperUrl(t.url));
                        e.addOpenInNewWindowItem(_o11), e.addCopyUrl(_o11)
                    }
                    t.text && e.addCopyText(t.text)
                }
            }, {
                key: "addSpecialClickHandlers", value: function addSpecialClickHandlers(e, t) {
                    var _this32 = this;
                    e.addEventListener("mousedown", function (o) {
                        (_this32.isMiddleClick(o) || _this32.isControlOrCommandClick(o)) && (window.open(t), o.stopPropagation(), o.preventDefault())
                    })
                }
            }, {
                key: "isMiddleClick", value: function isMiddleClick(e) {
                    return 2 === e.which || 4 === e.which
                }
            }, {
                key: "isControlOrCommandClick", value: function isControlOrCommandClick(e) {
                    return "MacIntel" === workday.browser.platform && e.metaKey || "MacIntel" !== workday.browser.platform && e.ctrlKey
                }
            }, {
                key: "convertTaskUriToHtmlWrapperUri", value: function convertTaskUriToHtmlWrapperUri(e) {
                    return Uri.appendHtmld(Uri.convertDataUrltoHtmlWrapperUrl(e))
                }
            }]), ContextMenuController
        }();
        require("../woolthree/com/workday/ui/woolthree/application/application_pb");
        var ApplicationHeaderModel = proto.com.workday.ui.woolthree.application.ApplicationHeaderModel,
            RootHeaderComponent = proto.com.workday.ui.woolthree.application.RootHeaderComponent,
            TaskRequest = proto.com.workday.ui.woolthree.task.TaskRequest,
            BannerType = proto.com.workday.ui.woolthree.application.BannerType;
        var ApplicationHeaderPresenter = function () {
            function ApplicationHeaderPresenter() {
                _classCallCheck(this, ApplicationHeaderPresenter)
            }

            return _createClass(ApplicationHeaderPresenter, [{
                key: "createView", value: function createView() {
                    return this.view || (this.view = new ApplicationHeaderView), this.view
                }
            }, {
                key: "setSearchController", value: function setSearchController(e) {
                    this.searchController = e
                }
            }, {
                key: "setHammyController", value: function setHammyController(e) {
                    this.hammyController = e
                }
            }, {
                key: "setHammyContextController", value: function setHammyContextController(e) {
                    this.contextMenuController = e
                }
            }, {
                key: "setBadgeController", value: function setBadgeController(e) {
                    this.badgeCountController = e
                }
            }, {
                key: "setGroupTaskPopulator", value: function setGroupTaskPopulator(e) {
                    this.groupTaskPopulator = e
                }
            }, {
                key: "setDataModel", value: function setDataModel(e) {
                    this.view || (this.view = this.createView());
                    var t = ApplicationHeaderModel.deserializeBinary(new Uint8Array(e.buffer));
                    this.setupContextMenuController(), this.view.setHomeButtonVisibility(-1 < t.getComponentsList().indexOf(RootHeaderComponent.HOME)), this.view.setHomeButtonLabel(t.getHomeLabel());
                    var o = -1 < t.getComponentsList().indexOf(RootHeaderComponent.SEARCH);
                    this.view.setSearchInputVisibility(o), o && (this.view.setSearchLabel(t.getSearchLabel()), this.setupSearchController(t.getSearchUri(), t.getAutocomplete())), this.setupBanners(t.getBannersList(), t.getEnvironmentType()), -1 < t.getComponentsList().indexOf(RootHeaderComponent.USER) && (this.setupHammyController(), this.setupProfile(), this.setupRootTasks(t.getRootTasksList()), this.setupRootGroups(t.getRootGroupsList()), this.setupSignout(t.getSignOut())), this.exposeAPI(), this.moveAccessibilityLink()
                }
            }, {
                key: "exposeAPI", value: function exposeAPI() {
                    var _this33 = this;
                    this.exposeHeight(function () {
                        return _this33.view.getVisibleBannerCount() * ApplicationHeaderView.BANNER_HEIGHT + ApplicationHeaderView.BASE_HEIGHT
                    }), this.exposeHammyController()
                }
            }, {
                key: "getUserUri", value: function getUserUri() {
                    var e = workday.places.userProfile;
                    return e ? TaskRequest.deserializeBinary(new Uint8Array(e.buffer)).getUri() : null
                }
            }, {
                key: "getUserName", value: function getUserName() {
                    return workday.user.name
                }
            }, {
                key: "setupContextMenuController", value: function setupContextMenuController() {
                    this.contextMenuController || (this.contextMenuController = new ContextMenuController)
                }
            }, {
                key: "setupHammyController", value: function setupHammyController() {
                    this.hammyController || (this.hammyController = new HammyController, this.hammyController.setHammyMenu(this.view.getHammyMenu()), this.enableContextMenuForHammyButton())
                }
            }, {
                key: "enableContextMenuForHammyButton", value: function enableContextMenuForHammyButton() {
                    var e = {url: this.getUserUri() || "", text: this.getUserName() || ""};
                    this.contextMenuController.enableContextMenu(this.view.getHammyButton(), e)
                }
            }, {
                key: "setupProfile", value: function setupProfile() {
                    this.hammyController.addUserProfile()
                }
            }, {
                key: "setupRootTasks", value: function setupRootTasks(e) {
                    var _this36 = this;
                    e = this.sortRootTasks(e);
                    for (var _ret2, _loop2 = function (_t4) {
                        var o = e[_t4], n = o.getTask(), r = n.getUri();
                        return r ? void(r.endsWith(HammyController.TASKS.inbox_skeleton) ? _this36.view.addInboxShortcut(function () {
                            workday.task.go(n.getUri())
                        }) : r.endsWith(HammyController.TASKS.notifications) ? _this36.view.addNotificationsShortcut(function () {
                            workday.task.go(n.getUri())
                        }) : r.endsWith(HammyController.TASKS.unified_inbox_actions_items_count) && _this36.setupBadgeCountController(r), _this36.hammyController.addHammyMenuTask(o.getLabel(), n, o.getExternal())) : "continue"
                    }, _t4 = 0; _t4 < e.length; _t4++)_ret2 = _loop2(_t4), "continue" === _ret2
                }
            }, {
                key: "sortRootTasks", value: function sortRootTasks(e) {
                    var t = e.find(function (n) {
                        return n.getTask().getUri().endsWith(HammyController.TASKS.home)
                    });
                    if (!t)return e;
                    var o = [];
                    o.push(t);
                    var _iteratorNormalCompletion2 = !0, _didIteratorError2 = !1, _iteratorError2 = void 0;
                    try {
                        for (var _step2, _n5,
                                 _iterator2 = e[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0)_n5 = _step2.value, _n5 !== t && o.push(_n5)
                    } catch (err) {
                        _didIteratorError2 = !0, _iteratorError2 = err
                    } finally {
                        try {
                            !_iteratorNormalCompletion2 && _iterator2.return && _iterator2.return()
                        } finally {
                            if (_didIteratorError2)throw _iteratorError2
                        }
                    }
                    return o
                }
            }, {
                key: "setupSignout", value: function setupSignout(e) {
                    e && e.getCommandsList() && 0 < e.getCommandsList().length && this.hammyController.addSignoutButton(e.getLabel(), function () {
                        var t = e.getCommandsList()[0];
                        window.location.replace(t.getTask().getUri())
                    })
                }
            }, {
                key: "setupRootGroups", value: function setupRootGroups(e) {
                    for (var _o12,
                             _t5 = 0; _t5 < e.length; _t5++)_o12 = e[_t5], _o12.getRemoteUri() && "" !== _o12.getRemoteUri() ? this.fetchRemoteGroupTasks(_o12) : this.handlePrePopulatedGroupTask(_o12)
                }
            }, {
                key: "handlePrePopulatedGroupTask", value: function handlePrePopulatedGroupTask(e) {
                    for (var t = e.getTasksList(), o = e.getLabel(), _n6 = 0; _n6 < t.length; _n6++) {
                        var _r3 = t[_n6], _p3 = {
                            groupLabel: o,
                            label: _r3.getLabel(),
                            taskUri: _r3.getTask().getUri(),
                            type: e.getType()
                        };
                        this.hammyController.addHammyMenuSubtask(_p3)
                    }
                }
            }, {
                key: "fetchRemoteGroupTasks", value: function fetchRemoteGroupTasks(e) {
                    var _this34 = this;
                    this.groupTaskPopulator || (this.groupTaskPopulator = new DelegatesGroupTaskPopulator), this.groupTaskPopulator.fetch(e, function (t) {
                        for (var _n7,
                                 _o13 = 0; _o13 < t.length; _o13++)_n7 = t[_o13], _this34.hammyController.addDelegatedSubtask(_n7, e.getType())
                    })
                }
            }, {
                key: "setupBanners", value: function setupBanners(e, t) {
                    for (var _n8, _o14 = 0; _o14 < e.length; _o14++) {
                        if (_n8 = e[_o14], _n8.getType() === BannerType.ENVIRONMENT) {
                            this.addEnvironmentBanner(_n8, t);
                            continue
                        }
                        var _r4 = _n8.getMessage(), _p4 = _n8.getBackgroundColor(), d = _n8.getForegroundColor(),
                            _l3 = _n8.getCloseable();
                        if (_n8.getType() === BannerType.DELEGATEE && ("PREVIEW" === this.systemConfidenceLevel() || "PROD" === this.systemConfidenceLevel()) && this.delegating()) {
                            this.view.addBanner(this.delegatingString() + " " + _r4, _p4, d, _l3);
                            continue
                        }
                        this.view.addBanner(_r4, _p4, d, _l3)
                    }
                }
            }, {
                key: "addEnvironmentBanner", value: function addEnvironmentBanner(e, t) {
                    var o = e.getBackgroundColor();
                    "SANDBOX" === t && "PREVIEW" === this.systemConfidenceLevel() && (o = "rgba(162, 206, 87, 1.0)");
                    var n = e.getMessage();
                    this.isInternalTenant() && (n = n + " - " + this.systemConfidenceLevel()), this.view.addBanner(n, o, e.getForegroundColor(), e.getCloseable())
                }
            }, {
                key: "delegatingString", value: function delegatingString() {
                    return workday.translate("WDRES.DELEGATIONS.OnBehalfOf")
                }
            }, {
                key: "delegating", value: function delegating() {
                    return workday.user.delegating
                }
            }, {
                key: "systemConfidenceLevel", value: function systemConfidenceLevel() {
                    return workday.systemConfidenceLevel
                }
            }, {
                key: "pathName", value: function pathName() {
                    return window.location.pathname
                }
            }, {
                key: "setupSearchController", value: function setupSearchController(e, t) {
                    var _this35 = this;
                    if (this.searchController || (this.searchController = new SearchController), this.view && this.view.getSearchInput()) {
                        var _o15 = this.view.getSearchInput();
                        this.searchController.setSearchUri(e), this.searchController.setSearchInput(_o15), this.searchController.enableSearch(function () {
                            _this35.view && _this35.view.displayAutocompleteResults([])
                        }), t && (this.searchController.enableAutocomplete(function (n) {
                            _this35.view && _this35.view.displayAutocompleteResults(n.getItemsList())
                        }, function () {
                            _this35.view && _this35.view.displayAutocompleteResults([])
                        }), _o15.setContextMenuInitializer(function (n, r) {
                            _this35.contextMenuController && _this35.contextMenuController.enableContextMenu(n, r)
                        }))
                    }
                }
            }, {
                key: "isInternalTenant", value: function isInternalTenant() {
                    return -1 < ApplicationHeaderPresenter.INTERNAL_ENVIRONMENTS.indexOf(this.getTenant())
                }
            }, {
                key: "getTenant", value: function getTenant() {
                    var e = "", t = this.pathName(), o = t.indexOf("/", 1);
                    return -1 != o && (e = t.substr(1, o - 1)), e
                }
            }, {
                key: "setupBadgeCountController", value: function setupBadgeCountController(e) {
                    this.badgeCountController || (this.badgeCountController = new BadgeCountController(e));
                    for (var _n9, t = this.view.getBadgePairs(),
                             _o16 = 0; _o16 < t.length; _o16++)_n9 = t[_o16], this.badgeCountController.updateCount(_n9[0], _n9[1]), this.badgeCountController.subscribeForPushNotifications(_n9[0], _n9[1])
                }
            }, {
                key: "exposeHeight", value: function exposeHeight(e) {
                    Object.defineProperty(workday._, "appHeaderHeight", {get: e, enumerable: !0})
                }
            }, {
                key: "exposeHammyController", value: function exposeHammyController() {
                    var e = this.hammyController;
                    Object.defineProperty(workday._, "hammyController", {
                        get: function get() {
                            return {
                                addHammyMenuSubtask: function addHammyMenuSubtask(t) {
                                    e.addHammyMenuSubtask(t)
                                }, clearHammySubMenu: function clearHammySubMenu(t) {
                                    e.clearHammySubMenu(t)
                                }, registerMenuListener: function registerMenuListener(t) {
                                    return e.registerMenuListener(t)
                                }, getHammyMenuAnchor: function getHammyMenuAnchor() {
                                    return e.getHammyMenuAnchor()
                                }
                            }
                        }
                    })
                }
            }, {
                key: "moveAccessibilityLink", value: function moveAccessibilityLink() {
                    var e = document.getElementById("accessibilityInitialFocusAnchor"),
                        t = document.getElementById("accessibilitySkipToMainContent"),
                        o = document.getElementById("accessbilityLinkDiv"), n = document.body,
                        r = this.view.rootElement, p = new MutationObserver(function (d) {
                            for (var s, _l4 = 0; _l4 < d.length; _l4++) {
                                s = d[_l4];
                                for (var c = 0; c < s.addedNodes.length; c++)s.addedNodes[c] === r && (e && e.parentElement === n && document.body.insertBefore(e, r), t && t.parentElement === n && document.body.insertBefore(t, r), o && o.parentElement === n && document.body.insertBefore(o, r), p.disconnect())
                            }
                        });
                    p.observe(n, {childList: !0}), setTimeout(function () {
                        p.disconnect()
                    }, 3e4)
                }
            }]), ApplicationHeaderPresenter
        }();
        ApplicationHeaderPresenter.INTERNAL_ENVIRONMENTS = ["baseline", "wdqa", "super", "gms", "sandbox", "super_preview"];
        var ApplicationHeaderPresenterFactory = function () {
            function ApplicationHeaderPresenterFactory() {
                _classCallCheck(this, ApplicationHeaderPresenterFactory)
            }

            return _createClass(ApplicationHeaderPresenterFactory, [{
                key: "createPresenter",
                value: function createPresenter() {
                    return new ApplicationHeaderPresenter
                }
            }]), ApplicationHeaderPresenterFactory
        }();
        var PageFooterView = function () {
            function PageFooterView() {
                _classCallCheck(this, PageFooterView), this.rootElement = document.createElement("div"), this.containerElement = this.rootElement
            }

            return _createClass(PageFooterView, [{
                key: "render", value: function render(e, t) {
                    return new Uint32Array([e, t])
                }
            }]), PageFooterView
        }();
        require("../woolthree/com/workday/ui/woolthree/page/page_pb");
        var PageFooterPresenter = function () {
            function PageFooterPresenter() {
                _classCallCheck(this, PageFooterPresenter)
            }

            return _createClass(PageFooterPresenter, [{
                key: "createView", value: function createView() {
                    return new PageFooterView
                }
            }, {
                key: "setDataModel", value: function setDataModel() {
                }
            }]), PageFooterPresenter
        }();
        var PageFooterPresenterFactory = function () {
            function PageFooterPresenterFactory() {
                _classCallCheck(this, PageFooterPresenterFactory)
            }

            return _createClass(PageFooterPresenterFactory, [{
                key: "createPresenter",
                value: function createPresenter() {
                    return new PageFooterPresenter
                }
            }]), PageFooterPresenterFactory
        }();
        var widgetRegistrar = function () {
            workday.widget.register("applicationHeader", new ApplicationHeaderPresenterFactory), workday.widget.register("pageFooter", new PageFooterPresenterFactory), document.body.removeEventListener("workday:onload", widgetRegistrar)
        };
        workday.loaded ? widgetRegistrar() : document.body.addEventListener("workday:onload", widgetRegistrar);
    }, {
        "../woolthree/com/workday/ui/woolthree/application/application_pb": 2,
        "../woolthree/com/workday/ui/woolthree/application/search_pb": 4,
        "../woolthree/com/workday/ui/woolthree/page/page_pb": 9,
        "../woolthree/com/workday/ui/woolthree/task/task_pb": 10
    }], 2: [function (require, module, exports) {


        var global = Function('return this')();

        var com_workday_ui_woolthree_application_branding_pb = require('../../../../../com/workday/ui/woolthree/application/branding_pb.js');
        var com_workday_ui_woolthree_task_task_pb = require('../../../../../com/workday/ui/woolthree/task/task_pb.js');
        var com_workday_ui_woolthree_button_button_pb = require('../../../../../com/workday/ui/woolthree/button/button_pb.js');
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.ApplicationHeaderModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.BannerType', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.RootHeaderComponent', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.TaskGroupType', null, global);

        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.repeatedFields_, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.displayName = 'proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel';
        }
        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.repeatedFields_ = [2];


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
                        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.toObject, includeInstance),
                    remoteUri: jspb.Message.getFieldWithDefault(msg, 3, ""),
                    type: jspb.Message.getFieldWithDefault(msg, 4, 0)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel;
            return proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setLabel(value);
                        break;
                    case 2:
                        var value = new proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.deserializeBinaryFromReader);
                        msg.addTasks(value);
                        break;
                    case 3:
                        var value = (reader.readString());
                        msg.setRemoteUri(value);
                        break;
                    case 4:
                        var value = (reader.readEnum());
                        msg.setType(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getLabel();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getTasksList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    2,
                    f,
                    proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.serializeBinaryToWriter
                );
            }
            f = message.getRemoteUri();
            if (f.length > 0) {
                writer.writeString(
                    3,
                    f
                );
            }
            f = message.getType();
            if (f !== 0.0) {
                writer.writeEnum(
                    4,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.getLabel = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.setLabel = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.getTasksList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel, 2));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.setTasksList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.addTasks = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel, opt_index);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.clearTasksList = function () {
            this.setTasksList([]);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.getRemoteUri = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.setRemoteUri = function (value) {
            jspb.Message.setField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.getType = function () {
            return (jspb.Message.getFieldWithDefault(this, 4, 0));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.prototype.setType = function (value) {
            jspb.Message.setField(this, 4, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.displayName = 'proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    task: (f = msg.getTask()) && com_workday_ui_woolthree_task_task_pb.TaskRequest.toObject(includeInstance, f),
                    badge: jspb.Message.getFieldWithDefault(msg, 3, ""),
                    external: jspb.Message.getFieldWithDefault(msg, 4, false),
                    type: jspb.Message.getFieldWithDefault(msg, 5, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel;
            return proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setLabel(value);
                        break;
                    case 2:
                        var value = new com_workday_ui_woolthree_task_task_pb.TaskRequest;
                        reader.readMessage(value, com_workday_ui_woolthree_task_task_pb.TaskRequest.deserializeBinaryFromReader);
                        msg.setTask(value);
                        break;
                    case 3:
                        var value = (reader.readString());
                        msg.setBadge(value);
                        break;
                    case 4:
                        var value = (reader.readBool());
                        msg.setExternal(value);
                        break;
                    case 5:
                        var value = (reader.readString());
                        msg.setType(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getLabel();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getTask();
            if (f != null) {
                writer.writeMessage(
                    2,
                    f,
                    com_workday_ui_woolthree_task_task_pb.TaskRequest.serializeBinaryToWriter
                );
            }
            f = message.getBadge();
            if (f.length > 0) {
                writer.writeString(
                    3,
                    f
                );
            }
            f = message.getExternal();
            if (f) {
                writer.writeBool(
                    4,
                    f
                );
            }
            f = message.getType();
            if (f.length > 0) {
                writer.writeString(
                    5,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.getLabel = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.setLabel = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.getTask = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_task_task_pb.TaskRequest, 2));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.setTask = function (value) {
            jspb.Message.setWrapperField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.clearTask = function () {
            this.setTask(undefined);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.hasTask = function () {
            return jspb.Message.getField(this, 2) != null;
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.getBadge = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.setBadge = function (value) {
            jspb.Message.setField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.getExternal = function () {
            return (jspb.Message.getFieldWithDefault(this, 4, false));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.setExternal = function (value) {
            jspb.Message.setField(this, 4, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.getType = function () {
            return (jspb.Message.getFieldWithDefault(this, 5, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.prototype.setType = function (value) {
            jspb.Message.setField(this, 5, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.displayName = 'proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    closeable: jspb.Message.getFieldWithDefault(msg, 2, false),
                    backgroundColor: jspb.Message.getFieldWithDefault(msg, 3, ""),
                    foregroundColor: jspb.Message.getFieldWithDefault(msg, 4, ""),
                    type: jspb.Message.getFieldWithDefault(msg, 5, 0)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel;
            return proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setMessage(value);
                        break;
                    case 2:
                        var value = (reader.readBool());
                        msg.setCloseable(value);
                        break;
                    case 3:
                        var value = (reader.readString());
                        msg.setBackgroundColor(value);
                        break;
                    case 4:
                        var value = (reader.readString());
                        msg.setForegroundColor(value);
                        break;
                    case 5:
                        var value = (reader.readEnum());
                        msg.setType(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getMessage();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getCloseable();
            if (f) {
                writer.writeBool(
                    2,
                    f
                );
            }
            f = message.getBackgroundColor();
            if (f.length > 0) {
                writer.writeString(
                    3,
                    f
                );
            }
            f = message.getForegroundColor();
            if (f.length > 0) {
                writer.writeString(
                    4,
                    f
                );
            }
            f = message.getType();
            if (f !== 0.0) {
                writer.writeEnum(
                    5,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.getMessage = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.setMessage = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.getCloseable = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, false));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.setCloseable = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.getBackgroundColor = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.setBackgroundColor = function (value) {
            jspb.Message.setField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.getForegroundColor = function () {
            return (jspb.Message.getFieldWithDefault(this, 4, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.setForegroundColor = function (value) {
            jspb.Message.setField(this, 4, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.getType = function () {
            return (jspb.Message.getFieldWithDefault(this, 5, 0));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.prototype.setType = function (value) {
            jspb.Message.setField(this, 5, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.repeatedFields_, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.application.ApplicationHeaderModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.displayName = 'proto.com.workday.ui.woolthree.application.ApplicationHeaderModel';
        }
        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.repeatedFields_ = [1, 2, 3, 7];


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    componentsList: jspb.Message.getField(msg, 1),
                    rootTasksList: jspb.Message.toObjectList(msg.getRootTasksList(),
                        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.toObject, includeInstance),
                    rootGroupsList: jspb.Message.toObjectList(msg.getRootGroupsList(),
                        proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.toObject, includeInstance),
                    signOut: (f = msg.getSignOut()) && com_workday_ui_woolthree_button_button_pb.ButtonModel.toObject(includeInstance, f),
                    homeLabel: jspb.Message.getFieldWithDefault(msg, 5, ""),
                    searchLabel: jspb.Message.getFieldWithDefault(msg, 6, ""),
                    bannersList: jspb.Message.toObjectList(msg.getBannersList(),
                        proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.toObject, includeInstance),
                    searchUri: jspb.Message.getFieldWithDefault(msg, 8, ""),
                    autocomplete: jspb.Message.getFieldWithDefault(msg, 9, false),
                    brandingModel: (f = msg.getBrandingModel()) && com_workday_ui_woolthree_application_branding_pb.BrandingModel.toObject(includeInstance, f),
                    environmentType: jspb.Message.getFieldWithDefault(msg, 11, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.application.ApplicationHeaderModel;
            return proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readPackedEnum());
                        msg.setComponentsList(value);
                        break;
                    case 2:
                        var value = new proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.deserializeBinaryFromReader);
                        msg.addRootTasks(value);
                        break;
                    case 3:
                        var value = new proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.deserializeBinaryFromReader);
                        msg.addRootGroups(value);
                        break;
                    case 4:
                        var value = new com_workday_ui_woolthree_button_button_pb.ButtonModel;
                        reader.readMessage(value, com_workday_ui_woolthree_button_button_pb.ButtonModel.deserializeBinaryFromReader);
                        msg.setSignOut(value);
                        break;
                    case 5:
                        var value = (reader.readString());
                        msg.setHomeLabel(value);
                        break;
                    case 6:
                        var value = (reader.readString());
                        msg.setSearchLabel(value);
                        break;
                    case 7:
                        var value = new proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.deserializeBinaryFromReader);
                        msg.addBanners(value);
                        break;
                    case 8:
                        var value = (reader.readString());
                        msg.setSearchUri(value);
                        break;
                    case 9:
                        var value = (reader.readBool());
                        msg.setAutocomplete(value);
                        break;
                    case 10:
                        var value = new com_workday_ui_woolthree_application_branding_pb.BrandingModel;
                        reader.readMessage(value, com_workday_ui_woolthree_application_branding_pb.BrandingModel.deserializeBinaryFromReader);
                        msg.setBrandingModel(value);
                        break;
                    case 11:
                        var value = (reader.readString());
                        msg.setEnvironmentType(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getComponentsList();
            if (f.length > 0) {
                writer.writePackedEnum(
                    1,
                    f
                );
            }
            f = message.getRootTasksList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    2,
                    f,
                    proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel.serializeBinaryToWriter
                );
            }
            f = message.getRootGroupsList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    3,
                    f,
                    proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel.serializeBinaryToWriter
                );
            }
            f = message.getSignOut();
            if (f != null) {
                writer.writeMessage(
                    4,
                    f,
                    com_workday_ui_woolthree_button_button_pb.ButtonModel.serializeBinaryToWriter
                );
            }
            f = message.getHomeLabel();
            if (f.length > 0) {
                writer.writeString(
                    5,
                    f
                );
            }
            f = message.getSearchLabel();
            if (f.length > 0) {
                writer.writeString(
                    6,
                    f
                );
            }
            f = message.getBannersList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    7,
                    f,
                    proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel.serializeBinaryToWriter
                );
            }
            f = message.getSearchUri();
            if (f.length > 0) {
                writer.writeString(
                    8,
                    f
                );
            }
            f = message.getAutocomplete();
            if (f) {
                writer.writeBool(
                    9,
                    f
                );
            }
            f = message.getBrandingModel();
            if (f != null) {
                writer.writeMessage(
                    10,
                    f,
                    com_workday_ui_woolthree_application_branding_pb.BrandingModel.serializeBinaryToWriter
                );
            }
            f = message.getEnvironmentType();
            if (f.length > 0) {
                writer.writeString(
                    11,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getComponentsList = function () {
            return (jspb.Message.getField(this, 1));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setComponentsList = function (value) {
            jspb.Message.setField(this, 1, value || []);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.addComponents = function (value, opt_index) {
            jspb.Message.addToRepeatedField(this, 1, value, opt_index);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.clearComponentsList = function () {
            this.setComponentsList([]);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getRootTasksList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel, 2));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setRootTasksList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.addRootTasks = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskModel, opt_index);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.clearRootTasksList = function () {
            this.setRootTasksList([]);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getRootGroupsList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel, 3));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setRootGroupsList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.addRootGroups = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.com.workday.ui.woolthree.application.ApplicationHeaderTaskGroupModel, opt_index);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.clearRootGroupsList = function () {
            this.setRootGroupsList([]);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getSignOut = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_button_button_pb.ButtonModel, 4));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setSignOut = function (value) {
            jspb.Message.setWrapperField(this, 4, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.clearSignOut = function () {
            this.setSignOut(undefined);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.hasSignOut = function () {
            return jspb.Message.getField(this, 4) != null;
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getHomeLabel = function () {
            return (jspb.Message.getFieldWithDefault(this, 5, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setHomeLabel = function (value) {
            jspb.Message.setField(this, 5, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getSearchLabel = function () {
            return (jspb.Message.getFieldWithDefault(this, 6, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setSearchLabel = function (value) {
            jspb.Message.setField(this, 6, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getBannersList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel, 7));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setBannersList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 7, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.addBanners = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.com.workday.ui.woolthree.application.ApplicationHeaderBannerModel, opt_index);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.clearBannersList = function () {
            this.setBannersList([]);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getSearchUri = function () {
            return (jspb.Message.getFieldWithDefault(this, 8, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setSearchUri = function (value) {
            jspb.Message.setField(this, 8, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getAutocomplete = function () {
            return (jspb.Message.getFieldWithDefault(this, 9, false));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setAutocomplete = function (value) {
            jspb.Message.setField(this, 9, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getBrandingModel = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_application_branding_pb.BrandingModel, 10));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setBrandingModel = function (value) {
            jspb.Message.setWrapperField(this, 10, value);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.clearBrandingModel = function () {
            this.setBrandingModel(undefined);
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.hasBrandingModel = function () {
            return jspb.Message.getField(this, 10) != null;
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.getEnvironmentType = function () {
            return (jspb.Message.getFieldWithDefault(this, 11, ""));
        };


        proto.com.workday.ui.woolthree.application.ApplicationHeaderModel.prototype.setEnvironmentType = function (value) {
            jspb.Message.setField(this, 11, value);
        };


        proto.com.workday.ui.woolthree.application.RootHeaderComponent = {
            HOME: 0,
            SEARCH: 1,
            LOGO: 2,
            USER: 3
        };

        proto.com.workday.ui.woolthree.application.BannerType = {
            ENVIRONMENT: 0,
            DELEGATEE: 1,
            OUTAGE: 2
        };

        proto.com.workday.ui.woolthree.application.TaskGroupType = {
            ACCOUNT: 0,
            DELEGATE: 1,
            RECOVERY: 2
        };

        goog.object.extend(exports, proto.com.workday.ui.woolthree.application);

    }, {
        "../../../../../com/workday/ui/woolthree/application/branding_pb.js": 3,
        "../../../../../com/workday/ui/woolthree/button/button_pb.js": 5,
        "../../../../../com/workday/ui/woolthree/task/task_pb.js": 10
    }], 3: [function (require, module, exports) {


        var global = Function('return this')();

        var com_workday_ui_woolthree_image_image_pb = require('../../../../../com/workday/ui/woolthree/image/image_pb.js');
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.BrandingModel', null, global);

        proto.com.workday.ui.woolthree.application.BrandingModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.application.BrandingModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.application.BrandingModel.displayName = 'proto.com.workday.ui.woolthree.application.BrandingModel';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.application.BrandingModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.application.BrandingModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.application.BrandingModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    logo: (f = msg.getLogo()) && com_workday_ui_woolthree_image_image_pb.ImageModel.toObject(includeInstance, f),
                    logoResponsive: (f = msg.getLogoResponsive()) && com_workday_ui_woolthree_image_image_pb.ImageModel.toObject(includeInstance, f),
                    banner: (f = msg.getBanner()) && com_workday_ui_woolthree_image_image_pb.ImageModel.toObject(includeInstance, f),
                    bannerResponsive: (f = msg.getBannerResponsive()) && com_workday_ui_woolthree_image_image_pb.ImageModel.toObject(includeInstance, f)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.application.BrandingModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.application.BrandingModel;
            return proto.com.workday.ui.woolthree.application.BrandingModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = new com_workday_ui_woolthree_image_image_pb.ImageModel;
                        reader.readMessage(value, com_workday_ui_woolthree_image_image_pb.ImageModel.deserializeBinaryFromReader);
                        msg.setLogo(value);
                        break;
                    case 2:
                        var value = new com_workday_ui_woolthree_image_image_pb.ImageModel;
                        reader.readMessage(value, com_workday_ui_woolthree_image_image_pb.ImageModel.deserializeBinaryFromReader);
                        msg.setLogoResponsive(value);
                        break;
                    case 3:
                        var value = new com_workday_ui_woolthree_image_image_pb.ImageModel;
                        reader.readMessage(value, com_workday_ui_woolthree_image_image_pb.ImageModel.deserializeBinaryFromReader);
                        msg.setBanner(value);
                        break;
                    case 4:
                        var value = new com_workday_ui_woolthree_image_image_pb.ImageModel;
                        reader.readMessage(value, com_workday_ui_woolthree_image_image_pb.ImageModel.deserializeBinaryFromReader);
                        msg.setBannerResponsive(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.application.BrandingModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getLogo();
            if (f != null) {
                writer.writeMessage(
                    1,
                    f,
                    com_workday_ui_woolthree_image_image_pb.ImageModel.serializeBinaryToWriter
                );
            }
            f = message.getLogoResponsive();
            if (f != null) {
                writer.writeMessage(
                    2,
                    f,
                    com_workday_ui_woolthree_image_image_pb.ImageModel.serializeBinaryToWriter
                );
            }
            f = message.getBanner();
            if (f != null) {
                writer.writeMessage(
                    3,
                    f,
                    com_workday_ui_woolthree_image_image_pb.ImageModel.serializeBinaryToWriter
                );
            }
            f = message.getBannerResponsive();
            if (f != null) {
                writer.writeMessage(
                    4,
                    f,
                    com_workday_ui_woolthree_image_image_pb.ImageModel.serializeBinaryToWriter
                );
            }
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.getLogo = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_image_image_pb.ImageModel, 1));
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.setLogo = function (value) {
            jspb.Message.setWrapperField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.clearLogo = function () {
            this.setLogo(undefined);
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.hasLogo = function () {
            return jspb.Message.getField(this, 1) != null;
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.getLogoResponsive = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_image_image_pb.ImageModel, 2));
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.setLogoResponsive = function (value) {
            jspb.Message.setWrapperField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.clearLogoResponsive = function () {
            this.setLogoResponsive(undefined);
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.hasLogoResponsive = function () {
            return jspb.Message.getField(this, 2) != null;
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.getBanner = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_image_image_pb.ImageModel, 3));
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.setBanner = function (value) {
            jspb.Message.setWrapperField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.clearBanner = function () {
            this.setBanner(undefined);
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.hasBanner = function () {
            return jspb.Message.getField(this, 3) != null;
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.getBannerResponsive = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_image_image_pb.ImageModel, 4));
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.setBannerResponsive = function (value) {
            jspb.Message.setWrapperField(this, 4, value);
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.clearBannerResponsive = function () {
            this.setBannerResponsive(undefined);
        };


        proto.com.workday.ui.woolthree.application.BrandingModel.prototype.hasBannerResponsive = function () {
            return jspb.Message.getField(this, 4) != null;
        };


        goog.object.extend(exports, proto.com.workday.ui.woolthree.application);

    }, {"../../../../../com/workday/ui/woolthree/image/image_pb.js": 6}], 4: [function (require, module, exports) {


        var global = Function('return this')();

        var com_workday_ui_woolthree_task_task_pb = require('../../../../../com/workday/ui/woolthree/task/task_pb.js');
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.SearchItem', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.SearchModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.application.SearchRequest', null, global);

        proto.com.workday.ui.woolthree.application.SearchRequest = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.application.SearchRequest, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.application.SearchRequest.displayName = 'proto.com.workday.ui.woolthree.application.SearchRequest';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.application.SearchRequest.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.application.SearchRequest.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.application.SearchRequest.toObject = function (includeInstance, msg) {
                var f, obj = {
                    query: jspb.Message.getFieldWithDefault(msg, 1, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.application.SearchRequest.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.application.SearchRequest;
            return proto.com.workday.ui.woolthree.application.SearchRequest.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.application.SearchRequest.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setQuery(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.application.SearchRequest.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.application.SearchRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.application.SearchRequest.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getQuery();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.application.SearchRequest.prototype.getQuery = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.application.SearchRequest.prototype.setQuery = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.application.SearchModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, proto.com.workday.ui.woolthree.application.SearchModel.repeatedFields_, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.application.SearchModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.application.SearchModel.displayName = 'proto.com.workday.ui.woolthree.application.SearchModel';
        }
        proto.com.workday.ui.woolthree.application.SearchModel.repeatedFields_ = [1];


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.application.SearchModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.application.SearchModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.application.SearchModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
                        proto.com.workday.ui.woolthree.application.SearchItem.toObject, includeInstance)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.application.SearchModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.application.SearchModel;
            return proto.com.workday.ui.woolthree.application.SearchModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.application.SearchModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = new proto.com.workday.ui.woolthree.application.SearchItem;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.application.SearchItem.deserializeBinaryFromReader);
                        msg.addItems(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.application.SearchModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.application.SearchModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.application.SearchModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getItemsList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    1,
                    f,
                    proto.com.workday.ui.woolthree.application.SearchItem.serializeBinaryToWriter
                );
            }
        };


        proto.com.workday.ui.woolthree.application.SearchModel.prototype.getItemsList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.application.SearchItem, 1));
        };


        proto.com.workday.ui.woolthree.application.SearchModel.prototype.setItemsList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.application.SearchModel.prototype.addItems = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.workday.ui.woolthree.application.SearchItem, opt_index);
        };


        proto.com.workday.ui.woolthree.application.SearchModel.prototype.clearItemsList = function () {
            this.setItemsList([]);
        };


        proto.com.workday.ui.woolthree.application.SearchItem = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.application.SearchItem, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.application.SearchItem.displayName = 'proto.com.workday.ui.woolthree.application.SearchItem';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.application.SearchItem.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.application.SearchItem.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.application.SearchItem.toObject = function (includeInstance, msg) {
                var f, obj = {
                    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
                    task: (f = msg.getTask()) && com_workday_ui_woolthree_task_task_pb.TaskRequest.toObject(includeInstance, f)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.application.SearchItem.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.application.SearchItem;
            return proto.com.workday.ui.woolthree.application.SearchItem.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.application.SearchItem.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setLabel(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setType(value);
                        break;
                    case 3:
                        var value = new com_workday_ui_woolthree_task_task_pb.TaskRequest;
                        reader.readMessage(value, com_workday_ui_woolthree_task_task_pb.TaskRequest.deserializeBinaryFromReader);
                        msg.setTask(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.application.SearchItem.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.application.SearchItem.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.application.SearchItem.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getLabel();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getType();
            if (f.length > 0) {
                writer.writeString(
                    2,
                    f
                );
            }
            f = message.getTask();
            if (f != null) {
                writer.writeMessage(
                    3,
                    f,
                    com_workday_ui_woolthree_task_task_pb.TaskRequest.serializeBinaryToWriter
                );
            }
        };


        proto.com.workday.ui.woolthree.application.SearchItem.prototype.getLabel = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.application.SearchItem.prototype.setLabel = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.application.SearchItem.prototype.getType = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.application.SearchItem.prototype.setType = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.application.SearchItem.prototype.getTask = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_task_task_pb.TaskRequest, 3));
        };


        proto.com.workday.ui.woolthree.application.SearchItem.prototype.setTask = function (value) {
            jspb.Message.setWrapperField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.application.SearchItem.prototype.clearTask = function () {
            this.setTask(undefined);
        };


        proto.com.workday.ui.woolthree.application.SearchItem.prototype.hasTask = function () {
            return jspb.Message.getField(this, 3) != null;
        };


        goog.object.extend(exports, proto.com.workday.ui.woolthree.application);

    }, {"../../../../../com/workday/ui/woolthree/task/task_pb.js": 10}], 5: [function (require, module, exports) {


        var global = Function('return this')();

        var com_workday_ui_woolthree_task_task_pb = require('../../../../../com/workday/ui/woolthree/task/task_pb.js');
        var com_workday_ui_woolthree_image_image_pb = require('../../../../../com/workday/ui/woolthree/image/image_pb.js');
        goog.exportSymbol('proto.com.workday.ui.woolthree.button.ButtonCommand', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.button.ButtonModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.button.ButtonType', null, global);

        proto.com.workday.ui.woolthree.button.ButtonModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, proto.com.workday.ui.woolthree.button.ButtonModel.repeatedFields_, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.button.ButtonModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.button.ButtonModel.displayName = 'proto.com.workday.ui.woolthree.button.ButtonModel';
        }
        proto.com.workday.ui.woolthree.button.ButtonModel.repeatedFields_ = [2];


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.button.ButtonModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.button.ButtonModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.button.ButtonModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
                    commandsList: jspb.Message.toObjectList(msg.getCommandsList(),
                        proto.com.workday.ui.woolthree.button.ButtonCommand.toObject, includeInstance),
                    iconRequest: (f = msg.getIconRequest()) && com_workday_ui_woolthree_image_image_pb.ImageRequest.toObject(includeInstance, f),
                    label: jspb.Message.getFieldWithDefault(msg, 4, ""),
                    hasDefaultTask: jspb.Message.getFieldWithDefault(msg, 5, false)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.button.ButtonModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.button.ButtonModel;
            return proto.com.workday.ui.woolthree.button.ButtonModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readEnum());
                        msg.setType(value);
                        break;
                    case 2:
                        var value = new proto.com.workday.ui.woolthree.button.ButtonCommand;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.button.ButtonCommand.deserializeBinaryFromReader);
                        msg.addCommands(value);
                        break;
                    case 3:
                        var value = new com_workday_ui_woolthree_image_image_pb.ImageRequest;
                        reader.readMessage(value, com_workday_ui_woolthree_image_image_pb.ImageRequest.deserializeBinaryFromReader);
                        msg.setIconRequest(value);
                        break;
                    case 4:
                        var value = (reader.readString());
                        msg.setLabel(value);
                        break;
                    case 5:
                        var value = (reader.readBool());
                        msg.setHasDefaultTask(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.button.ButtonModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getType();
            if (f !== 0.0) {
                writer.writeEnum(
                    1,
                    f
                );
            }
            f = message.getCommandsList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    2,
                    f,
                    proto.com.workday.ui.woolthree.button.ButtonCommand.serializeBinaryToWriter
                );
            }
            f = message.getIconRequest();
            if (f != null) {
                writer.writeMessage(
                    3,
                    f,
                    com_workday_ui_woolthree_image_image_pb.ImageRequest.serializeBinaryToWriter
                );
            }
            f = message.getLabel();
            if (f.length > 0) {
                writer.writeString(
                    4,
                    f
                );
            }
            f = message.getHasDefaultTask();
            if (f) {
                writer.writeBool(
                    5,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.getType = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, 0));
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.setType = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.getCommandsList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.button.ButtonCommand, 2));
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.setCommandsList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.addCommands = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.com.workday.ui.woolthree.button.ButtonCommand, opt_index);
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.clearCommandsList = function () {
            this.setCommandsList([]);
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.getIconRequest = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_image_image_pb.ImageRequest, 3));
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.setIconRequest = function (value) {
            jspb.Message.setWrapperField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.clearIconRequest = function () {
            this.setIconRequest(undefined);
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.hasIconRequest = function () {
            return jspb.Message.getField(this, 3) != null;
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.getLabel = function () {
            return (jspb.Message.getFieldWithDefault(this, 4, ""));
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.setLabel = function (value) {
            jspb.Message.setField(this, 4, value);
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.getHasDefaultTask = function () {
            return (jspb.Message.getFieldWithDefault(this, 5, false));
        };


        proto.com.workday.ui.woolthree.button.ButtonModel.prototype.setHasDefaultTask = function (value) {
            jspb.Message.setField(this, 5, value);
        };


        proto.com.workday.ui.woolthree.button.ButtonCommand = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.button.ButtonCommand, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.button.ButtonCommand.displayName = 'proto.com.workday.ui.woolthree.button.ButtonCommand';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.button.ButtonCommand.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.button.ButtonCommand.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.button.ButtonCommand.toObject = function (includeInstance, msg) {
                var f, obj = {
                    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    task: (f = msg.getTask()) && com_workday_ui_woolthree_task_task_pb.TaskRequest.toObject(includeInstance, f)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.button.ButtonCommand.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.button.ButtonCommand;
            return proto.com.workday.ui.woolthree.button.ButtonCommand.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.button.ButtonCommand.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setLabel(value);
                        break;
                    case 2:
                        var value = new com_workday_ui_woolthree_task_task_pb.TaskRequest;
                        reader.readMessage(value, com_workday_ui_woolthree_task_task_pb.TaskRequest.deserializeBinaryFromReader);
                        msg.setTask(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.button.ButtonCommand.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.button.ButtonCommand.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.button.ButtonCommand.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getLabel();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getTask();
            if (f != null) {
                writer.writeMessage(
                    2,
                    f,
                    com_workday_ui_woolthree_task_task_pb.TaskRequest.serializeBinaryToWriter
                );
            }
        };


        proto.com.workday.ui.woolthree.button.ButtonCommand.prototype.getLabel = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.button.ButtonCommand.prototype.setLabel = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.button.ButtonCommand.prototype.getTask = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_task_task_pb.TaskRequest, 2));
        };


        proto.com.workday.ui.woolthree.button.ButtonCommand.prototype.setTask = function (value) {
            jspb.Message.setWrapperField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.button.ButtonCommand.prototype.clearTask = function () {
            this.setTask(undefined);
        };


        proto.com.workday.ui.woolthree.button.ButtonCommand.prototype.hasTask = function () {
            return jspb.Message.getField(this, 2) != null;
        };


        proto.com.workday.ui.woolthree.button.ButtonType = {
            PRIMARY: 0,
            SECONDARY: 1,
            AUXILIARY: 2,
            LINK: 3,
            ICON: 4
        };

        goog.object.extend(exports, proto.com.workday.ui.woolthree.button);

    }, {
        "../../../../../com/workday/ui/woolthree/image/image_pb.js": 6,
        "../../../../../com/workday/ui/woolthree/task/task_pb.js": 10
    }], 6: [function (require, module, exports) {


        var global = Function('return this')();

        goog.exportSymbol('proto.com.workday.ui.woolthree.image.ImageModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.image.ImageRequest', null, global);

        proto.com.workday.ui.woolthree.image.ImageRequest = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.workday.ui.woolthree.image.ImageRequest.oneofGroups_);
        };
        goog.inherits(proto.com.workday.ui.woolthree.image.ImageRequest, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.image.ImageRequest.displayName = 'proto.com.workday.ui.woolthree.image.ImageRequest';
        }
        proto.com.workday.ui.woolthree.image.ImageRequest.oneofGroups_ = [[1, 2, 3]];

        proto.com.workday.ui.woolthree.image.ImageRequest.FileNameCase = {
            FILE_NAME_NOT_SET: 0,
            ICON_NAME: 1,
            GRAPHIC_NAME: 2,
            SPRITE_SHEET_NAME: 3
        };

        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.getFileNameCase = function () {
            return (jspb.Message.computeOneofCase(this, proto.com.workday.ui.woolthree.image.ImageRequest.oneofGroups_[0]));
        };


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.image.ImageRequest.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.image.ImageRequest.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.image.ImageRequest.toObject = function (includeInstance, msg) {
                var f, obj = {
                    iconName: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    graphicName: jspb.Message.getFieldWithDefault(msg, 2, ""),
                    spriteSheetName: jspb.Message.getFieldWithDefault(msg, 3, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.image.ImageRequest.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.image.ImageRequest;
            return proto.com.workday.ui.woolthree.image.ImageRequest.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setIconName(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setGraphicName(value);
                        break;
                    case 3:
                        var value = (reader.readString());
                        msg.setSpriteSheetName(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.image.ImageRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = (jspb.Message.getField(message, 1));
            if (f != null) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = (jspb.Message.getField(message, 2));
            if (f != null) {
                writer.writeString(
                    2,
                    f
                );
            }
            f = (jspb.Message.getField(message, 3));
            if (f != null) {
                writer.writeString(
                    3,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.getIconName = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.setIconName = function (value) {
            jspb.Message.setOneofField(this, 1, proto.com.workday.ui.woolthree.image.ImageRequest.oneofGroups_[0], value);
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.clearIconName = function () {
            jspb.Message.setOneofField(this, 1, proto.com.workday.ui.woolthree.image.ImageRequest.oneofGroups_[0], undefined);
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.hasIconName = function () {
            return jspb.Message.getField(this, 1) != null;
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.getGraphicName = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.setGraphicName = function (value) {
            jspb.Message.setOneofField(this, 2, proto.com.workday.ui.woolthree.image.ImageRequest.oneofGroups_[0], value);
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.clearGraphicName = function () {
            jspb.Message.setOneofField(this, 2, proto.com.workday.ui.woolthree.image.ImageRequest.oneofGroups_[0], undefined);
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.hasGraphicName = function () {
            return jspb.Message.getField(this, 2) != null;
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.getSpriteSheetName = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, ""));
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.setSpriteSheetName = function (value) {
            jspb.Message.setOneofField(this, 3, proto.com.workday.ui.woolthree.image.ImageRequest.oneofGroups_[0], value);
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.clearSpriteSheetName = function () {
            jspb.Message.setOneofField(this, 3, proto.com.workday.ui.woolthree.image.ImageRequest.oneofGroups_[0], undefined);
        };


        proto.com.workday.ui.woolthree.image.ImageRequest.prototype.hasSpriteSheetName = function () {
            return jspb.Message.getField(this, 3) != null;
        };


        proto.com.workday.ui.woolthree.image.ImageModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.workday.ui.woolthree.image.ImageModel.oneofGroups_);
        };
        goog.inherits(proto.com.workday.ui.woolthree.image.ImageModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.image.ImageModel.displayName = 'proto.com.workday.ui.woolthree.image.ImageModel';
        }
        proto.com.workday.ui.woolthree.image.ImageModel.oneofGroups_ = [[1, 2, 3]];

        proto.com.workday.ui.woolthree.image.ImageModel.ResultCase = {
            RESULT_NOT_SET: 0,
            STRING_ENCODING: 1,
            BINARY_ENCODING: 2,
            REMOTE_URI: 3
        };

        proto.com.workday.ui.woolthree.image.ImageModel.prototype.getResultCase = function () {
            return (jspb.Message.computeOneofCase(this, proto.com.workday.ui.woolthree.image.ImageModel.oneofGroups_[0]));
        };


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.image.ImageModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.image.ImageModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.image.ImageModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    stringEncoding: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    binaryEncoding: msg.getBinaryEncoding_asB64(),
                    remoteUri: jspb.Message.getFieldWithDefault(msg, 3, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.image.ImageModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.image.ImageModel;
            return proto.com.workday.ui.woolthree.image.ImageModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.image.ImageModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setStringEncoding(value);
                        break;
                    case 2:
                        var value = (reader.readBytes());
                        msg.setBinaryEncoding(value);
                        break;
                    case 3:
                        var value = (reader.readString());
                        msg.setRemoteUri(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.image.ImageModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.image.ImageModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = (jspb.Message.getField(message, 1));
            if (f != null) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = (jspb.Message.getField(message, 2));
            if (f != null) {
                writer.writeBytes(
                    2,
                    f
                );
            }
            f = (jspb.Message.getField(message, 3));
            if (f != null) {
                writer.writeString(
                    3,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.getStringEncoding = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.setStringEncoding = function (value) {
            jspb.Message.setOneofField(this, 1, proto.com.workday.ui.woolthree.image.ImageModel.oneofGroups_[0], value);
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.clearStringEncoding = function () {
            jspb.Message.setOneofField(this, 1, proto.com.workday.ui.woolthree.image.ImageModel.oneofGroups_[0], undefined);
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.hasStringEncoding = function () {
            return jspb.Message.getField(this, 1) != null;
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.getBinaryEncoding = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.getBinaryEncoding_asB64 = function () {
            return (jspb.Message.bytesAsB64(
                this.getBinaryEncoding()));
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.getBinaryEncoding_asU8 = function () {
            return (jspb.Message.bytesAsU8(
                this.getBinaryEncoding()));
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.setBinaryEncoding = function (value) {
            jspb.Message.setOneofField(this, 2, proto.com.workday.ui.woolthree.image.ImageModel.oneofGroups_[0], value);
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.clearBinaryEncoding = function () {
            jspb.Message.setOneofField(this, 2, proto.com.workday.ui.woolthree.image.ImageModel.oneofGroups_[0], undefined);
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.hasBinaryEncoding = function () {
            return jspb.Message.getField(this, 2) != null;
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.getRemoteUri = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, ""));
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.setRemoteUri = function (value) {
            jspb.Message.setOneofField(this, 3, proto.com.workday.ui.woolthree.image.ImageModel.oneofGroups_[0], value);
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.clearRemoteUri = function () {
            jspb.Message.setOneofField(this, 3, proto.com.workday.ui.woolthree.image.ImageModel.oneofGroups_[0], undefined);
        };


        proto.com.workday.ui.woolthree.image.ImageModel.prototype.hasRemoteUri = function () {
            return jspb.Message.getField(this, 3) != null;
        };


        goog.object.extend(exports, proto.com.workday.ui.woolthree.image);

    }, {}], 7: [function (require, module, exports) {


        var global = Function('return this')();

        var com_workday_ui_woolthree_task_task_pb = require('../../../../../com/workday/ui/woolthree/task/task_pb.js');
        var com_workday_ui_woolthree_page_pageService_pb = require('../../../../../com/workday/ui/woolthree/page/pageService_pb.js');
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.Instance', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstanceBehavior', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstanceCreateOption', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstanceInputModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstanceListModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstanceModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstancePromptModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstancePromptParameter', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstancePromptRequest', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstancePromptSection', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstanceSet', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.InstanceViewRequest', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.PreviewTaskModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.RelatedTaskModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.instance.SelfTaskModel', null, global);

        proto.com.workday.ui.woolthree.instance.RelatedTaskModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.RelatedTaskModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.RelatedTaskModel.displayName = 'proto.com.workday.ui.woolthree.instance.RelatedTaskModel';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.RelatedTaskModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.RelatedTaskModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.RelatedTaskModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    url: jspb.Message.getFieldWithDefault(msg, 1, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.RelatedTaskModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.RelatedTaskModel;
            return proto.com.workday.ui.woolthree.instance.RelatedTaskModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.RelatedTaskModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setUrl(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.RelatedTaskModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.RelatedTaskModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.RelatedTaskModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getUrl();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.RelatedTaskModel.prototype.getUrl = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.RelatedTaskModel.prototype.setUrl = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.SelfTaskModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.SelfTaskModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.SelfTaskModel.displayName = 'proto.com.workday.ui.woolthree.instance.SelfTaskModel';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.SelfTaskModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.SelfTaskModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.SelfTaskModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    url: jspb.Message.getFieldWithDefault(msg, 1, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.SelfTaskModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.SelfTaskModel;
            return proto.com.workday.ui.woolthree.instance.SelfTaskModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.SelfTaskModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setUrl(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.SelfTaskModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.SelfTaskModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.SelfTaskModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getUrl();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.SelfTaskModel.prototype.getUrl = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.SelfTaskModel.prototype.setUrl = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.PreviewTaskModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.PreviewTaskModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.PreviewTaskModel.displayName = 'proto.com.workday.ui.woolthree.instance.PreviewTaskModel';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.PreviewTaskModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.PreviewTaskModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.PreviewTaskModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    url: jspb.Message.getFieldWithDefault(msg, 1, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.PreviewTaskModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.PreviewTaskModel;
            return proto.com.workday.ui.woolthree.instance.PreviewTaskModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.PreviewTaskModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setUrl(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.PreviewTaskModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.PreviewTaskModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.PreviewTaskModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getUrl();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.PreviewTaskModel.prototype.getUrl = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.PreviewTaskModel.prototype.setUrl = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceSet = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, proto.com.workday.ui.woolthree.instance.InstanceSet.repeatedFields_, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstanceSet, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstanceSet.displayName = 'proto.com.workday.ui.woolthree.instance.InstanceSet';
        }
        proto.com.workday.ui.woolthree.instance.InstanceSet.repeatedFields_ = [1];


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstanceSet.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstanceSet.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstanceSet.toObject = function (includeInstance, msg) {
                var f, obj = {
                    instancesList: jspb.Message.toObjectList(msg.getInstancesList(),
                        proto.com.workday.ui.woolthree.instance.Instance.toObject, includeInstance)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstanceSet.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstanceSet;
            return proto.com.workday.ui.woolthree.instance.InstanceSet.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstanceSet.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = new proto.com.workday.ui.woolthree.instance.Instance;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.instance.Instance.deserializeBinaryFromReader);
                        msg.addInstances(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstanceSet.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstanceSet.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstanceSet.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getInstancesList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    1,
                    f,
                    proto.com.workday.ui.woolthree.instance.Instance.serializeBinaryToWriter
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstanceSet.prototype.getInstancesList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.instance.Instance, 1));
        };


        proto.com.workday.ui.woolthree.instance.InstanceSet.prototype.setInstancesList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceSet.prototype.addInstances = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.workday.ui.woolthree.instance.Instance, opt_index);
        };


        proto.com.workday.ui.woolthree.instance.InstanceSet.prototype.clearInstancesList = function () {
            this.setInstancesList([]);
        };


        proto.com.workday.ui.woolthree.instance.Instance = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.Instance, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.Instance.displayName = 'proto.com.workday.ui.woolthree.instance.Instance';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.Instance.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.Instance.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.Instance.toObject = function (includeInstance, msg) {
                var f, obj = {
                    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
                    hasViewTask: jspb.Message.getFieldWithDefault(msg, 3, false),
                    hasRelatedTasks: jspb.Message.getFieldWithDefault(msg, 4, false),
                    hasPreviewTask: jspb.Message.getFieldWithDefault(msg, 5, false),
                    target: jspb.Message.getFieldWithDefault(msg, 6, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.Instance.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.Instance;
            return proto.com.workday.ui.woolthree.instance.Instance.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.Instance.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setLabel(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setId(value);
                        break;
                    case 3:
                        var value = (reader.readBool());
                        msg.setHasViewTask(value);
                        break;
                    case 4:
                        var value = (reader.readBool());
                        msg.setHasRelatedTasks(value);
                        break;
                    case 5:
                        var value = (reader.readBool());
                        msg.setHasPreviewTask(value);
                        break;
                    case 6:
                        var value = (reader.readString());
                        msg.setTarget(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.Instance.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.Instance.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getLabel();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getId();
            if (f.length > 0) {
                writer.writeString(
                    2,
                    f
                );
            }
            f = message.getHasViewTask();
            if (f) {
                writer.writeBool(
                    3,
                    f
                );
            }
            f = message.getHasRelatedTasks();
            if (f) {
                writer.writeBool(
                    4,
                    f
                );
            }
            f = message.getHasPreviewTask();
            if (f) {
                writer.writeBool(
                    5,
                    f
                );
            }
            f = message.getTarget();
            if (f.length > 0) {
                writer.writeString(
                    6,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.getLabel = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.setLabel = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.getId = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.setId = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.getHasViewTask = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, false));
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.setHasViewTask = function (value) {
            jspb.Message.setField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.getHasRelatedTasks = function () {
            return (jspb.Message.getFieldWithDefault(this, 4, false));
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.setHasRelatedTasks = function (value) {
            jspb.Message.setField(this, 4, value);
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.getHasPreviewTask = function () {
            return (jspb.Message.getFieldWithDefault(this, 5, false));
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.setHasPreviewTask = function (value) {
            jspb.Message.setField(this, 5, value);
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.getTarget = function () {
            return (jspb.Message.getFieldWithDefault(this, 6, ""));
        };


        proto.com.workday.ui.woolthree.instance.Instance.prototype.setTarget = function (value) {
            jspb.Message.setField(this, 6, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstanceModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstanceModel.displayName = 'proto.com.workday.ui.woolthree.instance.InstanceModel';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstanceModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstanceModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstanceModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    contextId: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    behavior: jspb.Message.getFieldWithDefault(msg, 2, 0)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstanceModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstanceModel;
            return proto.com.workday.ui.woolthree.instance.InstanceModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstanceModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setContextId(value);
                        break;
                    case 2:
                        var value = (reader.readEnum());
                        msg.setBehavior(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstanceModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstanceModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstanceModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getContextId();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getBehavior();
            if (f !== 0.0) {
                writer.writeEnum(
                    2,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstanceModel.prototype.getContextId = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstanceModel.prototype.setContextId = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceModel.prototype.getBehavior = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, 0));
        };


        proto.com.workday.ui.woolthree.instance.InstanceModel.prototype.setBehavior = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceListModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, proto.com.workday.ui.woolthree.instance.InstanceListModel.repeatedFields_, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstanceListModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstanceListModel.displayName = 'proto.com.workday.ui.woolthree.instance.InstanceListModel';
        }
        proto.com.workday.ui.woolthree.instance.InstanceListModel.repeatedFields_ = [2];


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstanceListModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstanceListModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstanceListModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    contextId: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    behaviorsList: jspb.Message.getField(msg, 2)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstanceListModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstanceListModel;
            return proto.com.workday.ui.woolthree.instance.InstanceListModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstanceListModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setContextId(value);
                        break;
                    case 2:
                        var value = (reader.readPackedEnum());
                        msg.setBehaviorsList(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstanceListModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstanceListModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstanceListModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getContextId();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getBehaviorsList();
            if (f.length > 0) {
                writer.writePackedEnum(
                    2,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstanceListModel.prototype.getContextId = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstanceListModel.prototype.setContextId = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceListModel.prototype.getBehaviorsList = function () {
            return (jspb.Message.getField(this, 2));
        };


        proto.com.workday.ui.woolthree.instance.InstanceListModel.prototype.setBehaviorsList = function (value) {
            jspb.Message.setField(this, 2, value || []);
        };


        proto.com.workday.ui.woolthree.instance.InstanceListModel.prototype.addBehaviors = function (value, opt_index) {
            jspb.Message.addToRepeatedField(this, 2, value, opt_index);
        };


        proto.com.workday.ui.woolthree.instance.InstanceListModel.prototype.clearBehaviorsList = function () {
            this.setBehaviorsList([]);
        };


        proto.com.workday.ui.woolthree.instance.InstanceInputModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstanceInputModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstanceInputModel.displayName = 'proto.com.workday.ui.woolthree.instance.InstanceInputModel';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstanceInputModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstanceInputModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstanceInputModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    contextId: jspb.Message.getFieldWithDefault(msg, 1, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstanceInputModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstanceInputModel;
            return proto.com.workday.ui.woolthree.instance.InstanceInputModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstanceInputModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setContextId(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstanceInputModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstanceInputModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstanceInputModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getContextId();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstanceInputModel.prototype.getContextId = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstanceInputModel.prototype.setContextId = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceViewRequest = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstanceViewRequest, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstanceViewRequest.displayName = 'proto.com.workday.ui.woolthree.instance.InstanceViewRequest';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstanceViewRequest.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstanceViewRequest.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstanceViewRequest.toObject = function (includeInstance, msg) {
                var f, obj = {
                    contextId: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    id: jspb.Message.getFieldWithDefault(msg, 2, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstanceViewRequest.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstanceViewRequest;
            return proto.com.workday.ui.woolthree.instance.InstanceViewRequest.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstanceViewRequest.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setContextId(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setId(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstanceViewRequest.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstanceViewRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstanceViewRequest.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getContextId();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getId();
            if (f.length > 0) {
                writer.writeString(
                    2,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstanceViewRequest.prototype.getContextId = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstanceViewRequest.prototype.setContextId = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceViewRequest.prototype.getId = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstanceViewRequest.prototype.setId = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, proto.com.workday.ui.woolthree.instance.InstancePromptRequest.repeatedFields_, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstancePromptRequest, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstancePromptRequest.displayName = 'proto.com.workday.ui.woolthree.instance.InstancePromptRequest';
        }
        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.repeatedFields_ = [4];


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstancePromptRequest.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstancePromptRequest.toObject = function (includeInstance, msg) {
                var f, obj = {
                    contextId: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    promptId: jspb.Message.getFieldWithDefault(msg, 2, ""),
                    currentPromptSection: jspb.Message.getFieldWithDefault(msg, 3, ""),
                    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
                        proto.com.workday.ui.woolthree.instance.InstancePromptParameter.toObject, includeInstance)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstancePromptRequest;
            return proto.com.workday.ui.woolthree.instance.InstancePromptRequest.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setContextId(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setPromptId(value);
                        break;
                    case 3:
                        var value = (reader.readString());
                        msg.setCurrentPromptSection(value);
                        break;
                    case 4:
                        var value = new proto.com.workday.ui.woolthree.instance.InstancePromptParameter;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.instance.InstancePromptParameter.deserializeBinaryFromReader);
                        msg.addParameters(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstancePromptRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getContextId();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getPromptId();
            if (f.length > 0) {
                writer.writeString(
                    2,
                    f
                );
            }
            f = message.getCurrentPromptSection();
            if (f.length > 0) {
                writer.writeString(
                    3,
                    f
                );
            }
            f = message.getParametersList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    4,
                    f,
                    proto.com.workday.ui.woolthree.instance.InstancePromptParameter.serializeBinaryToWriter
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.getContextId = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.setContextId = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.getPromptId = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.setPromptId = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.getCurrentPromptSection = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.setCurrentPromptSection = function (value) {
            jspb.Message.setField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.getParametersList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.instance.InstancePromptParameter, 4));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.setParametersList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 4, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.addParameters = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.com.workday.ui.woolthree.instance.InstancePromptParameter, opt_index);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptRequest.prototype.clearParametersList = function () {
            this.setParametersList([]);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.displayName = 'proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.toObject = function (includeInstance, msg) {
                var f, obj = {
                    contextId: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    promptId: jspb.Message.getFieldWithDefault(msg, 2, ""),
                    query: jspb.Message.getFieldWithDefault(msg, 3, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest;
            return proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setContextId(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setPromptId(value);
                        break;
                    case 3:
                        var value = (reader.readString());
                        msg.setQuery(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getContextId();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getPromptId();
            if (f.length > 0) {
                writer.writeString(
                    2,
                    f
                );
            }
            f = message.getQuery();
            if (f.length > 0) {
                writer.writeString(
                    3,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.prototype.getContextId = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.prototype.setContextId = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.prototype.getPromptId = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.prototype.setPromptId = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.prototype.getQuery = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSearchRequest.prototype.setQuery = function (value) {
            jspb.Message.setField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, proto.com.workday.ui.woolthree.instance.InstancePromptModel.repeatedFields_, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstancePromptModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstancePromptModel.displayName = 'proto.com.workday.ui.woolthree.instance.InstancePromptModel';
        }
        proto.com.workday.ui.woolthree.instance.InstancePromptModel.repeatedFields_ = [7, 8, 9];


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstancePromptModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstancePromptModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    contextId: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    promptId: jspb.Message.getFieldWithDefault(msg, 2, ""),
                    error: jspb.Message.getFieldWithDefault(msg, 3, ""),
                    nextLevelToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
                    currentPromptSection: jspb.Message.getFieldWithDefault(msg, 5, ""),
                    currentFolder: jspb.Message.getFieldWithDefault(msg, 6, ""),
                    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
                        proto.com.workday.ui.woolthree.instance.InstancePromptParameter.toObject, includeInstance),
                    createOptionsList: jspb.Message.toObjectList(msg.getCreateOptionsList(),
                        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.toObject, includeInstance),
                    sectionsList: jspb.Message.toObjectList(msg.getSectionsList(),
                        proto.com.workday.ui.woolthree.instance.InstancePromptSection.toObject, includeInstance)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstancePromptModel;
            return proto.com.workday.ui.woolthree.instance.InstancePromptModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setContextId(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setPromptId(value);
                        break;
                    case 3:
                        var value = (reader.readString());
                        msg.setError(value);
                        break;
                    case 4:
                        var value = (reader.readString());
                        msg.setNextLevelToken(value);
                        break;
                    case 5:
                        var value = (reader.readString());
                        msg.setCurrentPromptSection(value);
                        break;
                    case 6:
                        var value = (reader.readString());
                        msg.setCurrentFolder(value);
                        break;
                    case 7:
                        var value = new proto.com.workday.ui.woolthree.instance.InstancePromptParameter;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.instance.InstancePromptParameter.deserializeBinaryFromReader);
                        msg.addParameters(value);
                        break;
                    case 8:
                        var value = new proto.com.workday.ui.woolthree.instance.InstanceCreateOption;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.instance.InstanceCreateOption.deserializeBinaryFromReader);
                        msg.addCreateOptions(value);
                        break;
                    case 9:
                        var value = new proto.com.workday.ui.woolthree.instance.InstancePromptSection;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.instance.InstancePromptSection.deserializeBinaryFromReader);
                        msg.addSections(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstancePromptModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getContextId();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getPromptId();
            if (f.length > 0) {
                writer.writeString(
                    2,
                    f
                );
            }
            f = message.getError();
            if (f.length > 0) {
                writer.writeString(
                    3,
                    f
                );
            }
            f = message.getNextLevelToken();
            if (f.length > 0) {
                writer.writeString(
                    4,
                    f
                );
            }
            f = message.getCurrentPromptSection();
            if (f.length > 0) {
                writer.writeString(
                    5,
                    f
                );
            }
            f = message.getCurrentFolder();
            if (f.length > 0) {
                writer.writeString(
                    6,
                    f
                );
            }
            f = message.getParametersList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    7,
                    f,
                    proto.com.workday.ui.woolthree.instance.InstancePromptParameter.serializeBinaryToWriter
                );
            }
            f = message.getCreateOptionsList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    8,
                    f,
                    proto.com.workday.ui.woolthree.instance.InstanceCreateOption.serializeBinaryToWriter
                );
            }
            f = message.getSectionsList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    9,
                    f,
                    proto.com.workday.ui.woolthree.instance.InstancePromptSection.serializeBinaryToWriter
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.getContextId = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.setContextId = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.getPromptId = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.setPromptId = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.getError = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.setError = function (value) {
            jspb.Message.setField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.getNextLevelToken = function () {
            return (jspb.Message.getFieldWithDefault(this, 4, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.setNextLevelToken = function (value) {
            jspb.Message.setField(this, 4, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.getCurrentPromptSection = function () {
            return (jspb.Message.getFieldWithDefault(this, 5, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.setCurrentPromptSection = function (value) {
            jspb.Message.setField(this, 5, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.getCurrentFolder = function () {
            return (jspb.Message.getFieldWithDefault(this, 6, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.setCurrentFolder = function (value) {
            jspb.Message.setField(this, 6, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.getParametersList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.instance.InstancePromptParameter, 7));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.setParametersList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 7, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.addParameters = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.com.workday.ui.woolthree.instance.InstancePromptParameter, opt_index);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.clearParametersList = function () {
            this.setParametersList([]);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.getCreateOptionsList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.instance.InstanceCreateOption, 8));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.setCreateOptionsList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 8, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.addCreateOptions = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.com.workday.ui.woolthree.instance.InstanceCreateOption, opt_index);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.clearCreateOptionsList = function () {
            this.setCreateOptionsList([]);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.getSectionsList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, proto.com.workday.ui.woolthree.instance.InstancePromptSection, 9));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.setSectionsList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 9, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.addSections = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.com.workday.ui.woolthree.instance.InstancePromptSection, opt_index);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptModel.prototype.clearSectionsList = function () {
            this.setSectionsList([]);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptParameter = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstancePromptParameter, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstancePromptParameter.displayName = 'proto.com.workday.ui.woolthree.instance.InstancePromptParameter';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstancePromptParameter.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstancePromptParameter.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstancePromptParameter.toObject = function (includeInstance, msg) {
                var f, obj = {
                    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    value: jspb.Message.getFieldWithDefault(msg, 2, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstancePromptParameter.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstancePromptParameter;
            return proto.com.workday.ui.woolthree.instance.InstancePromptParameter.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptParameter.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setKey(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setValue(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptParameter.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstancePromptParameter.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptParameter.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getKey();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getValue();
            if (f.length > 0) {
                writer.writeString(
                    2,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptParameter.prototype.getKey = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptParameter.prototype.setKey = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptParameter.prototype.getValue = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptParameter.prototype.setValue = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSection = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstancePromptSection, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstancePromptSection.displayName = 'proto.com.workday.ui.woolthree.instance.InstancePromptSection';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstancePromptSection.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstancePromptSection.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstancePromptSection.toObject = function (includeInstance, msg) {
                var f, obj = {
                    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
                    hasViewAccess: jspb.Message.getFieldWithDefault(msg, 3, false)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstancePromptSection.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstancePromptSection;
            return proto.com.workday.ui.woolthree.instance.InstancePromptSection.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSection.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setName(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setId(value);
                        break;
                    case 3:
                        var value = (reader.readBool());
                        msg.setHasViewAccess(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSection.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstancePromptSection.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSection.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getName();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getId();
            if (f.length > 0) {
                writer.writeString(
                    2,
                    f
                );
            }
            f = message.getHasViewAccess();
            if (f) {
                writer.writeBool(
                    3,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSection.prototype.getName = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSection.prototype.setName = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSection.prototype.getId = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSection.prototype.setId = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSection.prototype.getHasViewAccess = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, false));
        };


        proto.com.workday.ui.woolthree.instance.InstancePromptSection.prototype.setHasViewAccess = function (value) {
            jspb.Message.setField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.instance.InstanceCreateOption, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.instance.InstanceCreateOption.displayName = 'proto.com.workday.ui.woolthree.instance.InstanceCreateOption';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.instance.InstanceCreateOption.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.instance.InstanceCreateOption.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.instance.InstanceCreateOption.toObject = function (includeInstance, msg) {
                var f, obj = {
                    page: (f = msg.getPage()) && com_workday_ui_woolthree_page_pageService_pb.PageRequest.toObject(includeInstance, f),
                    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
                    type: jspb.Message.getFieldWithDefault(msg, 3, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.instance.InstanceCreateOption;
            return proto.com.workday.ui.woolthree.instance.InstanceCreateOption.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = new com_workday_ui_woolthree_page_pageService_pb.PageRequest;
                        reader.readMessage(value, com_workday_ui_woolthree_page_pageService_pb.PageRequest.deserializeBinaryFromReader);
                        msg.setPage(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setText(value);
                        break;
                    case 3:
                        var value = (reader.readString());
                        msg.setType(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.instance.InstanceCreateOption.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getPage();
            if (f != null) {
                writer.writeMessage(
                    1,
                    f,
                    com_workday_ui_woolthree_page_pageService_pb.PageRequest.serializeBinaryToWriter
                );
            }
            f = message.getText();
            if (f.length > 0) {
                writer.writeString(
                    2,
                    f
                );
            }
            f = message.getType();
            if (f.length > 0) {
                writer.writeString(
                    3,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.prototype.getPage = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_page_pageService_pb.PageRequest, 1));
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.prototype.setPage = function (value) {
            jspb.Message.setWrapperField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.prototype.clearPage = function () {
            this.setPage(undefined);
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.prototype.hasPage = function () {
            return jspb.Message.getField(this, 1) != null;
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.prototype.getText = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.prototype.setText = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.prototype.getType = function () {
            return (jspb.Message.getFieldWithDefault(this, 3, ""));
        };


        proto.com.workday.ui.woolthree.instance.InstanceCreateOption.prototype.setType = function (value) {
            jspb.Message.setField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.instance.InstanceBehavior = {
            DEFAULT_NO_BEHAVIOR: 0,
            AOL_CHAT: 1,
            ADDRESS: 2,
            EMAIL: 3,
            EXTERNAL_LINK: 4,
            FACEBOOK: 5,
            GOOGLE: 6,
            LINKED_IN: 7,
            IBM_CONNECTIONS: 8,
            LOCATION: 9,
            LYNC_CHAT: 10,
            MSN_CHAT: 11,
            SKYPE_CALL: 12,
            SKYPE_CHAT: 13,
            TWITTER: 14,
            XING: 15,
            YAHOO_CHAT: 16,
            YELP: 17,
            SAML: 18,
            LINKED_IN_CONNECT: 19,
            STRIPE: 20,
            EDIT: 21,
            PERSON: 22
        };

        goog.object.extend(exports, proto.com.workday.ui.woolthree.instance);

    }, {
        "../../../../../com/workday/ui/woolthree/page/pageService_pb.js": 8,
        "../../../../../com/workday/ui/woolthree/task/task_pb.js": 10
    }], 8: [function (require, module, exports) {


        var global = Function('return this')();

        goog.exportSymbol('proto.com.workday.ui.woolthree.page.PageRequest', null, global);

        proto.com.workday.ui.woolthree.page.PageRequest = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.page.PageRequest, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.page.PageRequest.displayName = 'proto.com.workday.ui.woolthree.page.PageRequest';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.page.PageRequest.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.page.PageRequest.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.page.PageRequest.toObject = function (includeInstance, msg) {
                var f, obj = {
                    pageId: jspb.Message.getFieldWithDefault(msg, 1, "")
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.page.PageRequest.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.page.PageRequest;
            return proto.com.workday.ui.woolthree.page.PageRequest.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.page.PageRequest.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setPageId(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.page.PageRequest.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.page.PageRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.page.PageRequest.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getPageId();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.page.PageRequest.prototype.getPageId = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.page.PageRequest.prototype.setPageId = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        goog.object.extend(exports, proto.com.workday.ui.woolthree.page);

    }, {}], 9: [function (require, module, exports) {


        var global = Function('return this')();

        var com_workday_ui_woolthree_image_image_pb = require('../../../../../com/workday/ui/woolthree/image/image_pb.js');
        var com_workday_ui_woolthree_instance_instance_pb = require('../../../../../com/workday/ui/woolthree/instance/instance_pb.js');
        var com_workday_ui_woolthree_button_button_pb = require('../../../../../com/workday/ui/woolthree/button/button_pb.js');
        goog.exportSymbol('proto.com.workday.ui.woolthree.page.PageFeature', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.page.PageFooterModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.page.PageHeaderModel', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.page.PageHeaderStyle', null, global);
        goog.exportSymbol('proto.com.workday.ui.woolthree.page.PageModel', null, global);

        proto.com.workday.ui.woolthree.page.PageModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, proto.com.workday.ui.woolthree.page.PageModel.repeatedFields_, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.page.PageModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.page.PageModel.displayName = 'proto.com.workday.ui.woolthree.page.PageModel';
        }
        proto.com.workday.ui.woolthree.page.PageModel.repeatedFields_ = [4];


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.page.PageModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.page.PageModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.page.PageModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    header: (f = msg.getHeader()) && proto.com.workday.ui.woolthree.page.PageHeaderModel.toObject(includeInstance, f),
                    footer: (f = msg.getFooter()) && proto.com.workday.ui.woolthree.page.PageFooterModel.toObject(includeInstance, f),
                    featuresList: jspb.Message.getField(msg, 4)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.page.PageModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.page.PageModel;
            return proto.com.workday.ui.woolthree.page.PageModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.page.PageModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setTitle(value);
                        break;
                    case 2:
                        var value = new proto.com.workday.ui.woolthree.page.PageHeaderModel;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.page.PageHeaderModel.deserializeBinaryFromReader);
                        msg.setHeader(value);
                        break;
                    case 3:
                        var value = new proto.com.workday.ui.woolthree.page.PageFooterModel;
                        reader.readMessage(value, proto.com.workday.ui.woolthree.page.PageFooterModel.deserializeBinaryFromReader);
                        msg.setFooter(value);
                        break;
                    case 4:
                        var value = (reader.readPackedEnum());
                        msg.setFeaturesList(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.page.PageModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.page.PageModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getTitle();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getHeader();
            if (f != null) {
                writer.writeMessage(
                    2,
                    f,
                    proto.com.workday.ui.woolthree.page.PageHeaderModel.serializeBinaryToWriter
                );
            }
            f = message.getFooter();
            if (f != null) {
                writer.writeMessage(
                    3,
                    f,
                    proto.com.workday.ui.woolthree.page.PageFooterModel.serializeBinaryToWriter
                );
            }
            f = message.getFeaturesList();
            if (f.length > 0) {
                writer.writePackedEnum(
                    4,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.getTitle = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.setTitle = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.getHeader = function () {
            return (
                jspb.Message.getWrapperField(this, proto.com.workday.ui.woolthree.page.PageHeaderModel, 2));
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.setHeader = function (value) {
            jspb.Message.setWrapperField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.clearHeader = function () {
            this.setHeader(undefined);
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.hasHeader = function () {
            return jspb.Message.getField(this, 2) != null;
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.getFooter = function () {
            return (
                jspb.Message.getWrapperField(this, proto.com.workday.ui.woolthree.page.PageFooterModel, 3));
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.setFooter = function (value) {
            jspb.Message.setWrapperField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.clearFooter = function () {
            this.setFooter(undefined);
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.hasFooter = function () {
            return jspb.Message.getField(this, 3) != null;
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.getFeaturesList = function () {
            return (jspb.Message.getField(this, 4));
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.setFeaturesList = function (value) {
            jspb.Message.setField(this, 4, value || []);
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.addFeatures = function (value, opt_index) {
            jspb.Message.addToRepeatedField(this, 4, value, opt_index);
        };


        proto.com.workday.ui.woolthree.page.PageModel.prototype.clearFeaturesList = function () {
            this.setFeaturesList([]);
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.page.PageHeaderModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.page.PageHeaderModel.displayName = 'proto.com.workday.ui.woolthree.page.PageHeaderModel';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.page.PageHeaderModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.page.PageHeaderModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    instances: (f = msg.getInstances()) && com_workday_ui_woolthree_instance_instance_pb.InstanceSet.toObject(includeInstance, f),
                    thumbnail: (f = msg.getThumbnail()) && com_workday_ui_woolthree_image_image_pb.ImageModel.toObject(includeInstance, f),
                    style: jspb.Message.getFieldWithDefault(msg, 4, 0)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.page.PageHeaderModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.page.PageHeaderModel;
            return proto.com.workday.ui.woolthree.page.PageHeaderModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setTitle(value);
                        break;
                    case 2:
                        var value = new com_workday_ui_woolthree_instance_instance_pb.InstanceSet;
                        reader.readMessage(value, com_workday_ui_woolthree_instance_instance_pb.InstanceSet.deserializeBinaryFromReader);
                        msg.setInstances(value);
                        break;
                    case 3:
                        var value = new com_workday_ui_woolthree_image_image_pb.ImageModel;
                        reader.readMessage(value, com_workday_ui_woolthree_image_image_pb.ImageModel.deserializeBinaryFromReader);
                        msg.setThumbnail(value);
                        break;
                    case 4:
                        var value = (reader.readEnum());
                        msg.setStyle(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.page.PageHeaderModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getTitle();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getInstances();
            if (f != null) {
                writer.writeMessage(
                    2,
                    f,
                    com_workday_ui_woolthree_instance_instance_pb.InstanceSet.serializeBinaryToWriter
                );
            }
            f = message.getThumbnail();
            if (f != null) {
                writer.writeMessage(
                    3,
                    f,
                    com_workday_ui_woolthree_image_image_pb.ImageModel.serializeBinaryToWriter
                );
            }
            f = message.getStyle();
            if (f !== 0.0) {
                writer.writeEnum(
                    4,
                    f
                );
            }
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.getTitle = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.setTitle = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.getInstances = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_instance_instance_pb.InstanceSet, 2));
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.setInstances = function (value) {
            jspb.Message.setWrapperField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.clearInstances = function () {
            this.setInstances(undefined);
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.hasInstances = function () {
            return jspb.Message.getField(this, 2) != null;
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.getThumbnail = function () {
            return (
                jspb.Message.getWrapperField(this, com_workday_ui_woolthree_image_image_pb.ImageModel, 3));
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.setThumbnail = function (value) {
            jspb.Message.setWrapperField(this, 3, value);
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.clearThumbnail = function () {
            this.setThumbnail(undefined);
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.hasThumbnail = function () {
            return jspb.Message.getField(this, 3) != null;
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.getStyle = function () {
            return (jspb.Message.getFieldWithDefault(this, 4, 0));
        };


        proto.com.workday.ui.woolthree.page.PageHeaderModel.prototype.setStyle = function (value) {
            jspb.Message.setField(this, 4, value);
        };


        proto.com.workday.ui.woolthree.page.PageFooterModel = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, proto.com.workday.ui.woolthree.page.PageFooterModel.repeatedFields_, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.page.PageFooterModel, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.page.PageFooterModel.displayName = 'proto.com.workday.ui.woolthree.page.PageFooterModel';
        }
        proto.com.workday.ui.woolthree.page.PageFooterModel.repeatedFields_ = [1];


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.page.PageFooterModel.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.page.PageFooterModel.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.page.PageFooterModel.toObject = function (includeInstance, msg) {
                var f, obj = {
                    buttonsList: jspb.Message.toObjectList(msg.getButtonsList(),
                        com_workday_ui_woolthree_button_button_pb.ButtonModel.toObject, includeInstance)
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.page.PageFooterModel.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.page.PageFooterModel;
            return proto.com.workday.ui.woolthree.page.PageFooterModel.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.page.PageFooterModel.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = new com_workday_ui_woolthree_button_button_pb.ButtonModel;
                        reader.readMessage(value, com_workday_ui_woolthree_button_button_pb.ButtonModel.deserializeBinaryFromReader);
                        msg.addButtons(value);
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.page.PageFooterModel.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.page.PageFooterModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.page.PageFooterModel.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getButtonsList();
            if (f.length > 0) {
                writer.writeRepeatedMessage(
                    1,
                    f,
                    com_workday_ui_woolthree_button_button_pb.ButtonModel.serializeBinaryToWriter
                );
            }
        };


        proto.com.workday.ui.woolthree.page.PageFooterModel.prototype.getButtonsList = function () {
            return (
                jspb.Message.getRepeatedWrapperField(this, com_workday_ui_woolthree_button_button_pb.ButtonModel, 1));
        };


        proto.com.workday.ui.woolthree.page.PageFooterModel.prototype.setButtonsList = function (value) {
            jspb.Message.setRepeatedWrapperField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.page.PageFooterModel.prototype.addButtons = function (opt_value, opt_index) {
            return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.workday.ui.woolthree.button.ButtonModel, opt_index);
        };


        proto.com.workday.ui.woolthree.page.PageFooterModel.prototype.clearButtonsList = function () {
            this.setButtonsList([]);
        };


        proto.com.workday.ui.woolthree.page.PageHeaderStyle = {
            STANDARD: 0,
            SECONDARY: 1
        };

        proto.com.workday.ui.woolthree.page.PageFeature = {
            CLOSE: 0,
            FULL_SCREEN: 1
        };

        goog.object.extend(exports, proto.com.workday.ui.woolthree.page);

    }, {
        "../../../../../com/workday/ui/woolthree/button/button_pb.js": 5,
        "../../../../../com/workday/ui/woolthree/image/image_pb.js": 6,
        "../../../../../com/workday/ui/woolthree/instance/instance_pb.js": 7
    }], 10: [function (require, module, exports) {


        var global = Function('return this')();

        goog.exportSymbol('proto.com.workday.ui.woolthree.task.TaskRequest', null, global);

        proto.com.workday.ui.woolthree.task.TaskRequest = function (opt_data) {
            jspb.Message.initialize(this, opt_data, 0, -1, null, null);
        };
        goog.inherits(proto.com.workday.ui.woolthree.task.TaskRequest, jspb.Message);
        if (goog.DEBUG && !COMPILED) {
            proto.com.workday.ui.woolthree.task.TaskRequest.displayName = 'proto.com.workday.ui.woolthree.task.TaskRequest';
        }


        if (jspb.Message.GENERATE_TO_OBJECT) {
            proto.com.workday.ui.woolthree.task.TaskRequest.prototype.toObject = function (opt_includeInstance) {
                return proto.com.workday.ui.woolthree.task.TaskRequest.toObject(opt_includeInstance, this);
            };


            proto.com.workday.ui.woolthree.task.TaskRequest.toObject = function (includeInstance, msg) {
                var f, obj = {
                    uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
                    method: jspb.Message.getFieldWithDefault(msg, 2, ""),
                    paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, undefined) : []
                };

                if (includeInstance) {
                    obj.$jspbMessageInstance = msg;
                }
                return obj;
            };
        }


        proto.com.workday.ui.woolthree.task.TaskRequest.deserializeBinary = function (bytes) {
            var reader = new jspb.BinaryReader(bytes);
            var msg = new proto.com.workday.ui.woolthree.task.TaskRequest;
            return proto.com.workday.ui.woolthree.task.TaskRequest.deserializeBinaryFromReader(msg, reader);
        };


        proto.com.workday.ui.woolthree.task.TaskRequest.deserializeBinaryFromReader = function (msg, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup()) {
                    break;
                }
                var field = reader.getFieldNumber();
                switch (field) {
                    case 1:
                        var value = (reader.readString());
                        msg.setUri(value);
                        break;
                    case 2:
                        var value = (reader.readString());
                        msg.setMethod(value);
                        break;
                    case 3:
                        var value = msg.getParamsMap();
                        reader.readMessage(value, function (message, reader) {
                            jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
                        });
                        break;
                    default:
                        reader.skipField();
                        break;
                }
            }
            return msg;
        };


        proto.com.workday.ui.woolthree.task.TaskRequest.prototype.serializeBinary = function () {
            var writer = new jspb.BinaryWriter();
            proto.com.workday.ui.woolthree.task.TaskRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };


        proto.com.workday.ui.woolthree.task.TaskRequest.serializeBinaryToWriter = function (message, writer) {
            var f = undefined;
            f = message.getUri();
            if (f.length > 0) {
                writer.writeString(
                    1,
                    f
                );
            }
            f = message.getMethod();
            if (f.length > 0) {
                writer.writeString(
                    2,
                    f
                );
            }
            f = message.getParamsMap(true);
            if (f && f.getLength() > 0) {
                f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
            }
        };


        proto.com.workday.ui.woolthree.task.TaskRequest.prototype.getUri = function () {
            return (jspb.Message.getFieldWithDefault(this, 1, ""));
        };


        proto.com.workday.ui.woolthree.task.TaskRequest.prototype.setUri = function (value) {
            jspb.Message.setField(this, 1, value);
        };


        proto.com.workday.ui.woolthree.task.TaskRequest.prototype.getMethod = function () {
            return (jspb.Message.getFieldWithDefault(this, 2, ""));
        };


        proto.com.workday.ui.woolthree.task.TaskRequest.prototype.setMethod = function (value) {
            jspb.Message.setField(this, 2, value);
        };


        proto.com.workday.ui.woolthree.task.TaskRequest.prototype.getParamsMap = function (opt_noLazyCreate) {
            return (
                jspb.Message.getMapField(this, 3, opt_noLazyCreate,
                    null));
        };


        proto.com.workday.ui.woolthree.task.TaskRequest.prototype.clearParamsMap = function () {
            this.getParamsMap().clear();
        };


        goog.object.extend(exports, proto.com.workday.ui.woolthree.task);

    }, {}]
}, {}, [1])