const progressBarInner = document.getElementById("progress-bar-inner");
const leftStorageNumber = document.getElementById("left-storage");
const totalStorage = 1000;

let usedStorage = 770;
let leftStorage = totalStorage - usedStorage;
let usedStoragePercentage =  Math.floor(usedStorage / totalStorage * 100) + "%";



function displayLeftStorage() {
  console.log(leftStorageNumber);
  return  leftStorageNumber.textContent = leftStorage;
}

function progressBar (){
  return progressBarInner.style.width =  usedStoragePercentage 
}

progressBarInner.style.width =  0 ;
displayLeftStorage();
setTimeout(progressBar, 1000);