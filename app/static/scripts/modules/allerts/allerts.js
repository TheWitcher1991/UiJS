/**
 * @module engine/core/ui/buttons
 */

 'use strict'

 import Ui from '../../Ui.js'

Ui.extend(Ui.prototype, class {

	#AllertsCodes = {

		'error': ({type, text}, n) =>
			`<div id="BaseUiJSBlock" class="Ui_${n}">
				<div>


				</div>
			</div>`

	}

	#deleteAllerts (select) {
		document.querySelector(select).remove()
	}

	/**
	 *
	 * @param {String} type
	 * @param {Object} options
	 */
	allerts (type, options) {

		options = options || {}

		let n = this.randomNumber(1, 999)

		if (this.isset(type) && typeof type === String) {

			let inc = ['error', 'warn', 'success', 'notice']

			for (let el of inc) {
				if (type === el) {
					this.#AllertsCodes[el](options, n)
				}
			}

			setTimeout(() => {
				document.querySelector(`.Ui_${n}`).remove()
			}, 3000)

		}

	}

})
