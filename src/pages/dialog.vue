<template>
  <div class="component-container">
    <Vue3Quote type="default" style="margin-top: 5px">Component - Basic</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info
      type="primary"
      content="v-model:show: boolean, options: DialogOptions, @close event"
    />
    <pre>
      {{ `<Vue3Dialog v-model:show="showDialog" :options="dialogOptions">
  <h3>Dialog Title</h3>
  <p>This is the dialog content.</p>
  <button @click="showDialog = false">Close</button>
</Vue3Dialog>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="dialog-demo">
      <Vue3Button @click="showBasicDialog = true">Open Basic Dialog</Vue3Button>
      <Vue3Dialog v-model:show="showBasicDialog" :options="basicDialogOptions">
        <h3>Basic Dialog</h3>
        <p>This is a basic dialog with default settings.</p>
        <Vue3Button @click="showBasicDialog = false">Close</Vue3Button>
      </Vue3Dialog>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Custom Size</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="width: string, height: string for custom dimensions" />
    <pre>
      {{ `<Vue3Dialog v-model:show="showDialog" :options="{
  width: '800px',
  height: '500px',
  round: '10px'
}">
  Large dialog content
</Vue3Dialog>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="dialog-demo">
      <Vue3Button @click="showLargeDialog = true">Open Large Dialog</Vue3Button>
      <Vue3Dialog v-model:show="showLargeDialog" :options="largeDialogOptions">
        <h3>Large Dialog</h3>
        <p>This dialog has custom width and height.</p>
        <div style="height: 300px; overflow-y: auto">
          <p v-for="i in 20" :key="i">Scrollable content line {{ i }}</p>
        </div>
        <Vue3Button @click="showLargeDialog = false">Close</Vue3Button>
      </Vue3Dialog>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Overlay Styles</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="overay: 'trans' | 'moho' | 'transMoho' | 'none'" />
    <pre>
      {{ `<Vue3Dialog v-model:show="showDialog" :options="{
  overay: 'moho',
  beforeClose: true
}">
  Dialog with backdrop blur
</Vue3Dialog>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="dialog-demo">
      <Vue3Button @click="showOverlayDialog = true">Open Dialog with Blur</Vue3Button>
      <Vue3Dialog v-model:show="showOverlayDialog" :options="overlayDialogOptions">
        <h3>Dialog with Backdrop Blur</h3>
        <p>This dialog has a blurred backdrop effect.</p>
        <Vue3Button @click="showOverlayDialog = false">Close</Vue3Button>
      </Vue3Dialog>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Without Close Button</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="hiddenClose: boolean to hide the close button" />
    <pre>
      {{ `<Vue3Dialog v-model:show="showDialog" :options="{
  hiddenClose: true,
  beforeClose: false
}">
  Dialog without close button
</Vue3Dialog>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="dialog-demo">
      <Vue3Button @click="showNoCloseDialog = true">Open Dialog without Close Button</Vue3Button>
      <Vue3Dialog v-model:show="showNoCloseDialog" :options="noCloseDialogOptions">
        <h3>No Close Button</h3>
        <p>This dialog has no close button. You must use the button below to close it.</p>
        <Vue3Button @click="showNoCloseDialog = false">Close Dialog</Vue3Button>
      </Vue3Dialog>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Event Handling</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="@close event for handling dialog close" />
    <pre>
      {{ `<Vue3Dialog v-model:show="showDialog" @close="handleClose">
  Dialog content
</Vue3Dialog>` }}
    </pre>
    <Vue3RawSplit margin="5px" label="" />
    <div class="dialog-demo">
      <Vue3Button @click="showEventDialog = true">Open Dialog with Events</Vue3Button>
      <Vue3Dialog v-model:show="showEventDialog" @close="handleDialogClose">
        <h3>Event Dialog</h3>
        <p>This dialog triggers events when closed.</p>
        <Vue3Button @click="showEventDialog = false">Close</Vue3Button>
      </Vue3Dialog>
    </div>

    <Vue3Quote type="default" style="margin-top: 20px">Component - Options Reference</Vue3Quote>
    <Vue3RawSplit margin="5px" label="" />
    <Vue3Info type="primary" content="Available options for dialog configuration" />
    <Vue3Table :data="componentOptions" tableBorder="all" th-bold>
      <Vue3TableColumn prop="name" label="Property" cellAlign="left" width="150px" />
      <Vue3TableColumn prop="type" label="Type" cellAlign="left" width="200px" />
      <Vue3TableColumn prop="default" label="Default" cellAlign="left" width="150px" />
      <Vue3TableColumn prop="info" label="Description" cellAlign="left" />
    </Vue3Table>

    <Vue3RawSplit margin="20px" label="" />
    <Vue3Info type="primary" :content="warningEn" />
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'

  const showBasicDialog = ref(false)
  const showLargeDialog = ref(false)
  const showOverlayDialog = ref(false)
  const showNoCloseDialog = ref(false)
  const showEventDialog = ref(false)

  const basicDialogOptions = reactive({
    round: '5px',
    overay: 'trans',
    beforeClose: true,
    width: '500px',
    height: '300px',
    hiddenClose: false,
  })

  const largeDialogOptions = reactive({
    round: '10px',
    overay: 'trans',
    beforeClose: true,
    width: '800px',
    height: '500px',
    hiddenClose: false,
  })

  const overlayDialogOptions = reactive({
    round: '5px',
    overay: 'moho',
    beforeClose: true,
    width: '600px',
    height: '350px',
    hiddenClose: false,
  })

  const noCloseDialogOptions = reactive({
    round: '5px',
    overay: 'trans',
    beforeClose: false,
    width: '500px',
    height: '300px',
    hiddenClose: true,
  })

  const componentOptions = [
    { name: 'round', type: 'string', default: '0px', info: 'Border radius of dialog' },
    {
      name: 'overay',
      type: 'trans | moho | transMoho | none',
      default: 'trans',
      info: 'Overlay background style',
    },
    {
      name: 'beforeClose',
      type: 'boolean',
      default: false,
      info: 'Close dialog when clicking overlay',
    },
    { name: 'width', type: 'string', default: '500px', info: 'Dialog width' },
    { name: 'height', type: 'string', default: '350px', info: 'Dialog height' },
    { name: 'hiddenClose', type: 'boolean', default: false, info: 'Hide close button' },
  ]

  const handleDialogClose = () => {
    console.log('Dialog closed')
    alert('Dialog closed event triggered!')
  }

  const warningEn = `Tips:
- v-model:show controls dialog visibility.
- options object configures dialog appearance and behavior.
- round sets border radius (e.g., '5px', '10px').
- overay controls backdrop style (trans, moho, transMoho, none).
- beforeClose allows closing by clicking overlay.
- width and height set dialog dimensions.
- hiddenClose removes the default close button.
- @close event fires when dialog is closed.
- Dialog content can be any valid HTML/Vue template.
- Fully responsive and accessible.
- Supports keyboard navigation (Escape key to close).`
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
    padding: 20px;
    border-radius: 5px;
    margin: 10px 0;
  }

  .dialog-demo {
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background: #f9f9f9;
  }
</style>
