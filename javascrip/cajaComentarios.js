const submitButton = document.getElementById("submit-button");
const commentInput = document.getElementById("comment-input");
const commentsContainer = document.getElementById("comments-container");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
  const comment = commentInput.value;
  const commentElement = document.createElement("div");
  commentElement.innerHTML = comment;
  commentsContainer.appendChild(commentElement);
  commentInput.value = "";
  commentElement.style.backgroundColor = 'lightblue';
  /*const comentario = document.getElementById("comment-input").value;*/
  localStorage.setItem("comentario", comment)
  /*localStorage.getItem('comentario');*/
  console.log(commentElement)
});
/*traer lo almacenado en localestorage e imprimirlo de nuevo en el div*/