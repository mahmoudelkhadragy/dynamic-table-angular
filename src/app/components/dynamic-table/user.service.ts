import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  students = [
    {
      id: 1,
      name: 'Abby Jaskolski ',
      age: 21,
      address: 1.0079,
      isExpanded: false,
      subjects: [
        {
          name: 'Bio',
          type: 'Medical',
          grade: 'A',
        },
        {
          name: 'Chemistry',
          type: 'Medical',
          grade: 'A',
        },
        {
          name: 'Physics',
          type: 'Medical',
          grade: 'A',
        },
      ],
    },
    {
      id: 2,
      name: 'Jabari Fritsch',
      age: 20,
      address: 1.0079,
      isExpanded: false,
      subjects: [
        {
          name: 'Bio',
          type: 'Medical',
          grade: 'A',
        },
        {
          name: 'Chemistry',
          type: 'Medical',
          grade: 'A',
        },
        {
          name: 'Physics',
          type: 'Medical',
          grade: 'A',
        },
      ],
    },
    {
      id: 3,
      name: 'Maybell Simonis',
      age: 21,
      address: 1.0079,
      isExpanded: false,
      subjects: [
        {
          name: 'Bio',
          type: 'Medical',
          grade: 'A',
        },
        {
          name: 'Chemistry',
          type: 'Medical',
          grade: 'A',
        },
        {
          name: 'Physics',
          type: 'Medical',
          grade: 'A',
        },
      ],
    },
  ];
  constructor() {}

  get allStudents() {
    return this.students;
  }
}
