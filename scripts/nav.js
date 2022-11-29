    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function changeNav() {
    const display = document.getElementById("mySidebar").style.display;
    if (!display) {
      document.getElementById("mySidebar").style.display = "block"
      document.getElementById("navBtn").innerHTML = "&times;";
      // document.getElementById("mySidebar").style.width = "20%";
      // document.getElementById("main").style.marginLeft = "20%";
    }else{
      document.getElementById("navBtn").innerHTML = "&#9776;";
      document.getElementById("mySidebar").style.display = ""
      // document.getElementById("mySidebar").style.width = "0%";
      // document.getElementById("main").style.marginLeft = "0%";
    }
  }