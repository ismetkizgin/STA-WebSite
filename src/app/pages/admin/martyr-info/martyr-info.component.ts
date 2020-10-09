import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MartyrInfoDialogComponent } from 'src/app/components';

@Component({
  selector: 'app-martyr-info',
  templateUrl: './martyr-info.component.html',
  styleUrls: ['./martyr-info.component.scss']
})
export class MartyrInfoComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  galery:any[]=[
    {adres:"https://maker.robotistan.com/wp-content/uploads/2017/12/programlama-dilleri.png"},
    {adres:"https://media.backlinks.name//contents//backlink-yazilimdilleri-2019-01-06-08-27-47.jpg"},
    {adres:"https://www.kablosuzmecmua.com/wp-content/uploads/2017/01/yeni-baslayanlar-icin-en-iyi-programlama-dilleri.jpg"},
    {adres:"https://smartpro.com.tr/wp-content/uploads/2017/06/programlama-dilleri-2017-1200x900.jpg"},
    {adres:"https://blog.teknopusula.com/wp-content/uploads/2016/12/hangi_programlama_dili.jpg"},
    {adres:"https://cepkolik.com/wp-content/uploads/2019/01/en-iyi-programlama-dilleri-2019-cepkolik-listeleme.jpeg"},
    {adres:"https://miro.medium.com/max/2560/1*ZlmIVwWnA1LRzUl17qKlVQ.jpeg"},
    {adres:"https://i0.wp.com/www.cinarwbh.com/wp-content/uploads/2019/07/Untitled-5.jpg?fit=1450%2C855&ssl=1"},
    {adres:"https://maker.robotistan.com/wp-content/uploads/2017/12/programlama-dilleri.png"},
    {adres:"https://media.backlinks.name//contents//backlink-yazilimdilleri-2019-01-06-08-27-47.jpg"},
    {adres:"https://www.kablosuzmecmua.com/wp-content/uploads/2017/01/yeni-baslayanlar-icin-en-iyi-programlama-dilleri.jpg"},
    {adres:"https://smartpro.com.tr/wp-content/uploads/2017/06/programlama-dilleri-2017-1200x900.jpg"},
    {adres:"https://blog.teknopusula.com/wp-content/uploads/2016/12/hangi_programlama_dili.jpg"},
    {adres:"https://cepkolik.com/wp-content/uploads/2019/01/en-iyi-programlama-dilleri-2019-cepkolik-listeleme.jpeg"},
    {adres:"https://miro.medium.com/max/2560/1*ZlmIVwWnA1LRzUl17qKlVQ.jpeg"},
    {adres:"https://i0.wp.com/www.cinarwbh.com/wp-content/uploads/2019/07/Untitled-5.jpg?fit=1450%2C855&ssl=1"}
  ];
  
  openPhotoDialog(Adres)
  {
    this._dialog.open(MartyrInfoDialogComponent, {
      width: '50%',
      data: { Adres },
    });
  }
  ngOnInit(): void {
  }

}
