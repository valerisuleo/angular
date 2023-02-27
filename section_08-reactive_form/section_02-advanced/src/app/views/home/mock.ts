import { GenericValidators } from "src/app/common/form-container/generic.validators";
import { CustomValidators } from "./custom.validators";

const formAPI = [
	{
		type: "text",
		name: "firstName",
		label: "First name",
		validators: [GenericValidators.required("First name")],
	},
	{
		type: "text",
		name: "lastName",
		label: "Last name",
		validators: [GenericValidators.required("Last name")],
	},
	{
		type: "text",
		name: "phoneNumber",
		label: "Phone number",
		validators: [
			GenericValidators.required("Phone number"),
			CustomValidators.isTooShort("Phone number"),
		],
	},
	{
		type: "date",
		name: "dateOfbirth",
		label: "Date of Birth",
		validators: [
			GenericValidators.required("Date of Birth"),
			CustomValidators.isDOB("Date of Birth"),
		],
	},
	{
		type: "email",
		name: "emailAddress",
		label: "Email Address",
		validators: [GenericValidators.required("Email Address")],
	},
	{
		type: "password",
		name: "securityWord",
		label: "Security Word",
		validators: [GenericValidators.required("Security Word")],
	},
	{
		type: "checkbox",
		name: "vm",
		label: "Virgin Media",
		validators: [CustomValidators.isChecked("Please mark this box")],
	},
	{
		type: "checkbox",
		name: "companiesGroup",
		label: "Group comapanies, including VM O2 and Priority",
		validators: [],
	},
	{
		type: "select",
		name: "title",
		label: "Title",
		validators: [],
		options: ["Mr", "Madame", "Miss", 'Dr'],
	},
];

export default formAPI;
