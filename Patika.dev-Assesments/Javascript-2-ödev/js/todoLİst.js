let input = document.querySelector("#todo");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");


function addUIItem(txt) {                               // "txt" fonksiyona geldi
    let li = document.createElement("li");              // içi boş "li" oluşturuldu
    li.innerHTML = txt;                                 // içi boş "li"nin içeriği "txt" ye eşitlendi    
    list.insertBefore(li, list.childNodes[0]);          // .insertBefore(1, .childNodes[]) ve .childNodes[] - metotları ile "li" todo listesinde ilk sıraya eklendi
    const delBtn = document.createElement("button");    // "delBtn" - içi boş buton oluşturuldu
    delBtn.textContent = "x";                           // "delBtn" - boş butona x eklendi
    delBtn.classList.add("fas", "fa-trash-alt", "float-right");        // ?? - "delBtn" - class eklendi
    
    li.appendChild(delBtn);                             // "li"ye "delBtn" appendChild ile eklendi
    delBtn.addEventListener("click", (e) => {           // .addEventListener() ile click eventi belirtildi
      li.parentNode.removeChild(li);                    // .removeChild() ile li silindi
      savedTasks = savedTasks.filter((e) => e !== txt);             // "savedTasks" değişkenine "txt" ye eşit olmayanlar .filter() metodu ile seçildi
      console.log(savedTasks)
      localStorage.setItem("tasks", JSON.stringify(savedTasks));    // "savedTasks" JSON.stringify() edilip .setItem() ile localstorage eklendi
    });
  }

  // load saved tasts
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];         // "savedTasks" oluşturuldu local storagedan gelen bilgilere eşitlendi
  // add UI elements for any saved task
  savedTasks.forEach(addUIItem);            // her kayıtlı eleman için addUIItem((txt yani localstorage todos)) fonksiyonu kullanıldı
  
  btn.addEventListener("click", () => {
    let txt = input.value;                  // txt oluşturuldu - içerisine inputtan gelen bilgi eklendi
    if (txt === "") {
      alert("Please write something to do!");
    } else {
      savedTasks.push(txt);                 // savedTasks e txt pushlandı
      localStorage.setItem("tasks", JSON.stringify(savedTasks));            // localstorage güncellendi
      input.value = "";                     // input sıfırlandı
      addUIItem(txt);                       // addUIItem a txt gönderildi
    }
  });
  
  list.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    }
  });
  