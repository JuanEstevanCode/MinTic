function calcularEdad() {
    const dateInput = document.getElementById("calculatorAge").value;

    if(dateInput.length == 0) {
        Swal.fire("Por favor ingrese una fecha");
        return;
    } 
    else {
        const date = new Date(dateInput);
        const today = new Date();
        let edad = today.getFullYear() - date.getFullYear()
        const mesesToday = today.getMonth()
        const mesNacido = date.getMonth()
        if (mesesToday < mesNacido || edad < 0 || (edad === 0 && today.getDate() < date.getDate())) {
            edad--;
        }
        Swal.fire(`Tienes ${edad} años`)
        console.log(edad)
    }

    // console.log(today.getDate())
    // console.log(today.getDay())
    // console.log(today.getFullYear())
    // console.log(today.getHours())
    // console.log(today.getMilliseconds())
    // console.log(today.getMinutes())
    // console.log(today.getMonth())
    // console.log(today.getSeconds())
    // console.log(today.getTime())
    // console.log(today.getTimezoneOffset())
}
