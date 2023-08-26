import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { IReport } from './types';

@customElement('report-element')
export class ReportElement extends LitElement {
    static override styles = css`
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

	@property({ type: Object })
	data: Partial<IReport> = {};

	override render() {
		console.log(this.data)

		const title = this.data.title?.slice(0, 30)
		const body = this.data.body

		const bullets = []
		for (let i = 0, charsLength = body?.length; i < charsLength!; i += 35) {
			bullets.push(body?.substring(i, i + 25));
		}

		console.log(bullets)

		return html`
			<div class="container">
				<header>
					<h3>${title}</h3>
				</header>

				<section class="bullets">
					<ul>
						${bullets.map(b => (
							html`
								<li>- ${b}</li>
							`
						))}
					</ul>
				</section>
			</div>
		`;
	}

	
}
