import {Directive, ElementRef, Renderer, Input} from "@angular/core";

@Directive({
    selector: '[color]'
})
export class ColorDirective{
    @Input() hello: string;

    constructor(private el: ElementRef, private renderer: Renderer){
        console.log();

        this.hello == 'undefined' ? this.hello = 'Hey there!' : this.hello;
        this.renderer.setElementStyle(this.el.nativeElement, "color", this.hello);
    }
}