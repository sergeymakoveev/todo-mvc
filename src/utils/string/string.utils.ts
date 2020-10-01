/**
 * Generates universal unique id
 * @see https://gist.github.com/gordonbrander/2230317#gistcomment-1618310
 */
export function uuid(): string {
	const chr4 = () => Math.random().toString(16).slice(-4);
	return `${chr4() + chr4()}-${chr4()}-${chr4()}-${chr4()}-${chr4() + chr4() + chr4()}`;
}
