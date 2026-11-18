<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

/** @function respond Send a JSON response and stop processing. */
function respond(int $status, string $code): void {
    http_response_code($status);
    echo json_encode(['ok' => $status >= 200 && $status < 300, 'code' => $code]);
    exit;
}

/** @function postValue Read and trim one submitted form field. */
function postValue(string $key): string {
    return trim((string)($_POST[$key] ?? ''));
}

/** @function validContactInput Validate required fields and accepted lengths. */
function validContactInput(string $name, string $message): bool {
    return strlen($name) >= 2 && strlen($name) <= 100 && strlen($message) >= 10;
}

/** @function sendContactMail Deliver the enquiry through the configured PHP mail transport. */
function sendContactMail(array $config, string $name, string $email, string $message): bool {
    $body = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}";
    $subject = 'Portfolio contact request';
    $fromName = preg_replace('/[\r\n]+/', ' ', (string)($config['sender_name'] ?? 'Portfolio'));
    $headers = ['MIME-Version: 1.0', 'Content-Type: text/plain; charset=UTF-8', "From: {$fromName} <{$config['sender']}>", "Reply-To: {$email}"];
    return mail((string)$config['recipient'], $subject, $body, implode("\r\n", $headers));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') respond(405, 'METHOD_NOT_ALLOWED');
if (postValue('website') !== '') respond(200, 'OK');
if (postValue('privacy') !== '1') respond(422, 'PRIVACY_REQUIRED');

$name = preg_replace('/[\r\n]+/', ' ', postValue('name'));
$email = postValue('email');
$message = postValue('message');
if (!validContactInput($name, $message) || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 || strlen($message) > 5000) {
    respond(422, 'INVALID_INPUT');
}

$configPath = __DIR__ . '/contact-config.php';
if (!is_file($configPath)) respond(503, 'CONFIG_MISSING');
$config = require $configPath;
if (!is_array($config) || !filter_var($config['recipient'] ?? '', FILTER_VALIDATE_EMAIL) || !filter_var($config['sender'] ?? '', FILTER_VALIDATE_EMAIL)) {
    respond(503, 'CONFIG_MISSING');
}
if (!sendContactMail($config, $name, $email, $message)) respond(502, 'DELIVERY_FAILED');
respond(200, 'OK');
