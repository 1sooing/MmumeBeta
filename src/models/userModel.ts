export class userModel {
  email: string;
  uid: string;
  didTutorial: boolean;
  sex: string;
  profilePic: string;
  level: number;
  id: string;
  deleteAccount: boolean;
  deleteAccountDate: string;
  selectedMmume: string;
  date: string;
  constructor(email, uid, didTutorial, sex, profilePic, level, id, deleteAccount, deleteAccountDate, selectedMmume, date) {
    this.email = email;
    this.uid = uid;
    this.didTutorial = didTutorial;
    this.sex = sex;
    this.profilePic = profilePic;
    this.level = level;
    this.id = id;
    this.deleteAccount = deleteAccount;
    this.deleteAccountDate = deleteAccountDate;
    this.selectedMmume = selectedMmume;
    this.date = date;
  }
  getMaskName(): string {
    return this.id;
  }
}
