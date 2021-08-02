<template>
  <main>
    <!-- hero -->
    <div class="hero bg-gray-100 py-16">
        <!-- container -->
        <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <!-- hero wrapper -->
            <div class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                <!-- hero text -->
                <div class="hero-text col-span-6">
                    <h1 class=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">About us</h1>
                    <hr class=" w-12 h-1 bg-orange-500 rounded-full mt-8">
                    <p class="text-gray-800 text-base leading-relaxed mt-8 font-semibold">Your ultimate travel companion. Carries all the information you need while travelling</p>
                </div>

            </div>
        </div>
    </div><!-- end hero -->
  </main>
</template>

<script>
export default {};
</script>

<style>
    @media only screen and (min-width: 768px){
        .parent:hover .child {
            opacity:1;
            height:auto;
            overflow:none;
            transform: translateY(0);
        }
        .child {
            opacity:0;
            height:0;
            overflow:hidden;
            transform: translateY(-10%);
        }
    }
</style>
