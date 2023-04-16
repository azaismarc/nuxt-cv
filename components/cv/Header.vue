<template>
    <header class="grid grid-cols-3 bg-white">
      <div class="bg-dark-blue">
        <NuxtImg
          class="mx-auto"
          width="250"
          provider="strapi"
          :src="$profil.photo.data.attributes.url"
        />
      </div>
      <div class="col-span-2 flex flex-col justify-center">
        <h1 class="mb-3">{{ $profil.prenom }} <br/> {{ $profil.nom }}</h1>
        <h2 class="mb-3">{{ $profil.titre }}</h2>
        <Markdown :md="$profil.description" />
      </div>
    </header>
</template>