import { Component } from '@angular/core';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html'
})
export class UserPageComponent {
  openEditProfileModal(event: MouseEvent) {
    event.preventDefault()
    event.stopPropagation()

    let editProfileModal = document.querySelector<HTMLElement>('.modal__edit-profile')
    if(!editProfileModal) return

    editProfileModal.classList.toggle('hidden')
  }
}