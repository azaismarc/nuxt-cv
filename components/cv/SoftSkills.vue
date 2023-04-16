<template>
    <section v-if="$profil.softskills.data.length > 0">
        <h1>Soft skills</h1>
        <CvSkills :competence="$profil.softskills"/>
    </section>
</template>