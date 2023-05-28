import { RoleUser } from './constants.interface';

export interface UserType {
	email: string;
	fullName: String;
	role: RoleUser;
	createdAt: string;
}
