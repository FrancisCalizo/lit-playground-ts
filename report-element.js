var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ReportElement = class ReportElement extends LitElement {
    constructor() {
        super(...arguments);
        this.data = {};
    }
    render() {
        var _a;
        console.log(this.data);
        const title = (_a = this.data.title) === null || _a === void 0 ? void 0 : _a.slice(0, 30);
        const body = this.data.body;
        const bullets = [];
        for (let i = 0, charsLength = body === null || body === void 0 ? void 0 : body.length; i < charsLength; i += 35) {
            bullets.push(body === null || body === void 0 ? void 0 : body.substring(i, i + 25));
        }
        console.log(bullets);
        return html `
			<div class="container">
				<header>
					<h3>${title}</h3>
				</header>

				<section class="bullets">
					<ul>
						${bullets.map(b => (html `
								<li>- ${b}</li>
							`))}
					</ul>
				</section>
			</div>
		`;
    }
};
ReportElement.styles = css `
		.container {
			background: #fff;
			border: 1px solid gainsboro;
			border-radius: 5px;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
			padding: 12px;
		}

		.bullets {

			& ul {
				padding: 0;

				& li {
					list-style-type: none;
				}
			}
		}

		header { 
			border-bottom: 2px solid gainsboro;

			& h3 { margin-bottom: 6px }
		}
	`;
__decorate([
    property({ type: Object })
], ReportElement.prototype, "data", void 0);
ReportElement = __decorate([
    customElement('report-element')
], ReportElement);
export { ReportElement };
//# sourceMappingURL=report-element.js.map