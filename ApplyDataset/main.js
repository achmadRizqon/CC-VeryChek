const firebaseConfig = {
    apiKey: "AIzaSyDaxDBvv1GG2AVqt2SdG9hOZQHDxpsPH5s",
    authDomain: "tescapstone2.firebaseapp.com",
    databaseURL: "https://tescapstone2-default-rtdb.firebaseio.com",
    projectId: "tescapstone2",
    storageBucket: "tescapstone2.appspot.com",
    messagingSenderId: "472661086386",
    appId: "1:472661086386:web:2c2782dc3f1614d7be79ab"
};

firebase.initializeApp(firebaseConfig);

var newsCheckerDb = firebase.database().ref('newsChecker');

document.getElementById('processUpload').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var judul = getElementVal('judul');
    var link = getElementVal('link');
    //console.log(judul, link);

    //TODO ambil gambar ke storage
    var gambar = document.getElementById('gambar').files[0];
    var namaGambar = gambar.name;

    var storageRef = firebase.storage().ref('gambar/'+namaGambar);
    var uploadTask = storageRef.put(gambar);
    // uploadTask.on('state_chaged', function(snapshot){
    //
    // }

    saveNews(judul, link);

    document.getElementById("processUpload").reset();
}

const saveNews = (judul, link) => {
    var newNewsForm = newsCheckerDb.push();
    newNewsForm.set({
        judul : judul,
        link : link,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}