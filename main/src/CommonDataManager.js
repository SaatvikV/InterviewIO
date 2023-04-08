export default class CommonDataManager {

    static myInstance = null;

    _userID = "user";


    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    getUserID() {
        return this._userID;
    }

    setUserID(id) {
        this._userID = id;
    }
}