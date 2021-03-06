'use strict';
let __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  let c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc);
  else for (let i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let __metadata = (this && this.__metadata) || function (k, v) {
  if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
};
let core_1 = require('@angular/core');
let OffClickDirective = (function () {
  function OffClickDirective() {
  }

    /* tslint:enable */
  OffClickDirective.prototype.onClick = function ($event) {
    $event.stopPropagation();
  };
  OffClickDirective.prototype.ngOnInit = function () {
    let _this = this;
    setTimeout(function () { document.addEventListener('click', _this.offClickHandler); }, 0);
  };
  OffClickDirective.prototype.ngOnDestroy = function () {
    document.removeEventListener('click', this.offClickHandler);
  };
  __decorate([
    core_1.Input('offClick'),
    __metadata('design:type', Object)
  ], OffClickDirective.prototype, 'offClickHandler', void 0);
  __decorate([
    core_1.HostListener('click', ['$event']),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [MouseEvent]),
    __metadata('design:returntype', void 0)
  ], OffClickDirective.prototype, 'onClick', null);
  OffClickDirective = __decorate([
    core_1.Directive({
      selector: '[offClick]'
    }),
    __metadata('design:paramtypes', [])
  ], OffClickDirective);
  return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;
