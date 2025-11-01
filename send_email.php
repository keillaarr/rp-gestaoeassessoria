<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "seuemail@seudominio.com.br"; // Coloque seu e-mail
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $fullMessage = "Nome: $name\nEmail: $email\n\nMensagem:\n$message";

    if(mail($to, $subject, $fullMessage, $headers)) {
        echo "<script>alert('Mensagem enviada com sucesso!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Erro ao enviar a mensagem. Tente novamente.'); window.location.href='index.html';</script>";
    }
} else {
    // Se não for POST, redireciona para a página inicial
    header("Location: index.html");
    exit();
}
?>
