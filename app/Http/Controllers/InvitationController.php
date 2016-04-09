<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Invitation;
use Illuminate\Support\Facades\Auth;

class InvitationController extends Controller
{
    public function getInvitations()
    {
        $invites = Invitation::where('inviter_id', Auth::user()->id)->get();
        return $invites;
    }
}
