import { createEnum } from './enum';

(() => {
	const enumType = createEnum(['yes', 'no', 'maybe']);
	console.log(enumType);
})();
