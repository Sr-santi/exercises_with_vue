Vue.component('modal', {
    props : ['title'],
    data () {
        return {

        }
    },

    methods: {
        close() {
            this.$emit('change-visibility')
        }
    },

    template: `
      <div class="modal-mask">
          <div class="modal-container">
            <h3>{{title}}</h3>
            <slot name="content"></slot>
            <hr>
            <footer>
              <button v-on:click="close">Close</button>
            </footer>
          </div>
      </div>`
  })
  
  new Vue({
    el: '#app',

    data () {
        return {
            title: "Un aprendizaje infinito 📃",
            showModal: false,
        }
    },

    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        }
    }

  })