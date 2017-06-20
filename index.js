const fetch = require('isomorphic-fetch');

const typeMap = {
	string: 'string',
	integer: 'number',
	boolean: 'boolean',
};
async function get() {
	try {
		var schema = await fetch(
			'https://demo.wp-api.org/wp-json/?context=help'
		).then(r => r.json());
	} catch (e) {
		return console.log(e);
	}

	const types = {};
	Object.entries(schema.routes).forEach(([i, route]) => {
		const schema = route.schema;
		if (!schema) {
			return;
		}

		let name = schema.title.replace(/-([a-z])/g, function(g) {
			return g[1].toUpperCase();
		});
		name = name.charAt(0).toUpperCase() + name.slice(1);

		function propertiesToflowProps(properties, padding = '    ') {
			return `{\n${padding}${Object.entries(properties)
				.map(([name, details]) => {
					let value = typeMap[details.type];
					let optional = details.context && details.context.indexOf('view') === -1;
					switch (details.type) {
						case 'array':
							value = 'Array<' + details.items.type + '>';
							break;
						case 'object':
							if (details.properties && Object.entries(details.properties).length > 0) {
								value = propertiesToflowProps(details.properties, padding + '    ');
							} else {
								value = 'object';
							}
							break;
					}
					if (details.enum) {
						value = details.enum.map(v => `"${v}"`).join(' | ');
					}
					return name + ': ' + (optional ? '?' : '') + value;
				})
				.filter(r => r !== null)
				.join(',\n' + padding)}\n${padding === '    ' ? '' : padding.substr(-4)}}`;
		}
		const flowType = `
export type ${name} = ${propertiesToflowProps(schema.properties)}
`;
		types[name] = flowType;
	});

	Object.entries(types).forEach(([name, type]) => console.log(type));
	console.log(types.Post);
}

get().then();
