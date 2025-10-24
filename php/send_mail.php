<?php
phpinfo();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Formdan gelen verileri alıyoruz
    $name = htmlspecialchars($_POST['name']);
    $telephone = htmlspecialchars($_POST['telephone'])
    $email = htmlspecialchars($_POST['email']);
    $company = htmlspecialchars($_POST['company']);
    $district = htmlspecialchars($_POST['district']);
    $m2 = htmlspecialchars($_POST['m2']);
    $amount = htmlspecialchars($_POST['amount']);
    $message = htmlspecialchars($_POST['message']);

    // Mail gönderme işlemi için
    $to = "barsonar2000@hotmail.com"; // Buraya hedef e-posta adresini yazın
    $subject = "Yeni İletişim Formu Mesajı";
    $body = "Ad Soyad: " . $name . "\nE-posta: " . $email . "\n\nMesaj:\n" . $message;

    // Mail başlıkları
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Mail gönderme işlemi
    if (mail($to, $subject, $body, $headers)) {
        echo "Mesajınız başarıyla gönderildi.";
    } else {
        echo "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.";
    }
}
?>
