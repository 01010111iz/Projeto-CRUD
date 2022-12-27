function GitHub() {
  addEventListener(
    "click",
    window.open("https://github.com/01010111iz", "_blank")
  );
}

function LinkedIn() {
  addEventListener(
    "click",
    window.open(
      "https://www.linkedin.com/in/helviley-lacerda-2253a2115/",
      "_blank"
    )
  );
}

function Records() {
  addEventListener("click", (location.href = "../home/home.html"));
}

function UserList() {
  addEventListener("click", (location.href = "/frontend/put/put.html"));
}

function logout() {
  addEventListener("click", (location.href = "../log/login.html"));
}
