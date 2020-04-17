/** Add any JavaScript you need to this file. */
(function() {
  function clickHandler() {
    document.getElementById('menu_assignments').addEventListener('click', function() {
      var aItems = document.getElementsByClassName('Assignment');
      for (var i = 0; i < aItems.length; i++) {
        aItems[i].removeAttribute('hidden');
      }

      var lItems = document.getElementsByClassName('Lecture');
      for (i = 0; i < lItems.length; i++) {
        lItems[i].setAttribute('hidden', true);
      }
    });
    document.getElementById('menu_lectures').addEventListener('click', function() {
      var aItems = document.getElementsByClassName('Assignment');
      for (var i = 0; i < aItems.length; i++) {
        aItems[i].setAttribute('hidden', true);
      }

      var lItems = document.getElementsByClassName('Lecture');
      for (i = 0; i < lItems.length; i++) {
        lItems[i].removeAttribute('hidden');
      }
    });
    document.getElementById('menu_all').addEventListener('click', function() {
      var aItems = document.getElementsByClassName('Assignment');
      for (var i = 0; i < aItems.length; i++) {
        aItems[i].removeAttribute('hidden');
      }

      var lItems = document.getElementsByClassName('Lecture');
      for (i = 0; i < lItems.length; i++) {
        lItems[i].removeAttribute('hidden');
      }
    });
  }

  window.onload = clickHandler;
})();
displayON();
function displayON() {
  document.getElementById('orderNumber').style.display = 'block';
}
hideON();
function hideON() {
  document.getElementById('orderNumber').style.display = 'none';
}
