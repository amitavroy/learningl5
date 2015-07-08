<?php

class UserModuleTest extends TestCase
{
    /**
     * User object required for auth based urls.
     *
     * @var user object
     */
    protected $user;

    /**
     * Setting values on init of the class.
     */
    public function setUp()
    {
        parent::setUp();
        $user = App\User::find(1);
        $this->user = $user;
    }

    /**
     * Basic test to check if login screen is available.
     *
     * @return void
     */
    public function testLoginPageExist()
    {
        $this->visit('/user')
             ->see('Login');
    }

    /**
     * Check login error without any inputs.
     *
     * @return void
     */
    public function testLoginWithNoInputs()
    {
        $this->visit('/user')
             ->press('Login')
             ->seePageIs('/user')
             ->see('Something went wrong with the username and / or password');
    }

    /**
     * Checking login with only username filled.
     *
     * @return void
     */
    public function testLoginWithOnlyUsername()
    {
        $this->visit('/user')
             ->type('amitav.roy@focalworks.in', 'email')
             ->press('Login')
             ->seePageIs('/user')
             ->see('Something went wrong with the username and / or password');
    }

    /**
     * Check login functionality with wrong password.
     * @return void
     */
    public function testWithWrongPassword()
    {
        $this->visit('/user')
             ->type('amitav.roy@focalworks.in', 'email')
             ->type('secret', 'password')
             ->press('Login')
             ->seePageIs('/user')
             ->see('Something went wrong with the username and / or password');
    }

    /**
     * Check login is working with correct credentials
     * @return void
     */
    public function testWithCorrectCredentials()
    {
        $this->visit('/user')
             ->type('amitav.roy@focalworks.in', 'email')
             ->type('pass', 'password')
             ->press('Login')
             ->see('You have logged in successfully')
             ->seePageIs('/user/dashboard');
    }

    /**
     * Checking the change password page is working.
     *
     * @return void
     */
    public function testChangePasswordPageIsOk()
    {
        $this->actingAs($this->user)
            ->visit('/user/change-password')
            ->see('Change your password');
    }

    /**
     * Check error when no input is provided.
     *
     * @return void
     */
    public function testCheckPasswordWithEmptyFields()
    {
        $this->actingAs($this->user)
            ->visit('/user/change-password')
            ->press('Save')
            ->see('Current password is wrong.');
    }

    /**
     * Check error when the password is wrong.
     *
     * @return void
     */
    public function testCheckWhenPasswordIsWrong()
    {
        $this->actingAs($this->user)
            ->visit('/user/change-password')
            ->type(time(), 'current_password')
            ->press('Save')
            ->see('Current password is wrong.');
    }

    /**
     * Check error when the two passwords are not same.
     *
     * @return void
     */
    public function testCheckWhenPasswordsDoNotMatch()
    {
        $this->actingAs($this->user)
            ->visit('/user/change-password')
            ->type('pass', 'current_password')
            ->type('pass', 'new_password')
            ->type('pass1', 'confirm_new_password')
            ->press('Save')
            ->see('The two passwords are not matching.');
    }

    /**
     * Check change password functionality with correct data.
     *
     * @return void
     */
    public function testCheckWhenChangePasswordDataIsCorrect()
    {
        $this->actingAs($this->user)
            ->visit('/user/change-password')
            ->type('pass', 'current_password')
            ->type('pass', 'new_password')
            ->type('pass', 'confirm_new_password')
            ->press('Save')
            ->see('Password changed.');
    }

    /**
     * Check if the edit profile page is working.
     *
     * @return void
     */
    public function testEditProfilePage()
    {
        $this->actingAs($this->user)
            ->visit('/user/profile')
            ->see('Edit profile');
    }

    /**
     * Checking the profile name change.
     *
     * @return void
     */
    public function testProfileNameChange()
    {
        $this->actingAs($this->user)
            ->visit('/user/profile')
            ->type('Amitav Roy changed', 'name')
            ->press('Save')
            ->see('Profile data changed.');

        $nameChanged = 'Amitav Roy changed';
        $this->assertEquals(App\User::find(1)->name, $nameChanged);
    }
}
