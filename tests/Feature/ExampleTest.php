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

    public function test_home_page_component_contains_the_welcome_preview_toggle(): void
    {
        $component = file_get_contents(resource_path('js/pages/Welcome.vue'));

        $this->assertIsString($component);
        $this->assertStringContainsString('Welcome to my personal website', $component);
        $this->assertStringContainsString('Hide welcome', $component);
        $this->assertStringContainsString('id="welcome-preview"', $component);
        $this->assertStringContainsString('/images/port.gif', $component);
    }

    public function test_about_me_page_is_accessible(): void
    {
        $response = $this->get(route('aboutme'));

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('AboutMe/aboutme'));
    }

    public function test_about_me_component_contains_the_toggleable_profile_section(): void
    {
        $component = file_get_contents(resource_path('js/pages/AboutMe/aboutme.vue'));

        $this->assertIsString($component);
        $this->assertStringContainsString('Hide About Me', $component);
        $this->assertStringContainsString('Read About Me', $component);
        $this->assertStringContainsString('enter-from-class="translate-y-10 scale-[0.98] opacity-0"', $component);
        $this->assertStringContainsString('leave-to-class="translate-y-12 scale-[0.98] opacity-0"', $component);
        $this->assertStringContainsString('v-if="isAboutDetailsVisible"', $component);
        $this->assertStringContainsString('A closer look at my journey', $component);
        $this->assertStringContainsString('@primary-click="toggleAboutDetails"', $component);
    }

    public function test_my_projects_page_is_accessible(): void
    {
        $response = $this->get(route('myproject'));

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('MyProjects/myproject'));
    }

    public function test_my_projects_component_contains_the_toggleable_projects_section(): void
    {
        $component = file_get_contents(resource_path('js/pages/MyProjects/myproject.vue'));

        $this->assertIsString($component);
        $this->assertStringContainsString('Hide My Projects', $component);
        $this->assertStringContainsString('View My Projects', $component);
        $this->assertStringContainsString('enter-from-class="translate-y-10 scale-[0.98] opacity-0"', $component);
        $this->assertStringContainsString('leave-to-class="translate-y-12 scale-[0.98] opacity-0"', $component);
        $this->assertStringContainsString('v-if="isProjectsVisible"', $component);
        $this->assertStringContainsString('@primary-click="toggleProjects"', $component);
    }

    public function test_tech_stack_page_is_accessible(): void
    {
        $response = $this->get(route('techstack'));

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('TechStack/techstack'));
    }

    public function test_tech_stack_component_contains_the_toggleable_stack_section(): void
    {
        $component = file_get_contents(resource_path('js/pages/TechStack/techstack.vue'));

        $this->assertIsString($component);
        $this->assertStringContainsString('Hide Tech Stack', $component);
        $this->assertStringContainsString('View Tech Stack', $component);
        $this->assertStringContainsString('v-if="isTechStackVisible"', $component);
        $this->assertStringContainsString('@primary-click="toggleTechStack"', $component);
    }

    public function test_work_experience_page_is_accessible(): void
    {
        $response = $this->get(route('workexperience'));

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('WorkExperience/workexperience'));
    }

    public function test_work_experience_component_contains_the_toggleable_experience_section(): void
    {
        $component = file_get_contents(resource_path('js/pages/WorkExperience/workexperience.vue'));

        $this->assertIsString($component);
        $this->assertStringContainsString('Hide Experience', $component);
        $this->assertStringContainsString('View Experience', $component);
        $this->assertStringContainsString('v-if="isExperienceVisible"', $component);
        $this->assertStringContainsString('@primary-click="toggleExperience"', $component);
    }

    public function test_contact_page_component_contains_the_toggleable_contact_section(): void
    {
        $component = file_get_contents(resource_path('js/pages/ContactUs/contactus.vue'));

        $this->assertIsString($component);
        $this->assertStringContainsString('Hide Contact Details', $component);
        $this->assertStringContainsString('Send A Message', $component);
        $this->assertStringContainsString('v-if="isContactSectionVisible"', $component);
        $this->assertStringContainsString('@primary-click="toggleContactSection"', $component);
    }
}
