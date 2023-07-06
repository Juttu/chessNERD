chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      var focusButton = document.getElementById("board-controls-focus");
      if (focusButton) {
        focusButton.click();
      } else {
        console.error('Focus button not found');
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
        console.error('Board div not found');
      }

      var mainDiv = document.getElementById('board-layout-main');
      var leftDiv = document.getElementsByClassName('board-layout-nav')[0];
      var rightDiv = document.getElementById('board-layout-sidebar');
      var userTaglineElements = document.getElementsByClassName('user-tagline-rating user-tagline-white');

      if (mainDiv) {
        if (mainDiv.style.left === '40%') {
          mainDiv.style.position = '';
          mainDiv.style.left = '';
          mainDiv.style.transform = '';
        } else {
          mainDiv.style.position = 'absolute';
          mainDiv.style.left = '40%';
          mainDiv.style.transform = 'translateX(-40%)';
        }
      } else {
        console.error('Main div not found');
      }

      if (leftDiv && leftDiv.style.display === 'none') {
        leftDiv.style.display = '';
      } else if (leftDiv) {
        leftDiv.style.display = 'none';
      } else {
        console.error('Left div not found');
      }

      if (rightDiv && rightDiv.style.display === 'none') {
        rightDiv.style.display = '';
      } else if (rightDiv) {
        rightDiv.style.display = 'none';
      } else {
        console.error('Right div not found');
      }

      for (var i = 0; i < userTaglineElements.length; i++) {
        if (userTaglineElements[i].style.display === 'none') {
          userTaglineElements[i].style.display = '';
        } else {
          userTaglineElements[i].style.display = 'none';
        }
      }

      var controlsDiv = document.getElementById("board-layout-controls");
      if (controlsDiv) {
        if (controlsDiv.style.display === 'none') {
          controlsDiv.style.display = '';
        } else {
          controlsDiv.style.display = 'none';
        }
      } else {
        console.error('Controls div not found');
      }
    }
  });
});
