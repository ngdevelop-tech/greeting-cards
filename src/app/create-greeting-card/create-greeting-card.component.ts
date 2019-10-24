import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-create-greeting-card',
  templateUrl: './create-greeting-card.component.html',
  styleUrls: ['./create-greeting-card.component.css']
})
export class CreateGreetingCardComponent implements OnInit, OnDestroy {

  uploadProgress$ : Observable<number>;
  downloadUrl: string;
  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;
  date = new Date();
  file: File;
  isSaved = false;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }
  

  upload(event : any){
    let file = event.target.files[0];
    let filePath = `/greetings/${file.name.split('.')[0] + '-' + this.date.getTime()}`;
    console.log(filePath);
    this.ref = this.afStorage.ref(filePath);
    this.task  = this.ref.put(file);
    this.uploadProgress$ = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => this.ref.getDownloadURL().subscribe((url)=> {
          this.downloadUrl = url;
      }) )
    ).subscribe();
  }

  delete(){
    console.log('Delete Called');
    if(this.ref){
      this.ref.delete().subscribe();
      this.downloadUrl = null;
    }
  }

  save(){

  }

  ngOnDestroy(){
    if(!this.isSaved){
      this.ref.delete();
    }
  }

}
