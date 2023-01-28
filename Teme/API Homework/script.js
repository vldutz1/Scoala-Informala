function runWeatherApp() {
    const weatherKey = "ffae858f1c02448fb7d90327232801";
    const weatherBaseUrl = "https://api.weatherapi.com/v1";

    const temperatureButtonEl = document.querySelector("#temperature-button");
    temperatureButtonEl.addEventListener("click", onTemperatureButtonClick);
    const temperatureContainerEl = document.querySelector("#temperature-container");

    function onTemperatureButtonClick() {
        const queryParams = "key=" + weatherKey + "&q=Cluj-Napoca";
        fetch(weatherBaseUrl + "/current.json?" + queryParams)
            .then(function(response) {
                return response.json();
            })
            .then(function(weather) {
                const myWeather = weather || {};
                const currentWeather = myWeather.current || {};
                const temperature = currentWeather.temp_c || null;
                if (temperature !== null) {
                    temperatureContainerEl.style = null;
                    const temperatureEl =
                        temperatureContainerEl.querySelector("#temperature");
                    temperatureEl.innerHTML = temperature;
                }
            });
    }
}

function runPostsApp() {
    const postsBaseUrl = "https://jsonplaceholder.typicode.com";
    const postsContainerEl = document.querySelector("#posts-container");

    function renderPostList(posts) {
        posts.forEach(function(post) {
            const postDiv = createPost(post);
            if (postDiv) {
                postsContainerEl.appendChild(postDiv);
            }
        });
    }

    function createPost(post) {
        const modalCancelButton = document.querySelector("#cancel");
        const modalUpdateButton = document.querySelector("#updatePost");

        const div = document.createElement("div");
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete Post";
        const editButton = document.createElement("button");
        editButton.innerText = "Edit Post";

        //delete post function
        deleteButton.onclick = function() {
            fetch(postsBaseUrl + "/posts/" + post.id, {
                method: "DELETE",
            }).then((response) => {
                if (response) {
                    div.remove();
                }
                return response;
            });
        };

        //getting values displayed in modal
        editButton.onclick = function() {
            document
                .getElementById("updatePostModal")
                .classList.remove("modalHidden");
            document
                .getElementById("updatePostModal")
                .classList.add("modalDisplayed");
            const inputTitle = (document.getElementById("title").value = post.title);
            const inputBody = (document.getElementById("body").value = post.body);

            //updating posts title/body
            modalUpdateButton.onclick = () => {
                const updatedTitle = document.getElementById("title").value;
                const updatedBody = document.getElementById("body").value;

                fetch(postsBaseUrl + "/posts/" + post.id, {
                        method: "PUT",
                        body: JSON.stringify({
                            title: updatedTitle,
                            body: updatedBody,
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        },
                    })
                    .then((response) => response.json())
                    .then((json) => console.log(json))
                    .then(
                        (div.innerHTML =
                            "<div class ='post-title'>" +
                            "<h2>" +
                            updatedTitle +
                            "</h2>" +
                            "</div><p class ='post-body'>" +
                            updatedBody +
                            "</p>")
                    )
                    .then((div.appendChild(deleteButton), div.appendChild(editButton)));
            };
        };

        //cancel button modal display function
        modalCancelButton.onclick = function() {
            document
                .getElementById("updatePostModal")
                .classList.remove("modalDisplayed");
            document.getElementById("updatePostModal").classList.add("modalHidden");
        };

        //post.id
        div.innerHTML =
            "<div class='post-title'>" +
            "<h2>" +
            post.title +
            "</h2>" +
            "</div><p class='post-body'>" +
            post.body +
            "</p>";

        div.appendChild(deleteButton);
        div.appendChild(editButton);

        return div;
    }

    fetch(postsBaseUrl + "/posts")
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            renderPostList(posts);
        });
}

var pageInit = function() {
    runWeatherApp();
    runPostsApp();
};

window.addEventListener("load", function() {
    pageInit();
});