// function to update the preview image when a file is selected
function updatePreviewImage(inputId, imageId) {
  const fileInput = document.getElementById(inputId);
  const previewImage = document.getElementById(imageId);

  fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onload = function (e) {
        console.log("hyy");
        previewImage.src = e.target.result;
      };

      reader.readAsDataURL(file);
    } else {
      previewImage.src = ""; 
    }
  });
  
}
  updatePreviewImage("image1", "previewImage1");
  updatePreviewImage("image2", "previewImage2");
  updatePreviewImage("image3", "previewImage3");

// calling the function for each file input
