import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
players:any=[];


constructor(private http:HttpClient){
this.getPlayers();
}

getPlayers(){
  this.http.get("http://localhost:5042/api/Cricket").subscribe((result:any)=>{
this.players = result;
console.log(result);
  })
}
DeletePlayer(id:any){
  this.http.delete("http://localhost:5042/api/Cricket?id="+id).subscribe((result:any)=>{
if(result !=null){
alert("player Deleted")
}
  })
}

}
