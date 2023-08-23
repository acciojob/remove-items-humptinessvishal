//your JS code here. If required.
const input = document.getElementsByTagName("input")[0];
input.addEventListener("click", () => {
    const colorSelect = document.getElementById("colorSelect");
    colorSelect.remove(colorSelect.selectedIndex);
});
