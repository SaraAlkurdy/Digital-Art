import { Component, OnInit, ViewChild} from '@angular/core';
import { NgWizardConfig, THEME, StepChangedArgs, NgWizardService } from 'ng-wizard';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Galleria } from 'primeng/galleria';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  i: number = 0;
  galleryKey: string;
  submittedForm: boolean = false;

  imagess: any[];
  @ViewChild('galleria') galleria: Galleria;

    showThumbnails: boolean;

    fullscreen: boolean = false;

    activeIndex: number = 0;

    onFullScreenListener: any;

    config: NgWizardConfig = {
    selected: 0,
    theme: THEME.circles,
    toolbarSettings: {
      toolbarExtraButtons: [
        { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }]
    }
  };

  imageSrc = "../../assets/images/about-2.jpg";
  images = ['../../assets/images/about-2.jpg', '../../assets/images/about-3.jpg', '../../assets/images/about-4.jpg', '../../assets/images/about-leverage.jpg'];
  active = 0;
  activeItem: string = this.images[this.active];

  constructor(private ngWizardService: NgWizardService) { }

  onSubmitContact(form: NgForm, form2: NgForm, form3: NgForm) {
    const value = form.value;
    console.log(value);
  }

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

onThumbnailButtonClick() {
  this.showThumbnails = !this.showThumbnails;
}

toggleFullScreen() {
  if (this.fullscreen) {
      this.closePreviewFullScreen();
  }
  else {
      this.openPreviewFullScreen();
  }
}

openPreviewFullScreen() {
  let elem = this.galleria.element.nativeElement.querySelector(".ui-galleria");
  if (elem.requestFullscreen) {
      elem.requestFullscreen();
  }
  else if (elem['mozRequestFullScreen']) { /* Firefox */
      elem['mozRequestFullScreen']();
  }
  else if (elem['webkitRequestFullscreen']) { /* Chrome, Safari & Opera */
      elem['webkitRequestFullscreen']();
  }
  else if (elem['msRequestFullscreen']) { /* IE/Edge */
      elem['msRequestFullscreen']();
  }
}

onFullScreenChange() {
  this.fullscreen = !this.fullscreen;
}

closePreviewFullScreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  }
  else if (document['mozCancelFullScreen']) {
      document['mozCancelFullScreen']();
  }
  else if (document['webkitExitFullscreen']) {
      document['webkitExitFullscreen']();
  }
  else if (document['msExitFullscreen']) {
      document['msExitFullscreen']();
  }
}

bindDocumentListeners() {
  this.onFullScreenListener = this.onFullScreenChange.bind(this);
  document.addEventListener("fullscreenchange", this.onFullScreenListener);
  document.addEventListener("mozfullscreenchange", this.onFullScreenListener);
  document.addEventListener("webkitfullscreenchange", this.onFullScreenListener);
  document.addEventListener("msfullscreenchange", this.onFullScreenListener);
}

unbindDocumentListeners() {
  document.removeEventListener("fullscreenchange", this.onFullScreenListener);
  document.removeEventListener("mozfullscreenchange", this.onFullScreenListener);
  document.removeEventListener("webkitfullscreenchange", this.onFullScreenListener);
  document.removeEventListener("msfullscreenchange", this.onFullScreenListener);
  this.onFullScreenListener = null;
}

ngOnDestroy() {
  this.unbindDocumentListeners();
}

galleriaClass() {
  return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
}

fullScreenIcon() {
  return ` ${this.fullscreen ? 'assets/images/hide.svg' : 'assets/images/expand.svg'}`;
}

  ngOnInit(){
    this.bindDocumentListeners();
  }

  imagesLoaded(event: any): void { }
  
  
  max = 3;
  showButton = false;
  closeResult = '';
  @ViewChild('frame') frame: ModalDirective;
  // Get the template elements
   formElement : HTMLElement;

  next = function (event: Event, form, form2, form3) {
    this.submittedForm = true;
    if((form.valid && this.active == 0) || ( form2.valid && this.active == 1) || (form3.valid && this.active == 2)) {
      console.log('form valid')
      this.active++;
      this.ngWizardService.next();
      this.showButton = true;
      if (this.active > this.max) this.active = this.max;
      
      this.activeItem = this.images[this.active];
      if (this.active == 3) {
        this.frame.show();
      }
      this.submittedForm = false;
    }
    else {
      console.log('form not valid')
    } 
  }

  privous = function (event?: Event) {
    this.active--;
    this.ngWizardService.previous();
    if (this.active < 0) this.active = 0;
    this.activeItem = this.images[this.active];
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
    this.frame.hide()
    this.activeItem = this.images[0];
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }

}
