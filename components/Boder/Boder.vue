

<template>
    <div class="layout-container">
        <div class="header-nav bg-primary position-relative">
            <div class="nav-detail max-width pd-container m-auto">
                <img class="cursor-pointer desktop icon-text" src="https://yenmarket.vn/images/icon-navige.svg" alt="">
                <span class="fw-bolder fz-lg text-uppercase color-background">List of item</span>
            </div>
        </div>

        <div class="home-container max-width w-100 d-flex flex-column align-items-center max-width m-auto pd-container">
            <div data-v-12865abb class="w-100 max-width d-flex align-items-start position-relative">
                <ListItem/>
                <div data-v-1582481e="" id="contentBanner" class="banner-container select-none flex-1">
                    <ProductSlider />
                </div>
              
            </div>
        <div data-v-1582481e="" class="w-100" id="contentSilder">
            <BannerList/>
        </div>
        <div data-v-1582481e="" class="item-favourite"></div>


         <div data-v-1582481e="" class="list-subcategory">
            <div data-v-1582481e class="subcate-item w-100 d-flex flex-column">
                <div data-v-1582481e="" class="img-banner w-100">
                    <img data-v-1582481e="" src="https://mastererp.mylifecompany.com/Resources/Images/Object/Banner9114012025041546_S.jpg" alt="" class="w-100 lazy loaded">
                </div>

            </div>
        <span data-v-1582481e="" class="subcate-name fz-xxl color-title fw-bold">FISH AND SEAFOOD</span>
        <div data-v-1582481e="" class="">
            <ProductList/>
        </div>
        <div data-v-1582481e="" class="btn-seemore w-100 d-flex align-items-center justify-content-center">
            <div data-v-1582481e="" class="style-button">
                <p data-v-1582481e="" class="confirm radius-100px">See all</p>
            </div>
        </div>
        <span data-v-1582481e="" class="subcate-name fz-xxl color-title fw-bold">FROZEN MEAT</span>
        <div data-v-1582481e="" class="">
            <ProductListMeat/>
        </div>
        <div data-v-1582481e="" class="btn-seemore w-100 d-flex align-items-center justify-content-center">
            <div data-v-1582481e="" class="style-button">
                <p data-v-1582481e="" class="confirm radius-100px">See all</p>
            </div>
        </div>

          
        
        </div>
        </div>
    </div>
</template>



<script>

import ProductListMeat from '../ProductListMeat.vue';

import ListItem from '../ListItem.vue';

</script>

<style scoped>
.dropdown-menu-end {
    right: 0 !important;
   
}
.dropdown-toggle::after{
     display: none !important;
}
</style>
<style lang="scss" src="@/assets/styles/Header.scss"></style>