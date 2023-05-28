import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
} from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
	@Input() public openModal: boolean;

	@Output() public closeEvent = new EventEmitter<void>();

	public constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

	public ngOnInit(): void {
		this.renderer.appendChild(document.body, this.elementRef.nativeElement);
	}

	public ngOnDestroy(): void {
		this.renderer.removeChild(document.body, this.elementRef.nativeElement);
	}

	public onClose(): void {
		this.closeEvent.emit();
	}
}
