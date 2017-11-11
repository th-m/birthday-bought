import { ref, firebaseAuth } from '../config/constants'

export function saveBirthday (person) {

  return ref.child(`birthdays/${person.uid}/info`)
    .set({
      name: person.name,
      gender: person.gender,
      budget: person.budget,
      addressStreet: person.addressStreet,
      addressZip: person.addressZip,
      addressCity: person.addressCity,
      addressState: person.addressState,
      birthMonth: person.birthMonth,
      birthDay: person.birthDay,
      birthYear: person.birthYear,
      uid: user.uid
    })
    .then(() => person)
}
