/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} options.url - URL to POST data to
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
const registerForm = document.getElementById("register");
alert("hello");
async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return window.location = "https://www.tutorialspoint.com";
}

function myFun(){
    alert("hell");
    window.location.href = "https://www.tutorialspoint.com";
    window.location.replace("https://www.tutorialspoint.com");
}
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({ url, formData });
        console.log({ responseData });
        if (responseData.success) {
            window.location.replace("https://www.google.com");
        }
    } catch (error) {
        console.error(error);
    }
}

// registerForm.addEventListener("submit", handleFormSubmit);
