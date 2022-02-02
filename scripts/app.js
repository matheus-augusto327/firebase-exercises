const firebaseConfig = {
    apiKey: "AIzaSyBBg1V2zdN3wIxQkAd762RtSRVdSNi2G7E",
    authDomain: "colegio-42455.firebaseapp.com",
    projectId: "colegio-42455",
    storageBucket: "colegio-42455.appspot.com",
    messagingSenderId: "1045228011584",
    appId: "1:1045228011584:web:42a4408bc47d5db10c5fa5",
    measurementId: "G-CW3BCGEK8Y"
  };

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

db.collection("turmaA").where("nome", "==", "JooJ").get().then(snapshot => {
    snapshot.forEach(doc => {
        let aluno = doc.data()
        console.log(aluno.nome)
    })
})
