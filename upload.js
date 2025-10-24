// upload.js
import { storage } from './firebase.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const uploadInput = document.getElementById("uploadBtn");
const progressBar = document.getElementById("progressBar");
const outputURL = document.getElementById("outputURL");

uploadInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const storageRef = ref(storage, 'videos/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progressBar.value = progress;
    },
    (error) => {
      alert("Upload failed: " + error.message);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        outputURL.innerText = downloadURL;
        outputURL.href = downloadURL;
      });
    }
  );
});
