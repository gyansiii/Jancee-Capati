<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactMessageRequest;
use App\Mail\ContactMessageMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class ContactMessageController extends Controller
{
    public function __invoke(ContactMessageRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        Mail::to(
            (string) config('mail.contact_recipient.address'),
            (string) config('mail.contact_recipient.name'),
        )->send(new ContactMessageMail(
            senderEmail: $validated['sender_email'],
            messageBody: $validated['message'],
        ));

        return back()->with('success', 'Your message has been sent successfully.');
    }
}
