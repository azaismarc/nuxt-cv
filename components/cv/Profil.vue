<template>
    <section>
        <h1>Profil</h1>
        <div class="mb-2" v-if="$profil.age">
            <strong>Age:</strong> <br/>
            {{ $profil.age }} ans <br/>
        </div>
        <div class="mb-2">
            <strong>Mobile:</strong> <br/>
            {{ $profil.telephone }} <br/>
        </div>
        <div class="mb-2">
            <strong>Email:</strong> <br/>
            {{ $profil.mail }} <br/>
            </div>
        <div class="mb-2">
            <strong>Adresse:</strong> <br/>
            {{ $profil.code_postal }}
            {{ $profil.ville  }} <br/>
        </div>
        <div class="mb-2">
            <strong>Github:</strong> <br/>
            <a :href="$profil.github">{{ $profil.github }}</a> <br/>
        </div>
        <div>
            <strong>LinkedIn:</strong> <br/>
            <a :href="$profil.linkedIn">{{ $profil.linkedIn }}</a> <br/>
        </div>
    </section>
</template>