import Filter from './filter.js'

/**
 * Application
 */
class App {

    /**
     * New App
     * @param array data
     * @param object options
     * @param function callback
     */
    constructor(data, options, callback = null) {
        if (!Array.isArray(data)) return
        if (typeof options !== "object") return

        this.BTN_CHECKBOX = "btn-checkbox"
        this.BTN_SELECT = "btn-select"
        this.CLEAR_ALL = "--clear-all"

        this.data = data
        this.options = options
        this.callback = callback
        this.filter = {}, this.field = {}
        this.build()
        this.events(Object.entries(this.field))
        return this
    }

    on(event, callback = null) {
        this.event[event] = callback
    }

    /**
     * Organize Data
     */
    build() {
        Object.entries(this.options).forEach(([key, value]) => {
            if (typeof value == "function") return

            let e = document.querySelectorAll(value)
            this.field[key] = ((e.length > 1)? Array.from(e):e[0])
        })
        this.checkeds = this.field.checkboxs.filter(i => i.checked == true)
        this.options['categories'].forEach(t => {
            this.filter[t] = this.checkeds.filter(c => c.name === t).map(c => c.id)
        })

        // filter...
        this.funnel()

        // show
        this.show()

        // callback on event build
        this.callback()
    }

    funnel() {
        let { filtered } = (new Filter(this.data, this.filter))
            .search(new RegExp(this.field.search.value.toLowerCase(), 'g'))
            .tags(item => {
                return (((this.filter.topics.length > 0)? item.topics.includesAll(this.filter.topics):true) &&
                ((this.filter.subject.length > 0)? this.filter.subject.includes(item.subject):true) &&
                ((this.filter.session.length > 0)? this.filter.session.includes(item.session):true) &&
                ((this.filter.course.length > 0)? this.filter.course.includes(item.course):true) &&
                ((this.filter.campus.length > 0)? this.filter.campus.includes(item.campus):true))
            }).sort(this.field.sort.value).order(this.field.order.checked)
        this.filtered = filtered
        return this
    }

    show() {
        if (this.filtered.length > 0) {
            this.dataView = this.filtered.map((item, index) => this.options.template(item, index, this.filter)) || ['', '']
            this.field.target.innerHTML = this.dataView.join('\n')
        } else {
            this.field.target.innerHTML = this.options.template(null, 0)
        }
    }

    events(fields) {
        if (!Array.isArray(fields)) return
        let events = {
            checkbox: ['change'],
            search: ['keyup', 'search']
        }
        fields.map(([key, value]) => {
            if (key == "target") return

            let event = ''
            if (Array.isArray(value)) {
                value.forEach(value => {
                    event = (events[value.type] || 'click')
                    event = (event.length > 1)? event:event[0]
                    value.addEventListener(event, () => {
                        // inject code
                        var parent = value.parentElement.parentElement
                        if (Array.from(parent.classList).includes(this.BTN_SELECT)) {
                            var target = document.querySelector(`[name="${parent.getAttribute('input')}"]`)
                            target.value = value.getAttribute('value')

                            var droptag = document.querySelector('.dropdown a')
                            droptag.lastElementChild.innerHTML = value.innerHTML
                        }

                        if (Array.from(value.classList).includes(this.CLEAR_ALL)) {
                            let group = value.parentElement.parentElement
                            let boxs = group.querySelectorAll('input[type="checkbox"]')
                            boxs.forEach(b => b.checked = false)
                        }

                        this.build()
                    })
                })
            } else {
                if (typeof value !== "undefined") {
                    event = (events[value.type] || 'click')
                    event = (event.length > 1)? event:event[0]
                    if (Array.isArray(event)) {
                        event.forEach(e => value.addEventListener(e, () => this.build()))
                    } else {
                        value.addEventListener(event, () => {
                            // inject code
                            if (Array.from(value.classList).includes(this.BTN_CHECKBOX)) {
                                let box = document.querySelector(`input[name="${value.getAttribute('check')}"]`)
                                box.toggleAttribute('checked')
                                value.classList.toggle('focus')
                            }

                            this.build()
                        })
                    }
                }
            }
        })
    }
}

export default App
