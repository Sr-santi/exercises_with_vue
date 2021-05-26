new Vue({
    el: '#app',
    
    data () {
      return {
          title: '',
          time: 0,
          totalTime: 0,
          courses: [
              
          ],
          item_available: false,
      }
    },
    
    watch: { //se ejecuta cada que cambia una variable en data
        courses (newVal, oldVal) {
            this.item_available = true
        }
    },

    computed: {
    },
    
    methods: {
        addCourse () {
            let object_course = {
                title: this.title,
                time: this.time,
            }
            if (!!this.title & !!this.time){
                this.courses.push(object_course)
                this.totalTime += Number(this.time)
            }
            this.title = ''
            this.time = 0
        },

    }
  })