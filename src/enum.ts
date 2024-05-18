export const createEnum = (config: string[]): EnumType => {
	return EnumType.create(config);
}

class EnumType {
	readonly identifier: symbol;
	values: EnumValue[];
	private constructor() {
		this.identifier = Symbol();
		this.values = [];
	}

	get(name: string): EnumValue {
		const value = this.values.find((value) => value.name === name);
		if (!value) {
			throw new Error(`Enum value not found: ${name}`);
		}
		return value;
	}

	static create(config: string[]): EnumType {
		const enumType = new EnumType();
		
		enumType.values = config.map((name) => new EnumValue(enumType, name));
		Object.freeze(enumType.values);

		return enumType;
	}
}

class EnumValue {
	readonly identifier: symbol;
	readonly type: EnumType;
	readonly name: string;
	readonly value: object | null;
	constructor(type: EnumType, name: string, value?: object) {
		this.identifier = Symbol();
		this.type = type;
		this.name = name;
		this.value = value ?? null;
	}
}
