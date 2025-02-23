<template>
    <div class="container mt-4">
        <div class="col-md-4 offset-md-4 p-4 border rounded">
            <h2 class="text-center mb-4">Register</h2>
            <form @submit.prevent="register">
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-3">
                            <label for="name">
                                <i class="fas fa-user"></i> Full Name
                            </label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" id="name" v-model="name" class="form-control" required />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-3">
                            <label for="email">
                                <i class="fas fa-envelope"></i> Email
                            </label>
                        </div>
                        <div class="col-md-9">
                            <input type="email" id="email" v-model="email" class="form-control" required />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-3">
                            <label for="password">
                                <i class="fas fa-lock"></i> Password
                            </label>
                        </div>
                        <div class="col-md-9">
                            <input type="password" id="password" v-model="password" class="form-control" required />
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-success btn-block">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        register() {
            // implement register logic here
        }
    }
}
</script>

<style scoped>
.form-group {
    margin-bottom: 1.5rem;
}

input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
}

button[type="submit"] {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #45a049;
}
</style>

<!-- Add Font Awesome CSS for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

