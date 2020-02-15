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

    async setLoggedUser(user) {
        try {
            await AsyncStorage.setItem('logged_user', JSON.stringify(user));
        } catch (error) {
            return error;
        }
    };

    async logoutUser() {
        try {
            await AsyncStorage.removeItem('logged_user')
        } catch (error) {
            return error;
        }
    };

    async getLoggedUser() {
        return await this.getItem('logged_user');
    }

    async getRegisteredUsers() {
        return await this.getItem('registered_users');
    }
}

export default new AsyncStorageService();
