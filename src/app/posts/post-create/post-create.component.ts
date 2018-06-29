import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  styleUrls: ['./post-create.component.css'],
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) { return; }

    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
