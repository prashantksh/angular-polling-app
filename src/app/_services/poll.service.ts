import { Injectable } from '@angular/core';
import { PollItem } from 'src/_models/poll-item.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private pollItems: PollItem[] = [
    {
      id: 1,
      title: 'Foosball',
      group: 'Development',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/67201366/compr-r85/5732/57324795/commodore-28-foosball-table.jpg',
      description: 'Foosball for entertainment and relaxation',
      voteCount: 0
    },
    {
      id: 2,
      title: 'Gym',
      group: 'Marketing',
      imageUrl:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      description: 'Gym for fitness and strength training',
      voteCount: 0
    },
    {
      id: 3,
      title: 'Snack Corner',
      group: 'Operations',
      imageUrl:
        'https://www.walesnationalpoolswansea.co.uk/wp-content/uploads/snack-corner.jpg',
      description: 'Snack corner for refreshment and healthful eating',
      voteCount: 0
    }
  ];
  constructor(private http: HttpClient) {}

  get items(): Observable<PollItem[]> {
    //return of(this.pollItems);
    return this.http.get<PollItem[]>('http://localhost:3000/api/get');
  }

  get totalCount(): number {
    let total = 0;

    this.pollItems.forEach(p => {
      total += +p.voteCount;
    });

    return total;
  }

  createPollItem(item): Observable<any> {
    return this.http.post('http://localhost:3000/api/create', item);
  }
}
