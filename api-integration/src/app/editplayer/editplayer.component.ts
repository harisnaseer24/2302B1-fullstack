import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editplayer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editplayer.component.html',
  styleUrl: './editplayer.component.css'
})
export class EditplayerComponent {
  teams:any=[];
  id:any=0;
  player={
    id:0,
    name:"",
    age:0,
    skill:"",
    teamId:"",
  }


  constructor(private http:HttpClient, private route:ActivatedRoute){
    this.getTeams();
    this.getPlayerDetails();
    }
    
getPlayerDetails(){
this.id=this.route.snapshot.paramMap.get("id");
this.http.get("http://localhost:5042/api/Cricket/"+this.id).subscribe((result:any)=>{
    this.player = result;
    console.log(result);

})}


    getTeams(){
      this.http.get("http://localhost:5042/api/Cricket/Teams").subscribe((result:any)=>{
    this.teams = result;
    console.log(result);
      })
    }
    
    EditPlayer(){
  
      
      this.http.put("http://localhost:5042/api/Cricket", this.player).subscribe((result:any)=>{
      if(result !=null){
  alert("Player edit successfully");
  location.href="/";
  
      }else{
        alert("denied");
      }
      })
  
  
    }
}
