document.addEventListener('DOMContentLoaded', function () {
  // Ekleme butonunu seç ve tıklandığında yeni öğe ekleme fonksiyonunu çağır
  let liveToastBtn = document.getElementById('liveToastBtn');
  liveToastBtn.addEventListener('click', function () {
      newElement();
  });

  // Yeni bir öğe ekleyen fonksiyon
  function newElement() {
      let inputValue = document.getElementById("task").value.trim();
      let list = document.getElementById("list");

      // Boş giriş kontrolü
      if (!inputValue) {
          showErrorToast("Listeye boş ekleme yapılamaz!");
          return; 
      }

      // Yeni bir liste öğesi oluştur ve listeye ekle
      let listItem = document.createElement("li");
      listItem.textContent = inputValue;
      list.appendChild(listItem); // Listeye öğeyi ekle
      document.getElementById("task").value = ""; // Girdi alanını temizle
      showSuccessToast("Öğe listeye eklendi."); // Başarılı ekleme mesajı göster

      // Öğeye tıklandığında işaretleme işlemini yap
      list.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
        }
    });
    
   // Yeni eklenen öğelere silme düğmesi ekle
      addCloseButtonToListItems();
  }

  // Liste öğelerine silme düğmesi ekleyen fonksiyon
  function addCloseButtonToListItems() {
      let listItems = document.querySelectorAll('#list li');

      listItems.forEach(function (item) {
          let closeButton = document.createElement('span');
          closeButton.textContent = '×';
          closeButton.className = 'close';
          item.appendChild(closeButton);

          closeButton.addEventListener('click', () => item.remove());
      });
  }

  // Hata toast gösterme fonksiyonu
  function showErrorToast(message) {
      $(".error").toast("show").text(message);
  }

  // Başarı toast gösterme fonksiyonu
  function showSuccessToast(message) {
      $(".success").toast("show").text(message);
  }
});
// Yeni bir öğe eklerken
localStorage.setItem('todoList', JSON.stringify(todoList));

// Sayfa yüklendiğinde
let todoList = JSON.parse(localStorage.getItem('todoList'));

