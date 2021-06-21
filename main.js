//get input element
const filterInput = document.querySelector('.filterInput');
//add event listner
filterInput.addEventListener('keyup', () => {
  const value = document.querySelector('.filterInput').value.toUpperCase();

  //getting names of ul
  const ul = document.querySelector('#names');
  const li = ul.querySelectorAll('.collection-item');

  for (let i = 0; i <= li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    
    if (a.innerHTML.toUpperCase().indexOf(value) > -1) {
      li[i].style.display = 'block';
    } else {
      li[i].style.display = 'none';
    }
  }
})