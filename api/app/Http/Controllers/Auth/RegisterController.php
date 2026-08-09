<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class RegisterController extends Controller
{
    public function __invoke(RegisterRequest $request): JsonResponse
    {
        $user = User::create(
            $request->safe()->only([
                'name',
                'email',
                'password',
            ])
        );

        return response()->json([
            'message' => 'User created successfully.',
            'data' => $user,
        ], 201);
    }
}
