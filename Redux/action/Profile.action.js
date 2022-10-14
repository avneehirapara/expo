import * as ActionType from '../ActionType'
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';




export const getDATA = () => async (dispatch) => {
    try {
        let data = [];

        await firestore()
            .collection('Profile')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    data.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                });
            });
        dispatch({ type: ActionType.GET_PROFILE, payload: data })
    }
    catch (e) {
        console.log(e);
    }
}

export const addDATA = (data) => async (dispatch) => {
    
    console.log("ACTION FILE DONE",data);
    try {
        let ranNum = Math.floor(Math.random() * 1000).toString();

        const reference = storage().ref('/Profile/' + ranNum);

        await reference.putFile(data.pro_image);

        const url = await storage().ref('/Profile/' + ranNum).getDownloadURL();

        console.log(url);
        firestore()
            .collection('Profile')
            .add({ email: data.email,password:data.name , fileName: ranNum, pro_image: url})    
            .then(() => {
                dispatch({ type: ActionType.PROFILE, payload: { email: data.email,password:data.name,fileName: ranNum, pro_image: url }})
            });
    }
    catch (e) {
        console.log(e);
    }

}