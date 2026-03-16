<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>New Portfolio Contact Message</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
    <h1 style="margin-bottom: 16px;">New Portfolio Contact Message</h1>

    <p style="margin-bottom: 12px;">
        <strong>Sender Email:</strong> {{ $senderEmail }}
    </p>

    <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
    <div style="white-space: pre-line;">{{ $messageBody }}</div>
</body>
</html>
