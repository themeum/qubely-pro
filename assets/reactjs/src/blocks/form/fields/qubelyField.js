import "./style.scss";
import Edit from "./edit";
import Save from "./save";

import FieldDefaults from "./formDefaults";

const settings = {
	...FieldDefaults,
	icon: "forms",
	supports: {
		html: false,
		inserter: false,
		reusable: false,
	},
	edit: Edit,
	save: (props) => Save(props),
};

export { settings };
