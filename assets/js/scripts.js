// Prototype Functions
Array.prototype.includesAll = function(neddle) {
    let result = true;
    neddle.forEach(item => {
        if (this.includes(item) == false) result = false
    });
    return result
}

// Event Constants
const event = {
    CLICK: 'click',
    CHANGE: 'change'
}

// Event Listener
const watch = {
    on: (elem, listeners) => {
        let el = null;let elems = null
        if (typeof listeners !== "object") return
        if (typeof elem == "object") {
            Object.entries(elem).forEach(([key, value]) => {
                elems = document.querySelectorAll(key)
                el = document.querySelectorAll(value)
            })
        } else {
            elems = document.querySelectorAll(elem)
        }

        elems.forEach(elem => {
            Object.entries(listeners).forEach(([event, callback]) => {
                if (el == null) {
                    elem.addEventListener(event, () => callback(elem))
                } else {
                    el.forEach(e => elem.addEventListener(event, () => callback((e == null)? elem:e)))
                }
            })
        })
    },
    go: (elem, event, callback) => {
        if (typeof callback !== "function") return
        if (Array.isArray(elem)) {
            elem.forEach(el => {
                let item = document.querySelectorAll(el)
                if (Array.isArray(event)) {
                    event.forEach(e => item.addEventListener(e, () => callback(item)))
                } else {
                    item.addEventListener(event, () => callback(item))
                }
            })
        } else if (typeof elem == "object") {
            Object.entries(elem).forEach(([reactor, agent]) => {
                let reactors = document.querySelectorAll(reactor)
                let agents = document.querySelectorAll(agent)
                let a = ((agents.length > 1)? agents:(agents[0] || null))
                if (Array.isArray(event)) {
                    event.forEach(e => reactors.forEach(r => r.addEventListener(e, () => callback(a, r))))
                } else {
                    reactors.forEach(r => r.addEventListener(event, () => callback(a, r)))
                }
            })
        } else {
            var elems = document.querySelectorAll(elem)
            elems.forEach(el => {
                if (Array.isArray(event)) {
                    event.forEach(e => {
                        el.addEventListener(e, () => callback(el))
                    })
                } else {
                    el.addEventListener(event, () => callback(el))
                }
            })
        }
    }
}

window.onload = () => {

    // show clear buttons on hover filters
    watch.on({'.filters': '.btn.--clear-all'}, {
        'mouseleave': e => {
            e.style.opacity = 0;
        },
        'mouseenter': e => {
            e.style.opacity = .8;
        }
    })

    // simulate event blur
    watch.go('.filters input[type="checkbox"]', 'change', e => {
        if (e.checked == false) {
            e.classList.add('blur')
        } else {
            e.classList.remove('blur')
        }
    })

    // show sidebar
    watch.go({'.filter-menu': '.filters'}, event.CLICK, (elem) => {
        elem.classList.toggle('closed')
    })

    // change-to 
    watch.go('[change-to]', event.CLICK, (elem) => {
        let change_to = elem.getAttribute('change-to');
        let from = elem.innerHTML;
        elem.setAttribute('change-to', from);
        elem.firstElementChild.innerHTML = change_to;
    })

    // toggle class of target elem
    watch.go('[toggle-class]', event.CLICK, (elem) => {
        let classname = elem.getAttribute('toggle-class')
        let target = elem.getAttribute('target')
        document.querySelector(target).classList.toggle(classname)
    })
}