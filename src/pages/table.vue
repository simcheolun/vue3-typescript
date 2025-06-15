<template>
    <div class="component-container">

        <Vue3Quote type="default" style="margin-top: 0px;">Component - table width</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" :content="`width: string`" />
        <Vue3RawSplit margin="10px" />
        <Vue3Table :data="componentProfile" width="600px">
            <Vue3TableColumn prop="seq" label="Id" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="name" label="Name" cellAlign="left" />
            <Vue3TableColumn prop="sex" label="Sex" cellAlign="left" width="150px" />
        </Vue3Table>
        <Vue3RawSplit margin="10px" />
        <pre>
            {{ `<Vue3Table width="600px">...</Vue3Table>` }}
        </pre>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - Size</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" :content="`size: sm , default , lg`" />
        <Vue3RawSplit margin="20px" label="small" lineColor="#ccc" />
        <Vue3Table :data="componentProfile" size="sm">
            <Vue3TableColumn prop="seq" label="Id" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="name" label="Name" cellAlign="left" />
            <Vue3TableColumn prop="sex" label="Sex" cellAlign="left" width="150px" />
        </Vue3Table>
        <Vue3RawSplit margin="10px" />
        <pre>
            {{ `<Vue3Table size="sm">...</Vue3Table>` }}
        </pre>
        <Vue3RawSplit margin="20px" label="default" lineColor="#ccc" />
        <Vue3Table :data="componentProfile" size="default">
            <Vue3TableColumn prop="seq" label="Id" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="name" label="Name" cellAlign="left" />
            <Vue3TableColumn prop="sex" label="Sex" cellAlign="left" width="150px" />
        </Vue3Table>
        <Vue3RawSplit margin="10px" />
        <pre>
            {{ `<Vue3Table size="default">...</Vue3Table>` }}
        </pre>

        <Vue3RawSplit margin="20px" label="large" lineColor="#ccc" />
        <Vue3Table :data="componentProfile" size="lg">
            <Vue3TableColumn prop="seq" label="Id" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="name" label="Name" cellAlign="left" />
            <Vue3TableColumn prop="sex" label="Sex" cellAlign="left" width="150px" />
        </Vue3Table>
        <Vue3RawSplit margin="10px" />
        <pre>
            {{ `<Vue3Table size="lg">...</Vue3Table>` }}
        </pre>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - hover</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" :content="`hover: boolean`" />
        <Vue3RawSplit margin="10px" />
        <Vue3Table :data="componentProfile" hover>
            <Vue3TableColumn prop="seq" label="Id" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="name" label="Name" cellAlign="left" />
            <Vue3TableColumn prop="sex" label="Sex" cellAlign="left" width="150px" />
        </Vue3Table>
        <Vue3RawSplit margin="10px" />
        <pre>
            {{ `<Vue3Table hover>...</Vue3Table>` }}
        </pre>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - border</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" :content="`tableBorder: default , all`" />
        <Vue3RawSplit margin="10px" />
        <Vue3RawSplit margin="20px" label="default" lineColor="#ccc" />
        <Vue3Table :data="componentProfile">
            <Vue3TableColumn prop="seq" label="Id" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="name" label="Name" cellAlign="left" />
            <Vue3TableColumn prop="sex" label="Sex" cellAlign="left" width="150px" />
        </Vue3Table>
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Table tableBorder="default">...</Vue3Table>` }}
            {{ `<Vue3Table >...</Vue3Table>` }}
        </pre>

        <Vue3RawSplit margin="20px" label="all" lineColor="#ccc" />
        <Vue3Table :data="componentProfile" tableBorder="all">
            <Vue3TableColumn prop="seq" label="Id" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="name" label="Name" cellAlign="left" />
            <Vue3TableColumn prop="sex" label="Sex" cellAlign="left" width="150px" />
        </Vue3Table>
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Table tableBorder="all">...</Vue3Table>` }}
        </pre>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - cellAlign</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" :content="`cellAlign: left , center , right`" />
        <Vue3RawSplit margin="10px" />
        <Vue3Table :data="componentProfile" tableBorder="all">
            <Vue3TableColumn prop="seq" label="Id" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="name" label="Name" cellAlign="center" />
            <Vue3TableColumn prop="sex" label="Sex" cellAlign="right" width="150px" />
        </Vue3Table>
        <Vue3RawSplit margin="5px" label="" />
        <pre>
            {{ `<Vue3Table tableBorder="default">...</Vue3Table>` }}
            {{ `<Vue3Table >...</Vue3Table>` }}
        </pre>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - prop</Vue3Quote>
        <Vue3RawSplit margin="5px" />
        <Vue3Table :data="componentProfile" tableBorder="all">
            <Vue3TableColumn prop="seq" label="Id" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="name" label="Name" cellAlign="center" />
            <Vue3TableColumn prop="sex" label="Sex" cellAlign="right" width="150px" />
            <Vue3TableColumn name="age" label="Age" cellAlign="right" width="150px" />
            <Vue3TableColumn name="def" label="def" cellAlign="center" width="50px" />
            <template #age="{ scope }">
                <Vue3Input placeholder="input Age" />
            </template>
            <template #def="{ scope }">
                <Vue3Button type="success">Edit</Vue3Button>
            </template>
        </Vue3Table>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" :content="`Vue3TableColumn name = age`" />
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" :content="`template #age = { scope }`" />
        <Vue3RawSplit margin="5px" label="" />
        <pre>
    {{ `<Vue3Table :data="componentProfile" tableBorder="all">
        <Vue3TableColumn name="age" label="Age" />
        <template #age="{ scope }">
            18
            </template>
    </Vue3Table>` }}
</pre>

        <Vue3Quote type="default" style="margin-top: 20px;">Component - th bold</Vue3Quote>
        <Vue3RawSplit margin="5px" label="" />
        <Vue3Info type="primary" :content="`thBold: boolean`" />
        <Vue3RawSplit margin="10px" />
        <Vue3Table :data="componentProfile" tableBorder="all" th-bold>
            <Vue3TableColumn prop="seq" label="Id" cellAlign="left" width="150px" />
            <Vue3TableColumn prop="name" label="Name" cellAlign="left" />
            <Vue3TableColumn prop="sex" label="Sex" cellAlign="left" width="150px" />
        </Vue3Table>
        <Vue3RawSplit margin="5px" label="" />
        <pre>
    {{ `<Vue3Table thBold>...</Vue3Table>` }}
    {{ `<Vue3Table th-bold>...</Vue3Table>` }}
</pre>


        <Vue3RawSplit margin="20px" label="" />
        <Vue3Info type="primary" :content="warningEn" />

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const warningEn = `※ Warning: This library is distributed under the ISC License and complies with its terms.
It is provided " AS IS", without any warranties of any kind. The user assumes full responsibility for any
issues or damages that may arise from using this library. By using this library, you are considered to have
read and agreed to the ISC License terms. `


const componentProfile = [
    { seq: 1, name: 'june', sex: 'Female' },
    { seq: 2, name: 'micky', sex: 'Male' },
]

</script>

<style scoped>
.component-container {
    width: 100%;
    height: 100vh !important;
    overflow: hidden;
    overflow-y: auto;
    padding: 50px;
}

pre {
    font-family: Consolas, 'Courier New', monospace;
    background-color: #011627;
    color: #f4d03f;
    padding-top: 20px;
}

.buttons {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>