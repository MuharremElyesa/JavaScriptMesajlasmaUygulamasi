# JavaScriptMesajlasmaUygulamasi

Herkese iyi çalışmalar. Youtube'ta dolanırken bir javascript ile mesajlaşma uygulaması geliştiren bir videoya rastladım. Videonun linkini buraya bırakıyorum orjinal halini buradan izleyebilirsiniz. Video iki kısımdan oluşuyor. 1. video: https://www.youtube.com/watch?v=h50VHUKG_7U&t=263s 2. video: https://www.youtube.com/watch?v=rFm0rEWzxSQ&t=1390s .

Artık projemize geçebiliriz. Öncelikle nasıl kullanıldığından başlayalım. Projeyi indirip çalıştırdığınızda karşınıza aşağıdaki gibi bir ekran gelecek.

![](./images/Ekran%20görüntüsü%202023-07-16%20223032.png)

Bu ekrandan kendinize bir kullanıcı adı seçip giriş yapıyoruz. Ben projenin veri tabanına "kullanıcı 1" ve "kullanıcı 2" isimli iki giriş farklı giriş yapıp mesaj gönderdim. Buraya hangi isimle giriş yaparsanız gönderdiğiniz mesajlar o kullanıcı adı ile sisteme kayıt edilecektir. Ben şimdi "kulllanıcı 1" yazıp giriş yaptığımda şöyle bir ekran karşımıza gelecek.

![](./images/Ekran%20görüntüsü%202023-07-16%20223245.png)

Biz şu anda "kullanıcı 1" olarak giriş yaptık ve bu giriş ile "Merhaba kullanıcı 2" diye mesaj gönderdik. Karşı taraftaki "kullanıcı 2"de bize "Merhaba kullanıcı 1" diye mesaj gönderdi. Şimdi başka bir sekmede "Elyesa" kullanıcı adı ile giriş yapıp mesaj gönderdiğimde "kullanıcı 1" bizi nasıl görüyor ona bakalım.

![](./images/Ekran%20görüntüsü%202023-07-17%20145843.png)

"kullanıcı 1" "Elyesa" isimli birinden mesaj geldiğinde bu şekilde görüyor. Sistemimiz tamamen bu şekilde. Peki veritabanı nerede diye soracak olursanız Google'un Firebase adlı hizmetinden faydalanıyoruz. Bu link ile firebase'e ulaşabilirsiniz: https://firebase.google.com/ . Bu linke tıkladıktan sonra sağ yukarıdaki "go to console" ya da Türkçe kullanıyorsanız "konsola git" butonu ile konsola geçiş yaptıktan sonra o alandan kendi projelerinizi oluşturabilirsiniz. Biz bu projede Firebase hizmetinin Realtime Database yani Gerçek Zamanlı Veri Tabanı özelliğinden faydalandık. Yani projemizin veritabanı Firebase üzerinde depolanıyor. O yüzden projeyi indirip çalıştırdığınızda internet bağlantınız olduğu muddetçe sorunsuzca kullanabilirsiniz. Ben bu projeyi burada bırakıyorum. Geliştirme yapmak isteyen arkadaşlara aklımdakileri yazıp yazımı noktalıyorum.

Not: Bu geliştirmeleri yaparken projeye kendi firebase projenizi oluşturup bu projeye bağlarsanız daha rahat geliştirme yapabilirsiniz.

- Projemizde giriş yapılırken sadece isim girişi yapılmasını istiyor. Projeye girmek için bir oturum sistemi ile giriş yapılması çok daha güzel olacaktır. Hesabı olanlar bilgileri ile giriş yaparken, hesabı olmayanlar önce hesap oluşturup giriş yapabilirler.

- Gördüğünüz üzere tüm mesajlar tek bir yerde görünüyor ve okunuyor. Yani kimseye özel mesaj gönderemiyorsunuz. Farklı farklı sohbet odaları oluşturma ya da kişilere özel mesaj gönderme özelliği eklenebilir.

- Gönderdiğimiz mesajları silme ve düzenleme özellikleri eklenebilir.

- Kullanıcılar isterlerse profil fotoğrafı belirleyip sohbet kısmında gönderen kişinin adı ile profil fotoğrafı da gösterebilir.

Şimdilik aklıma gelen bu dört özellik projeye eklendiğinde daha güzel bir mesajlaşma uygulamasına dönüşecektir. Siz de eğer geliştirmek istiyorsanız bu fikirleri yapamaya çalışabilir ya da aklınıza gelen başka özellikleri kendinize göre ekleyebilirsiniz. Herkese iyi çalışmalar :).