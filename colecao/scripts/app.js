const firebaseConfig = {
    apiKey: "AIzaSyBBg1V2zdN3wIxQkAd762RtSRVdSNi2G7E",
    authDomain: "colegio-42455.firebaseapp.com",
    projectId: "colegio-42455",
    storageBucket: "colegio-42455.appspot.com",
    messagingSenderId: "1045228011584",
    appId: "1:1045228011584:web:42a4408bc47d5db10c5fa5",
    measurementId: "G-CW3BCGEK8Y"
};

const TURMA = "turmaA"

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

// Ler todos os dados de uma coleção
// db.collection("turmaA").get().then(snapshot => {
//     snapshot.forEach(doc => {
//         let aluno = doc.data()
//         console.log(aluno.nome)
//     })
// })

// Ler os dados selecionados de uma coleção
// let docRef = db.collection("turmaA").doc("3LVZuPAF3iSOdRRSmtcN")

// docRef.get().then(doc => {
//     let aluno = doc.data()
//     console.log(aluno.nome)
// }) 

// // Buscando documentos
// db.collection("turmaA").where("nome", "==", "JooJ").get().then(snapshot => {
//     snapshot.forEach(doc => {
//         let aluno = doc.data()
//         console.log(aluno.nome)
//     })
// })

// Adicionar objetos na coleção
// db.collection(TURMA).add({
//     nome: "Marcos",
//     sobrenome: "Santos",
//     notas: {nota1: 9.6, nota2: 7.5}
// }).then(doc => {
//     console.log("Documento inserido com sucesso", doc)
// }).catch(err => {
//     console.log(err)
// })

// Set insere objetos no banco de dados e sobrescreve (merge não deixa sobrescrever dados)
// db.collection(TURMA).doc("AlunoNovo").set({
//     nome: "Mariana",
//     sobrenome: "Oliveira",
//     notas: { nota1: 8.6, nota2: 7.5 }
// }, {merge: true}).then(() => {
//     console.log("Documento inserido com sucesso")
// }).catch(err => {
//     console.log(err)
// })

// Update atualiza / adiciona o objeto do banco de dados
// db.collection(TURMA).doc("AlunoNovo").update({
//     sobrenome: "Lima",
//     "notas.nota1": 9,
//     "notas.nota1": firebase.firestore.FieldValue.increment(1),
//     cidades: firebase.firestore.FieldValue.arrayUnion("Rio de Janeiro"), // Adiciona elemento no array sem sobrescrever os dados
//     cidades: firebase.firestore.FieldValue.arrayRemove("Rio de Janeiro") // Remove elemento no array sem sobrescrever os dados
// }).then(() => {
//     console.log("Documento inserido com sucesso")
// }).catch(err => {
//     console.log(err)
// })

// onSnapshot mostra em tempo real as modificações feitas na coleção
// db.collection("turmaA").onSnapshot(snapshot => {
//     snapshot.forEach(doc => {
//         let aluno = doc.data()
//         console.log(aluno)
//     })
// })

// onSnapshot mostra em temo real as modificações em dados selecionados de uma coleção
// let docRef = db.collection("turmaA").doc("3LVZuPAF3iSOdRRSmtcN")

// docRef.onSanpshot(doc => {
//     let aluno = doc.data()
//     console.log(aluno.nome)
// })
