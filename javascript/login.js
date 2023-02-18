alert("hello")
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('login-form');

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

    return response.json();
}

/**
 * Event handler for a form submit event.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
 *
 * @param {SubmitEvent} event
 */
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({ url, formData });
        console.log({ responseData });
    } catch (error) {
        console.error(error);
    }
}


function myProfile(){
    window.location.href = "http://localhost:63342/DphoneFrontend/html/Dashboard.html";
    window.location.replace("http://localhost:63342/DphoneFrontend/html/Dashboard.html");
}

// const exampleForm = document.getElementById("example-form");
loginForm.addEventListener("submit", handleFormSubmit);
//
// if (loginSuccessful) {
//     // Replace "home.html" with the URL of the page you want to redirect to
//     window.location.href = "home.html";
// }
