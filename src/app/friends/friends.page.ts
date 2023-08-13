import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  people = [
    {
      name: 'John Doe',
      jobTitle: 'Software Engineer',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      jobTitle: 'UX Designer',
      avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Bob Johnson',
      jobTitle: 'Product Manager',
      avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: 'Sarah Lee',
      jobTitle: 'Marketing Specialist',
      avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Tom Wilson',
      jobTitle: 'Web Developer',
      avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      name: 'Emily Davis',
      jobTitle: 'Content Writer',
      avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
  ];
}
