/**
 * Filter
 */
class Filter {
    constructor(data, filter) {
        this.data = data
        this.filter = filter
        this.filtered = this.data
        return this
    }

    search(text) {
        this.filtered = this.filtered.filter(item => item.title.toLowerCase().match(new RegExp(text, 'g')))
        return this
    }

    tags(callback) {
        this.filtered = this.filtered.filter(item => callback(item))
        return this
    }

    sort(value) {
        this.filtered.sort((a, b) => {
            if(a[value].toLowerCase() < b[value].toLowerCase()) return -1;if (a[value].toLowerCase() > b[value].toLowerCase()) return 1;return 0;
        })
        return this
    }

    order(checked) {
        if (checked)
            this.filtered.reverse()
        return this
    }
}

export default Filter
