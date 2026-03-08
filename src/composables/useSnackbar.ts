import { ref } from 'vue'

export enum SnackbarType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}

const show = ref(false)
const message = ref('')
const type = ref<SnackbarType>(SnackbarType.INFO)
export const useSnackbar = () => {
  const showSnackbar = (msg: string, snackbarType: SnackbarType) => {
    message.value = msg
    type.value = snackbarType
    show.value = true
  }

  const hideSnackbar = () => {
    show.value = false
  }

  return {
    show,
    message,
    type,
    showSnackbar,
    hideSnackbar,
  }
}
