class SkeletonBox extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Initial Props
		this.props = {
			loading: false
		};


		// Define Template
		this.template = document.createElement('template');
		this.template.innerHTML = `
			<style>
				:host {
					position: relative;
					border: 1px solid var(--primary-border-color);
					border-radius: 5px;
					box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, .075);
				}

				#skeletonContainer {
					height: 100px;
					width: 100%;
					border-radius: 5px;
				}

				span {
					display: block;
					background-color: rgba(0, 0, 0, 0.11);
					position: absolute;
					top: 0;
					left: 0;
					overflow: hidden;
					height: 100%;
					width: 100%;
					border-radius: 5px;
				}

				span::after {
					content: '';
					position: absolute;
					animation: wave 2s linear 0.5s infinite;
					background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.06), transparent);
					transform: translateX(-100%);
					bottom: 0;
					left: 0;
					right: 0;
					top: 0;
				}

				.hidden {
					display: none;
				}

				::slotted(*) {
					margin: 0px;
					padding: 16px;
				}

				@keyframes wave {
					to {
						transform: translateX(100%)
					}
				}
			</style>
				
			<div id="skeletonContainer">
                <slot name="content" id="contentSlot"></slot>
                <span></span>
            </div>
		`;


		// Render
		this.render();
	}

	connectedCallback(){}

  	disconnectedCallback() {}

	static get observedAttributes() {
		return ['loading'];
	}


	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue !== newValue) {
			// Update Props
			this.props[name] = newValue
			this.render();
		}
	}

	// Render Method
    render() {
        const templateContent = this.template.content.cloneNode(true);

		// Content
		const contentSlot = templateContent.getElementById('contentSlot')
		contentSlot.innerHTML = '';
		const slotContent = this.querySelector('[slot="content"]');
		if (slotContent) {
			contentSlot.appendChild(slotContent.cloneNode(true));
		}

		// State
		const skeletonSpan = templateContent.querySelector('span');
		contentSlot.classList.toggle('hidden', !!this.props.loading)
		skeletonSpan.classList.toggle('hidden', !this.props.loading);

        // Append Shadow DOM
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(templateContent);
    }
}

customElements.define('skeleton-box', SkeletonBox);