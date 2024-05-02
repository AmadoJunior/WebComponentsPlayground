class LoadingButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Initial Props
		this.props = {
			loading: false,
			disabled: false
		};

		// Bind Methods
		this.handleClick = this.handleClick.bind(this)

		// Define Template
		this.template = document.createElement('template');
		this.template.innerHTML = `
			<style>
				button {
					position: relative;
					overflow: hidden;
					display: flex;
					align-items: center;
					gap: 5px;
					padding: 10px;
					background-color: var(--primary-color);
					color: var(--primary-color-contrast);
					border: 1px solid var(--primary-color);
					border-radius: 5px;
					font-family: inherit;
					cursor: pointer;
					transition: background 400ms;
				}

				button.loading {
					background-color: #00000000;
					color: var(--primary-disabled-color);
					border: 1px solid var(--primary-disabled-color);
					cursor:  default;
					pointer-events: none;
				}

				button.loading::after {
					content: "";
					width: 16px;
					height: 16px;
					border: 1px solid var(--primary-disabled-color);
					border-bottom-color: transparent;
					border-radius: 50%;
					display: inline-block;
					box-sizing: border-box;
					animation: rotation 1s linear infinite;
				}

				button.loading ::slotted([slot="icon"]) {
					display: none
				}

				button:hover {
					background-color: var(--primary-color-dark);
				}

				button.disabled {
				
				}

				::slotted([slot="text"]) {
					margin: 0;
				}

				@keyframes rotation {
					0% {
						transform: rotate(0deg);
					}

					100% {
						transform: rotate(360deg);
					}
				}

				.ripple {
					position: absolute;
					border-radius: 50%;
					transform: scale(0);
					animation: ripple 600ms linear;
					background-color: rgba(255, 255, 255, 0.7);
				}

				@keyframes ripple {
					to {
						transform: scale(4);
						opacity: 0;
					}
				}
			</style>

			<button>
				<slot name="text" id="button-text"></slot>
				<slot name="icon" id="button-icon"></slot>
			</button>
		`;


		// Render
		this.render();
	}

  	handleClick (event) {
		if (!this.props.loading && this.onClick && typeof this.onClick === 'function') {
			this.createRipple(event);
			this.onClick();
		}
	}

	connectedCallback(){}

  	disconnectedCallback() {
		const button = this.shadowRoot.querySelector('button');
		button.removeEventListener('click', this.handleClick);
	}

	static get observedAttributes() {
		return ['loading', 'disabled'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue !== newValue) {
			// Update Props
			this.props[name] = newValue
			this.render();
		}
	}

  	// Ripple Effect
	createRipple(event) {
		const button = event.currentTarget;
		const circle = document.createElement("span");
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;
		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
		circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
		circle.classList.add("ripple"); 

		const ripple = button.getElementsByClassName("ripple")[0];

		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
	}

	// Render Method
	render() {
		const templateContent = this.template.content.cloneNode(true);

		// Btn Text
		const buttonTextSlot = templateContent.getElementById('button-text');
		buttonTextSlot.innerHTML = '';
		const textContent = this.querySelector('[slot="text"]');
		if (textContent) {
			buttonTextSlot.appendChild(textContent.cloneNode(true));
		}

		// Btn Icon
		const buttonIconSlot = templateContent.getElementById('button-icon');
		buttonIconSlot.innerHTML = '';
		const iconContent = this.querySelector('[slot="icon"]');
		if (iconContent) {
			buttonIconSlot.appendChild(iconContent.cloneNode(true));
		}

		// State
		const button = templateContent.querySelector('button');
		button.addEventListener('click', this.handleClick);
		button.disabled = this.props.disabled || this.props.loading;
		button.classList.toggle('loading', !!this.props.loading);
		button.classList.toggle('disabled', !!this.props.disabled);

		// Append Shadow DOM
		this.shadowRoot.innerHTML = '';
		this.shadowRoot.appendChild(templateContent);
	}
}

customElements.define('loading-button', LoadingButton);