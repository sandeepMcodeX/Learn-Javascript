const requestURl = `https://randomuser.me/api`;
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURl);
xhr.onreadystatechange = () => {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(typeof data);
    console.log(data.results.gender);
  }
};
xhr.send();
// console.log(xhr.readyState);
