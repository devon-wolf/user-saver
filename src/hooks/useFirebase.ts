import firebase from 'firebase/app';
import 'firebase/database';
import { useListVals } from 'react-firebase-hooks/database';
import { User } from '../types';
import usersRef from '../services/firebaseConfig';

const useFirebaseUsers = () : {
    values: User[] | undefined;
    loading: boolean;
    error: firebase.FirebaseError | undefined;
} => {
	const [values, loading, error] = useListVals<User>(usersRef);
	return { values, loading, error };
};

export default useFirebaseUsers;