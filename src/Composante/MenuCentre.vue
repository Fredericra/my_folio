<script setup>
import { ref, unref, onMounted, computed } from 'vue'
import {
  BImg,
  BLink,
  BPopover,
  BButton,
  BModal,
  BForm,
  BInput,
  BFormTextarea,
} from 'bootstrap-vue-next'

const message = ref('')
const mailObject = ref('')
const mail = ref('')
const title = ref('')
const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)

const props = defineProps({
  center: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <div>
    <div class="ecran my-8">
      <div class="col-span-4"></div>
      <div class="col-span-4">
        <div class="h-[100px]">
          <div class="flex justify-around items-center">
            <div class="" v-for="(value, index) in center" :key="index">
              <div class="" v-if="index === 2">
                <BButton
                  @click="nestedModal1 = !nestedModal1"
                  class="bg-transparent"
                  variant="outline"
                  style="background: transparent !important; outline: none !important"
                >
                  <BImg :src="value.image" fluid :alt="value.image" class="h-10 w-10" />
                </BButton>

                <BModal
                  v-model="nestedModal1"
                  size="lg"
                  :title="value.name"
                  ok-title="accept"
                  cancel-title="annuler"
                  no-stacking
                >
                  <BForm class="space-y-4" @submit.prevent>
                    <BInput v-model="mail" placeholder="entre votre mail" />
                    <BInput v-model="mailObject" placeholder="URL" />
                    <BFormTextarea
                      v-model="message"
                      placeholder="veuillez entre votre message"
                    ></BFormTextarea>
                    <BButton variant="primary" type="submit" @click="envoyer">Envoyer</BButton>
                  </BForm>
                </BModal>
              </div>
              <div class="" v-else>
                <BPopover triggers="hover" placement="bottom">
                  <template #target>
                    <BButton variant="default" class="m-2">
                      <BLink :href="value.url">
                        <BImg :src="value.image" fluid :alt="value.image" class="h-10 w-10" />
                      </BLink>
                    </BButton>
                  </template>
                  <template #title>
                    <BLink :href="value.url">{{ value.name }}</BLink>
                  </template>
                  <template #default>
                    <p>{{ value.description }}</p>
                  </template>
                </BPopover>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-4"></div>
    </div>
  </div>
</template>
