function openMenu() {
    var menu = document.getElementById("menu");
    menu.classList.add("active");
  }
  
  


function closeMenu() {
  var menu = document.getElementById('menu');
  menu.style.display = 'none';
}
function closeMenu() {
    var menu = document.getElementById("menu");
    menu.classList.remove("active");}
    function openForm() {
        document.getElementById("form").style.display = "block";
     }
  
     function closeForm() {
        document.getElementById("form").style.display = "none";
     }

     function showNotification(message, duration) {
        const notificationElement = document.getElementById("notification");
        const notificationTextElement = document.getElementById("notificationText");
        
        notificationTextElement.textContent = message;
        notificationElement.classList.remove("hide");
        
        setTimeout(() => {
          notificationElement.classList.add("hide");
        }, duration);
      }
      
      function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
          .then(() => {
            showNotification("Текст скопійовано!", 2000);
          })
          .catch((error) => {
            console.error("Помилка під час копіювання тексту:", error);
          });
      }
      