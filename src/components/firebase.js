import { firebaseDb } from "../api/firebase/firebase";
import { fetchCategoriesIdDataSuccess } from "../core/redux/Events/actions";

export const buildfetchCategoriesIdData = () => dispatch =>
  firebaseDb
    .ref('categoriesId')
    .once('value', snapshot => fetchCategoriesIdDataSuccess(dispatch, snapshot.val()));
