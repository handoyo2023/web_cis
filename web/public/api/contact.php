<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed.']);
    exit;
}

$configFile = __DIR__ . '/config.php';
$autoloadFile = __DIR__ . '/vendor/autoload.php';

if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'SMTP config belum disiapkan di server.']);
    exit;
}

if (!file_exists($autoloadFile)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'PHPMailer belum ter-install di server.']);
    exit;
}

$config = require $configFile;
require $autoloadFile;

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '[]', true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Format request tidak valid.']);
    exit;
}

$nama = trim((string) ($payload['nama'] ?? ''));
$perusahaan = trim((string) ($payload['perusahaan'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$whatsapp = trim((string) ($payload['whatsapp'] ?? ''));
$kebutuhan = trim((string) ($payload['kebutuhan'] ?? ''));

if ($nama === '' || $perusahaan === '' || $email === '' || $whatsapp === '' || $kebutuhan === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Semua field wajib diisi.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Format email tidak valid.']);
    exit;
}

$subject = sprintf('CIS Schedule Consultation | %s | %s', $perusahaan, $nama);

$escapedNama = htmlspecialchars($nama, ENT_QUOTES, 'UTF-8');
$escapedPerusahaan = htmlspecialchars($perusahaan, ENT_QUOTES, 'UTF-8');
$escapedEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$escapedWhatsapp = htmlspecialchars($whatsapp, ENT_QUOTES, 'UTF-8');
$escapedKebutuhan = nl2br(htmlspecialchars($kebutuhan, ENT_QUOTES, 'UTF-8'));

$plainBody = implode(PHP_EOL, [
    'Halo Tim CIS,',
    '',
    'Anda menerima permintaan baru Schedule Consultation dari website CIS.',
    '',
    'Detail Pengirim:',
    '',
    'Nama: ' . $nama,
    'Perusahaan: ' . $perusahaan,
    'Email: ' . $email,
    'Nomor WhatsApp: ' . $whatsapp,
    '',
    'Kebutuhan:',
    $kebutuhan,
    '',
    'Mohon tindak lanjuti kebutuhan ini dan balas ke kontak pengirim bila diperlukan.',
    '',
    'Terima kasih.',
    'PT Collaborative Integrated Solutions',
]);

$htmlBody = sprintf(
    '<div style="margin:0;padding:24px;background:#f4f7fb;font-family:Arial,sans-serif;color:#102a43;">
        <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #d9e3f0;border-radius:20px;overflow:hidden;">
            <div style="padding:24px 28px;background:linear-gradient(135deg,#081f4f,#0a2b67);color:#ffffff;">
                <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#f0c45a;">PT Collaborative Integrated Solutions</p>
                <h1 style="margin:0;font-size:28px;line-height:1.15;">Schedule Consultation Baru</h1>
                <p style="margin:12px 0 0;font-size:15px;line-height:1.7;color:#dbe7ff;">Permintaan baru telah dikirim melalui website CIS dan memerlukan tindak lanjut dari tim support.</p>
            </div>
            <div style="padding:28px;">
                <div style="padding:18px 20px;border:1px solid #d9e3f0;border-radius:16px;background:#f8fbff;">
                    <p style="margin:0 0 14px;font-size:13px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#0f5db8;">Detail Pengirim</p>
                    <table style="width:100%%;border-collapse:collapse;font-size:15px;line-height:1.8;">
                        <tr><td style="padding:4px 0;width:160px;font-weight:700;color:#16345d;">Nama</td><td style="padding:4px 0;color:#243b53;">%s</td></tr>
                        <tr><td style="padding:4px 0;font-weight:700;color:#16345d;">Perusahaan</td><td style="padding:4px 0;color:#243b53;">%s</td></tr>
                        <tr><td style="padding:4px 0;font-weight:700;color:#16345d;">Email</td><td style="padding:4px 0;color:#243b53;">%s</td></tr>
                        <tr><td style="padding:4px 0;font-weight:700;color:#16345d;">WhatsApp</td><td style="padding:4px 0;color:#243b53;">%s</td></tr>
                    </table>
                </div>
                <div style="margin-top:20px;padding:20px;border:1px solid #d9e3f0;border-radius:16px;background:#ffffff;">
                    <p style="margin:0 0 12px;font-size:13px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#0f5db8;">Kebutuhan Utama</p>
                    <p style="margin:0;font-size:15px;line-height:1.9;color:#243b53;">%s</p>
                </div>
                <div style="margin-top:20px;padding:18px 20px;border-radius:16px;background:#fff8e8;color:#7a4b00;">
                    <p style="margin:0;font-size:14px;line-height:1.8;">
                        Email pengirim sudah dimasukkan sebagai <strong>CC</strong> dan <strong>Reply-To</strong>, sehingga tim CIS dapat langsung membalas percakapan ini untuk tindak lanjut.
                    </p>
                </div>
            </div>
            <div style="padding:18px 28px;border-top:1px solid #e7eef8;background:#fbfdff;">
                <p style="margin:0;font-size:13px;line-height:1.8;color:#486581;">
                    Terima kasih.<br>
                    <strong>PT Collaborative Integrated Solutions</strong>
                </p>
            </div>
        </div>
    </div>',
    $escapedNama,
    $escapedPerusahaan,
    $escapedEmail,
    $escapedWhatsapp,
    $escapedKebutuhan
);

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = (string) $config['smtp_host'];
    $mail->Port = (int) $config['smtp_port'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $config['smtp_username'];
    $mail->Password = (string) $config['smtp_password'];
    $mail->SMTPSecure = (string) $config['smtp_secure'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom((string) $config['from_email'], (string) $config['from_name']);
    $mail->addAddress((string) $config['to_email'], (string) $config['to_name']);
    $mail->addCC($email, $nama);
    $mail->addReplyTo($email, $nama);
    $mail->Subject = $subject;
    $mail->Body = $htmlBody;
    $mail->AltBody = $plainBody;
    $mail->isHTML(true);
    $mail->send();

    echo json_encode(['ok' => true, 'message' => 'Permintaan konsultasi berhasil dikirim.']);
} catch (Exception $exception) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Gagal mengirim email. Cek konfigurasi SMTP Hostinger.',
        'error' => $exception->getMessage(),
    ]);
}
