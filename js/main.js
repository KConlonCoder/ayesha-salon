/* Set the width of the side navigation to 250px */
document.getElementById("menu-icon").addEventListener('click', openNav)

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
