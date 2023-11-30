/* global 
  HFDataWithChildType
  HFDataType
 */

export async function getHFContent(url: string): Promise<HFDataType[]> {
	// To get header or footer content
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw Error(`HTTP error! Status: ${res.status}`);
		}
		const result = await res.json();
		return result;
	} catch (error) {
		throw Error(`Error fetching footer content:" ${error}`);
	}
}

export function convertNestedData(
	data: HFDataType[],
	parentId: number | null = null
) {
	const nestedData: HFDataWithChildType[] = [];

	data.forEach(async (item) => {
		const tempItem: HFDataWithChildType = { ...item };
		if (tempItem.parent_id === parentId) {
			const children: HFDataWithChildType[] = convertNestedData(
				data,
				tempItem.id
			);
			if (children?.length > 0) {
				tempItem.children = children;
			}
			nestedData.push(tempItem);
		}
	});

	return nestedData;
}

export async function getNestedData(url: string) {
	const content = await getHFContent(url);
	// console.log(content);
	if (content?.length) {
		return convertNestedData(content);
	}
}
