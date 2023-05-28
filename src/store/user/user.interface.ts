import { UserType } from '../../interface/user.interface';

export interface UserInitialStateType {
	user: UserType | null;
	isLoading: boolean;
}
