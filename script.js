// O menu também deve permitir escolher entre as
// opções de “Novo paciente”, para adicionar um novo
// paciente ao fim da fila (pedindo o nome do paciente)
// , “Consultar paciente”, que retira o primeiro paciente da
// fila e mostra na tela o nome do paciente consultado, e
// “Sair”. O programa só deve ser encerrado ao escolher a opção
// de “Sair”, caso contrário deve voltar ao menu.
// Usa array , while ou do para Menu interativo
// 1° passo menu interativo
let patients = ['Thierry', 'Gustavo' , 'Rodolfo' ]
let hub = prompt(`Lista De Pacientes\n1°${patients[0]}\n2°${patients[1]}\n3°${patients[2]}\nOPÇÕES:\n1: Novo paciente\n2: Consultar paciente\n3: Sair do menu`)
while(hub !=  3) {
   if (hub == 1) {
    let nameP = prompt('nome do paciente')
    patients.push(nameP)
   }
   if (hub == 2) {
    patients.shift()
   }
    hub = prompt(`Lista De Pacientes\n1°${patients[0]}\n2°${patients[1]}\n3°${patients[2]}\nOPÇÕES:\n1: Novo paciente\n2: Consultar paciente\n3: Sair do menu`)

}