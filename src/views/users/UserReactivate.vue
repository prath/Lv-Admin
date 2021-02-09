<template>
  <!--
    MODAL BEFORE SUBMIT & NO ERROR
   -->
  <modal-base
    v-if="isErrorEmpty"
    :title="title"
    :primaryButton="true"
    :secondaryButton="true"
    primaryButtonLabel="Reactivate"
    @toggleModal="toggleModal"
    @primaryButtonAction="reactivate"
    @secondaryButtonAction="toggleModal">

    <!--
      MODAL CONTENT
      ~~~~~
      will be placed inside default <slot>
     -->
    <spinner v-if="!isLoaded" :message="`Reactivating ${fullName}....`" />
    <template v-else>
      <p>
        Once you reactivate this user, they will be able to use Lokaven with its full feature. Are you sure to reactivate?
      </p>
      <hr />
    </template>

  </modal-base>

  <!--
    MODAL IF ANY ERRORS
   -->
  <modal-base
    v-else
    :title="`Unable to deactivate ${fullName}`"
    :primaryButton="false"
    :secondaryButton="false"
    @toggleModal="toggleModalFromError">

    We're sorry, we're unable to deactivate {{ fullName }}
    {{ errorMsg.msg.message }}

  </modal-base>
</template>

<script>
// Internal modules
import { mapActions, mapState } from 'vuex'
import appStates from '@/mixins/appStates'

// External modules
import Spinner from 'vue-simple-spinner'

// Components
import ModalBase from '@/components/modals/ModalBase'

export default {
  name: 'UserReactivate',
  components: {
    ModalBase,
    Spinner
  },
  mixins: [appStates],
  props: {
    // user_uid to be updated
    uid: String,
    // user's full name to be used in validation
    fullName: String,
    // modal title
    title: String
  },
  data () {
    return {
      userFullname: ''
    }
  },
  computed: {
    /**
     * VUEX STATES
     * ~~~~~
     * isLoaded: preloader
     * errorMsg: error message (this one need to be refactored tho)
     */
    ...mapState({
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    })
  },
  methods: {
    /**
     * CLOSE OR OPEN MODAL
     */
    toggleModal: function () {
      this.$emit('toggleModal')
    },
    /**
     * CLOSE MODAL FROM ERROR STATE
     */
    toggleModalFromError: function () {
      this.$store.commit('SET_ERR_MSG', {})
      this.$emit('toggleModal')
    },
    /**
     * REACTIVATE THE USER
     */
    reactivate: function () {
      this.reactivateUser(this.uid)
        .then(() => {
          if (this.isErrorEmpty) {
            this.$emit('toggleModal')
          }
        })
    },
    /**
     * VUEX ACTIONS
     * ~~~~~
     * - deactivateUser: deactivate current user
     */
    ...mapActions([
      'reactivateUser'
    ])
  }
}
</script>

<style>

</style>
