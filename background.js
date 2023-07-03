chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
    code: `
      var mainDiv = document.getElementById('board-layout-main');
      var leftDiv = document.getElementsByClassName('board-layout-nav')[0];
      var rightDiv = document.getElementById('board-layout-sidebar');
      var userTaglineElements = document.getElementsByClassName('user-tagline-rating user-tagline-white');
      var zoomLevel = 1;

      if (mainDiv) {
        if (mainDiv.style.left === '50%') {
          mainDiv.style.position = '';
          mainDiv.style.left = '';
          mainDiv.style.transform = '';
        } else {
          mainDiv.style.position = 'absolute';
          mainDiv.style.left = '50%';
          mainDiv.style.transform = 'translateX(-50%)';
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
    `,
  });
});
