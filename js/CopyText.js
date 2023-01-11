 // JavaScript function to copy the content
 function CopyText(idText,idOutput) {
    // Get the content of the element
    var content = document.getElementById(idText).innerText;
    // Asynchronously write the content to clipboard
    navigator.clipboard.writeText(content)
    .then(() => {
        
        document.getElementById(idOutput).style.opacity = 1;
        setTimeout(() => {
            document.getElementById(idOutput).style.opacity = 0;
        },3000)
    })
    .catch(err => {
      console.error("could not copy text : ", err);
    });
  }