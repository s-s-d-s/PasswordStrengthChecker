import { Component } from '@angular/core';
import { PasswordStrength } from "./password-strength.enum";
import { EasyPassword, MediumPassword } from "./password-strength.constants";


@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordVisible: boolean = false;
  passwordStrength: PasswordStrength = PasswordStrength.Default;

  checkPasswordStrength() {
    if (!this.password) {
      this.passwordStrength = PasswordStrength.Default;
    } else if (this.password.length < 8) {
      this.passwordStrength = PasswordStrength.Weak;
    } else if (this.password.match(EasyPassword)) {
      this.passwordStrength = PasswordStrength.Easy;
    } else if (this.password.match(MediumPassword)) {
      this.passwordStrength = PasswordStrength.Medium;
    } else {
      this.passwordStrength = PasswordStrength.Strong;
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
