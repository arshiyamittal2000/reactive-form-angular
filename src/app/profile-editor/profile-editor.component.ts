import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    moreinfo: this.fb.array([
      this.fb.control('')
    ])
  });

  get moreinfo() {
    return this.profileForm.get('moreinfo') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Arshiya',
      address: {
        street: 'GEMINI'
      }
    });
  }

  addmoreinfo() {
    this.moreinfo.push(this.fb.control(''));
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
