import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    // setter
    // altGr7 = backticks = template literals
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // getter   this.service.collection.subscribe()
  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // setter
  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // autres méthodes pour post/put

  // méthode pour post
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // méthode pour retrouver objet à partir de id
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  // méthode pour update un objet
  // this.http.put(url/id, obj)
  public update(obj: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`, obj);
  }
}
