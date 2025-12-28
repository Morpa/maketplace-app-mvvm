import { RegisterView } from "../viewModels/Register/Register.view";
import { userRegisterViewModel } from "../viewModels/Register/userRegister.viewModel";

export default function Register() {
	const props = userRegisterViewModel();

	return <RegisterView {...props} />;
}
