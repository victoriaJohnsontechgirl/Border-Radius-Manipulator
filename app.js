
function updateBorderRadius() {
    var topLeft = document.getElementById("topLeft").value + "px";
    var topRight = document.getElementById("topRight").value + "px";
    var bottomLeft = document.getElementById("bottomLeft").value + "px";
    var bottomRight = document.getElementById("bottomRight").value + "px";

    var box = document.getElementById("box");
    box.style.borderTopLeftRadius = topLeft;
    box.style.borderTopRightRadius = topRight;
    box.style.borderBottomLeftRadius = bottomLeft;
    box.style.borderBottomRightRadius = bottomRight;

    // Display the CSS properties
    var cssProperties = `${topLeft}; ${topRight}; ${bottomLeft}; ${bottomRight};`;
    document.getElementById("cssProperties").innerText = cssProperties;

}

function copyToClipboard() {
    var cssProperties = document.getElementById("cssProperties").innerText;
    var copyBtn = document.getElementById('copy-btn');

    // Create a temporary textarea element to copy the CSS properties
    var textarea = document.createElement("textarea");
    textarea.value = cssProperties;
    document.body.appendChild(textarea);

    // Select the text in the textarea and copy it to the clipboard
    textarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Provide feedback to the user
    copyBtn.innerText='copied';

    
}