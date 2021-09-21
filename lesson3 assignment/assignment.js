let count = 0;

function displayCount() {
  document.getElementById('count').innerHTML = 'Images added by user: ' + count;
}

window.addEventListener('load', (event) => {
  displayCount();
});

function urlIsValid(url) {
  return url.match(/\.(jpeg|jpg|gif|png|JPG|PNG|JPEG)$/) != null;
}

function showImage() {
  let url = imageForm.userImage.value;
  if (urlIsValid(url)) {
    count++;
    displayCount();

    var img = document.createElement('IMG');
    img.src = imageForm.userImage.value;
    img.classList.add('niceImage');
    let imgId = 'imgNumber' + count;
    img.id = imgId;
    document.body.appendChild(img);

    let button = document.createElement('button');
    button.innerHTML = 'Delete the above image';
    button.setAttribute('onclick', `deleteImage('${imgId}')`);
    button.id = imgId + 'button';
    document.body.appendChild(button);

    document.getElementById('error').innerHTML = '';
  } else {
    let referenceNode = document.getElementById('imageHeader');
    let newNode = document.getElementById('error');
    newNode.innerHTML = 'Please enter a valid URL for the image.';
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}

function deleteImage(id) {
  document.getElementById(id).remove();
  document.getElementById(id + 'button').remove();
  count--;
  displayCount();
}
