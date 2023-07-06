chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      var focusButton = document.getElementById("board-controls-focus");
      if (focusButton) {
        focusButton.click();
      } else {
        console.error("Focus button not found");
      }

      var boardDiv = document.getElementsByClassName("board")[0];
      if (boardDiv) {
        if (boardDiv.style.height === window.screen.height * 0.8 + "px") {
          boardDiv.style.height = "";
          boardDiv.style.width = "";
        } else {
          boardDiv.style.height = window.screen.height * 0.8 + "px";
          boardDiv.style.width = window.screen.height * 0.8 + "px";
        }
      } else {
        console.error("Board div not found");
      }

      var mainDiv = document.getElementById("board-layout-main");

      if (mainDiv) {
        if (mainDiv.style.left === "40%") {
          mainDiv.style.position = "";
          mainDiv.style.left = "";
          mainDiv.style.transform = "";
        } else {
          mainDiv.style.position = "absolute";
          mainDiv.style.left = "40%";
          mainDiv.style.transform = "translateX(-40%)";
        }
      } else {
        console.error("Main div not found");
      }

      var controlsDiv = document.getElementById("board-layout-controls");
      if (controlsDiv) {
        if (controlsDiv.style.display === "none") {
          controlsDiv.style.display = "";
        } else {
          controlsDiv.style.display = "none";
        }
      } else {
        console.error("Controls div not found");
      }

      var sidebarDivWidthParam = document.getElementsByClassName("board-layout-sidebar")[0];
      var screenWidth = window.innerWidth;
      if (sidebarDivWidthParam) {
        if (sidebarDivWidthParam.style.width === screenWidth * 0.18 + "px") {
          sidebarDivWidthParam.style.width = "";
        } else {
          sidebarDivWidthParam.style.width = screenWidth * 0.18 + "px";
        }
      } else {
        console.error("SidebarParam div not found");
      }
      var sidebarDiv = document.getElementById('board-layout-sidebar');
      

      if (sidebarDiv) {
        if (sidebarDiv.style.marginLeft === screenWidth / 2 + "px") {
          sidebarDiv.style.marginLeft = "";
        } else {
          sidebarDiv.style.marginLeft = screenWidth / 2 + "px";
        }
      } else {
        console.error("Sidebar div not found");
      }
    },
  });
});
