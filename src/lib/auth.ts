import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export interface DemoUser {
  username: string;
  password: string;
  access_code: string;
}

const SESSION_KEY = 'gofer_user';

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
      return { success: false, error: 'Invalid username, password or access code.' };
    }

    // Store session
    sessionStorage.setItem(SESSION_KEY, username.trim());
    return { success: true };
  } catch (err) {
    return { success: false, error: 'Connection error. Please try again.' };
  }
}

export function getLoggedInUser(): string | null {
  return sessionStorage.getItem(SESSION_KEY);
}

export function logoutUser(): void {
  sessionStorage.removeItem(SESSION_KEY);
}
