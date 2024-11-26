import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addplayer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addplayer.component.html',
  styleUrl: './addplayer.component.css'
})
export class AddplayerComponent {
teams:any=[];
player={
  id:0,
  name:"",
  age:0,
  skill:"",
  teamId:"",
}
constructor(private http:HttpClient){
  this.getTeams();
  }
  
  getTeams(){
    this.http.get("http://localhost:5042/api/Cricket/Teams").subscribe((result:any)=>{
  this.teams = result;
  console.log(result);
    })
  }
  
  AddPlayer(){

    
    this.http.post("http://localhost:5042/api/Cricket", this.player).subscribe((result:any)=>{
    if(result !=null){
alert("Player added successfully");
location.href="/";

    }else{
      alert("denied");
    }
    })


  }
  

}
