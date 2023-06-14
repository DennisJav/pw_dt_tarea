
const persona = [
    { nombre: "", apellido: "", edad: "", facultad: "" }
]

const app = Vue.createApp({
    data() {
        return {
            datos: persona,
            nombre: "",
            apellido: "",
            edad: "",
            facultad: ""
        }
    },

    methods: {
        agregar() {
            const nuevaPersona = {
                nombre: this.nombre,
                apellido: this.apellido,
                edad: this.edad,
                facultad: this.facultad
            };
            this.datos.push(nuevaPersona)
            this.limpiar()
        },

        limpiar(){
            this.nombre="",
            this.apellido="",
            this.edad="",
            this.facultad=""
        }
    },



})

app.mount("#myFormVue")