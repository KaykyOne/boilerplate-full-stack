<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:255',
            ],

            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                'unique:users,email',
            ],

            //* TODO: como tem confirmed, precisa enviar o `password_confirmation` do front, caso contrário vai dar erro de validação
            'password' => [
                'required',
                'confirmed',
                Password::min(8),
            ],
        ];
    }
}