import {Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-modal',
  template: `
    <div class="jw-modal">
      <div class="jw-modal-body">
        <ng-content></ng-content>
        <!--<router-outlet></router-outlet>-->
      </div>
    </div>
    <div class="jw-modal-background"></div>
    `,
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  private element: any;

  constructor(
    private el: ElementRef,
    private modalService: ModalService
) {
    this.element = el.nativeElement;
}

  ngOnInit() {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.element);
    this.element.addEventListener('click', el => {
      if (el.target.className === 'app-modal') {
        this.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }
}
