import "./styles.css";
import jQuery from "jquery";

setTimeout(() => {
  jQuery("p").hide();
}, 1000);

document.getElementById("app").innerHTML = `
<div>
  <p>Now you see me</p>
</div>
`;
