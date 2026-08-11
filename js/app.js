(function () {
    console.log("Blog Project loaded successfully.");

    const posts = document.querySelectorAll("article");
    posts.forEach((post, index) => {
        post.addEventListener("click", function () {
            console.log("Clicked post #" + (index + 1) + ": " + post.querySelector("h2").textContent);
        });
        post.style.cursor = "pointer";
    });
})();
