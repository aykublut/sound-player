Yerli Spotify

Türk dünyasından seçilmiş müzikleri çalmak için geliştirilmiş, modern ve kullanıcı dostu bir müzik çalar uygulaması.

Proje Hakkında

Yerli Spotify, React ve TypeScript ile geliştirilmiş, responsive bir müzik çalar uygulamasıdır. Kullanıcılar, farklı kategorilerdeki şarkıları görüntüleyebilir, seçtikleri şarkıyı oynatabilir ve mobil/masaüstü cihazlarda sorunsuz bir deneyim yaşayabilir. Proje, modern frontend teknolojileriyle yazıldı ve hata ayıklama süreçlerinde önemli deneyimler kazandırdı.

Özellikler
Şarkı Listeleri: Alim Qasimov, Münir Özkul, Müslüm Gürses gibi kategorilerde şarkılar.
Ses Oynatma: Tarayıcı <audio> etiketiyle otomatik oynatma ve kontrol desteği.
Responsive Tasarım: Tailwind CSS ile mobil ve masaüstü uyumlu arayüz.
Navigasyon: react-router-dom ile anasayfa, şarkı detayları ve kategori sayfaları arasında geçiş.
State Yönetimi: @reduxjs/toolkit ile dinamik başlık ve şarkı seçimi yönetimi.
Ikonlar: react-icons ile kullanıcı dostu ikonlar.

Kullanılan Teknolojiler

React: Kullanıcı arayüzü için.
TypeScript: Temel tip güvenliği ve hata önleme.
Tailwind CSS: Responsive ve modern stil için.
react-router-dom: Sayfa navigasyonu için.
@reduxjs/toolkit: State yönetimi için.
react-icons: Ikon entegrasyonu.
Vite: Hızlı geliştirme ve build aracı.

Kurulum

Projenizi yerel ortamda çalıştırmak için aşağıdaki adımları izleyin:

git clone https://github.com/aykublut/sound-player.git

cd sound-player       proje ismini "tailwind" olarak bırakmış olabilirim dikkatli olunuz  --- cd tailwind ---

npm install

npm run dev

Ardından, tarayıcınızda http://localhost:5173 adresine gidin.

Kullanım
Ana Sayfa: Türk dünyasından şarkı kartlarını görüntüleyin.
Şarkı Kartları: Bir şarkıya tıklayarak detay sayfasına gidin ve şarkıyı oynatın.
Kategoriler: /alim, /munir, /muslum yollarıyla farklı şarkı listelerine erişin.
Admin Modu: Başlıkta bulunan ikona tıklayarak admin müzik listesine geçiş yapın.

Ekran Görüntüleri

(Ekran görüntüleri eklenecek. Örneğin, Vercel/Netlify deploy sonrası buraya link ekleyin.)

Zorluklar ve Öğrenilenler

Zorluklar: Responsive tasarım (Tailwind ile mobil uyumluluk) ve fonksiyonel hatalar (Redux state yönetimi, router sorunları) en çok zaman alan kısımlardı. Hataları çözmek için yoğun debug süreçleri gerekti.
Öğrenilenler: React hook’ları, Redux Toolkit, Tailwind CSS ve TypeScript’in hata yakalama özellikleri konusunda deneyim kazandım. Hata ayıklama becerilerim ciddi şekilde gelişti.

Gelecek Planlar
Unit testler eklemek (Jest/Vitest ile).
Backend entegrasyonu (örneğin, şarkı listesini bir API’den çekme).
Ses oynatma için gelişmiş özellikler (örneğin, dalga formu görselleştirme).
Kod tekrarı azaltmak için reusable komponentler oluşturma.


Katkıda bulunmak isterseniz:

Depoyu fork edin.
Yeni bir branch oluşturun: git checkout -b feature/yeni-ozellik.
Değişikliklerinizi yapın ve commit edin: git commit -m "Yeni özellik eklendi".
Branch’i push edin: git push origin feature/yeni-ozellik.


Pull request açın.

İletişim
GitHub: aykublut
Proje Linki: https://aykublut.github.io/sound-player/
