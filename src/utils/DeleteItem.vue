<template>
    <div class="backdrop">
  <div
  class="modal fade show d-block mt-5"
  id="exampleModal"
  tabIndex="-1"
  role="dialog"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          {{ deleteTitle }}
        </h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          @click="deleteItem(false)"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">{{ deleteMessage }}</div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          @click="deleteItem(false)"
        >
          {{ cancelButton }}
        </button>
        <button type="button" class="btn btn-danger" @click="deleteItem(true)">
          {{ submitButton }}
        </button>
      </div>
    </div>
  </div>
</div>
</div>
  
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const {cancelButton, deleteMessage, deleteTitle, submitButton} = defineProps(['cancelButton', 'submitButton', 'deleteMessage', 'deleteTitle'])

const emit = defineEmits(['onDelete'])

function deleteItem(value: boolean){
    emit('onDelete', value)
}
</script>

<style>
.backdrop{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>