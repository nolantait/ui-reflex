import t from"@rails/ujs";import e from"sortablejs";import{useHover as s,useClickOutside as o}from"stimulus-use";import{Controller as n}from"stimulus";var i=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.connect=function(){switch(this.modeValue){case"click":o(this);break;case"hover":s(this)}this.expandedValue?this._expand():this._collapse()},e.prototype.toggle=function(t){this.expandedValue=!this.expandedValue},e.prototype.expandedValueChanged=function(){this.expandedValue?this._expand():this._collapse()},e.prototype.clickOutside=function(t){this.expandedValue=!1},e.prototype.mouseEnter=function(){this.expandedValue=!0},e.prototype.mouseLeave=function(){this.expandedValue=!1},e.prototype._expand=function(){this.element.setAttribute("aria-expanded","true"),this.expandableTarget.classList.remove(this.hiddenClass)},e.prototype._collapse=function(){this.element.setAttribute("aria-expanded","false"),this.expandableTarget.classList.add(this.hiddenClass)},e}(n);i.classes=["hidden"],i.targets=["expandable"],i.values={expanded:Boolean,mode:String};var a=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.connect=function(){this._hideWindows()},e.prototype.windowPositionValueChanged=function(){this._hideWindows()},e.prototype.next=function(t){this.windowPositionValue+=1},e.prototype.previous=function(t){this.windowPositionValue-=1},e.prototype._hideWindows=function(){var t=this;this.windowsTargets.forEach(function(e){parseInt(e.dataset.position)===t.windowPositionValue?e.classList.remove(t.hiddenClass):e.classList.add(t.hiddenClass)})},e}(n);a.classes=["hidden"],a.targets=["windows"],a.values={windowPosition:Number};var r=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.connect=function(){this._onChange()},e.prototype.stepPositionValueChanged=function(){this._onChange()},e.prototype.next=function(){this.stepPositionValue+=1},e.prototype.previous=function(){this.stepPositionValue-=1},e.prototype._onChange=function(){this._showCurrentContent(),this._toggleControls(),this._toggleCurrentStep()},e.prototype._toggleCurrentStep=function(){var t=this;this.stepTargets.forEach(function(e){t._position(e)===t.stepPositionValue?e.classList.add(t.currentStepClass):e.classList.remove(t.currentStepClass)})},e.prototype._toggleControls=function(){this._is_last_step()?(this.nextTarget.classList.add(this.hiddenClass),this.finishTarget.classList.remove(this.hiddenClass)):(this.finishTarget.classList.add(this.hiddenClass),this.nextTarget.classList.remove(this.hiddenClass)),this._is_past_steps()?this.previousTarget.classList.remove(this.hiddenClass):this.previousTarget.classList.add(this.hiddenClass)},e.prototype._is_past_steps=function(){return this.stepPositionValue>1},e.prototype._is_last_step=function(){return this.stepPositionValue===this.contentTargets.length},e.prototype._showCurrentContent=function(t){var e=this;this.contentTargets.forEach(function(t){e._position(t)===e.stepPositionValue?t.classList.remove(e.hiddenClass):t.classList.add(e.hiddenClass)})},e.prototype._position=function(t){return parseInt(t.dataset.position)},e}(n);r.classes=["hidden","currentStep"],r.targets=["step","content","next","previous","finish"],r.values={stepPosition:Number};var p=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.select=function(t){var e=t.target.value,s=new Set(this.selectedValue);s.has(e)?this._delete(s,e):this._add(s,e),this._setSelectedWithSet(s)},e.prototype.selectAll=function(t){var e=this._selectedInputs(),s=this._unselectedInputs();this._is_all_checked()?this._unselect(e):this._select(s)},e.prototype.selectedValueChanged=function(){this._setSelected()},e.prototype._select=function(t){var e=this,s=new Set(this.selectedValue);t.map(function(t){return t.value}).forEach(function(t){e._add(s,t)}),this._setSelectedWithSet(s)},e.prototype._unselect=function(t){var e=this,s=new Set(this.selectedValue);t.map(function(t){return t.value}).forEach(function(t){e._delete(s,t)}),this._setSelectedWithSet(s)},e.prototype._setSelected=function(){var t=this;this.inputTargets.forEach(function(e){e.checked=t.selectedValue.includes(e.value)}),this.hasSelectAllTarget&&(this.selectAllTarget.checked=this._is_all_checked())},e.prototype._is_all_checked=function(){return this._selectedInputs().length===this.inputTargets.length},e.prototype._selectedInputs=function(){return this.inputTargets.filter(function(t){return t.checked})},e.prototype._unselectedInputs=function(){return this.inputTargets.filter(function(t){return!t.checked})},e.prototype._setSelectedWithSet=function(t){this.selectedValue=Array.from(t)},e.prototype._delete=function(t,e){t.delete(e)},e.prototype._add=function(t,e){"one"===this.typeValue&&t.clear(),t.add(e)},e}(n);p.targets=["input","selectAll"],p.values={selected:Array,type:String};var c=function(s){function o(){s.apply(this,arguments)}s&&(o.__proto__=s),(o.prototype=Object.create(s&&s.prototype)).constructor=o;var n={options:{configurable:!0}};return o.prototype.initialize=function(){this.onDragEnd=this.onDragEnd.bind(this)},o.prototype.connect=function(){this.sortable=new e(this.element,Object.assign({},this.options))},o.prototype.disconnect=function(){this.sortable.destroy(),this.sortable=void 0},o.prototype.onDragEnd=function(e){var s=new FormData;s.append(this.inputNameValue,this.sortable.toArray()),t.ajax({url:this.updateUrlValue,type:"PATCH",data:s})},n.options.get=function(){return{animation:150,handle:"."+this.handleClass,onEnd:this.onDragEnd}},Object.defineProperties(o.prototype,n),o}(n);c.classes=["handle"],c.values={inputName:String,updateUrl:String};var l=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.connect=function(){this._handleCollapsedState()},e.prototype.toggle=function(){this.collapsedValue=!this.collapsedValue},e.prototype.collapsedValueChanged=function(){this._handleCollapsedState()},e.prototype._handleCollapsedState=function(){this.collapsedValue?this._collapse():this._expand()},e.prototype._collapse=function(){this.contentTarget.classList.add(this.hiddenClass),this.iconTarget.classList.add(this.collapsedClass)},e.prototype._expand=function(){this.contentTarget.classList.remove(this.hiddenClass),this.iconTarget.classList.remove(this.collapsedClass)},e}(n);l.targets=["content","icon"],l.classes=["hidden","collapsed"],l.values={collapsed:Boolean};var d=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.connect=function(){switch(o(this),this.modeValue){case"click":break;case"hover":s(this)}},e.prototype.toggle=function(t){this.expandedValue=!this.expandedValue},e.prototype.expandedValueChanged=function(){this.expandedValue?this._expand():this._collapse()},e.prototype.clickOutside=function(t){this.expandedValue=!1},e.prototype.mouseEnter=function(){this.expandedValue=!0},e.prototype.mouseLeave=function(){this.expandedValue=!1},e.prototype._expand=function(){this.element.setAttribute("aria-expanded","true"),this.contentTarget.classList.remove(this.hiddenClass)},e.prototype._collapse=function(){this.element.setAttribute("aria-expanded","false"),this.contentTarget.classList.add(this.hiddenClass)},e}(n);d.targets=["content"],d.classes=["hidden"],d.values={mode:String,expanded:Boolean};var u=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.toggle=function(t){this.element.classList.add(this.hiddenClass)},e}(n);u.classes=["hidden"];export{i as Dropdown,a as Pagination,r as Wizard,p as Selectable,c as Sortable,l as Collapsable,d as Tooltip,u as Notification};
//# sourceMappingURL=organism-reflex.esm.mjs.map
