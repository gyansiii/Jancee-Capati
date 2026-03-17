<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_home_page_displays_the_portfolio_landing_page(): void
    {
        $response = $this->get(route('home'));

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('Welcome'));
    }

    public function test_about_me_page_is_accessible(): void
    {
        $response = $this->get(route('aboutme'));

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('AboutMe/aboutme'));
    }

    public function test_my_projects_page_is_accessible(): void
    {
        $response = $this->get(route('myproject'));

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('MyProjects/myproject'));
    }

    public function test_tech_stack_page_is_accessible(): void
    {
        $response = $this->get(route('techstack'));

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('TechStack/techstack'));
    }

    public function test_work_experience_page_is_accessible(): void
    {
        $response = $this->get(route('workexperience'));

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('WorkExperience/workexperience'));
    }
}
