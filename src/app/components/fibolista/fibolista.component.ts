import { Component, OnInit, Input } from '@angular/core';
import { FiboserviceService } from "../../services/fiboservice.service";

@Component({
  selector: 'app-fibolista',
  templateUrl: './fibolista.component.html',
  styleUrls: ['./fibolista.component.scss']
})
export class FibolistaComponent implements OnInit {

  @Input()
  valores: number[];

  constructor(public fservice: FiboserviceService) { }

  ngOnInit(): void {
  }
}
