//2018-08-03T08:43:48-07:00 - e2740c58ff04c854cbd16f230dc110bf2ce7e6ae
/*
 * Unset but save the define() global. This prevents Q from attempting to load itself via AMD
 */
window._bootstrap = {
    define: window.define
};
window.define = undefined;

/*
 * Create UCI namespace
 */
window.UCI = {};

/*
 * Create templates container
 */
window.uciTemplates = {};
//-------------

!function(a){if("function"==typeof bootstrap)bootstrap("promise",a);else if("object"==typeof exports)module.exports=a();else if("function"==typeof define&&define.amd)define(a);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=a}else Q=a()}(function(){"use strict";function a(a){return function(){return V.apply(a,arguments)}}function b(a){return a===Object(a)}function c(a){return"[object StopIteration]"===bb(a)||a instanceof R}function d(a,b){if(O&&b.stack&&"object"==typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf(cb)){for(var c=[],d=b;d;d=d.source)d.stack&&c.unshift(d.stack);c.unshift(a.stack);var f=c.join("\n"+cb+"\n");a.stack=e(f)}}function e(a){for(var b=a.split("\n"),c=[],d=0;d<b.length;++d){var e=b[d];h(e)||f(e)||!e||c.push(e)}return c.join("\n")}function f(a){return-1!==a.indexOf("(module.js:")||-1!==a.indexOf("(node.js:")}function g(a){var b=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);if(b)return[b[1],Number(b[2])];var c=/at ([^ ]+):(\d+):(?:\d+)$/.exec(a);if(c)return[c[1],Number(c[2])];var d=/.*@(.+):(\d+)$/.exec(a);return d?[d[1],Number(d[2])]:void 0}function h(a){var b=g(a);if(!b)return!1;var c=b[0],d=b[1];return c===Q&&d>=S&&gb>=d}function i(){if(O)try{throw new Error}catch(a){var b=a.stack.split("\n"),c=b[0].indexOf("@")>0?b[1]:b[2],d=g(c);if(!d)return;return Q=d[0],d[1]}}function j(a,b,c){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(b+" is deprecated, use "+c+" instead.",new Error("").stack),a.apply(a,arguments)}}function k(a){return r(a)?a:s(a)?B(a):A(a)}function l(){function a(a){b=a,f.source=a,X(c,function(b,c){U(function(){a.promiseDispatch.apply(a,c)})},void 0),c=void 0,d=void 0}var b,c=[],d=[],e=$(l.prototype),f=$(o.prototype);if(f.promiseDispatch=function(a,e,f){var g=W(arguments);c?(c.push(g),"when"===e&&f[1]&&d.push(f[1])):U(function(){b.promiseDispatch.apply(b,g)})},f.valueOf=function(){if(c)return f;var a=q(b);return r(a)&&(b=a),a},f.inspect=function(){return b?b.inspect():{state:"pending"}},k.longStackSupport&&O)try{throw new Error}catch(g){f.stack=g.stack.substring(g.stack.indexOf("\n")+1)}return e.promise=f,e.resolve=function(c){b||a(k(c))},e.fulfill=function(c){b||a(A(c))},e.reject=function(c){b||a(z(c))},e.notify=function(a){b||X(d,function(b,c){U(function(){c(a)})},void 0)},e}function m(a){if("function"!=typeof a)throw new TypeError("resolver must be a function.");var b=l();try{a(b.resolve,b.reject,b.notify)}catch(c){b.reject(c)}return b.promise}function n(a){return m(function(b,c){for(var d=0,e=a.length;e>d;d++)k(a[d]).then(b,c)})}function o(a,b,c){void 0===b&&(b=function(a){return z(new Error("Promise does not support operation: "+a))}),void 0===c&&(c=function(){return{state:"unknown"}});var d=$(o.prototype);if(d.promiseDispatch=function(c,e,f){var g;try{g=a[e]?a[e].apply(d,f):b.call(d,e,f)}catch(h){g=z(h)}c&&c(g)},d.inspect=c,c){var e=c();"rejected"===e.state&&(d.exception=e.reason),d.valueOf=function(){var a=c();return"pending"===a.state||"rejected"===a.state?d:a.value}}return d}function p(a,b,c,d){return k(a).then(b,c,d)}function q(a){if(r(a)){var b=a.inspect();if("fulfilled"===b.state)return b.value}return a}function r(a){return b(a)&&"function"==typeof a.promiseDispatch&&"function"==typeof a.inspect}function s(a){return b(a)&&"function"==typeof a.then}function t(a){return r(a)&&"pending"===a.inspect().state}function u(a){return!r(a)||"fulfilled"===a.inspect().state}function v(a){return r(a)&&"rejected"===a.inspect().state}function w(){db.length=0,eb.length=0,fb||(fb=!0)}function x(a,b){fb&&(eb.push(a),db.push(b&&"undefined"!=typeof b.stack?b.stack:"(no stack) "+b))}function y(a){if(fb){var b=Y(eb,a);-1!==b&&(eb.splice(b,1),db.splice(b,1))}}function z(a){var b=o({when:function(b){return b&&y(this),b?b(a):this}},function(){return this},function(){return{state:"rejected",reason:a}});return x(b,a),b}function A(a){return o({when:function(){return a},get:function(b){return a[b]},set:function(b,c){a[b]=c},"delete":function(b){delete a[b]},post:function(b,c){return null===b||void 0===b?a.apply(void 0,c):a[b].apply(a,c)},apply:function(b,c){return a.apply(b,c)},keys:function(){return ab(a)}},void 0,function(){return{state:"fulfilled",value:a}})}function B(a){var b=l();return U(function(){try{a.then(b.resolve,b.reject,b.notify)}catch(c){b.reject(c)}}),b.promise}function C(a){return o({isDef:function(){}},function(b,c){return I(a,b,c)},function(){return k(a).inspect()})}function D(a,b,c){return k(a).spread(b,c)}function E(a){return function(){function b(a,b){var g;if("undefined"==typeof StopIteration){try{g=d[a](b)}catch(h){return z(h)}return g.done?g.value:p(g.value,e,f)}try{g=d[a](b)}catch(h){return c(h)?h.value:z(h)}return p(g,e,f)}var d=a.apply(this,arguments),e=b.bind(b,"next"),f=b.bind(b,"throw");return e()}}function F(a){k.done(k.async(a)())}function G(a){throw new R(a)}function H(a){return function(){return D([this,J(arguments)],function(b,c){return a.apply(b,c)})}}function I(a,b,c){return k(a).dispatch(b,c)}function J(a){return p(a,function(a){var b=0,c=l();return X(a,function(d,e,f){var g;r(e)&&"fulfilled"===(g=e.inspect()).state?a[f]=g.value:(++b,p(e,function(d){a[f]=d,0===--b&&c.resolve(a)},c.reject,function(a){c.notify({index:f,value:a})}))},void 0),0===b&&c.resolve(a),c.promise})}function K(a){return p(a,function(a){return a=Z(a,k),p(J(Z(a,function(a){return p(a,T,T)})),function(){return a})})}function L(a){return k(a).allSettled()}function M(a,b){return k(a).then(void 0,void 0,b)}function N(a,b){return k(a).nodeify(b)}var O=!1;try{throw new Error}catch(P){O=!!P.stack}var Q,R,S=i(),T=function(){},U=function(){function a(){for(;b.next;){b=b.next;var c=b.task;b.task=void 0;var e=b.domain;e&&(b.domain=void 0,e.enter());try{c()}catch(g){if(f)throw e&&e.exit(),setTimeout(a,0),e&&e.enter(),g;setTimeout(function(){throw g},0)}e&&e.exit()}d=!1}var b={task:void 0,next:null},c=b,d=!1,e=void 0,f=!1;if(U=function(a){c=c.next={task:a,domain:f&&process.domain,next:null},d||(d=!0,e())},"undefined"!=typeof process&&process.nextTick)f=!0,e=function(){process.nextTick(a)};else if("function"==typeof setImmediate)e="undefined"!=typeof window?setImmediate.bind(window,a):function(){setImmediate(a)};else if("undefined"!=typeof MessageChannel){var g=new MessageChannel;g.port1.onmessage=function(){e=h,g.port1.onmessage=a,a()};var h=function(){g.port2.postMessage(0)};e=function(){setTimeout(a,0),h()}}else e=function(){setTimeout(a,0)};return U}(),V=Function.call,W=a(Array.prototype.slice),X=a(Array.prototype.reduce||function(a,b){var c=0,d=this.length;if(1===arguments.length)for(;;){if(c in this){b=this[c++];break}if(++c>=d)throw new TypeError}for(;d>c;c++)c in this&&(b=a(b,this[c],c));return b}),Y=a(Array.prototype.indexOf||function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}),Z=a(Array.prototype.map||function(a,b){var c=this,d=[];return X(c,function(e,f,g){d.push(a.call(b,f,g,c))},void 0),d}),$=Object.create||function(a){function b(){}return b.prototype=a,new b},_=a(Object.prototype.hasOwnProperty),ab=Object.keys||function(a){var b=[];for(var c in a)_(a,c)&&b.push(c);return b},bb=a(Object.prototype.toString);R="undefined"!=typeof ReturnValue?ReturnValue:function(a){this.value=a};var cb="From previous event:";k.resolve=k,k.nextTick=U,k.longStackSupport=!1,k.defer=l,l.prototype.makeNodeResolver=function(){var a=this;return function(b,c){b?a.reject(b):a.resolve(arguments.length>2?W(arguments,1):c)}},k.Promise=m,k.promise=m,m.race=n,m.all=J,m.reject=z,m.resolve=k,k.passByCopy=function(a){return a},o.prototype.passByCopy=function(){return this},k.join=function(a,b){return k(a).join(b)},o.prototype.join=function(a){return k([this,a]).spread(function(a,b){if(a===b)return a;throw new Error("Can't join: not the same: "+a+" "+b)})},k.race=n,o.prototype.race=function(){return this.then(k.race)},k.makePromise=o,o.prototype.toString=function(){return"[object Promise]"},o.prototype.then=function(a,b,c){function e(b){try{return"function"==typeof a?a(b):b}catch(c){return z(c)}}function f(a){if("function"==typeof b){d(a,h);try{return b(a)}catch(c){return z(c)}}return z(a)}function g(a){return"function"==typeof c?c(a):a}var h=this,i=l(),j=!1;return U(function(){h.promiseDispatch(function(a){j||(j=!0,i.resolve(e(a)))},"when",[function(a){j||(j=!0,i.resolve(f(a)))}])}),h.promiseDispatch(void 0,"when",[void 0,function(a){var b,c=!1;try{b=g(a)}catch(d){if(c=!0,!k.onerror)throw d;k.onerror(d)}c||i.notify(b)}]),i.promise},k.when=p,o.prototype.thenResolve=function(a){return this.then(function(){return a})},k.thenResolve=function(a,b){return k(a).thenResolve(b)},o.prototype.thenReject=function(a){return this.then(function(){throw a})},k.thenReject=function(a,b){return k(a).thenReject(b)},k.nearer=q,k.isPromise=r,k.isPromiseAlike=s,k.isPending=t,o.prototype.isPending=function(){return"pending"===this.inspect().state},k.isFulfilled=u,o.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},k.isRejected=v,o.prototype.isRejected=function(){return"rejected"===this.inspect().state};var db=[],eb=[],fb=!0;k.resetUnhandledRejections=w,k.getUnhandledReasons=function(){return db.slice()},k.stopUnhandledRejectionTracking=function(){w(),fb=!1},w(),k.reject=z,k.fulfill=A,k.master=C,k.spread=D,o.prototype.spread=function(a,b){return this.all().then(function(b){return a.apply(void 0,b)},b)},k.async=E,k.spawn=F,k["return"]=G,k.promised=H,k.dispatch=I,o.prototype.dispatch=function(a,b){var c=this,d=l();return U(function(){c.promiseDispatch(d.resolve,a,b)}),d.promise},k.get=function(a,b){return k(a).dispatch("get",[b])},o.prototype.get=function(a){return this.dispatch("get",[a])},k.set=function(a,b,c){return k(a).dispatch("set",[b,c])},o.prototype.set=function(a,b){return this.dispatch("set",[a,b])},k.del=k["delete"]=function(a,b){return k(a).dispatch("delete",[b])},o.prototype.del=o.prototype["delete"]=function(a){return this.dispatch("delete",[a])},k.mapply=k.post=function(a,b,c){return k(a).dispatch("post",[b,c])},o.prototype.mapply=o.prototype.post=function(a,b){return this.dispatch("post",[a,b])},k.send=k.mcall=k.invoke=function(a,b){return k(a).dispatch("post",[b,W(arguments,2)])},o.prototype.send=o.prototype.mcall=o.prototype.invoke=function(a){return this.dispatch("post",[a,W(arguments,1)])},k.fapply=function(a,b){return k(a).dispatch("apply",[void 0,b])},o.prototype.fapply=function(a){return this.dispatch("apply",[void 0,a])},k["try"]=k.fcall=function(a){return k(a).dispatch("apply",[void 0,W(arguments,1)])},o.prototype.fcall=function(){return this.dispatch("apply",[void 0,W(arguments)])},k.fbind=function(a){var b=k(a),c=W(arguments,1);return function(){return b.dispatch("apply",[this,c.concat(W(arguments))])}},o.prototype.fbind=function(){var a=this,b=W(arguments);return function(){return a.dispatch("apply",[this,b.concat(W(arguments))])}},k.keys=function(a){return k(a).dispatch("keys",[])},o.prototype.keys=function(){return this.dispatch("keys",[])},k.all=J,o.prototype.all=function(){return J(this)},k.allResolved=j(K,"allResolved","allSettled"),o.prototype.allResolved=function(){return K(this)},k.allSettled=L,o.prototype.allSettled=function(){return this.then(function(a){return J(Z(a,function(a){function b(){return a.inspect()}return a=k(a),a.then(b,b)}))})},k.fail=k["catch"]=function(a,b){return k(a).then(void 0,b)},o.prototype.fail=o.prototype["catch"]=function(a){return this.then(void 0,a)},k.progress=M,o.prototype.progress=function(a){return this.then(void 0,void 0,a)},k.fin=k["finally"]=function(a,b){return k(a)["finally"](b)},o.prototype.fin=o.prototype["finally"]=function(a){return a=k(a),this.then(function(b){return a.fcall().then(function(){return b})},function(b){return a.fcall().then(function(){throw b})})},k.done=function(a,b,c,d){return k(a).done(b,c,d)},o.prototype.done=function(a,b,c){var e=function(a){U(function(){if(d(a,f),!k.onerror)throw a;k.onerror(a)})},f=a||b||c?this.then(a,b,c):this;"object"==typeof process&&process&&process.domain&&(e=process.domain.bind(e)),f.then(void 0,e)},k.timeout=function(a,b,c){return k(a).timeout(b,c)},o.prototype.timeout=function(a,b){var c=l(),d=setTimeout(function(){c.reject(new Error(b||"Timed out after "+a+" ms"))},a);return this.then(function(a){clearTimeout(d),c.resolve(a)},function(a){clearTimeout(d),c.reject(a)},c.notify),c.promise},k.delay=function(a,b){return void 0===b&&(b=a,a=void 0),k(a).delay(b)},o.prototype.delay=function(a){return this.then(function(b){var c=l();return setTimeout(function(){c.resolve(b)},a),c.promise})},k.nfapply=function(a,b){return k(a).nfapply(b)},o.prototype.nfapply=function(a){var b=l(),c=W(a);return c.push(b.makeNodeResolver()),this.fapply(c).fail(b.reject),b.promise},k.nfcall=function(a){var b=W(arguments,1);return k(a).nfapply(b)},o.prototype.nfcall=function(){var a=W(arguments),b=l();return a.push(b.makeNodeResolver()),this.fapply(a).fail(b.reject),b.promise},k.nfbind=k.denodeify=function(a){var b=W(arguments,1);return function(){var c=b.concat(W(arguments)),d=l();return c.push(d.makeNodeResolver()),k(a).fapply(c).fail(d.reject),d.promise}},o.prototype.nfbind=o.prototype.denodeify=function(){var a=W(arguments);return a.unshift(this),k.denodeify.apply(void 0,a)},k.nbind=function(a,b){var c=W(arguments,2);return function(){function d(){return a.apply(b,arguments)}var e=c.concat(W(arguments)),f=l();return e.push(f.makeNodeResolver()),k(d).fapply(e).fail(f.reject),f.promise}},o.prototype.nbind=function(){var a=W(arguments,0);return a.unshift(this),k.nbind.apply(void 0,a)},k.nmapply=k.npost=function(a,b,c){return k(a).npost(b,c)},o.prototype.nmapply=o.prototype.npost=function(a,b){var c=W(b||[]),d=l();return c.push(d.makeNodeResolver()),this.dispatch("post",[a,c]).fail(d.reject),d.promise},k.nsend=k.nmcall=k.ninvoke=function(a,b){var c=W(arguments,2),d=l();return c.push(d.makeNodeResolver()),k(a).dispatch("post",[b,c]).fail(d.reject),d.promise},o.prototype.nsend=o.prototype.nmcall=o.prototype.ninvoke=function(a){var b=W(arguments,1),c=l();return b.push(c.makeNodeResolver()),this.dispatch("post",[a,b]).fail(c.reject),c.promise},k.nodeify=N,o.prototype.nodeify=function(a){return a?void this.then(function(b){U(function(){a(null,b)})},function(b){U(function(){a(b)})}):this};var gb=i();return k});!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.multiline=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
module.exports = function (str) {
	var match = str.match(/^[ \t]*(?=\S)/gm);

	if (!match) {
		return str;
	}

	var indent = Math.min.apply(Math, match.map(function (el) {
		return el.length;
	}));

	var re = new RegExp('^[ \\t]{' + indent + '}', 'gm');

	return indent > 0 ? str.replace(re, '') : str;
};

},{}],2:[function(require,module,exports){
'use strict';
var stripIndent = require('strip-indent');

// start matching after: comment start block => ! or @preserve => optional whitespace => newline
// stop matching before: last newline => optional whitespace => comment end block
var reCommentContents = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//;

var multiline = module.exports = function (fn) {
	if (typeof fn !== 'function') {
		throw new TypeError('Expected a function');
	}

	var match = reCommentContents.exec(fn.toString());

	if (!match) {
		throw new TypeError('Multiline comment missing.');
	}

	return match[1];
};

multiline.stripIndent = function (fn) {
	return stripIndent(multiline(fn));
};

},{"strip-indent":1}]},{},[2])(2)
});/**
 * A simple service container for wiring and managing services
 */
window.UCI.ServiceContainer = (function () {

    var services = {};
    var factoryCallbacks = {};

    function ServiceContainer() {

    }

    ServiceContainer.prototype.service = function (name, factoryCallback) {
        factoryCallbacks[name] = factoryCallback;
    };

    ServiceContainer.prototype.get = function (name) {
        if (services[name] == undefined) {
            services[name] = factoryCallbacks[name]();
        }

        return services[name];
    };

    return ServiceContainer;

})();

/**
 * Queries the page for an element that might not be available on document.ready
 */
window.UCI.DynamicQuery = (function () {

    function DynamicQuery(Q, jQuery) {
        var _Q = Q;
        var _jQuery = jQuery;

        DynamicQuery.prototype.exists = function (selector) {
            var deferred = _Q.defer();
            var id = setInterval(function () {
                if (_jQuery(selector).length > 0) {
                    deferred.resolve(_jQuery(selector));
                    clearInterval(id);
                }
            }, 200);
            return deferred.promise;
        };

        DynamicQuery.prototype.notExists = function (selector) {
            var deferred = _Q.defer();
            var id = setInterval(function () {
                if (_jQuery(selector).length == 0) {
                    deferred.resolve(_jQuery(selector));
                    clearInterval(id);
                }
            }, 200);
            return deferred.promise;
        };
    }

    return DynamicQuery;
})();
window.uciParameters = {
    PIWIK_CANVAS_SITE_ID: 7,
    PIWIK_CANVAS_MASQUERADE_SITE_ID: 8,
    WEBGRADES_TRANSFER_URL: 'https://grade-transfer.eee.uci.edu',
    GRAND_CENTRAL_URL: 'https://grandcentral.eee.uci.edu',
    SANDBOX_SIS_PREFIX: 'SANDBOX_CS_'
};
window.uciServices = new window.UCI.ServiceContainer();

window.uciServices.service('dynamicQuery', function () {
    return new window.UCI.DynamicQuery(window.Q, window.jQuery);
});
//customization

var siteId = window.uciParameters.PIWIK_CANVAS_SITE_ID;
if (window.location.pathname.indexOf('masquerade') != -1) {
    siteId = window.uciParameters.PIWIK_CANVAS_MASQUERADE_SITE_ID;
}

var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
_paq.push(["setCustomVariable", 1, "user_id", ENV.current_user_id, "visit"]);
(function() {
    var u="//analytics.eee.uci.edu/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);

    _paq.push(['setSiteId', siteId]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
window.uciTemplates.Footer = multiline(function() {/*
<footer role="contentinfo" id="footer" class="ic-app-footer customized">
    <b>
        <a href="http://www.uci.edu">UC Irvine</a>
        &middot;
        <a href="http://etech.uci.edu">eTech</a>
    </b>
    <div id="footer-links" class="ic-app-footer__links">
        <a href="https://eee.uci.edu">EEE</a>
        <a href="https://help.eee.uci.edu/canvas/">Help Center</a>
        <a href="https://eee.uci.edu/contact/">Contact Us</a>
        <a href="https://help.eee.uci.edu/policies/privacy/">Privacy</a>
        <a href="http://sites.uci.edu/canvas/">Learn more about Canvas</a>
    </div>
</footer>
*/});
/**
 * Customizes the footer
 */
window.uciServices.get('dynamicQuery').exists('footer#footer').then(function () {
    $('footer#footer').replaceWith($(window.uciTemplates.Footer));
});
window.uciTemplates.DashboardMyEEELink = multiline(function() {/*
 <a class="Button augment-no-external" href="https://eee.uci.edu/myeee/?referrer=canvas_dashboard_myeee_link">
 <i class="icon-collection"></i> View my classes on MyEEE
 </a>
 */});
/**
 * Customize the Dashboard (front page)
 */
window.uciServices.get('dynamicQuery').exists('#DashboardOptionsMenu_Container').then(function () {
    $('#DashboardOptionsMenu_Container').before($(window.uciTemplates.DashboardMyEEELink));
});window.uciTemplates.FailedToLogInMessage= multiline(function() {/*

<div id="login-error-message">
    <p><strong>Unable to log in to EEE Canvas</strong></p>
    <p>We're unable to log you in to EEE Canvas right now.</p>

    <p>Please try clearing your cache and then try to log in again.</p>

    <p>To clear your cache:
        <ul>
            <li>Windows: <a href="https://community.canvaslms.com/docs/DOC-2604">https://community.canvaslms.com/docs/DOC-2604</a></li>
            <li>Mac OS X: <a href="https://community.canvaslms.com/docs/DOC-2603">https://community.canvaslms.com/docs/DOC-2603</a></li>
        </ul>
    </p>

    <p>If you continue to experience issues logging into Canvas, contact us: <a href="https://eee.uci.edu/contact/">https://eee.uci.edu/contact/</a></p>
</div>
 */});
/*
 * Add additional notes when user failed to log in due to SAML or other authenticated related issues
 */
(function () {
    window.uciServices.get('dynamicQuery').exists('#unauthorized_message').then(function(element) {
        window.uciServices.get('dynamicQuery').exists('.ui-state-error:contains("Failed to Log In")').then(function() {
            element.find('p:first').html($(window.uciTemplates.FailedToLogInMessage));
        });
    });
})();
window.uciTemplates.HelpDialogAdmin = multiline(function() {/*
<ul id="help-dialog-options" class="help-dialog-pane">

  <li>
    <a href="http://help.eee.uci.edu/canvas/" target="_blank">
      <span class="text">EEE Help Center</span>
      <span class="subtext">UCI-specific help documentation for EEE Canvas</span>
    </a>
  </li>

  <li>
    <a href="https://community.canvaslms.com/community/answers/guides" target="_blank">
      <span class="text">Search the Canvas Guides</span>
      <span class="subtext">Find answers to common questions</span>
    </a>
  </li>

  <li>
    <a href="https://eee.uci.edu/contact/" target="_blank">
      <span class="text">Contact Us</span>
      <span class="subtext">Report a bug or other issue to the EEE Web Team</span>
    </a>
  </li>

  <li>
    <a href="http://sites.uci.edu/canvas/" target="_blank">
      <span class="text">EEE Canvas Info Site</span>
      <span class="subtext">Learn more about EEE Canvas</span>
    </a>
  </li>

  <li>
    <a href="#create_ticket" target="_blank">
      <span class="text">[Admin] Report a Problem</span>
      <span class="subtext">If Canvas misbehaves, tell us about it</span>
    </a>
  </li>

  <li>
    <a href="https://community.canvaslms.com/community/answers" target="_blank">
      <span class="text">[Admin] Ask the Community</span>
      <span class="subtext">Get help from a Canvas expert</span>
    </a>
  </li>

  <li>
    <a href="https://community.canvaslms.com/community/ideas/feature-ideas" target="_blank">
      <span class="text">[Admin] Request a Feature</span>
      <span class="subtext">Have an idea to improve Canvas?</span>
    </a>
  </li>

</ul>
*/});
window.uciTemplates.HelpDialogNonAdmin = multiline(function() {/*
<ul id="help-dialog-options" class="help-dialog-pane">

  <li>
    <a href="http://help.eee.uci.edu/canvas/" target="_blank">
      <span class="text">EEE Help Center</span>
      <span class="subtext">UCI-specific help documentation for EEE Canvas</span>
    </a>
  </li>

  <li>
    <a href="https://community.canvaslms.com/community/answers/guides" target="_blank">
      <span class="text">Search the Canvas Guides</span>
      <span class="subtext">Find answers to common questions</span>
    </a>
  </li>

  <li>
    <a href="https://eee.uci.edu/contact/" target="_blank">
      <span class="text">Contact Us</span>
      <span class="subtext">Report a bug or other issue to the EEE Web Team</span>
    </a>
  </li>

  <li>
    <a href="http://sites.uci.edu/canvas/" target="_blank">
      <span class="text">EEE Canvas Info</span>
      <span class="subtext">Learn more about EEE Canvas</span>
    </a>
  </li>

</ul>
*/});
/**
 * Customizes the help dialog pop-up
 */
window.uciServices.get('dynamicQuery').exists('#help-dialog-options').then(function () {
    if (ENV.current_user_roles && ENV.current_user_roles.indexOf("admin") > -1) {
        $('ul#help-dialog-options').replaceWith($(window.uciTemplates.HelpDialogAdmin));
    } else {
        $('ul#help-dialog-options').replaceWith($(window.uciTemplates.HelpDialogNonAdmin));
    }
});
/*-----------------------------TOP----------------------------------------*/

/*
	Add "Show More Imports" Button on SIS Imports Page
	By: Mike Cotterman, Marion Technical College
	Disclaimer: This script is offered as-is without any warranty, so if you decide to use it you take on all the risk.
				 Also, the script may stop operating or not operate as expected if changes are made to the Canvas UI.
*/
$().ready(function(e) {
    if(location.href.search(/\/accounts\/\d+\/sis_import\/?$/)>0){
		$('div.last_batch').after('</div><button id="show_more_sis" class="Button Button--secondary">Show More Imports</button>');
		$('button#show_more_sis').click(function(){
			var count_types = new Array('abstract_courses','accounts','courses','enrollments','grade_publishing_results','group_memberships','groups','sections','terms','users','xlists');
			var workflow_states = {created: 'Created', importing: 'Importing', imported: 'Successfully Imported', imported_with_messages: 'Imported with Messages', failed_with_messages: 'Failed with Messages', failed: 'Failed'};
			var button = $(this);
			if(button.text().match(/Loading/i)) { return false; }
			button.text('Loading... Please wait...').toggleClass('Button--secondary', false);
			$.getJSON('/api/v1/accounts/self/sis_imports', function(data, status, xhr){
				var table_data = '<div id="more_sis_container" data-page="1"><table id="more_sis_table" class="table"><thead><tr><td>ID</td><td>Status</td><td>Progress</td><td>Created</td><td>Finished</td></tr></thead><tbody>';
				table_data += more_sis_table_data(data);
				table_data += '</tbody></table>';
				var links = xhr.getResponseHeader('link');
				button.after(table_data+'</div>');
				if(links != null && links.search(/rel="next"/)>0){
					$('div#more_sis_container').append('<button class="Button Button--secondary" id="more_sis_load_more">Show More Imports</button>');
					$('button#more_sis_load_more').click(function(){
						if($(this).text().match(/Loading/i)) { return false; }
						$(this).text('Loading... Please Wait...');
						var lm_button = $(this);
						var load_page = parseInt($('div#more_sis_container').attr('data-page'));
						if(load_page < 2) { load_page = 2; }
						$.getJSON('/api/v1/accounts/self/sis_imports?page='+load_page, function(data, status, xhr){
							$('table#more_sis_table tbody').append(more_sis_table_data(data));
							$('div#more_sis_container').attr('data-page',load_page+1);
							$('button#more_sis_load_more').text('Show More Imports');
						});
					});
				}else{
					$('button#more_sis_load_more').remove();
				}
				button.remove();
			})
			.fail(function() {
				$('button#show_more_sis').text('Error loading results!').toggleClass('Button--secondary',false).toggleClass('Button--danger',true).attr('id','show_more_sis');
			});
			function encodeHtml(input){
				input = input.replace('>','&gt;');
				input = input.replace('<','&lt;');
				input = input.replace('&','&amp;');
				input = input.replace('"','&quot;');
				input = input.replace('\'','&#39;');
				return input;
			}
			function more_sis_table_data(data){
				var return_data = '';
				data.sis_imports.forEach(function(val){
					var created = new Date(val.created_at);
					if(typeof(val.ended_at) == 'string'){
						var finished = new Date(val.ended_at);
						finished = finished.toLocaleString();
					}else{
						var finished = '';
					}
					var workflow_state = val.workflow_state;
					if(typeof(workflow_states[val.workflow_state]) == 'string') { workflow_state = workflow_states[val.workflow_state];}
					var ws_popover_msg = workflow_state;
					var pr_popover_msg = val.progress+'%';
					if(typeof(val.processing_warnings) == 'object' || typeof(val.processing_errors) == 'object'){
						ws_popover_msg = '<a data-tooltip=\'{"tooltipClass":"popover", "position":"right"}\' title="<div class=\'popover-content\'>';
						if(typeof(val.processing_errors) == 'object'){
							ws_popover_msg += '<h4>Errors:</h4>';
							val.processing_errors.forEach(function(ws){
								workflow_state = workflow_state.replace('Messages', 'Errors');
								var ws_count = 0;
								ws.forEach(function(w){
									if(ws_count == 0) { ws_popover_msg += '<div><strong>'+encodeHtml(w)+'</strong><ul>'; }
										else { ws_popover_msg += '<li>'+encodeHtml(w)+'</li>'; }
									ws_count++;
								});
								ws_popover_msg += '</ul></div>';
							});
						}
						if(typeof(val.processing_warnings) == 'object'){
							ws_popover_msg += '<h4>Warnings:</h4>';
							val.processing_warnings.forEach(function(ws){
								workflow_state = workflow_state.replace('Messages', 'Warnings');
								workflow_state = workflow_state.replace('Errors', 'Errors and Warnings');
								var ws_count = 0;
								ws.forEach(function(w){
									if(ws_count == 0) { ws_popover_msg += '<div><strong>'+encodeHtml(w)+'</strong><ul>'; }
										else { ws_popover_msg += '<li>'+encodeHtml(w)+'</li>'; }
									ws_count++;
								});
								ws_popover_msg += '</ul></div>';
							});
						}
						ws_popover_msg += '</ul></div>">'+workflow_state+'</a>';
					}
					if(typeof(val.data.counts) == 'object'){
						var pr_popover_content = '';
						count_types.forEach(function(ctype){
							if(val.data.counts[ctype] > 0){
								pr_popover_content += '<tr><td>'+ctype+'</td><td>'+val.data.counts[ctype]+'</td></tr>';
							}
						});
						if(pr_popover_content.length>0){
							pr_popover_msg = '<a data-tooltip=\'{"tooltipClass":"popover", "position":"left"}\' title="<div class=\'popover-content\'><h4>Imported Items:</h4><table class=\'table\'><tbody>'+pr_popover_content+'</tbody></table>">'+pr_popover_msg+'</a>';
						}
					}
					var runid = '';
					if(typeof(val.id) == 'number'){	runid = val.id;	}
					return_data += '<tr><td>'+runid+'</td><td>'+ws_popover_msg+'</td><td>'+pr_popover_msg+'<td>'+created.toLocaleString()+'</td><td>'+finished+'</td></tr>';
				});
				return return_data;
			}
		});
	}
});

/*-----------------------------BOTTOM----------------------------------------*/
window.uciTemplates.AccessTokenContactMessage = multiline(function() {/*
    <i class="icon-warning"></i> <b>Help us help you:</b><br>Get in touch to discuss Canvas Access Tokens with the
    <a href="https://eee.uci.edu/contact">EEE support team</a>
*/});
/**
 * Story:
 * When I go to the access token generation process in Canvas, I want a call to action to contact the
 * EEE team so that needs and options can be better understood and met.
 *
 * @author Su Wang <suw@uci.edu>
 */
window.uciServices.get('dynamicQuery').exists("#access_token_form").then(function () {
    $('#access_token_form table.formtable').after($(window.uciTemplates.AccessTokenContactMessage));
});/**
 * Redirect the Course Checklist buttons to EEE help docs
 */
(function () {
    window.uciServices.get('dynamicQuery').exists('#course_show_secondary').then(function() {
        window.uciServices.get('dynamicQuery').exists('a.wizard_popup_link').then(function (element) {

            // We want to make sure to unbind the click even first or else the events gets stacked and both activates
            element.unbind('click');
            element.removeClass("wizard_popup_link");

            // Rebind with the expected behavior
            element.click(function() {
                window.open('https://help.eee.uci.edu/canvas/');
                return false;
            });
        });
    });
})();
/**
 * Adds a button to the top of Canvas Grades to direct the user to WebGrades Transfer & Grade Conversion Tool
 */
if (window.ENV.GRADEBOOK_OPTIONS && window.ENV.GRADEBOOK_OPTIONS.context_sis_id) {
    var course = window.ENV.GRADEBOOK_OPTIONS.context_sis_id;
    window.uciServices.get('dynamicQuery').exists("#gradebook-toolbar").then(function (gradebookToolbar) {
        var transferButtonUrl = window.uciParameters.WEBGRADES_TRANSFER_URL + '/transfer/' + course;
        var convertButtonUrl = window.uciParameters.WEBGRADES_TRANSFER_URL + '/upload/' + course;
        // Do not use the true web grades transfer URL for sandbox courses, use a help doc instead
        if (course.indexOf(window.uciParameters.SANDBOX_SIS_PREFIX) > -1) {
            convertButtonUrl = "https://help.eee.uci.edu/canvas/sandboxes/#explore-canvas-using-a-sandbox-course";
            transferButtonUrl = convertButtonUrl;
        }
        var transferButton = $('<a id="transfer-webgrades" target="_blank" class="Button augment-grades-button augment-no-external" href="' + transferButtonUrl + '"><i class="icon-forward"></i> Transfer to WebGrades</a>');
        var convertFileButton = $('<a id="convert-file-for-import" target="_blank" class="Button augment-grades-button augment-no-external" href="' + convertButtonUrl+ '"><i class="icon-copy-course"></i> Convert file for import</a>');
        $('div.gradebook_menu .ui-buttonset:first', gradebookToolbar).before(convertFileButton);
        $('div.gradebook_menu .ui-buttonset:first', gradebookToolbar).before(transferButton);
    });
}
window.uciTemplates.MutedAssignmentsPopup = multiline(function() {/*
<div id="assignment_muter_content" tabindex="-1">
    <p>Please confirm your preferences for this assignment:</p>
    <br>
    <p>Muted Assignments:</p>
    <ul>
        <li>Students will be notified that the assignment has been muted</li>
        <li>Students will not receive any further notifications about their scores</li>
        <li>Students will see the assignment in ‘Grades’, with an indication that it is muted</li>
        <li>Transfer to WebGrades will not be available</li>
    </ul>
    <br>
    <p>Unmuted Assignments:</p>
    <ul>
        <li>Students will be notified that the assignment has been un-muted</li>
        <li>Students will receive notifications about their scores</li>
        <li>Students will see the assignment in ‘Grades’, with their score and any notes</li>
    </ul>
</div>
*/});/**
 * Customizes the help dialog pop-up
 */
function assignmentMuterContentReplace() {
    window.uciServices.get('dynamicQuery').exists('#assignment_muter_content,#mute_dialog').then(function () {
        $('div#assignment_muter_content,#mute_dialog').html($(window.uciTemplates.MutedAssignmentsPopup));
        window.uciServices.get('dynamicQuery').notExists('#assignment_muter_content,#mute_dialog').then(assignmentMuterContentReplace);
    });
}
assignmentMuterContentReplace();

window.uciTemplates.TreatUpgradedAsZeroWarning= multiline(function() {/*
 <div id="treat_ungraded_as_zero_warning">
     <i class="icon-warning"></i><b>Warning:</b> The 'Treat ungraded as 0' function adjusts the display only. Grade calculations
     are not affected.
 </div>
 */});
var detectTreatUngradedAsZeroSelected = function() {
    window.uciServices.get('dynamicQuery').notExists('#include-ungraded-list-item span.ui-icon-check').then(function () {
        $('div#treat_ungraded_as_zero_warning').remove();
    });
    window.uciServices.get('dynamicQuery').exists('#include-ungraded-list-item span.ui-icon-check').then(function () {
        window.uciServices.get('dynamicQuery').notExists('div#treat_ungraded_as_zero_warning').then(function () {
            $('div#gradebook-grid-wrapper').before($(window.uciTemplates.TreatUpgradedAsZeroWarning));
        });
    });
};

$('li#include-ungraded-list-item a').click(function() {
    detectTreatUngradedAsZeroSelected();
});

detectTreatUngradedAsZeroSelected();
window.uciTemplates.CsvUploadPrepareForImport= multiline(function() {/*
<span class="csvUploadPrepareForImport">
 <a href="https://help.eee.uci.edu/canvas/webgradestransfer/#prepare-grades-from-outside-canvas-for-import" class="icon-question external">
   <b>Prepare grades for import</b>
 </a>
 <br>
</span>
 */});
/**
 * Add AWT's help doc link to grades CSV upload area
 *
 * @author Su Wang <suw@uci.edu>
 */
window.uciServices.get('dynamicQuery').exists("#new_gradebook_upload").then(function () {
    $('#new_gradebook_upload a.icon-question').before($(window.uciTemplates.CsvUploadPrepareForImport));
});window.uciTemplates.ConcludeCourseButton = multiline(function() {/*
<a href="https://help.eee.uci.edu/canvas/create-manage/#how-to-restrict-access-to-my-course-after-the-term" class="Button Button--link Button--link--has-divider Button--course-settings">
    <i class="icon-lock"></i>Conclude this Course
</a>
*/});
(function () {
    var selector = 'a[href$="confirm_action?event=conclude"]';
    var templateString = window.uciTemplates.ConcludeCourseButton;
    if (ENV.current_user_roles && ENV.current_user_roles.indexOf("admin") == -1) {
        $(selector).replaceWith($(templateString));
    }
})();


window.uciTemplates.AddCourseEndDateInlineDoc = multiline(function() {/*
<div class="end-date-inline">
    <a href="https://help.eee.uci.edu/canvas/create-manage/#how-to-restrict-access-to-my-course-after-the-term">How can I restrict access to my course after the term?</a>
</div>
*/});
(function () {
    $('i#course_conclude_at_warning').after($(window.uciTemplates.AddCourseEndDateInlineDoc));
})();

window.uciTemplates.AddPeopleButton = multiline(function() {/*
<span class="addUsersViaEEEContainer">
    <a href="{{grandCentralPeopleListUrl}}" class="Button Button--primary pull-right icon-plus" id="addUsersViaEEE" role="button" title="Add People Via EEE">People</a>
</span>
 */});
/**
 * Customizes "Add People" button
 */
(function () {
    var userIsAdmin = (ENV.current_user_roles && ENV.current_user_roles.indexOf("admin") > -1);
    var userIsTeacher = (ENV.current_user_roles && ENV.current_user_roles.indexOf("teacher") > -1);

    /*
     * We want to insert the new "+ People" button, (that links to help docs) to the right place it used to be.
     *
     * Only display for teachers and admins
     */
    if (userIsTeacher || userIsAdmin) {
        var enrollmentSelector = "select[name='enrollment_role_id']";
        window.uciServices.get('dynamicQuery').exists(enrollmentSelector).then(function () {

            /*
             * Why does this check both cases of COURSE/course? Because Canvas is magical and sometimes it shows up as
             * `course` and sometimes as `COURSE`. It seems to be related to whether or not the course is SIS uploaded
             * or not but I'd rather not take the chance. Both fields has the same data.
             */
            var canvasCourseId = window.ENV.course.id ? window.ENV.course.id : window.ENV.COURSE.id;

            // Make sure the course has an SIS ID before we add the button, otherwise the button goes no where and
            // everyone is sad :(
            $.getJSON('/api/v1/courses/' + canvasCourseId, function(data) {
                if (data.sis_course_id) {

                    var templateString = window.uciTemplates.AddPeopleButton;
                    var buttonUrl = window.uciParameters.GRAND_CENTRAL_URL+'/courseSpace/canvasCourseId:'+canvasCourseId+'/listAdditionalStudentEnrollment';

                    templateString = templateString.replace(
                        '{{grandCentralPeopleListUrl}}',
                        buttonUrl
                    );

                    $(enrollmentSelector).before($(templateString));

                    window.uciServices.get('dynamicQuery')
                        .exists('#addUsersViaEEE.external span.ui-icon')
                        .then(function (element) {
                            element.remove();
                        })
                    ;
                }
            });
        })
    }

    /*
     * If the user IS an admin, the button is already there so add some extra text to differentiate the Admin version
     * and the non-admin version (that goes to help docs).
     *
     * Only update text for admins
     */
    if (userIsAdmin) {
        var addUserSelector = "a#addUsers";
        window.uciServices.get('dynamicQuery').exists(addUserSelector).then(function () {
            $(addUserSelector).text("People (Admin)");
        });
    }
})();
window.uciTemplates.AddWebRosterButton = multiline(function() {/*
    <a href="http://www.reg.uci.edu/perl/WebRoster" class="Button button-sidebar-wide" id="webRoster" title="Registrar WebRoster">
        <i class="icon-address-book"></i> Go to Registrar WebRoster
    </a>
 */});
(function () {
    if (/\/courses\/[^\/]+\/users/.test(window.location.pathname)) {
        var userIsAdmin = (ENV.current_user_roles && ENV.current_user_roles.indexOf("admin") > -1);
        var userIsTeacher = (ENV.current_user_roles && ENV.current_user_roles.indexOf("teacher") > -1);

        if (userIsTeacher || userIsAdmin) {
            var peopleOptionsSelector = '#people-options';
            window.uciServices.get('dynamicQuery').exists(peopleOptionsSelector).then(function () {
                var templateString = window.uciTemplates.AddWebRosterButton;
                $(templateString).insertBefore($(peopleOptionsSelector));
            });
        }
    }
})();
/*
 * Reset the define() global @see bootstrap.js.
 */
window.define = window._bootstrap.define;
