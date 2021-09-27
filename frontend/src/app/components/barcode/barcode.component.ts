import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {
  @Input() barcodeLength:number = 5;
  @Input() barcodeLabel:string = 'Barcode input';
  @Output() onScanEvent = new EventEmitter<string>();

  @ViewChild('barcode', {static: true}) barcode:any;
  barcodeValue: string = '';

  constructor() { }

  ngOnInit(): void {
    this.barcode.nativeElement.focus();
  }

  onScan(event: any){
    setTimeout(() => {
        if (this.barcodeValue.length >= this.barcodeLength) {
          this.onScanEvent.emit(this.barcodeValue);
          this.barcodeValue = '';
        }
        else {
          this.barcodeValue = '';
          return false;
        }
    }, 200);
  }
}
