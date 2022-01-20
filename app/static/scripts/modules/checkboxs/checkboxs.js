/**
 * @module engine/core/ui/checkboxs
 */

 'use strict'

 import Ui from '../../Ui.js'

Ui.extend(Ui.prototype, class {

	#checkboxCodes = {

	}

	/**
	 *
	 * @param {String} type
	 * @param {Object} options
	 */
	checkboxs (type, options) {

		options = options || {}

		if (this.isset(type) && typeof type === String) {

			let inc = []

			for (let el of inc) {
				if (type === el) {
					this.#bthCodes[el](options)
				}
			}

		}

	}

})
