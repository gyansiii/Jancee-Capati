<?php

namespace Tests\Feature;

use App\Mail\ContactMessageMail;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactMessageTest extends TestCase
{
    public function test_contact_message_can_be_sent(): void
    {
        Mail::fake();

        $response = $this->post(route('contact-messages.store'), [
            'sender_email' => 'sender@example.com',
            'message' => 'Hello Jancee, I would like to ask about a collaboration opportunity.',
        ]);

        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect();

        Mail::assertSent(ContactMessageMail::class, function (ContactMessageMail $mail): bool {
            return $mail->senderEmail === 'sender@example.com'
                && $mail->messageBody === 'Hello Jancee, I would like to ask about a collaboration opportunity.';
        });
    }

    public function test_contact_message_requires_a_sender_email_and_message(): void
    {
        Mail::fake();

        $response = $this->from(route('contactus'))->post(route('contact-messages.store'), [
            'sender_email' => '',
            'message' => '',
        ]);

        $response
            ->assertSessionHasErrors(['sender_email', 'message'])
            ->assertRedirect(route('contactus'));

        Mail::assertNothingSent();
    }
}
