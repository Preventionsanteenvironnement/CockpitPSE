let db = null;
let firestore = null;
const PARTY_COLLECTION = "party_live_parties";

export async function initFirebase() {
  try {
    const configModule = await import("./firebase-config.js");
    if (!configModule.firebaseConfig) return { enabled: false, db: null };
    const appModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js");
    firestore = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js");
    const app = appModule.initializeApp(configModule.firebaseConfig);
    db = firestore.getFirestore(app);
    return { enabled: true, db };
  } catch (error) {
    console.info("Party Live: Firebase non configure, mode localStorage actif.", error.message);
    return { enabled: false, db: null };
  }
}

export function isFirebaseReady() {
  return Boolean(db && firestore);
}

export async function savePartyRemote(party) {
  if (!isFirebaseReady()) return false;
  await firestore.setDoc(firestore.doc(db, PARTY_COLLECTION, party.id), party, { merge: true });
  return true;
}

export async function getPartyRemote(partyId) {
  if (!isFirebaseReady()) return null;
  const snapshot = await firestore.getDoc(firestore.doc(db, PARTY_COLLECTION, partyId));
  return snapshot.exists() ? snapshot.data() : null;
}

export function listenPartyRemote(partyId, callback) {
  if (!isFirebaseReady()) return () => {};
  return firestore.onSnapshot(firestore.doc(db, PARTY_COLLECTION, partyId), (snapshot) => {
    if (snapshot.exists()) callback(snapshot.data());
  });
}
