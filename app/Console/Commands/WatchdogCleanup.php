<?php

namespace App\Console\Commands;

use App\Watchdog;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class WatchdogCleanup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'watchdog:cleanup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will clean up watchdog entries which are stale.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // get the max count of records
        $watchdog = new Watchdog;
        $maxRecords = $watchdog->getMaxRecords();

        // get thec current count of rows in the table
        $currCount = Watchdog::count();

        $take = $currCount - $maxRecords;

        // when number of rows in the table is more than
        // the maximum number of records defined
        // delete the old records
        if ($currCount > $maxRecords) {
            $ids = DB::table('watchdog')->orderBy('id', 'asc')->take($take)->lists('id');
            DB::table('watchdog')->whereIn('id', $ids)->delete();
        }
    }
}
