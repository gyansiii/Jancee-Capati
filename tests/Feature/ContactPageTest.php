<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ContactPageTest extends TestCase
{
    public function test_contact_page_is_accessible(): void
    {
        $response = $this->get(route('contactus'));

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('ContactUs/contactus'));
    }
}
