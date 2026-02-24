import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { STORAGE_KEYS, ERROR_MESSAGES } from '../constants';

/**
 * Demo user credentials stored in Firebase
 */
export interface DemoUser {
  username: string;
  password: string;
  access_code: string;
}

/**
 * Authenticate user against Firebase demo_users collection
 *
 * @param username - User's username
 * @param password - User's password
 * @param accessCode - Demo access code
 * @returns Promise with success status and optional error message
 */
export async function loginUser(
  username: string,
  password: string,
  accessCode: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const usersRef = collection(db, 'demo_users');
    const q = query(
      usersRef,
      where('username', '==', username.trim()),
      where('password', '==', password),
      where('access_code', '==', accessCode.trim())
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return { success: false, error: ERROR_MESSAGES.INVALID_CREDENTIALS };
    }

    // Store session
    sessionStorage.setItem(STORAGE_KEYS.USER, username.trim());
    return { success: true };
  } catch (err) {
    return { success: false, error: ERROR_MESSAGES.AUTH_FAILED };
  }
}

/**
 * Get the currently logged-in user from session storage
 *
 * @returns Username if logged in, null otherwise
 */
export function getLoggedInUser(): string | null {
  return sessionStorage.getItem(STORAGE_KEYS.USER);
}

/**
 * Log out the current user by removing session data
 */
export function logoutUser(): void {
  sessionStorage.removeItem(STORAGE_KEYS.USER);
}
