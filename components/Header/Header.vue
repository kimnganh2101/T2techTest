<!-- <template>
    <header class="header">
        <nav class="nav">
            <h1 class="logo">🌟 MySite</h1>
            <ul class="nav-links">
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/about">Giới thiệu</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Liên hệ</a></li>
            </ul>
        </nav>
    </header>
</template> -->
<template>
    <div class="header-container">
        <div class="header-content pd-container w-100 max-width d-flex align-items-center justify-content-between">

            <!-- Logo -->
            <div class="img-brand select-none lazy loaded">
                <img class="cursor-pointer lazy loaded" src="https://yenmarket.vn/_nuxt/logo-brand.D-hX70gZ.png"
                    alt="Yen Market Logo" />
            </div>

            <!-- Search -->
            <div class="header-find">
                <div class="group-find">
                    <input type="text" class="style-input fz-lg" placeholder="Tìm kiếm sản phẩm..." />
                    <img class="cursor-pointer lazy loaded" src="https://yenmarket.vn/images/icon-find.svg" alt="Tìm kiếm"
                        aria-label="Search" />
                </div>
            </div>

            <!-- Hotline -->
            <div class="header-hotline select-none ">
                <img class="icon-primary cursor-pointer lazy loaded" src="https://yenmarket.vn/images/icon-hotline.svg"
                    alt="Hotline" />
                <div class="span-hotline d-flex flex-column cursor-pointer">
                    <span class="fz-md fw-bold">Hotline</span>
                    <span class="fz-md fw-bold">1900 066 890</span>
                </div>
            </div>

            <!-- User login -->
            <div class="header-user select-none ">
                <img class="cursor-pointer icon-primary lazy loaded" src="https://yenmarket.vn/images/icon-user.svg" alt="User" />
                <div class="span-user d-flex flex-column cursor-pointer">
                    <span class="fz-md fw-bold">Hi,</span>
                    <span class="fz-md fw-bold">Login</span>
                </div>
            </div>

            <!-- Right section: Cart + Language -->
            <div class="header-right select-none ">
                <div class="btn-cart p-1 cursor-pointer" aria-label="Giỏ hàng">
                    <img class="icon-primary lazy loaded" src="https://yenmarket.vn/images/icon-cart.svg" alt="Cart" />
                </div>
                <div class="header-lang ">
                    <img class="cursor-pointer lazy loaded" src="https://yenmarket.vn/images/flag-vi.svg" alt="Tiếng Việt" />
                    <img class="cursor-pointer lazy loaded" src="https://yenmarket.vn/images/flag-en.svg" alt="English" />
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>



/*
.group-find {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
}

.group-find input {
    border: none;
    outline: none;
    padding: 8px;
    flex: 1;
}

.group-find img {
    padding: 8px;
    background: #f5f5f5;
} */
</style>
 <style lang="scss" src="@/assets/styles/Header.scss"></style> 