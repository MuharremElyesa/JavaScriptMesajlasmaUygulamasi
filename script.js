// Bu alanda firebase bağlantısı için gerekli olan değişkenleri tanımladık.
// AŞAĞIDAKİ BOŞLUKLARI KENDİ FİREBASE PROJENİZE GÖRE DOLDURMANIZ GEREKMEKTEDİR.
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
firebase.initializeApp(firebaseConfig);
// Burada sayfanın devamında kullanacağımız değişkenleri tanımladık. Burda tanımlamamızın sebebi her türlü fonksiyon ve ya if yapısı içerisinde de çalışması için.
var senderName;
var database = firebase.database();
var message;
var message_box = document.getElementById("messageBox");
// Bu değişkeni özellikle en başta boş olarak tanımladık. Boş olarak tanımlamadığımızda eski mesajlar yüklenirken ilk başta ekrana "undefined" olarak yazdırmasıydı. İsterseniz "var html;" şeklinde taımlayarak sorunu görebilirsiniz.
var html = "";
var messageInput;
// Bu fonksiyon kullanıcı adını girip onayladığında çalışır. Görevi eski mesajları yükleyip ekrana yazdırmak. Ayrıca sayfa çalışırken yenileme atmadan yeni ekranan mesajları da sayfamıza yazıyor.
function messageStarter() {
    senderName = document.getElementById("senderName").value;
    if (senderName.length>0) {
        document.getElementsByClassName("messageInput")[0].style.display="flex";
        document.getElementById("starter").style.display="none";
        database.ref("messages").on("child_added", (snapshot)=>{
            if (snapshot.val().senderName == senderName) {
                var unix = snapshot.val().senderTime;
                var zaman = new Date(unix * 1000);
                var saat = zaman.getHours();
                var dakika = zaman.getMinutes();
                var yazilanZaman = saat + "." + dakika;
                html += "<ul class='message myMessage'>";
                html += "<li name='messageContents'>"+ snapshot.val().messageContents +"</li>";
                html += "<li name='senderTime'>"+ yazilanZaman +"</li>";
                html += "</ul>";
                unix = "";
            }else{
                var unix = snapshot.val().senderTime;
                var zaman = new Date(unix * 1000);
                var saat = zaman.getHours();
                var dakika = zaman.getMinutes();
                var yazilanZaman = saat + "." + dakika;
                html += "<ul class='message'>";
                html += "<li name='senderName'>"+ snapshot.val().senderName +"</li>";
                html += "<li name='messageContents'>"+ snapshot.val().messageContents +"</li>";
                html += "<li name='senderTime'>"+ yazilanZaman +"</li>";
                html += "</ul>";
                unix = "";
            }
            message_box.innerHTML+=html;
            html="";
            message_box.scroll({behavior:"smooth",top:999999999});
        });
    }else{
        alert("Lütfen bir kullanıcı adı giriniz");
    }
}
// Bu fonksiyon yeni mesaj yazıp gönderdiğimiz an çalışır. Görevi yeni eklenen mesajları veri tabanına kayıt etmek.
function messageSend() {
    messageInput = document.getElementById("messageInput").value;
    message = database.ref("messages").push();
    if (messageInput.length > 0) {
        message.set({
            senderName: senderName,
            messageContents: messageInput,
            senderTime: firebase.database.ServerValue.TIMESTAMP
        });
        document.getElementById("messageInput").value="";
    }
}