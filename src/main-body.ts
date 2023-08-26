import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { IReport } from './types';
import './report-element'

@customElement('main-body')
export class MyElement extends LitElement {
	static override styles = css`
		.container { 
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 16px;
		}
	`;

	override render() {
		return html`
			<div class="container">
				${this.data.map(data => (
					html`
						<report-element 
							.data=${data}>
						</report-element>
					`
				))}
			</div>
		`;
	}

	@property()
	data: IReport[] = [];

	override connectedCallback() {
		super.connectedCallback();
		this._fetchData()
	}
	
	_fetchData() {
		fetch('https://jsonplaceholder.typicode.com/users/1/posts')
			.then((response) => response.json())
			.then((data) => this.data = data);
	}
}
