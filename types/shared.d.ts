type tabType = number;

interface HFDataType {
	module_tag?: string | null;
	menu_group?: string | null;
	module_alias?: string | null;
	menu_type?: string | null;
	parent_id: number | null;
	site_id: number;
	name: string;
	id: number;
	link_rewrite?: string | null;
	link?: string | null;
}

interface Params {
	slug: string;
}

interface HFDataWithChildType extends HFDataType {
	children?: HFDataWithChildType[];
}

type RightSideType = {
	[key: string]: HFDataType[];
};

type PrimitiveDataType = {
	name: string;
	url: string;
	children?: PrimitiveDataType[];
	tag?: string;
};
