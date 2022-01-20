/**
 * @readme is a ui javascript system
 *
 * @author GitHub: TheWitcher1991
 * @version 1.0.0
 * @see https://github.com/TheWitcher1991/uijs
 */

'use strict'

import Ui from './Ui.js'

(function (global, factory) {

	'use strict'

	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = global.document ? factory(global, true) : w => {
			if (!w.document) {
				throw new Error('Ui requires a window with a document')
			}
			return factory(w)
		}
	} else if (typeof define === 'function' && define.amd) {
		define(() => factory(global))
	} else {
		factory(global)
	}

})(typeof window !== 'undefined' ? window : this, function (window) {

	'use strict'

	const $ = new Ui()

	try {

		window.Ui = $

		window.$ === undefined && (window.g = $)

	} catch {return false}

})
