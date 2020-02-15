import AsyncStorage from '@react-native-community/async-storage';

class AsyncStorageService {
    // for testing
    async clearWholeStorage() {
        await AsyncStorage.clear();
    }

    async getItem(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return JSON.parse(value);
            }
        } catch (error) {
            return error;
        }
    };

    async setNewUser(newUser, registeredUsers) {
        try {
            if (registeredUsers && registeredUsers.length) {
                await AsyncStorage.setItem('registered_users', JSON.stringify([
                    ...registeredUsers,
                    newUser
                ]));
            } else {
                await AsyncStorage.setItem('registered_users', JSON.stringify([newUser]));
            }
        } catch (error) {
            return error;
        }
    }

    async getRegisteredUsers() {
        return await this.getItem('registered_users');
    }

}

export default new AsyncStorageService();
