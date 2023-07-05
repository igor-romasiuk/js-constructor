export class Sidebar {
    constructor(selector) {
        this.el = document.querySelector(selector)

        this.init
    }

    init() {
        this.el.insertAdjacentHTML('afterbegin', this.template)
    }

    get template() {
        return '<h1>template</h1>'
    }
}

export function block(type) {
    return `
        <from name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Додати</button>
        </form>
        <hr />
    `
}