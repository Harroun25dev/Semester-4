/*!

  * Bootstrap v5.2.3 (https://getbootstrap.com/)

  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)

  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

  */

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    const t = "transitionend"
      , e = t => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith("."))
                return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
            e = i && "#" !== i ? i.trim() : null
        }
        return e
    }
      , i = t => {
        const i = e(t);
        return i && document.querySelector(i) ? i : null
    }
      , n = t => {
        const i = e(t);
        return i ? document.querySelector(i) : null
    }
      , s = e => {
        e.dispatchEvent(new Event(t))
    }
      , o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
      , a = t => {
        if (!o(t) || 0 === t.getClientRects().length)
            return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility")
          , i = t.closest("details:not([open])");
        if (!i)
            return e;
        if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i)
                return !1;
            if (null === e)
                return !1
        }
        return e
    }
      , l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , c = t => {
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
    }
      , h = () => {}
      , d = t => {
        t.offsetHeight
    }
      , u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , f = []
      , p = () => "rtl" === document.documentElement.dir
      , g = t => {
        var e;
        e = () => {
            const e = u();
            if (e) {
                const i = t.NAME
                  , n = e.fn[i];
                e.fn[i] = t.jQueryInterface,
                e.fn[i].Constructor = t,
                e.fn[i].noConflict = () => (e.fn[i] = n,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", ( () => {
            for (const t of f)
                t()
        }
        )),
        f.push(e)) : e()
    }
      , m = t => {
        "function" == typeof t && t()
    }
      , _ = (e, i, n=!0) => {
        if (!n)
            return void m(e);
        const o = (t => {
            if (!t)
                return 0;
            let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
            const n = Number.parseFloat(e)
              , s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0],
            i = i.split(",")[0],
            1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
        }
        )(i) + 5;
        let r = !1;
        const a = ({target: n}) => {
            n === i && (r = !0,
            i.removeEventListener(t, a),
            m(e))
        }
        ;
        i.addEventListener(t, a),
        setTimeout(( () => {
            r || s(i)
        }
        ), o)
    }
      , b = (t, e, i, n) => {
        const s = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1,
        n && (o = (o + s) % s),
        t[Math.max(0, Math.min(o, s - 1))])
    }
      , v = /[^.]*(?=\..*)\.|.*/
      , y = /\..*/
      , w = /::\d+$/
      , A = {};
    let E = 1;
    const T = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++
    }
    function x(t) {
        const e = O(t);
        return t.uidEvent = e,
        A[e] = A[e] || {},
        A[e]
    }
    function k(t, e, i=null) {
        return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
    }
    function L(t, e, i) {
        const n = "string" == typeof e
          , s = n ? i : e || i;
        let o = N(t);
        return C.has(o) || (o = t),
        [n, s, o]
    }
    function D(t, e, i, n, s) {
        if ("string" != typeof e || !t)
            return;
        let[o,r,a] = L(e, i, n);
        if (e in T) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ;
            r = t(r)
        }
        const l = x(t)
          , c = l[a] || (l[a] = {})
          , h = k(c, r, o ? i : null);
        if (h)
            return void (h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, ""))
          , u = o ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for (let {target: r} = s; r && r !== this; r = r.parentNode)
                    for (const a of o)
                        if (a === r)
                            return j(s, {
                                delegateTarget: r
                            }),
                            n.oneOff && P.off(t, s.type, e, i),
                            i.apply(r, [s])
            }
        }(t, i, r) : function(t, e) {
            return function i(n) {
                return j(n, {
                    delegateTarget: t
                }),
                i.oneOff && P.off(t, n.type, e),
                e.apply(t, [n])
            }
        }(t, r);
        u.delegationSelector = o ? i : null,
        u.callable = r,
        u.oneOff = s,
        u.uidEvent = d,
        c[d] = u,
        t.addEventListener(a, u, o)
    }
    function S(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)),
        delete e[i][o.uidEvent])
    }
    function I(t, e, i, n) {
        const s = e[i] || {};
        for (const o of Object.keys(s))
            if (o.includes(n)) {
                const n = s[o];
                S(t, e, i, n.callable, n.delegationSelector)
            }
    }
    function N(t) {
        return t = t.replace(y, ""),
        T[t] || t
    }
    const P = {
        on(t, e, i, n) {
            D(t, e, i, n, !1)
        },
        one(t, e, i, n) {
            D(t, e, i, n, !0)
        },
        off(t, e, i, n) {
            if ("string" != typeof e || !t)
                return;
            const [s,o,r] = L(e, i, n)
              , a = r !== e
              , l = x(t)
              , c = l[r] || {}
              , h = e.startsWith(".");
            if (void 0 === o) {
                if (h)
                    for (const i of Object.keys(l))
                        I(t, l, i, e.slice(1));
                for (const i of Object.keys(c)) {
                    const n = i.replace(w, "");
                    if (!a || e.includes(n)) {
                        const e = c[i];
                        S(t, l, r, e.callable, e.delegationSelector)
                    }
                }
            } else {
                if (!Object.keys(c).length)
                    return;
                S(t, l, r, o, s ? i : null)
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t)
                return null;
            const n = u();
            let s = null
              , o = !0
              , r = !0
              , a = !1;
            e !== N(e) && n && (s = n.Event(e, i),
            n(t).trigger(s),
            o = !s.isPropagationStopped(),
            r = !s.isImmediatePropagationStopped(),
            a = s.isDefaultPrevented());
            let l = new Event(e,{
                bubbles: o,
                cancelable: !0
            });
            return l = j(l, i),
            a && l.preventDefault(),
            r && t.dispatchEvent(l),
            l.defaultPrevented && s && s.preventDefault(),
            l
        }
    };
    function j(t, e) {
        for (const [i,n] of Object.entries(e || {}))
            try {
                t[i] = n
            } catch (e) {
                Object.defineProperty(t, i, {
                    configurable: !0,
                    get: () => n
                })
            }
        return t
    }
    const M = new Map
      , H = {
        set(t, e, i) {
            M.has(t) || M.set(t, new Map);
            const n = M.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
        },
        get: (t, e) => M.has(t) && M.get(t).get(e) || null,
        remove(t, e) {
            if (!M.has(t))
                return;
            const i = M.get(t);
            i.delete(e),
            0 === i.size && M.delete(t)
        }
    };
    function $(t) {
        if ("true" === t)
            return !0;
        if ("false" === t)
            return !1;
        if (t === Number(t).toString())
            return Number(t);
        if ("" === t || "null" === t)
            return null;
        if ("string" != typeof t)
            return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }
    function W(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }
    const B = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${W(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${W(e)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {}
              , i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const n of i) {
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                e[i] = $(t.dataset[n])
            }
            return e
        },
        getDataAttribute: (t, e) => $(t.getAttribute(`data-bs-${W(e)}`))
    };
    class F {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? B.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...o(e) ? B.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e=this.constructor.DefaultType) {
            for (const n of Object.keys(e)) {
                const s = e[n]
                  , r = t[n]
                  , a = o(r) ? "element" : null == (i = r) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(a))
                    throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
            }
            var i
        }
    }
    class z extends F {
        constructor(t, e) {
            super(),
            (t = r(t)) && (this._element = t,
            this._config = this._getConfig(e),
            H.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY),
            P.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))
                this[t] = null
        }
        _queueCallback(t, e, i=!0) {
            _(t, e, i)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        static getInstance(t) {
            return H.get(r(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.2.3"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    const q = (t, e="hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`
          , s = t.NAME;
        P.on(document, i, `[data-bs-dismiss="${s}"]`, (function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
            l(this))
                return;
            const o = n(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]()
        }
        ))
    }
    ;
    class R extends z {
        static get NAME() {
            return "alert"
        }
        close() {
            if (P.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(( () => this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            P.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = R.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    q(R, "close"),
    g(R);
    const V = '[data-bs-toggle="button"]';
    class K extends z {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = K.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    P.on(document, "click.bs.button.data-api", V, (t => {
        t.preventDefault();
        const e = t.target.closest(V);
        K.getOrCreateInstance(e).toggle()
    }
    )),
    g(K);
    const Q = {
        find: (t, e=document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e=document.documentElement) => Element.prototype.querySelector.call(e, t),
        children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
        parents(t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for (; n; )
                i.push(n),
                n = n.parentNode.closest(e);
            return i
        },
        prev(t, e) {
            let i = t.previousElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let i = t.nextElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
            return this.find(e, t).filter((t => !l(t) && a(t)))
        }
    }
      , X = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }
      , Y = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class U extends F {
        constructor(t, e) {
            super(),
            this._element = t,
            t && U.isSupported() && (this._config = this._getConfig(e),
            this._deltaX = 0,
            this._supportPointerEvents = Boolean(window.PointerEvent),
            this._initEvents())
        }
        static get Default() {
            return X
        }
        static get DefaultType() {
            return Y
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            P.off(this._element, ".bs.swipe")
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            m(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40)
                return;
            const e = t / this._deltaX;
            this._deltaX = 0,
            e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (P.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))),
            P.on(this._element, "pointerup.bs.swipe", (t => this._end(t))),
            this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.swipe", (t => this._start(t))),
            P.on(this._element, "touchmove.bs.swipe", (t => this._move(t))),
            P.on(this._element, "touchend.bs.swipe", (t => this._end(t))))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const G = "next"
      , J = "prev"
      , Z = "left"
      , tt = "right"
      , et = "slid.bs.carousel"
      , it = "carousel"
      , nt = "active"
      , st = {
        ArrowLeft: tt,
        ArrowRight: Z
    }
      , ot = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , rt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class at extends z {
        constructor(t, e) {
            super(t, e),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = Q.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === it && this.cycle()
        }
        static get Default() {
            return ot
        }
        static get DefaultType() {
            return rt
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(G)
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
        }
        prev() {
            this._slide(J)
        }
        pause() {
            this._isSliding && s(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval(( () => this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? P.one(this._element, et, ( () => this.cycle())) : this.cycle())
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void P.one(this._element, et, ( () => this.to(t)));
            const i = this._getItemIndex(this._getActive());
            if (i === t)
                return;
            const n = t > i ? G : J;
            this._slide(n, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval,
            t
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))),
            "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", ( () => this.pause())),
            P.on(this._element, "mouseleave.bs.carousel", ( () => this._maybeEnableCycle()))),
            this._config.touch && U.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const t of Q.find(".carousel-item img", this._element))
                P.on(t, "dragstart.bs.carousel", (t => t.preventDefault()));
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(Z)),
                rightCallback: () => this._slide(this._directionToOrder(tt)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout(( () => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new U(this._element,t)
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = st[t.key];
            e && (t.preventDefault(),
            this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement)
                return;
            const e = Q.findOne(".active", this._indicatorsElement);
            e.classList.remove(nt),
            e.removeAttribute("aria-current");
            const i = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(nt),
            i.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e=null) {
            if (this._isSliding)
                return;
            const i = this._getActive()
              , n = t === G
              , s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i)
                return;
            const o = this._getItemIndex(s)
              , r = e => P.trigger(this._element, e, {
                relatedTarget: s,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(i),
                to: o
            });
            if (r("slide.bs.carousel").defaultPrevented)
                return;
            if (!i || !s)
                return;
            const a = Boolean(this._interval);
            this.pause(),
            this._isSliding = !0,
            this._setActiveIndicatorElement(o),
            this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end"
              , c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c),
            d(s),
            i.classList.add(l),
            s.classList.add(l),
            this._queueCallback(( () => {
                s.classList.remove(l, c),
                s.classList.add(nt),
                i.classList.remove(nt, c, l),
                this._isSliding = !1,
                r(et)
            }
            ), i, this._isAnimated()),
            a && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return Q.findOne(".active.carousel-item", this._element)
        }
        _getItems() {
            return Q.find(".carousel-item", this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(t) {
            return p() ? t === Z ? J : G : t === Z ? G : J
        }
        _orderToDirection(t) {
            return p() ? t === J ? Z : tt : t === J ? tt : Z
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = at.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else
                    e.to(t)
            }
            ))
        }
    }
    P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function(t) {
        const e = n(this);
        if (!e || !e.classList.contains(it))
            return;
        t.preventDefault();
        const i = at.getOrCreateInstance(e)
          , s = this.getAttribute("data-bs-slide-to");
        return s ? (i.to(s),
        void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(),
        void i._maybeEnableCycle()) : (i.prev(),
        void i._maybeEnableCycle())
    }
    )),
    P.on(window, "load.bs.carousel.data-api", ( () => {
        const t = Q.find('[data-bs-ride="carousel"]');
        for (const e of t)
            at.getOrCreateInstance(e)
    }
    )),
    g(at);
    const lt = "show"
      , ct = "collapse"
      , ht = "collapsing"
      , dt = '[data-bs-toggle="collapse"]'
      , ut = {
        parent: null,
        toggle: !0
    }
      , ft = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class pt extends z {
        constructor(t, e) {
            super(t, e),
            this._isTransitioning = !1,
            this._triggerArray = [];
            const n = Q.find(dt);
            for (const t of n) {
                const e = i(t)
                  , n = Q.find(e).filter((t => t === this._element));
                null !== e && n.length && this._triggerArray.push(t)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return ut
        }
        static get DefaultType() {
            return ft
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => pt.getOrCreateInstance(t, {
                toggle: !1
            })))),
            t.length && t[0]._isTransitioning)
                return;
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            for (const e of t)
                e.hide();
            const e = this._getDimension();
            this._element.classList.remove(ct),
            this._element.classList.add(ht),
            this._element.style[e] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(( () => {
                this._isTransitioning = !1,
                this._element.classList.remove(ht),
                this._element.classList.add(ct, lt),
                this._element.style[e] = "",
                P.trigger(this._element, "shown.bs.collapse")
            }
            ), this._element, !0),
            this._element.style[e] = `${this._element[i]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            d(this._element),
            this._element.classList.add(ht),
            this._element.classList.remove(ct, lt);
            for (const t of this._triggerArray) {
                const e = n(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0,
            this._element.style[t] = "",
            this._queueCallback(( () => {
                this._isTransitioning = !1,
                this._element.classList.remove(ht),
                this._element.classList.add(ct),
                P.trigger(this._element, "hidden.bs.collapse")
            }
            ), this._element, !0)
        }
        _isShown(t=this._element) {
            return t.classList.contains(lt)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle),
            t.parent = r(t.parent),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const t = this._getFirstLevelChildren(dt);
            for (const e of t) {
                const t = n(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }
        _getFirstLevelChildren(t) {
            const e = Q.find(":scope .collapse .collapse", this._config.parent);
            return Q.find(t, this._config.parent).filter((t => !e.includes(t)))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t)
                    i.classList.toggle("collapsed", !e),
                    i.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
            this.each((function() {
                const i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }
            ))
        }
    }
    P.on(document, "click.bs.collapse.data-api", dt, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = i(this)
          , n = Q.find(e);
        for (const t of n)
            pt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
    }
    )),
    g(pt);
    var gt = "top"
      , mt = "bottom"
      , _t = "right"
      , bt = "left"
      , vt = "auto"
      , yt = [gt, mt, _t, bt]
      , wt = "start"
      , At = "end"
      , Et = "clippingParents"
      , Tt = "viewport"
      , Ct = "popper"
      , Ot = "reference"
      , xt = yt.reduce((function(t, e) {
        return t.concat([e + "-" + wt, e + "-" + At])
    }
    ), [])
      , kt = [].concat(yt, [vt]).reduce((function(t, e) {
        return t.concat([e, e + "-" + wt, e + "-" + At])
    }
    ), [])
      , Lt = "beforeRead"
      , Dt = "read"
      , St = "afterRead"
      , It = "beforeMain"
      , Nt = "main"
      , Pt = "afterMain"
      , jt = "beforeWrite"
      , Mt = "write"
      , Ht = "afterWrite"
      , $t = [Lt, Dt, St, It, Nt, Pt, jt, Mt, Ht];
    function Wt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function Bt(t) {
        if (null == t)
            return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }
    function Ft(t) {
        return t instanceof Bt(t).Element || t instanceof Element
    }
    function zt(t) {
        return t instanceof Bt(t).HTMLElement || t instanceof HTMLElement
    }
    function qt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Bt(t).ShadowRoot || t instanceof ShadowRoot)
    }
    const Rt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {}
                  , n = e.attributes[t] || {}
                  , s = e.elements[t];
                zt(s) && Wt(s) && (Object.assign(s.style, i),
                Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                }
                )))
            }
            ))
        },
        effect: function(t) {
            var e = t.state
              , i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper),
            e.styles = i,
            e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
            function() {
                Object.keys(e.elements).forEach((function(t) {
                    var n = e.elements[t]
                      , s = e.attributes[t] || {}
                      , o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                        return t[e] = "",
                        t
                    }
                    ), {});
                    zt(n) && Wt(n) && (Object.assign(n.style, o),
                    Object.keys(s).forEach((function(t) {
                        n.removeAttribute(t)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    };
    function Vt(t) {
        return t.split("-")[0]
    }
    var Kt = Math.max
      , Qt = Math.min
      , Xt = Math.round;
    function Yt() {
        var t = navigator.userAgentData;
        return null != t && t.brands ? t.brands.map((function(t) {
            return t.brand + "/" + t.version
        }
        )).join(" ") : navigator.userAgent
    }
    function Ut() {
        return !/^((?!chrome|android).)*safari/i.test(Yt())
    }
    function Gt(t, e, i) {
        void 0 === e && (e = !1),
        void 0 === i && (i = !1);
        var n = t.getBoundingClientRect()
          , s = 1
          , o = 1;
        e && zt(t) && (s = t.offsetWidth > 0 && Xt(n.width) / t.offsetWidth || 1,
        o = t.offsetHeight > 0 && Xt(n.height) / t.offsetHeight || 1);
        var r = (Ft(t) ? Bt(t) : window).visualViewport
          , a = !Ut() && i
          , l = (n.left + (a && r ? r.offsetLeft : 0)) / s
          , c = (n.top + (a && r ? r.offsetTop : 0)) / o
          , h = n.width / s
          , d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        }
    }
    function Jt(t) {
        var e = Gt(t)
          , i = t.offsetWidth
          , n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width),
        Math.abs(e.height - n) <= 1 && (n = e.height),
        {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }
    function Zt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (i && qt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n))
                    return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }
    function te(t) {
        return Bt(t).getComputedStyle(t)
    }
    function ee(t) {
        return ["table", "td", "th"].indexOf(Wt(t)) >= 0
    }
    function ie(t) {
        return ((Ft(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function ne(t) {
        return "html" === Wt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || ie(t)
    }
    function se(t) {
        return zt(t) && "fixed" !== te(t).position ? t.offsetParent : null
    }
    function oe(t) {
        for (var e = Bt(t), i = se(t); i && ee(i) && "static" === te(i).position; )
            i = se(i);
        return i && ("html" === Wt(i) || "body" === Wt(i) && "static" === te(i).position) ? e : i || function(t) {
            var e = /firefox/i.test(Yt());
            if (/Trident/i.test(Yt()) && zt(t) && "fixed" === te(t).position)
                return null;
            var i = ne(t);
            for (qt(i) && (i = i.host); zt(i) && ["html", "body"].indexOf(Wt(i)) < 0; ) {
                var n = te(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter)
                    return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }
    function re(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    function ae(t, e, i) {
        return Kt(t, Qt(e, i))
    }
    function le(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }
    function ce(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t,
            e
        }
        ), {})
    }
    const he = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = Vt(i.placement), l = re(a), c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return le("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : ce(t, yt))
                }(s.padding, i)
                  , d = Jt(o)
                  , u = "y" === l ? gt : bt
                  , f = "y" === l ? mt : _t
                  , p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c]
                  , g = r[l] - i.rects.reference[l]
                  , m = oe(o)
                  , _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0
                  , b = p / 2 - g / 2
                  , v = h[u]
                  , y = _ - d[c] - h[f]
                  , w = _ / 2 - d[c] / 2 + b
                  , A = ae(v, w, y)
                  , E = l;
                i.modifiersData[n] = ((e = {})[E] = A,
                e.centerOffset = A - w,
                e)
            }
        },
        effect: function(t) {
            var e = t.state
              , i = t.options.element
              , n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Zt(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function de(t) {
        return t.split("-")[1]
    }
    var ue = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function fe(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u, p = r.y, g = void 0 === p ? 0 : p, m = "function" == typeof h ? h({
            x: f,
            y: g
        }) : {
            x: f,
            y: g
        };
        f = m.x,
        g = m.y;
        var _ = r.hasOwnProperty("x")
          , b = r.hasOwnProperty("y")
          , v = bt
          , y = gt
          , w = window;
        if (c) {
            var A = oe(i)
              , E = "clientHeight"
              , T = "clientWidth";
            A === Bt(i) && "static" !== te(A = ie(i)).position && "absolute" === a && (E = "scrollHeight",
            T = "scrollWidth"),
            (s === gt || (s === bt || s === _t) && o === At) && (y = mt,
            g -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height,
            g *= l ? 1 : -1),
            s !== bt && (s !== gt && s !== mt || o !== At) || (v = _t,
            f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width,
            f *= l ? 1 : -1)
        }
        var C, O = Object.assign({
            position: a
        }, c && ue), x = !0 === h ? function(t) {
            var e = t.x
              , i = t.y
              , n = window.devicePixelRatio || 1;
            return {
                x: Xt(e * n) / n || 0,
                y: Xt(i * n) / n || 0
            }
        }({
            x: f,
            y: g
        }) : {
            x: f,
            y: g
        };
        return f = x.x,
        g = x.y,
        l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "",
        C[v] = _ ? "0" : "",
        C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)",
        C)) : Object.assign({}, O, ((e = {})[y] = b ? g + "px" : "",
        e[v] = _ ? f + "px" : "",
        e.transform = "",
        e))
    }
    const pe = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = i.gpuAcceleration
              , s = void 0 === n || n
              , o = i.adaptive
              , r = void 0 === o || o
              , a = i.roundOffsets
              , l = void 0 === a || a
              , c = {
                placement: Vt(e.placement),
                variation: de(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, fe(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, fe(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))),
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    };
    var ge = {
        passive: !0
    };
    const me = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , i = t.instance
              , n = t.options
              , s = n.scroll
              , o = void 0 === s || s
              , r = n.resize
              , a = void 0 === r || r
              , l = Bt(e.elements.popper)
              , c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function(t) {
                t.addEventListener("scroll", i.update, ge)
            }
            )),
            a && l.addEventListener("resize", i.update, ge),
            function() {
                o && c.forEach((function(t) {
                    t.removeEventListener("scroll", i.update, ge)
                }
                )),
                a && l.removeEventListener("resize", i.update, ge)
            }
        },
        data: {}
    };
    var _e = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function be(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return _e[t]
        }
        ))
    }
    var ve = {
        start: "end",
        end: "start"
    };
    function ye(t) {
        return t.replace(/start|end/g, (function(t) {
            return ve[t]
        }
        ))
    }
    function we(t) {
        var e = Bt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function Ae(t) {
        return Gt(ie(t)).left + we(t).scrollLeft
    }
    function Ee(t) {
        var e = te(t)
          , i = e.overflow
          , n = e.overflowX
          , s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }
    function Te(t) {
        return ["html", "body", "#document"].indexOf(Wt(t)) >= 0 ? t.ownerDocument.body : zt(t) && Ee(t) ? t : Te(ne(t))
    }
    function Ce(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Te(t)
          , s = n === (null == (i = t.ownerDocument) ? void 0 : i.body)
          , o = Bt(n)
          , r = s ? [o].concat(o.visualViewport || [], Ee(n) ? n : []) : n
          , a = e.concat(r);
        return s ? a : a.concat(Ce(ne(r)))
    }
    function Oe(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function xe(t, e, i) {
        return e === Tt ? Oe(function(t, e) {
            var i = Bt(t)
              , n = ie(t)
              , s = i.visualViewport
              , o = n.clientWidth
              , r = n.clientHeight
              , a = 0
              , l = 0;
            if (s) {
                o = s.width,
                r = s.height;
                var c = Ut();
                (c || !c && "fixed" === e) && (a = s.offsetLeft,
                l = s.offsetTop)
            }
            return {
                width: o,
                height: r,
                x: a + Ae(t),
                y: l
            }
        }(t, i)) : Ft(e) ? function(t, e) {
            var i = Gt(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop,
            i.left = i.left + t.clientLeft,
            i.bottom = i.top + t.clientHeight,
            i.right = i.left + t.clientWidth,
            i.width = t.clientWidth,
            i.height = t.clientHeight,
            i.x = i.left,
            i.y = i.top,
            i
        }(e, i) : Oe(function(t) {
            var e, i = ie(t), n = we(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = Kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = Kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + Ae(t), l = -n.scrollTop;
            return "rtl" === te(s || i).direction && (a += Kt(i.clientWidth, s ? s.clientWidth : 0) - o),
            {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(ie(t)))
    }
    function ke(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? Vt(s) : null, r = s ? de(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
        case gt:
            e = {
                x: a,
                y: i.y - n.height
            };
            break;
        case mt:
            e = {
                x: a,
                y: i.y + i.height
            };
            break;
        case _t:
            e = {
                x: i.x + i.width,
                y: l
            };
            break;
        case bt:
            e = {
                x: i.x - n.width,
                y: l
            };
            break;
        default:
            e = {
                x: i.x,
                y: i.y
            }
        }
        var c = o ? re(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
            case wt:
                e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                break;
            case At:
                e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }
    function Le(t, e) {
        void 0 === e && (e = {});
        var i = e
          , n = i.placement
          , s = void 0 === n ? t.placement : n
          , o = i.strategy
          , r = void 0 === o ? t.strategy : o
          , a = i.boundary
          , l = void 0 === a ? Et : a
          , c = i.rootBoundary
          , h = void 0 === c ? Tt : c
          , d = i.elementContext
          , u = void 0 === d ? Ct : d
          , f = i.altBoundary
          , p = void 0 !== f && f
          , g = i.padding
          , m = void 0 === g ? 0 : g
          , _ = le("number" != typeof m ? m : ce(m, yt))
          , b = u === Ct ? Ot : Ct
          , v = t.rects.popper
          , y = t.elements[p ? b : u]
          , w = function(t, e, i, n) {
            var s = "clippingParents" === e ? function(t) {
                var e = Ce(ne(t))
                  , i = ["absolute", "fixed"].indexOf(te(t).position) >= 0 && zt(t) ? oe(t) : t;
                return Ft(i) ? e.filter((function(t) {
                    return Ft(t) && Zt(t, i) && "body" !== Wt(t)
                }
                )) : []
            }(t) : [].concat(e)
              , o = [].concat(s, [i])
              , r = o[0]
              , a = o.reduce((function(e, i) {
                var s = xe(t, i, n);
                return e.top = Kt(s.top, e.top),
                e.right = Qt(s.right, e.right),
                e.bottom = Qt(s.bottom, e.bottom),
                e.left = Kt(s.left, e.left),
                e
            }
            ), xe(t, r, n));
            return a.width = a.right - a.left,
            a.height = a.bottom - a.top,
            a.x = a.left,
            a.y = a.top,
            a
        }(Ft(y) ? y : y.contextElement || ie(t.elements.popper), l, h, r)
          , A = Gt(t.elements.reference)
          , E = ke({
            reference: A,
            element: v,
            strategy: "absolute",
            placement: s
        })
          , T = Oe(Object.assign({}, v, E))
          , C = u === Ct ? T : A
          , O = {
            top: w.top - C.top + _.top,
            bottom: C.bottom - w.bottom + _.bottom,
            left: w.left - C.left + _.left,
            right: C.right - w.right + _.right
        }
          , x = t.modifiersData.offset;
        if (u === Ct && x) {
            var k = x[s];
            Object.keys(O).forEach((function(t) {
                var e = [_t, mt].indexOf(t) >= 0 ? 1 : -1
                  , i = [gt, mt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e
            }
            ))
        }
        return O
    }
    function De(t, e) {
        void 0 === e && (e = {});
        var i = e
          , n = i.placement
          , s = i.boundary
          , o = i.rootBoundary
          , r = i.padding
          , a = i.flipVariations
          , l = i.allowedAutoPlacements
          , c = void 0 === l ? kt : l
          , h = de(n)
          , d = h ? a ? xt : xt.filter((function(t) {
            return de(t) === h
        }
        )) : yt
          , u = d.filter((function(t) {
            return c.indexOf(t) >= 0
        }
        ));
        0 === u.length && (u = d);
        var f = u.reduce((function(e, i) {
            return e[i] = Le(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[Vt(i)],
            e
        }
        ), {});
        return Object.keys(f).sort((function(t, e) {
            return f[t] - f[e]
        }
        ))
    }
    const Se = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, g = i.allowedAutoPlacements, m = e.options.placement, _ = Vt(m), b = l || (_ !== m && p ? function(t) {
                    if (Vt(t) === vt)
                        return [];
                    var e = be(t);
                    return [ye(t), e, ye(e)]
                }(m) : [be(m)]), v = [m].concat(b).reduce((function(t, i) {
                    return t.concat(Vt(i) === vt ? De(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: g
                    }) : i)
                }
                ), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
                    var O = v[C]
                      , x = Vt(O)
                      , k = de(O) === wt
                      , L = [gt, mt].indexOf(x) >= 0
                      , D = L ? "width" : "height"
                      , S = Le(e, {
                        placement: O,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    })
                      , I = L ? k ? _t : bt : k ? mt : gt;
                    y[D] > w[D] && (I = be(I));
                    var N = be(I)
                      , P = [];
                    if (o && P.push(S[x] <= 0),
                    a && P.push(S[I] <= 0, S[N] <= 0),
                    P.every((function(t) {
                        return t
                    }
                    ))) {
                        T = O,
                        E = !1;
                        break
                    }
                    A.set(O, P)
                }
                if (E)
                    for (var j = function(t) {
                        var e = v.find((function(e) {
                            var i = A.get(e);
                            if (i)
                                return i.slice(0, t).every((function(t) {
                                    return t
                                }
                                ))
                        }
                        ));
                        if (e)
                            return T = e,
                            "break"
                    }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--)
                        ;
                e.placement !== T && (e.modifiersData[n]._skip = !0,
                e.placement = T,
                e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function Ie(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }),
        {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }
    function Ne(t) {
        return [gt, _t, mt, bt].some((function(e) {
            return t[e] >= 0
        }
        ))
    }
    const Pe = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , i = t.name
              , n = e.rects.reference
              , s = e.rects.popper
              , o = e.modifiersData.preventOverflow
              , r = Le(e, {
                elementContext: "reference"
            })
              , a = Le(e, {
                altBoundary: !0
            })
              , l = Ie(r, n)
              , c = Ie(a, s, o)
              , h = Ne(l)
              , d = Ne(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            },
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            })
        }
    }
      , je = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = t.name
              , s = i.offset
              , o = void 0 === s ? [0, 0] : s
              , r = kt.reduce((function(t, i) {
                return t[i] = function(t, e, i) {
                    var n = Vt(t)
                      , s = [bt, gt].indexOf(n) >= 0 ? -1 : 1
                      , o = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i
                      , r = o[0]
                      , a = o[1];
                    return r = r || 0,
                    a = (a || 0) * s,
                    [bt, _t].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    }
                }(i, e.rects, o),
                t
            }
            ), {})
              , a = r[e.placement]
              , l = a.x
              , c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l,
            e.modifiersData.popperOffsets.y += c),
            e.modifiersData[n] = r
        }
    }
      , Me = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , i = t.name;
            e.modifiersData[i] = ke({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    }
      , He = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = t.name
              , s = i.mainAxis
              , o = void 0 === s || s
              , r = i.altAxis
              , a = void 0 !== r && r
              , l = i.boundary
              , c = i.rootBoundary
              , h = i.altBoundary
              , d = i.padding
              , u = i.tether
              , f = void 0 === u || u
              , p = i.tetherOffset
              , g = void 0 === p ? 0 : p
              , m = Le(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            })
              , _ = Vt(e.placement)
              , b = de(e.placement)
              , v = !b
              , y = re(_)
              , w = "x" === y ? "y" : "x"
              , A = e.modifiersData.popperOffsets
              , E = e.rects.reference
              , T = e.rects.popper
              , C = "function" == typeof g ? g(Object.assign({}, e.rects, {
                placement: e.placement
            })) : g
              , O = "number" == typeof C ? {
                mainAxis: C,
                altAxis: C
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, C)
              , x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null
              , k = {
                x: 0,
                y: 0
            };
            if (A) {
                if (o) {
                    var L, D = "y" === y ? gt : bt, S = "y" === y ? mt : _t, I = "y" === y ? "height" : "width", N = A[y], P = N + m[D], j = N - m[S], M = f ? -T[I] / 2 : 0, H = b === wt ? E[I] : T[I], $ = b === wt ? -T[I] : -E[I], W = e.elements.arrow, B = f && W ? Jt(W) : {
                        width: 0,
                        height: 0
                    }, F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, z = F[D], q = F[S], R = ae(0, E[I], B[I]), V = v ? E[I] / 2 - M - R - z - O.mainAxis : H - R - z - O.mainAxis, K = v ? -E[I] / 2 + M + R + q + O.mainAxis : $ + R + q + O.mainAxis, Q = e.elements.arrow && oe(e.elements.arrow), X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = N + K - Y, G = ae(f ? Qt(P, N + V - Y - X) : P, N, f ? Kt(j, U) : j);
                    A[y] = G,
                    k[y] = G - N
                }
                if (a) {
                    var J, Z = "x" === y ? gt : bt, tt = "x" === y ? mt : _t, et = A[w], it = "y" === w ? "height" : "width", nt = et + m[Z], st = et - m[tt], ot = -1 !== [gt, bt].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0, at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis, lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function(t, e, i) {
                        var n = ae(t, e, i);
                        return n > i ? i : n
                    }(at, et, lt) : ae(f ? at : nt, et, f ? lt : st);
                    A[w] = ct,
                    k[w] = ct - et
                }
                e.modifiersData[n] = k
            }
        },
        requiresIfExists: ["offset"]
    };
    function $e(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = zt(e), r = zt(e) && function(t) {
            var e = t.getBoundingClientRect()
              , i = Xt(e.width) / t.offsetWidth || 1
              , n = Xt(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n
        }(e), a = ie(e), l = Gt(t, r, i), c = {
            scrollLeft: 0,
            scrollTop: 0
        }, h = {
            x: 0,
            y: 0
        };
        return (o || !o && !i) && (("body" !== Wt(e) || Ee(a)) && (c = (n = e) !== Bt(n) && zt(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : we(n)),
        zt(e) ? ((h = Gt(e, !0)).x += e.clientLeft,
        h.y += e.clientTop) : a && (h.x = Ae(a))),
        {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        }
    }
    function We(t) {
        var e = new Map
          , i = new Set
          , n = [];
        function s(t) {
            i.add(t.name),
            [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n)
                }
            }
            )),
            n.push(t)
        }
        return t.forEach((function(t) {
            e.set(t.name, t)
        }
        )),
        t.forEach((function(t) {
            i.has(t.name) || s(t)
        }
        )),
        n
    }
    var Be = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Fe() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }
        ))
    }
    function ze(t) {
        void 0 === t && (t = {});
        var e = t
          , i = e.defaultModifiers
          , n = void 0 === i ? [] : i
          , s = e.defaultOptions
          , o = void 0 === s ? Be : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Be, o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function(i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    d(),
                    a.options = Object.assign({}, o, a.options, s),
                    a.scrollParents = {
                        reference: Ft(t) ? Ce(t) : t.contextElement ? Ce(t.contextElement) : [],
                        popper: Ce(e)
                    };
                    var r, c, u = function(t) {
                        var e = We(t);
                        return $t.reduce((function(t, i) {
                            return t.concat(e.filter((function(t) {
                                return t.phase === i
                            }
                            )))
                        }
                        ), [])
                    }((r = [].concat(n, a.options.modifiers),
                    c = r.reduce((function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e,
                        t
                    }
                    ), {}),
                    Object.keys(c).map((function(t) {
                        return c[t]
                    }
                    ))));
                    return a.orderedModifiers = u.filter((function(t) {
                        return t.enabled
                    }
                    )),
                    a.orderedModifiers.forEach((function(t) {
                        var e = t.name
                          , i = t.options
                          , n = void 0 === i ? {} : i
                          , s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l.push(o || function() {}
                            )
                        }
                    }
                    )),
                    h.update()
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements
                          , e = t.reference
                          , i = t.popper;
                        if (Fe(e, i)) {
                            a.rects = {
                                reference: $e(e, oe(i), "fixed" === a.options.strategy),
                                popper: Jt(i)
                            },
                            a.reset = !1,
                            a.placement = a.options.placement,
                            a.orderedModifiers.forEach((function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }
                            ));
                            for (var n = 0; n < a.orderedModifiers.length; n++)
                                if (!0 !== a.reset) {
                                    var s = a.orderedModifiers[n]
                                      , o = s.fn
                                      , r = s.options
                                      , l = void 0 === r ? {} : r
                                      , d = s.name;
                                    "function" == typeof o && (a = o({
                                        state: a,
                                        options: l,
                                        name: d,
                                        instance: h
                                    }) || a)
                                } else
                                    a.reset = !1,
                                    n = -1
                        }
                    }
                },
                update: (s = function() {
                    return new Promise((function(t) {
                        h.forceUpdate(),
                        t(a)
                    }
                    ))
                }
                ,
                function() {
                    return r || (r = new Promise((function(t) {
                        Promise.resolve().then((function() {
                            r = void 0,
                            t(s())
                        }
                        ))
                    }
                    ))),
                    r
                }
                ),
                destroy: function() {
                    d(),
                    c = !0
                }
            };
            if (!Fe(t, e))
                return h;
            function d() {
                l.forEach((function(t) {
                    return t()
                }
                )),
                l = []
            }
            return h.setOptions(i).then((function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            }
            )),
            h
        }
    }
    var qe = ze()
      , Re = ze({
        defaultModifiers: [me, Me, pe, Rt]
    })
      , Ve = ze({
        defaultModifiers: [me, Me, pe, Rt, je, Se, He, he, Pe]
    });
    const Ke = Object.freeze(Object.defineProperty({
        __proto__: null,
        popperGenerator: ze,
        detectOverflow: Le,
        createPopperBase: qe,
        createPopper: Ve,
        createPopperLite: Re,
        top: gt,
        bottom: mt,
        right: _t,
        left: bt,
        auto: vt,
        basePlacements: yt,
        start: wt,
        end: At,
        clippingParents: Et,
        viewport: Tt,
        popper: Ct,
        reference: Ot,
        variationPlacements: xt,
        placements: kt,
        beforeRead: Lt,
        read: Dt,
        afterRead: St,
        beforeMain: It,
        main: Nt,
        afterMain: Pt,
        beforeWrite: jt,
        write: Mt,
        afterWrite: Ht,
        modifierPhases: $t,
        applyStyles: Rt,
        arrow: he,
        computeStyles: pe,
        eventListeners: me,
        flip: Se,
        hide: Pe,
        offset: je,
        popperOffsets: Me,
        preventOverflow: He
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Qe = "dropdown"
      , Xe = "ArrowUp"
      , Ye = "ArrowDown"
      , Ue = "click.bs.dropdown.data-api"
      , Ge = "keydown.bs.dropdown.data-api"
      , Je = "show"
      , Ze = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , ti = `${Ze}.show`
      , ei = ".dropdown-menu"
      , ii = p() ? "top-end" : "top-start"
      , ni = p() ? "top-start" : "top-end"
      , si = p() ? "bottom-end" : "bottom-start"
      , oi = p() ? "bottom-start" : "bottom-end"
      , ri = p() ? "left-start" : "right-start"
      , ai = p() ? "right-start" : "left-start"
      , li = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }
      , ci = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class hi extends z {
        constructor(t, e) {
            super(t, e),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = Q.next(this._element, ei)[0] || Q.prev(this._element, ei)[0] || Q.findOne(ei, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return li
        }
        static get DefaultType() {
            return ci
        }
        static get NAME() {
            return Qe
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (l(this._element) || this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (this._createPopper(),
                "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of [].concat(...document.body.children))
                        P.on(t, "mouseover", h);
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(Je),
                this._element.classList.add(Je),
                P.trigger(this._element, "shown.bs.dropdown", t)
            }
        }
        hide() {
            if (l(this._element) || !this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        P.off(t, "mouseover", h);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(Je),
                this._element.classList.remove(Je),
                this._element.setAttribute("aria-expanded", "false"),
                B.removeDataAttribute(this._menu, "popper"),
                P.trigger(this._element, "hidden.bs.dropdown", t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (void 0 === Ke)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = Ve(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains(Je)
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend"))
                return ri;
            if (t.classList.contains("dropstart"))
                return ai;
            if (t.classList.contains("dropup-center"))
                return "top";
            if (t.classList.contains("dropdown-center"))
                return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"),
            t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: t, target: e}) {
            const i = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => a(t)));
            i.length && b(i, e, t === Ye, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key)
                return;
            const e = Q.find(ti);
            for (const i of e) {
                const e = hi.getInstance(i);
                if (!e || !1 === e._config.autoClose)
                    continue;
                const n = t.composedPath()
                  , s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s)
                    continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                    continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t),
                e._completeHide(o)
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName)
              , i = "Escape" === t.key
              , n = [Xe, Ye].includes(t.key);
            if (!n && !i)
                return;
            if (e && !i)
                return;
            t.preventDefault();
            const s = this.matches(Ze) ? this : Q.prev(this, Ze)[0] || Q.next(this, Ze)[0] || Q.findOne(Ze, t.delegateTarget.parentNode)
              , o = hi.getOrCreateInstance(s);
            if (n)
                return t.stopPropagation(),
                o.show(),
                void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(),
            o.hide(),
            s.focus())
        }
    }
    P.on(document, Ge, Ze, hi.dataApiKeydownHandler),
    P.on(document, Ge, ei, hi.dataApiKeydownHandler),
    P.on(document, Ue, hi.clearMenus),
    P.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus),
    P.on(document, Ue, Ze, (function(t) {
        t.preventDefault(),
        hi.getOrCreateInstance(this).toggle()
    }
    )),
    g(hi);
    const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , ui = ".sticky-top"
      , fi = "padding-right"
      , pi = "margin-right";
    class gi {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, fi, (e => e + t)),
            this._setElementAttributes(di, fi, (e => e + t)),
            this._setElementAttributes(ui, pi, (e => e - t))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, fi),
            this._resetElementAttributes(di, fi),
            this._resetElementAttributes(ui, pi)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n)
                    return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
            }
            ))
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && B.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = B.getDataAttribute(t, e);
                null !== i ? (B.removeDataAttribute(t, e),
                t.style.setProperty(e, i)) : t.style.removeProperty(e)
            }
            ))
        }
        _applyManipulationCallback(t, e) {
            if (o(t))
                e(t);
            else
                for (const i of Q.find(t, this._element))
                    e(i)
        }
    }
    const mi = "show"
      , _i = "mousedown.bs.backdrop"
      , bi = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }
      , vi = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class yi extends F {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return bi
        }
        static get DefaultType() {
            return vi
        }
        static get NAME() {
            return "backdrop"
        }
        show(t) {
            if (!this._config.isVisible)
                return void m(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e),
            e.classList.add(mi),
            this._emulateAnimation(( () => {
                m(t)
            }
            ))
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(mi),
            this._emulateAnimation(( () => {
                this.dispose(),
                m(t)
            }
            ))) : m(t)
        }
        dispose() {
            this._isAppended && (P.off(this._element, _i),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = r(t.rootElement),
            t
        }
        _append() {
            if (this._isAppended)
                return;
            const t = this._getElement();
            this._config.rootElement.append(t),
            P.on(t, _i, ( () => {
                m(this._config.clickCallback)
            }
            )),
            this._isAppended = !0
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated)
        }
    }
    const wi = ".bs.focustrap"
      , Ai = "backward"
      , Ei = {
        autofocus: !0,
        trapElement: null
    }
      , Ti = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class Ci extends F {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return Ei
        }
        static get DefaultType() {
            return Ti
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            P.off(document, wi),
            P.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))),
            P.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            P.off(document, wi))
        }
        _handleFocusin(t) {
            const {trapElement: e} = this._config;
            if (t.target === document || t.target === e || e.contains(t.target))
                return;
            const i = Q.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === Ai ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ai : "forward")
        }
    }
    const Oi = "hidden.bs.modal"
      , xi = "show.bs.modal"
      , ki = "modal-open"
      , Li = "show"
      , Di = "modal-static"
      , Si = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }
      , Ii = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class Ni extends z {
        constructor(t, e) {
            super(t, e),
            this._dialog = Q.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new gi,
            this._addEventListeners()
        }
        static get Default() {
            return Si
        }
        static get DefaultType() {
            return Ii
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || P.trigger(this._element, xi, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(ki),
            this._adjustDialog(),
            this._backdrop.show(( () => this._showElement(t))))
        }
        hide() {
            this._isShown && !this._isTransitioning && (P.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove(Li),
            this._queueCallback(( () => this._hideModal()), this._element, this._isAnimated())))
        }
        dispose() {
            for (const t of [window, this._dialog])
                P.off(t, ".bs.modal");
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new yi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Ci({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            const e = Q.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
            d(this._element),
            this._element.classList.add(Li),
            this._queueCallback(( () => {
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                P.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            ), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.modal", (t => {
                if ("Escape" === t.key)
                    return this._config.keyboard ? (t.preventDefault(),
                    void this.hide()) : void this._triggerBackdropTransition()
            }
            )),
            P.on(window, "resize.bs.modal", ( () => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            )),
            P.on(this._element, "mousedown.dismiss.bs.modal", (t => {
                P.one(this._element, "click.dismiss.bs.modal", (e => {
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }
                ))
            }
            ))
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide(( () => {
                document.body.classList.remove(ki),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                P.trigger(this._element, Oi)
            }
            ))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(Di) || (t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(Di),
            this._queueCallback(( () => {
                this._element.classList.remove(Di),
                this._queueCallback(( () => {
                    this._element.style.overflowY = e
                }
                ), this._dialog)
            }
            ), this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = Ni.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }
            ))
        }
    }
    P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = n(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        P.one(e, xi, (t => {
            t.defaultPrevented || P.one(e, Oi, ( () => {
                a(this) && this.focus()
            }
            ))
        }
        ));
        const i = Q.findOne(".modal.show");
        i && Ni.getInstance(i).hide(),
        Ni.getOrCreateInstance(e).toggle(this)
    }
    )),
    q(Ni),
    g(Ni);
    const Pi = "show"
      , ji = "showing"
      , Mi = "hiding"
      , Hi = ".offcanvas.show"
      , $i = "hidePrevented.bs.offcanvas"
      , Wi = "hidden.bs.offcanvas"
      , Bi = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , Fi = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class zi extends z {
        constructor(t, e) {
            super(t, e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return Bi
        }
        static get DefaultType() {
            return Fi
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || (new gi).hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(ji),
            this._queueCallback(( () => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(),
                this._element.classList.add(Pi),
                this._element.classList.remove(ji),
                P.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            ), this._element, !0))
        }
        hide() {
            this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add(Mi),
            this._backdrop.hide(),
            this._queueCallback(( () => {
                this._element.classList.remove(Pi, Mi),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || (new gi).reset(),
                P.trigger(this._element, Wi)
            }
            ), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new yi({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, $i)
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new Ci({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, $i))
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = zi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = n(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        l(this))
            return;
        P.one(e, Wi, ( () => {
            a(this) && this.focus()
        }
        ));
        const i = Q.findOne(Hi);
        i && i !== e && zi.getInstance(i).hide(),
        zi.getOrCreateInstance(e).toggle(this)
    }
    )),
    P.on(window, "load.bs.offcanvas.data-api", ( () => {
        for (const t of Q.find(Hi))
            zi.getOrCreateInstance(t).show()
    }
    )),
    P.on(window, "resize.bs.offcanvas", ( () => {
        for (const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(t).position && zi.getOrCreateInstance(t).hide()
    }
    )),
    q(zi),
    g(zi);
    const qi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , Vi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , Ki = (t, e) => {
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !qi.has(i) || Boolean(Ri.test(t.nodeValue) || Vi.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
    }
      , Qi = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , Xi = {
        allowList: Qi,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }
      , Yi = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }
      , Ui = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class Gi extends F {
        constructor(t) {
            super(),
            this._config = this._getConfig(t)
        }
        static get Default() {
            return Xi
        }
        static get DefaultType() {
            return Yi
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t),
            this._config.content = {
                ...this._config.content,
                ...t
            },
            this
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e,i] of Object.entries(this._config.content))
                this._setContent(t, i, e);
            const e = t.children[0]
              , i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")),
            e
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t),
            this._checkContent(t.content)
        }
        _checkContent(t) {
            for (const [e,i] of Object.entries(t))
                super._typeCheckConfig({
                    selector: e,
                    entry: i
                }, Ui)
        }
        _setContent(t, e, i) {
            const n = Q.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length)
                    return t;
                if (i && "function" == typeof i)
                    return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html")
                  , s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s) {
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue
                    }
                    const n = [].concat(...t.attributes)
                      , s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n)
                        Ki(e, s) || t.removeAttribute(e.nodeName)
                }
                return n.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t
        }
        _putElementInTemplate(t, e) {
            if (this._config.html)
                return e.innerHTML = "",
                void e.append(t);
            e.textContent = t.textContent
        }
    }
    const Ji = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Zi = "fade"
      , tn = "show"
      , en = ".modal"
      , nn = "hide.bs.modal"
      , sn = "hover"
      , on = "focus"
      , rn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: p() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: p() ? "right" : "left"
    }
      , an = {
        allowList: Qi,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 0],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }
      , ln = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class cn extends z {
        constructor(t, e) {
            if (void 0 === Ke)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = null,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this._newContent = null,
            this.tip = null,
            this._setListeners(),
            this._config.selector || this._fixTitle()
        }
        static get Default() {
            return an
        }
        static get DefaultType() {
            return ln
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click,
            this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout),
            P.off(this._element.closest(en), nn, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
                return;
            const t = P.trigger(this._element, this.constructor.eventName("show"))
              , e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e)
                return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {container: n} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i),
            P.trigger(this._element, this.constructor.eventName("inserted"))),
            this._popper = this._createPopper(i),
            i.classList.add(tn),
            "ontouchstart"in document.documentElement)
                for (const t of [].concat(...document.body.children))
                    P.on(t, "mouseover", h);
            this._queueCallback(( () => {
                P.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                this._isHovered = !1
            }
            ), this.tip, this._isAnimated())
        }
        hide() {
            if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(tn),
                "ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        P.off(t, "mouseover", h);
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                this._isHovered = null,
                this._queueCallback(( () => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    P.trigger(this._element, this.constructor.eventName("hidden")))
                }
                ), this.tip, this._isAnimated())
            }
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e)
                return null;
            e.classList.remove(Zi, tn),
            e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = (t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }
            )(this.constructor.NAME).toString();
            return e.setAttribute("id", i),
            this._isAnimated() && e.classList.add(Zi),
            e
        }
        setContent(t) {
            this._newContent = t,
            this._isShown() && (this._disposePopper(),
            this.show())
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Gi({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Zi)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(tn)
        }
        _createPopper(t) {
            const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement
              , i = rn[e.toUpperCase()];
            return Ve(this._element, t, this._getPopperConfig(i))
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
                        this._initializeOnDelegatedTarget(t).toggle()
                    }
                    ));
                else if ("manual" !== e) {
                    const t = e === sn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                      , i = e === sn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    P.on(this._element, t, this._config.selector, (t => {
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusin" === t.type ? on : sn] = !0,
                        e._enter()
                    }
                    )),
                    P.on(this._element, i, this._config.selector, (t => {
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusout" === t.type ? on : sn] = e._element.contains(t.relatedTarget),
                        e._leave()
                    }
                    ))
                }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }
            ,
            P.on(this._element.closest(en), nn, this._hideModalHandler)
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("data-bs-original-title", t),
            this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
            this._setTimeout(( () => {
                this._isHovered && this.show()
            }
            ), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout(( () => {
                this._isHovered || this.hide()
            }
            ), this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            const e = B.getDataAttributes(this._element);
            for (const t of Object.keys(e))
                Ji.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            },
            t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : r(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t.selector = !1,
            t.trigger = "manual",
            t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null),
            this.tip && (this.tip.remove(),
            this.tip = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = cn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    g(cn);
    const hn = {
        ...cn.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }
      , dn = {
        ...cn.DefaultType,
        content: "(null|string|element|function)"
    };
    class un extends cn {
        static get Default() {
            return hn
        }
        static get DefaultType() {
            return dn
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = un.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    g(un);
    const fn = "click.bs.scrollspy"
      , pn = "active"
      , gn = "[href]"
      , mn = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    }
      , _n = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class bn extends z {
        constructor(t, e) {
            super(t, e),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return mn
        }
        static get DefaultType() {
            return _n
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())
                this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = r(t.target) || document.body,
            t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin,
            "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))),
            t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (P.off(this._config.target, fn),
            P.on(this._config.target, fn, gn, (t => {
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window
                      , n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo)
                        return void i.scrollTo({
                            top: n,
                            behavior: "smooth"
                        });
                    i.scrollTop = n
                }
            }
            )))
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t => this._observerCallback(t)),t)
        }
        _observerCallback(t) {
            const e = t => this._targetLinks.get(`#${t.target.id}`)
              , i = t => {
                this._previousScrollData.visibleEntryTop = t.target.offsetTop,
                this._process(e(t))
            }
              , n = (this._rootElement || document.documentElement).scrollTop
              , s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t) {
                if (!o.isIntersecting) {
                    this._activeTarget = null,
                    this._clearActiveClass(e(o));
                    continue
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o),
                    !n)
                        return
                } else
                    s || t || i(o)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map,
            this._observableSections = new Map;
            const t = Q.find(gn, this._config.target);
            for (const e of t) {
                if (!e.hash || l(e))
                    continue;
                const t = Q.findOne(e.hash, this._element);
                a(t) && (this._targetLinks.set(e.hash, e),
                this._observableSections.set(e.hash, t))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target),
            this._activeTarget = t,
            t.classList.add(pn),
            this._activateParents(t),
            P.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item"))
                Q.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(pn);
            else
                for (const e of Q.parents(t, ".nav, .list-group"))
                    for (const t of Q.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item"))
                        t.classList.add(pn)
        }
        _clearActiveClass(t) {
            t.classList.remove(pn);
            const e = Q.find("[href].active", t);
            for (const t of e)
                t.classList.remove(pn)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = bn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    P.on(window, "load.bs.scrollspy.data-api", ( () => {
        for (const t of Q.find('[data-bs-spy="scroll"]'))
            bn.getOrCreateInstance(t)
    }
    )),
    g(bn);
    const vn = "ArrowLeft"
      , yn = "ArrowRight"
      , wn = "ArrowUp"
      , An = "ArrowDown"
      , En = "active"
      , Tn = "fade"
      , Cn = "show"
      , On = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , xn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${On}`;
    class kn extends z {
        constructor(t) {
            super(t),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
            P.on(this._element, "keydown.bs.tab", (t => this._keydown(t))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t))
                return;
            const e = this._getActiveElem()
              , i = e ? P.trigger(e, "hide.bs.tab", {
                relatedTarget: t
            }) : null;
            P.trigger(t, "show.bs.tab", {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t),
            this._activate(t, e))
        }
        _activate(t, e) {
            t && (t.classList.add(En),
            this._activate(n(t)),
            this._queueCallback(( () => {
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                P.trigger(t, "shown.bs.tab", {
                    relatedTarget: e
                })) : t.classList.add(Cn)
            }
            ), t, t.classList.contains(Tn)))
        }
        _deactivate(t, e) {
            t && (t.classList.remove(En),
            t.blur(),
            this._deactivate(n(t)),
            this._queueCallback(( () => {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                P.trigger(t, "hidden.bs.tab", {
                    relatedTarget: e
                })) : t.classList.remove(Cn)
            }
            ), t, t.classList.contains(Tn)))
        }
        _keydown(t) {
            if (![vn, yn, wn, An].includes(t.key))
                return;
            t.stopPropagation(),
            t.preventDefault();
            const e = [yn, An].includes(t.key)
              , i = b(this._getChildren().filter((t => !l(t))), t.target, e, !0);
            i && (i.focus({
                preventScroll: !0
            }),
            kn.getOrCreateInstance(i).show())
        }
        _getChildren() {
            return Q.find(xn, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((t => this._elemIsActive(t))) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)
                this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t)
              , i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
            i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(t, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = n(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown"))
                return;
            const n = (t, n) => {
                const s = Q.findOne(t, i);
                s && s.classList.toggle(n, e)
            }
            ;
            n(".dropdown-toggle", En),
            n(".dropdown-menu", Cn),
            i.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }
        _elemIsActive(t) {
            return t.classList.contains(En)
        }
        _getInnerElement(t) {
            return t.matches(xn) ? t : Q.findOne(xn, t)
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = kn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    P.on(document, "click.bs.tab", On, (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        l(this) || kn.getOrCreateInstance(this).show()
    }
    )),
    P.on(window, "load.bs.tab", ( () => {
        for (const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
            kn.getOrCreateInstance(t)
    }
    )),
    g(kn);
    const Ln = "hide"
      , Dn = "show"
      , Sn = "showing"
      , In = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Nn = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class Pn extends z {
        constructor(t, e) {
            super(t, e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return Nn
        }
        static get DefaultType() {
            return In
        }
        static get NAME() {
            return "toast"
        }
        show() {
            P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(Ln),
            d(this._element),
            this._element.classList.add(Dn, Sn),
            this._queueCallback(( () => {
                this._element.classList.remove(Sn),
                P.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            ), this._element, this._config.animation))
        }
        hide() {
            this.isShown() && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Sn),
            this._queueCallback(( () => {
                this._element.classList.add(Ln),
                this._element.classList.remove(Sn, Dn),
                P.trigger(this._element, "hidden.bs.toast")
            }
            ), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(Dn),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(Dn)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(( () => {
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            P.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))),
            P.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))),
            P.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))),
            P.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Pn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    return q(Pn),
    g(Pn),
    {
        Alert: R,
        Button: K,
        Carousel: at,
        Collapse: pt,
        Dropdown: hi,
        Modal: Ni,
        Offcanvas: zi,
        Popover: un,
        ScrollSpy: bn,
        Tab: kn,
        Toast: Pn,
        Tooltip: cn
    }
}
));

//# sourceMappingURL=bootstrap.bundle.min.js.map
