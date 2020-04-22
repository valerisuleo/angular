const formTemplate = [
    {
        type: "email",
        label: "Email",
        isRequired: true,
        minLenght: 5
    },
    {
        type: "password",
        label: "Password",
        isRequired: false,
        minLenght: 5
    },
    {
        type: "checkbox",
        label: "Terms and Conditions",
        isRequired: false,
        minLenght: 5,
    },
    {
        type: "select",
        label: "Favorite Books",
        isRequired: true,
        minLenght: 0,
        options: ["Jane Eyre", "Pride and Prejudice", "Wuthering Heights"]
    }
];

export default formTemplate