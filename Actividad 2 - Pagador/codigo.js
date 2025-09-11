const { createApp, ref, computed } = Vue

  createApp({
    setup() {
       const vhora = ref('0')
       const nhoras = ref('0')

       const salud = ref('0')
       const pension = ref('0')
       const icbf = ref('0')

       const primas_perc = ref('0')
       const prestamo_perc = ref('0')
       const bonificacion_perc = ref('0')


        const salarioBasico = computed(() => {
        return parseFloat(vhora.value) * parseFloat(nhoras.value)
        })

         const dedu_salud = computed(() => {
          return salarioBasico.value * (parseFloat(salud.value)/100)
        })
         const dedu_pension = computed(() => {
          return salarioBasico.value * (parseFloat(pension.value)/100)
        })

         const dedu_icbf = computed(() => {
          return salarioBasico.value * (parseFloat(icbf.value)/100)
        })

        const totalDeducciones = computed(() => {
          return dedu_salud.value + dedu_pension.value + dedu_icbf.value
        })

        const valor_primas = computed(() => {
          return salarioBasico.value * (parseFloat(primas_perc.value)/100)
        })
        const valor_prestamo = computed(() => {
          return salarioBasico.value * (parseFloat(prestamo_perc.value)/100)
        })
        const valor_bonificacion = computed(() => {
          return salarioBasico.value * (parseFloat(bonificacion_perc.value)/100)
        })

        const totalAportes = computed(() => {
          return valor_primas.value + valor_prestamo.value + valor_bonificacion.value
        })

        const totalAPagar = computed(() => {
          return salarioBasico.value + totalAportes.value - totalDeducciones.value
        })


      return {
       vhora,
       nhoras,
       salarioBasico,
       salud,
       pension,
       icbf,
       dedu_salud,
       dedu_pension,
       dedu_icbf,
       totalDeducciones,
       primas_perc,
       prestamo_perc,
       bonificacion_perc,
       valor_primas,
       valor_prestamo,
       valor_bonificacion,
       totalAportes,
       totalAPagar
      }
    }
  }).mount('#app1')