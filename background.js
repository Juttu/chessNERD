chrome.action.onClicked.addListener((tab) => {
  const url = tab.url;
  if (url.startsWith("https://www.chess.com/game")) {
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
          if (sidebarDivWidthParam.style.width !== screenWidth * 0.18 + "px") {
            sidebarDivWidthParam.style.width = screenWidth * 0.18 + "px";
          } else {
            sidebarDivWidthParam.style.width = "";
          }
        } else {
          console.error("SidebarParam div not found");
        }
        var sidebarDiv = document.getElementById("board-layout-sidebar");

        if (sidebarDiv) {
          if (sidebarDiv.style.marginLeft === screenWidth / 2 + "px") {
            sidebarDiv.style.marginLeft = "";
          } else {
            sidebarDiv.style.marginLeft = screenWidth / 2 + "px";
          }
        } else {
          console.error("Sidebar div not found");
        }
        var adElement = document.getElementsByClassName("board-layout-ad")[0];

        if (adElement) {
          if (adElement.style.display === "none") {
            adElement.style.display = "";
          } else {
            adElement.style.display = "none";
          }
        } else {
          console.error("Ad element not found");
        }
      },
    });
  } else if (url.startsWith("https://www.chess.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        // Create a new banner element
        var banner = document.createElement("div");
        banner.classList.add("banner");
        banner.textContent = "Start a game to see the magic";

        // Apply styles to the banner
        banner.style.position = "fixed";
        banner.style.top = "20px";
        banner.style.right = "20px";
        banner.style.backgroundColor = "#ffffff";
        banner.style.color = "#000000";
        banner.style.padding = "20px";
        banner.style.fontFamily = "Lexend Deca, Arial, sans-serif";
        banner.style.fontSize = "18px";
        banner.style.fontWeight = "bold";
        banner.style.textAlign = "center";
        banner.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
        banner.style.zIndex = "9999";

        // Append the banner to the document body
        document.body.appendChild(banner);

        // Remove the banner after 2 seconds
        setTimeout(function () {
          banner.remove();
        }, 2000);
      },
    });
  }
});
