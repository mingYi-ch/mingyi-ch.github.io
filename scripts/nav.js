/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function changeNav() {
    const siderbarWidth = document.getElementById("mySidebar").style.width;
    if (siderbarWidth == "0%") {
      document.getElementById("navBtn").innerHTML = "&times;";
      document.getElementById("mySidebar").style.width = "20%";
      document.getElementById("main").style.marginLeft = "20%";
    }else{
      document.getElementById("navBtn").innerHTML = "&#9776;";
      document.getElementById("mySidebar").style.width = "0%";
      document.getElementById("main").style.marginLeft = "0%";
    }
  }