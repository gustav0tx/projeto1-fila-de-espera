let patiens = []
let hub = ``
while (hub != 3) {
    switch(parseInt(hub)) {
        case 1:
            patiens.shift()
            break
        case 2:
            for(let i = 0; i <= patiens.length; i++) {
                i = patiens.length
                let patienName = prompt('Nome do paciente')
                patiens.push(`${i += 1}º: ${patienName}\n`)
            }
            break    
    }
    hub = prompt(`LISTA DE PACIENTES:\n${patiens}\nOPÇÕES:\n1:Consultar Paciente\n2:Novo Paciente\n3:Sair`)
}
