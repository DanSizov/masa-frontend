import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { v4 as uuidv4 } from "uuid"

@Component({
  selector: 'mf-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.less']
})
    
export class RadioButtonsComponent {

    @Input() value: string = ""
    @Input() options: string[] = []

    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>()

    public unique: string = uuidv4()
    
    public onChange(): void {
        this.valueChange.emit(this.value)
    }
}

