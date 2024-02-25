import products, {IProduct} from './products';

export interface IConfig {
	readonly baseUrl: string;
}

function delay(timeInMilliseconds: number): Promise<void> {
	return new Promise((resolve, reject) => setTimeout(resolve, timeInMilliseconds));
}

export default class Api {
	baseUrl: string;

	constructor(config: IConfig) {
		//NOTE: здесь могла бы быть необходимая конфигурация
		this.baseUrl = config.baseUrl;
	}

	fetchProducts(): Promise<IProduct[]> {
		return delay(1000).then(() => products);
	}

	fetchProductIdsByTags(productTags: number[]): Promise<number[]> {
		const hasProductTags = (product: IProduct, necessaryTags: number[]) =>
			necessaryTags.every((necessaryTag) => product.tags.some((productTag) => necessaryTag === productTag));

		return delay(500).then(() => products.filter((p) => hasProductTags(p, productTags)).map((p) => p.id));
	}

	fetchProductIdsByTagsUnstable(productTags: number[]): Promise<number[]> {
		return this.fetchProductIdsByTags(productTags).then((ids) => {
			if (Math.random() > 0.5) return ids;
			throw 'error on fetching product ids by tags';
		});
	}

	sendMetric(name: string, value: string | number): Promise<void> {
		return new Promise((resolve, reject) => {
			console.log(`%c metric '${name}' with '${value}' has been sent`, 'color: blue');
			resolve();
		});
	}
}
