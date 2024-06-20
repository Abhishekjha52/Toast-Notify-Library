const DEFAULT_OPTIONS = {
    autoClose : 5000,
    position : "top-right",
    onClose : () => {},
    canClose : true,
}

export default class Toast {
    #toastEle
    #autoCloseTimeout
    #removeBinded
    constructor(options) {
        this.#toastEle = document.createElement("div")
        this.#toastEle.classList.add("toast")
        requestAnimationFrame(()=>{
            this.#toastEle.classList.add("show")
        })
        this.#removeBinded = this.remove.bind(this)
        this.update({...DEFAULT_OPTIONS, ...options})
    }

    set autoClose(value) {
        if(value === false)return
        if(this.#autoCloseTimeout != null) clearTimeout(this.#autoCloseTimeout)
        this.#autoCloseTimeout = setTimeout(()=>this.remove(), value)
    }

    set position(value){
        const currentContainer = this.#toastEle.parentElement
        const selector = `.toast-container[data-position="${value}"]`
        const container = document.querySelector(selector) || createContainer(value)
        container.append(this.#toastEle)
        if(currentContainer === null || currentContainer.hasChildNodes())return
        currentContainer.remove()
    
    
    
    }   

    set text(value) {
        this.#toastEle.textContent = value
    }

    set canClose(value) {
        this.#toastEle.classList.toggle("can-close", value)
        if(value)
            this.#toastEle.addEventListener("click", this.#removeBinded)
        else
            this.#toastEle.removeEventListener("click", this.#removeBinded)
    }

    update(options) {
        Object.entries(options).forEach(([key, value]) => {
            this[key] = value
        })
    }

    remove() {
        const container = this.#toastEle.parentElement
        this.#toastEle.remove()
        this.onClose()
        if(container.hasChildNodes())return
        container.remove()

    }
}
    
function createContainer(position) {
    const container = document.createElement("div")
    container.classList.add("toast-container")
    container.dataset.position = position
    document.body.append(container)
    return container
}
