const formTemplate = [
    {
        type: "username",
        label: "Username",
        isRequired: true,
        minLenght: 3
    },
    {
        type: "email",
        label: "Email",
        isRequired: true,
        minLenght: 3
    },
    {
        type: "password",
        label: "Password",
        isRequired: true,
        minLenght: 3
    },
    {
        type: "passwordConfirmation",
        label: "Password Confirmation",
        isRequired: false,
        minLenght: 3
    },
];

export default formTemplate