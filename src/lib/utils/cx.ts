type Value = string | number | boolean | undefined | null;
type Mapping = Record<string, unknown>;
type ArgumentArray = Array<Argument>;

type Argument = Value | Mapping | ArgumentArray;

/**
 * This function is adapted from https://github.com/JedWatson/classnames v2.3.1
 *
 * The only major behavorial difference is that it drops all number-type classes as those are generally invalid in the
 * CSS spec
 */
function cx(...args: ArgumentArray) {
	const classes: string[] = [];

	args.forEach((arg) => {
		if (!arg) return;

		if (typeof arg === 'string') {
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			if (arg.length === 0) return;

			const inner = cx(...arg);

			if (inner) {
				classes.push(inner);
			}
		} else if (typeof arg === 'object') {
			if (arg.toString === Object.prototype.toString) {
				for (const key in arg) {
					if (arg[key]) {
						classes.push(key);
					}
				}
			} else {
				classes.push(arg.toString());
			}
		}
	});

	return classes.join(' ');
}

export default cx;
