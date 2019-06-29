import App from './organizer/app.js'
import data from './projects.js';

// start Application
const app = new App(data, {
    // input attributes
    checkboxs: '.filters [type="checkbox"]',
    sort: '[name="sorter"]',
    order: '[name="order"]',
    search: '[type="search"]',

    clear_all: '.btn.--clear-all',
    select: '.dropdown-items a',
    checkbox: '.btn-checkbox',

    // other attributes
    categories: ['topics', 'subject', 'session', 'course', 'campus'],
    target: '.projects',

    // template view
    template: (item, index, filter) => {
        if (item == null)
            return `<div class="padding-1">
                        <span style="opacity:.8;">Nenhum projeto encontrado..</span>
                    </div>`
        return `<div class="card" index="${index}">
                <img src="assets/img/projects/${item.preview}" alt="${item.title}">
                <div class="card-info">
                    <div class="project-name"><span class="subtitle-3">${item.title}</span></div>
                    <div class="project-topics">
                        ${item.topics.map(topic => `<span class="tag ${(filter.topics.includes(topic))? "--selected":""}">${topic}</span>`).reduce((actual, current) => actual += current)}
                        <span class="tag ${(filter.subject.includes(item.subject) || filter.session.includes(item.session))? "--selected":""}">${item.subject}-${item.session}</span>
                        <span class="tag ${(filter.course.includes(item.course) || filter.campus.includes(item.campus))? "--selected":""}">${item.course}-${item.campus}</span>
                    </div>
                </div>
            </div>

            <!-- FOOTER MODEL -->
            <div class="footer-model closed" index="${index}">
                <div class="model-header">
                    <div class="flex-row">
                        <span class="subtitle-3">${item.title}</span>
                        <div class="row text-end">
                            <a class="btn btn-icon no-shadow" change-to="expand_more">
                                <i class="material-icons">expand_less</i>
                            </a>
                            <a class="btn btn-icon no-shadow close" title="Limpar Seleção">
                                <i class="material-icons">close</i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="model-content">
                    <p class="subtitle-3 --normal">
                        ${item.description}
                    </p>
                    <a href="https://github.com/${item.repository.split('/').reverse()[1]}" class="subtitle-1">${item.repository.replace('https://github.com/', '').split('/')[0]}</a>
                    <div class="row text-end">
                        <a href="${item.demo}" class="btn btn-success btn-circle">Demo</a>
                        <a href="${item.repository}" class="btn btn-border-success btn-circle">Repository</a>
                    </div>
                </div>
            </div>`
    }
}, () => {
    // modals
    var modals = Array.from(document.querySelectorAll('.footer-model'))

    //  open model
    watch.go('.card', event.CLICK, e => {
        // close other modal
        modals.map(m => { 
            if (!Array.from(m.classList).includes('closed')) {
                m.setAttribute('style', `bottom: -${m.lastElementChild.clientHeight}px;`)
                m.classList.add('closed')
            }
        })

        let index = e.getAttribute('index')
        let model = document.querySelector(`.footer-model[index="${index}"]`)
        model.classList.toggle('closed')
    })

    // auto minimize modals
    modals.map(modal => {
        let content = modal.lastElementChild
        modal.setAttribute('style', `bottom: -${content.clientHeight}px;`)
    })

    // close model
    watch.go('.model-header a.close', event.CLICK, e => {
        let parent = e.parentElement.parentElement.parentElement.parentElement,
            content = parent.lastElementChild
        parent.setAttribute('style', `bottom: -${content.clientHeight}px;`)
        parent.classList.toggle('closed')
    })

    // minimize/maximize model
    watch.go('.model-header a:not(.close)', event.CLICK, (e) => {
        let parent = e.parentElement.parentElement.parentElement.parentElement,
            content = parent.lastElementChild
        parent.setAttribute('style', `bottom: ${(parent.style.bottom == "")? `-${content.clientHeight}px`:""};`)
    })

    let statusTag = document.querySelector('.tag.--status')
    document.addEventListener('readystatechange', event => {
        statusTag.innerText = "atualizado"
    })
    
    setTimeout(() => {
        statusTag.style.opacity = 1
        setTimeout(() => {
            statusTag.style.opacity = 0
        }, 1000)
    }, 250)
})
