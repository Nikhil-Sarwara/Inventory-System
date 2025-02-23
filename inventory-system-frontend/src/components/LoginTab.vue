<template>
    <div class="p-3 border rounded w-50 mx-auto">
        <h2 class="mb-3 text-center">Login</h2>
        <form class="w-50">
            <div class="form-group mb-3 d-flex align-items-center">
                <label for="email" class="me-2">
                    <i class="fas fa-envelope"></i> Email
                </label>
                <input type="text" id="email" placeholder="example@example.com" class="form-control flex-grow-1" />
            </div>
            <div class="form-group mb-3 d-flex align-items-center">
                <label for="password" class="me-2">
                    <i class="fas fa-lock"></i> Password
                </label>
                <input type="password" id="password" placeholder="Enter your password" class="form-control flex-grow-1" />
            </div>
            <div class="d-flex justify-content-center">
                <button class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

