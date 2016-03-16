
function kosbie_face_click_handler() {
    alert("ouch");

}

function on_page_ready() {
    s(".kosbiesface").click(kosbie_face_click_handler)
}

s(document).ready(on_page_ready)