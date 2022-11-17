<script lang="ts">
    import logo from "./assets/mainlogo.png";
    import team from "./assets/bsod.png";

    import youtube from "./assets/icons/youtube.png";
    import instagram from "./assets/icons/instagram.png";
    import email from "./assets/icons/email.png";
</script>

<div class="flex justify-center">
    <div class="float-left">
        <img src={logo} width="170px" alt="" />
        <p class="text-[30px] mb-2">
            Black Screen of Death.
        </p>
        <p class="text-[30px]">
            FTC Team 19987
        </p>
        <p class="text-[30px] mt-12">
            100% complete
        </p>
    </div>
</div>

<div class="flex justify-center m-20">
    <img class="rounded-sm max-h-96" src={team} alt="" />
</div>

<div class="flex justify-center m-20">
    <a href="https://www.instagram.com/bsodrobotics/">
        <img class="h-8 m-1" src={instagram} alt="" />
    </a>
    <a href="https://www.youtube.com/channel/UCJEFU-_WIBj1xsaaRMflyow">
        <img class="h-8 m-1" src={youtube} alt="" />
    </a>
    <a href="mailto:bsodrobotics@gmail.com">
        <img class="h-8 m-1" src={email} alt="" />
    </a>
</div>
