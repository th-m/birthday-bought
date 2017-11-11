import { ref, firebaseAuth } from '../config/constants'

export function saveBirthday (data, uid){
  return ref.child(`birthdays/${uid}/info`)
    .set(data)
    .then(() => data)
}
