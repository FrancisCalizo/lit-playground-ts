import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css``;

  @property()
  name = 'Bob';

  override render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <slot></slot>
    `;
  }

  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
