console.log("aaaa");
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
console.log("aaaa");
// Firebase 配置
const firebaseConfig = {
    apiKey: "AIzaSyD-9F5fGAtNzz0QNLuiUjzbQmefwBpLydM",
    authDomain: "statistics-921a1.firebaseapp.com",
    projectId: "statistics-921a1",
    storageBucket: "statistics-921a1.firebasestorage.app",
    messagingSenderId: "1083533324715",
    appId: "1:1083533324715:web:af5df87bd8e80f3c73e2ee",
    measurementId: "G-YJS45V68TZ"
  };
  

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
// 儲存資料
async function saveData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "John Doe",
      email: "johndoe@example.com"
    });
    console.log("Document written with ID: ", docRef.id);
    alert("資料成功存入！"); // 顯示成功提示
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("資料存入失敗！");
  }
}

// 呼叫 saveData 函數來存入資料
saveData();


const subjects = ["Math", "Chinese","English"];
const letters = "ABCDEFGHIJKLMNO".split("");

// 建立 subjects 集合
async function setupFirestore() {
    for (const subject of subjects) {
        const subjectRef = db.collection("subjects").doc(subject);
        for (const letter of letters) {
            const letterRef = subjectRef.collection("letters").doc(letter);
            let values = {};
            for (let i = 1; i <= 20; i++) {
                values[`value${i}`] = 0;  // 預設值為 0
            }
            await letterRef.set(values);
        }
    }
    console.log("Firestore setup complete.");
}

setupFirestore();