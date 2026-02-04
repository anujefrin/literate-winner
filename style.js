function nextPage(pageNumber) {
    document.getElementById("page" + pageNumber).classList.remove("active");
    document.getElementById("page" + (pageNumber + 1)).classList.add("active");
}
