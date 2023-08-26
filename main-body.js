var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './report-element';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    render() {
        return html `
			<div class="container">
				${this.data.map(data => (html `
						<report-element 
							.data=${data}>
						</report-element>
					`))}
			</div>
		`;
    }
    connectedCallback() {
        super.connectedCallback();
        this._fetchData();
    }
    _fetchData() {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then((response) => response.json())
            .then((data) => this.data = data);
    }
};
MyElement.styles = css `
		.container { 
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 16px;
		}
	`;
__decorate([
    property()
], MyElement.prototype, "data", void 0);
MyElement = __decorate([
    customElement('main-body')
], MyElement);
export { MyElement };
//# sourceMappingURL=main-body.js.map