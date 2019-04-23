import { Component, ViewChild, OnInit, Renderer, Input } from "@angular/core";

@Component({
  selector: "accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"]
})
export class AccordionComponent implements OnInit {
  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  @Input("title") title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer) {}

  ngOnInit() {
    this.cardContent.el.transition = "max-height 500ms, padding 500ms";
    this.renderer.setElementStyle(
      this.cardContent.el,
      "webkitTransition",
      "max-height 500ms, padding 500ms"
    );
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "500px");
      this.renderer.setElementStyle(
        this.cardContent.el,
        "padding",
        "13px 16px"
      );
    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }
}
