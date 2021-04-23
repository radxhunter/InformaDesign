"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailComponent = void 0;
var core_1 = require("@angular/core");
var propertiesList_1 = require("src/app/helpers/propertiesList");
var elementAnimations_1 = require("src/app/animations/elementAnimations");
var gsap_1 = require("gsap");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, router, ui) {
        this.route = route;
        this.router = router;
        this.ui = ui;
        this.animationElement = elementAnimations_1.ANIMATION_ELEMENT;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initDetailAnimations();
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id = parseInt(params['id'], 10);
                _this.property = propertiesList_1.propertiesList.find(function (p) { return p.propertyId === _this.id; });
            }
        });
    };
    DetailComponent.prototype.initDetailAnimations = function () {
        gsap_1.gsap.from(this.back.nativeElement, {
            duration: 0.5,
            opacity: 0,
            x: -10,
            delay: 0.2
        });
        gsap_1.gsap.from(this.image.nativeElement, {
            duration: 0.5,
            opacity: 0,
            x: -15,
            delay: 0.4
        });
        gsap_1.gsap.from(this.info.nativeElement.childNodes, {
            duration: 0.5,
            opacity: 0,
            x: -15,
            stagger: 0.2,
            delay: 0.5
        });
        gsap_1.gsap.from(this.call.nativeElement, {
            duration: 0.5,
            opacity: 0,
            x: -15,
            delay: 0.7
        });
    };
    DetailComponent.prototype.ngAfterViewInit = function () {
        if (this.router.isActive(this.router.url, true)) {
            this.ui.openState.next('open');
        }
    };
    DetailComponent.prototype.goBack = function () {
        this.router.navigateByUrl('listings');
        this.ui.openState.next('closed');
    };
    DetailComponent.prototype.onNavigate = function (link) {
        if (this.router.url.startsWith('/listings') && link !== '/listings') {
            this.ui.openState.next('closed');
        }
        this.router.navigateByUrl(link);
        this.ui.openState.next('closed');
    };
    __decorate([
        core_1.HostBinding('@elementAnimations')
    ], DetailComponent.prototype, "id");
    __decorate([
        core_1.ViewChild('info', { static: true })
    ], DetailComponent.prototype, "info");
    __decorate([
        core_1.ViewChild('back', { static: true })
    ], DetailComponent.prototype, "back");
    __decorate([
        core_1.ViewChild('image', { static: true })
    ], DetailComponent.prototype, "image");
    __decorate([
        core_1.ViewChild('call', { static: true })
    ], DetailComponent.prototype, "call");
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'rl-detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.scss'],
            animations: [elementAnimations_1.elementAnimations]
        })
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
