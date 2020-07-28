class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
    let user;
    while (true){
        let name = prompt("Enter a name?", "iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch (e) {
            if (e instanceof HttpError && e.response.status == 404){
                alert("No such user, please reenter.");
            }
            else {
                throw e;
            }
        }
    }

    alert(`Full name: ${user.name}.`);
    return user;
}

demoGithubUser();