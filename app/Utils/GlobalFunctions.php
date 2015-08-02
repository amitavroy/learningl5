<?php

if (!function_exists('watchdog')) {

    /**
     * This is a helper function to add watchdog entry to any event
     * that occurs in the application.
     *
     * @param  string $message
     * @param  string $level
     * @param  array $variables
     * @return void
     */
    function watchdog($message, $level = 'info', $variables = null)
    {
        $watchdog = new App\Watchdog;
        $watchdog->message = $message;
        $watchdog->level = $level;
        $watchdog->variables = ($variables) ? serialize($variables) : '';
        $watchdog->incident_time = Carbon\Carbon::now();
        $watchdog->save();
    }
}

if (!function_exists('sanitize')) {
    /**
     * Convert a string to the file/URL safe "slug" form
     * Taken from http://stackoverflow.com/questions/2668854/sanitizing-strings-to-make-them-url-and-filename-safe
     *
     * @param string $string the string to clean
     * @param bool $is_filename TRUE will allow additional filename characters
     * @return string
     */
    function sanitize($string = '', $is_filename = FALSE)
    {
        // Replace all weird characters with dashes
        $string = preg_replace('/[^\w\-' . ($is_filename ? '~_\.' : '') . ']+/u', '-', $string);

        // Only allow one dash separator at a time (and make string lowercase)
        return mb_strtolower(preg_replace('/--+/u', '-', $string), 'UTF-8');
    }
}