"use strict";



define('gsoc-prep-tasks/adapters/application', ['exports', 'ember', 'active-model-adapter'], function (exports, _ember, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: 'https://api.github.com/search',
    defaults: {
      sort: 'created',
      order: 'desc',
      q: 'state:open'
    },
    query: function query(store, type, _query) {
      var q = _query.q || '';
      if (!q.match(this.defaults.q || '')) {
        _query.q = q + (' ' + this.defaults.q);
      }
      return this._super(store, type, _ember['default'].assign({}, this.defaults, _query));
    }
  });
});
define('gsoc-prep-tasks/app', ['exports', 'ember', 'gsoc-prep-tasks/resolver', 'ember-load-initializers', 'gsoc-prep-tasks/config/environment'], function (exports, _ember, _gsocPrepTasksResolver, _emberLoadInitializers, _gsocPrepTasksConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _gsocPrepTasksConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _gsocPrepTasksConfigEnvironment['default'].podModulePrefix,
    Resolver: _gsocPrepTasksResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _gsocPrepTasksConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('gsoc-prep-tasks/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _emberBasicDropdownComponentsBasicDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdown['default'];
    }
  });
});
define('gsoc-prep-tasks/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _emberBasicDropdownComponentsBasicDropdownContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownContent['default'];
    }
  });
});
define('gsoc-prep-tasks/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _emberBasicDropdownComponentsBasicDropdownTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownTrigger['default'];
    }
  });
});
define('gsoc-prep-tasks/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('gsoc-prep-tasks/components/md-dummy', ['exports', 'ember-remarkable/components/md-dummy'], function (exports, _emberRemarkableComponentsMdDummy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRemarkableComponentsMdDummy['default'];
    }
  });
});
define('gsoc-prep-tasks/components/md-text', ['exports', 'ember-remarkable/components/md-text'], function (exports, _emberRemarkableComponentsMdText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRemarkableComponentsMdText['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-autocomplete-content', ['exports', 'ember-paper/components/paper-autocomplete-content'], function (exports, _emberPaperComponentsPaperAutocompleteContent) {
  exports['default'] = _emberPaperComponentsPaperAutocompleteContent['default'];
});
define('gsoc-prep-tasks/components/paper-autocomplete-dropdown', ['exports', 'ember-paper/components/paper-autocomplete-dropdown'], function (exports, _emberPaperComponentsPaperAutocompleteDropdown) {
  exports['default'] = _emberPaperComponentsPaperAutocompleteDropdown['default'];
});
define('gsoc-prep-tasks/components/paper-autocomplete-highlight', ['exports', 'ember-paper/components/paper-autocomplete-highlight'], function (exports, _emberPaperComponentsPaperAutocompleteHighlight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocompleteHighlight['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-autocomplete-options', ['exports', 'ember-paper/components/paper-autocomplete-options'], function (exports, _emberPaperComponentsPaperAutocompleteOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocompleteOptions['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-autocomplete-trigger-container', ['exports', 'ember-paper/components/paper-autocomplete-trigger-container'], function (exports, _emberPaperComponentsPaperAutocompleteTriggerContainer) {
  exports['default'] = _emberPaperComponentsPaperAutocompleteTriggerContainer['default'];
});
define('gsoc-prep-tasks/components/paper-autocomplete-trigger', ['exports', 'ember-paper/components/paper-autocomplete-trigger'], function (exports, _emberPaperComponentsPaperAutocompleteTrigger) {
  exports['default'] = _emberPaperComponentsPaperAutocompleteTrigger['default'];
});
define('gsoc-prep-tasks/components/paper-autocomplete', ['exports', 'ember-paper/components/paper-autocomplete'], function (exports, _emberPaperComponentsPaperAutocomplete) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocomplete['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-backdrop', ['exports', 'ember-paper/components/paper-backdrop'], function (exports, _emberPaperComponentsPaperBackdrop) {
  exports['default'] = _emberPaperComponentsPaperBackdrop['default'];
});
define('gsoc-prep-tasks/components/paper-button', ['exports', 'ember-paper/components/paper-button'], function (exports, _emberPaperComponentsPaperButton) {
  exports['default'] = _emberPaperComponentsPaperButton['default'];
});
define('gsoc-prep-tasks/components/paper-card-actions', ['exports', 'ember-paper/components/paper-card-actions'], function (exports, _emberPaperComponentsPaperCardActions) {
  exports['default'] = _emberPaperComponentsPaperCardActions['default'];
});
define('gsoc-prep-tasks/components/paper-card-avatar', ['exports', 'ember-paper/components/paper-card-avatar'], function (exports, _emberPaperComponentsPaperCardAvatar) {
  exports['default'] = _emberPaperComponentsPaperCardAvatar['default'];
});
define('gsoc-prep-tasks/components/paper-card-content', ['exports', 'ember-paper/components/paper-card-content'], function (exports, _emberPaperComponentsPaperCardContent) {
  exports['default'] = _emberPaperComponentsPaperCardContent['default'];
});
define('gsoc-prep-tasks/components/paper-card-header-headline', ['exports', 'ember-paper/components/paper-card-header-headline'], function (exports, _emberPaperComponentsPaperCardHeaderHeadline) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderHeadline['default'];
});
define('gsoc-prep-tasks/components/paper-card-header-subhead', ['exports', 'ember-paper/components/paper-card-header-subhead'], function (exports, _emberPaperComponentsPaperCardHeaderSubhead) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderSubhead['default'];
});
define('gsoc-prep-tasks/components/paper-card-header-text', ['exports', 'ember-paper/components/paper-card-header-text'], function (exports, _emberPaperComponentsPaperCardHeaderText) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderText['default'];
});
define('gsoc-prep-tasks/components/paper-card-header-title', ['exports', 'ember-paper/components/paper-card-header-title'], function (exports, _emberPaperComponentsPaperCardHeaderTitle) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderTitle['default'];
});
define('gsoc-prep-tasks/components/paper-card-header', ['exports', 'ember-paper/components/paper-card-header'], function (exports, _emberPaperComponentsPaperCardHeader) {
  exports['default'] = _emberPaperComponentsPaperCardHeader['default'];
});
define('gsoc-prep-tasks/components/paper-card-icon-actions', ['exports', 'ember-paper/components/paper-card-icon-actions'], function (exports, _emberPaperComponentsPaperCardIconActions) {
  exports['default'] = _emberPaperComponentsPaperCardIconActions['default'];
});
define('gsoc-prep-tasks/components/paper-card-image', ['exports', 'ember-paper/components/paper-card-image'], function (exports, _emberPaperComponentsPaperCardImage) {
  exports['default'] = _emberPaperComponentsPaperCardImage['default'];
});
define('gsoc-prep-tasks/components/paper-card-media', ['exports', 'ember-paper/components/paper-card-media'], function (exports, _emberPaperComponentsPaperCardMedia) {
  exports['default'] = _emberPaperComponentsPaperCardMedia['default'];
});
define('gsoc-prep-tasks/components/paper-card-title-media', ['exports', 'ember-paper/components/paper-card-title-media'], function (exports, _emberPaperComponentsPaperCardTitleMedia) {
  exports['default'] = _emberPaperComponentsPaperCardTitleMedia['default'];
});
define('gsoc-prep-tasks/components/paper-card-title-text', ['exports', 'ember-paper/components/paper-card-title-text'], function (exports, _emberPaperComponentsPaperCardTitleText) {
  exports['default'] = _emberPaperComponentsPaperCardTitleText['default'];
});
define('gsoc-prep-tasks/components/paper-card-title', ['exports', 'ember-paper/components/paper-card-title'], function (exports, _emberPaperComponentsPaperCardTitle) {
  exports['default'] = _emberPaperComponentsPaperCardTitle['default'];
});
define('gsoc-prep-tasks/components/paper-card', ['exports', 'ember-paper/components/paper-card'], function (exports, _emberPaperComponentsPaperCard) {
  exports['default'] = _emberPaperComponentsPaperCard['default'];
});
define('gsoc-prep-tasks/components/paper-checkbox', ['exports', 'ember-paper/components/paper-checkbox'], function (exports, _emberPaperComponentsPaperCheckbox) {
  exports['default'] = _emberPaperComponentsPaperCheckbox['default'];
});
define('gsoc-prep-tasks/components/paper-chips', ['exports', 'ember-paper/components/paper-chips'], function (exports, _emberPaperComponentsPaperChips) {
  exports['default'] = _emberPaperComponentsPaperChips['default'];
});
define('gsoc-prep-tasks/components/paper-contact-chips', ['exports', 'ember-paper/components/paper-contact-chips'], function (exports, _emberPaperComponentsPaperContactChips) {
  exports['default'] = _emberPaperComponentsPaperContactChips['default'];
});
define('gsoc-prep-tasks/components/paper-content', ['exports', 'ember-paper/components/paper-content'], function (exports, _emberPaperComponentsPaperContent) {
  exports['default'] = _emberPaperComponentsPaperContent['default'];
});
define('gsoc-prep-tasks/components/paper-dialog-actions', ['exports', 'ember-paper/components/paper-dialog-actions'], function (exports, _emberPaperComponentsPaperDialogActions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogActions['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-dialog-container', ['exports', 'ember-paper/components/paper-dialog-container'], function (exports, _emberPaperComponentsPaperDialogContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogContainer['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-dialog-content', ['exports', 'ember-paper/components/paper-dialog-content'], function (exports, _emberPaperComponentsPaperDialogContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogContent['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-dialog-inner', ['exports', 'ember-paper/components/paper-dialog-inner'], function (exports, _emberPaperComponentsPaperDialogInner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogInner['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-dialog', ['exports', 'ember-paper/components/paper-dialog'], function (exports, _emberPaperComponentsPaperDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialog['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-divider', ['exports', 'ember-paper/components/paper-divider'], function (exports, _emberPaperComponentsPaperDivider) {
  exports['default'] = _emberPaperComponentsPaperDivider['default'];
});
define('gsoc-prep-tasks/components/paper-form', ['exports', 'ember-paper/components/paper-form'], function (exports, _emberPaperComponentsPaperForm) {
  exports['default'] = _emberPaperComponentsPaperForm['default'];
});
define('gsoc-prep-tasks/components/paper-grid-list', ['exports', 'ember-paper/components/paper-grid-list'], function (exports, _emberPaperComponentsPaperGridList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridList['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-grid-tile-footer', ['exports', 'ember-paper/components/paper-grid-tile-footer'], function (exports, _emberPaperComponentsPaperGridTileFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridTileFooter['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-grid-tile', ['exports', 'ember-paper/components/paper-grid-tile'], function (exports, _emberPaperComponentsPaperGridTile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridTile['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-icon', ['exports', 'ember-paper/components/paper-icon'], function (exports, _emberPaperComponentsPaperIcon) {
  exports['default'] = _emberPaperComponentsPaperIcon['default'];
});
define('gsoc-prep-tasks/components/paper-input', ['exports', 'ember-paper/components/paper-input'], function (exports, _emberPaperComponentsPaperInput) {
  exports['default'] = _emberPaperComponentsPaperInput['default'];
});
define('gsoc-prep-tasks/components/paper-item', ['exports', 'ember-paper/components/paper-item'], function (exports, _emberPaperComponentsPaperItem) {
  exports['default'] = _emberPaperComponentsPaperItem['default'];
});
define('gsoc-prep-tasks/components/paper-list', ['exports', 'ember-paper/components/paper-list'], function (exports, _emberPaperComponentsPaperList) {
  exports['default'] = _emberPaperComponentsPaperList['default'];
});
define('gsoc-prep-tasks/components/paper-menu-content-inner', ['exports', 'ember-paper/components/paper-menu-content-inner'], function (exports, _emberPaperComponentsPaperMenuContentInner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContentInner['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-menu-content', ['exports', 'ember-paper/components/paper-menu-content'], function (exports, _emberPaperComponentsPaperMenuContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContent['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-menu-item', ['exports', 'ember-paper/components/paper-menu-item'], function (exports, _emberPaperComponentsPaperMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuItem['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-menu', ['exports', 'ember-paper/components/paper-menu'], function (exports, _emberPaperComponentsPaperMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenu['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-optgroup', ['exports', 'ember-paper/components/paper-optgroup'], function (exports, _emberPaperComponentsPaperOptgroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperOptgroup['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-option', ['exports', 'ember-paper/components/paper-option'], function (exports, _emberPaperComponentsPaperOption) {
  exports['default'] = _emberPaperComponentsPaperOption['default'];
});
define('gsoc-prep-tasks/components/paper-progress-circular', ['exports', 'ember-paper/components/paper-progress-circular'], function (exports, _emberPaperComponentsPaperProgressCircular) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperProgressCircular['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-progress-linear', ['exports', 'ember-paper/components/paper-progress-linear'], function (exports, _emberPaperComponentsPaperProgressLinear) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperProgressLinear['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-radio-group', ['exports', 'ember-paper/components/paper-radio-group'], function (exports, _emberPaperComponentsPaperRadioGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperRadioGroup['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-radio-proxiable', ['exports', 'ember-paper/components/paper-radio-proxiable'], function (exports, _emberPaperComponentsPaperRadioProxiable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperRadioProxiable['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-radio', ['exports', 'ember-paper/components/paper-radio'], function (exports, _emberPaperComponentsPaperRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperRadio['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-reset-button', ['exports', 'ember-paper/components/paper-reset-button'], function (exports, _emberPaperComponentsPaperResetButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperResetButton['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-select-content', ['exports', 'ember-paper/components/paper-select-content'], function (exports, _emberPaperComponentsPaperSelectContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectContent['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-select-header', ['exports', 'ember-paper/components/paper-select-header'], function (exports, _emberPaperComponentsPaperSelectHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectHeader['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-select-menu-inner', ['exports', 'ember-paper/components/paper-select-menu-inner'], function (exports, _emberPaperComponentsPaperSelectMenuInner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectMenuInner['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-select-menu-trigger', ['exports', 'ember-paper/components/paper-select-menu-trigger'], function (exports, _emberPaperComponentsPaperSelectMenuTrigger) {
  exports['default'] = _emberPaperComponentsPaperSelectMenuTrigger['default'];
});
define('gsoc-prep-tasks/components/paper-select-menu', ['exports', 'ember-paper/components/paper-select-menu'], function (exports, _emberPaperComponentsPaperSelectMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectMenu['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-select-options', ['exports', 'ember-paper/components/paper-select-options'], function (exports, _emberPaperComponentsPaperSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectOptions['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-select-search', ['exports', 'ember-paper/components/paper-select-search'], function (exports, _emberPaperComponentsPaperSelectSearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectSearch['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-select-trigger', ['exports', 'ember-paper/components/paper-select-trigger'], function (exports, _emberPaperComponentsPaperSelectTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectTrigger['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-select', ['exports', 'ember-paper/components/paper-select'], function (exports, _emberPaperComponentsPaperSelect) {
  exports['default'] = _emberPaperComponentsPaperSelect['default'];
});
define('gsoc-prep-tasks/components/paper-sidenav-container', ['exports', 'ember-paper/components/paper-sidenav-container'], function (exports, _emberPaperComponentsPaperSidenavContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSidenavContainer['default'];
    }
  });
});
define('gsoc-prep-tasks/components/paper-sidenav-inner', ['exports', 'ember-paper/components/paper-sidenav-inner'], function (exports, _emberPaperComponentsPaperSidenavInner) {
  exports['default'] = _emberPaperComponentsPaperSidenavInner['default'];
});
define('gsoc-prep-tasks/components/paper-sidenav-toggle', ['exports', 'ember-paper/components/paper-sidenav-toggle'], function (exports, _emberPaperComponentsPaperSidenavToggle) {
  exports['default'] = _emberPaperComponentsPaperSidenavToggle['default'];
});
define('gsoc-prep-tasks/components/paper-sidenav', ['exports', 'ember-paper/components/paper-sidenav'], function (exports, _emberPaperComponentsPaperSidenav) {
  exports['default'] = _emberPaperComponentsPaperSidenav['default'];
});
define('gsoc-prep-tasks/components/paper-slider', ['exports', 'ember-paper/components/paper-slider'], function (exports, _emberPaperComponentsPaperSlider) {
  exports['default'] = _emberPaperComponentsPaperSlider['default'];
});
define('gsoc-prep-tasks/components/paper-subheader', ['exports', 'ember-paper/components/paper-subheader'], function (exports, _emberPaperComponentsPaperSubheader) {
  exports['default'] = _emberPaperComponentsPaperSubheader['default'];
});
define('gsoc-prep-tasks/components/paper-switch', ['exports', 'ember-paper/components/paper-switch'], function (exports, _emberPaperComponentsPaperSwitch) {
  exports['default'] = _emberPaperComponentsPaperSwitch['default'];
});
define('gsoc-prep-tasks/components/paper-toolbar-tools', ['exports', 'ember-paper/components/paper-toolbar-tools'], function (exports, _emberPaperComponentsPaperToolbarTools) {
  exports['default'] = _emberPaperComponentsPaperToolbarTools['default'];
});
define('gsoc-prep-tasks/components/paper-toolbar', ['exports', 'ember-paper/components/paper-toolbar'], function (exports, _emberPaperComponentsPaperToolbar) {
  exports['default'] = _emberPaperComponentsPaperToolbar['default'];
});
define('gsoc-prep-tasks/components/paper-virtual-repeat-scroller', ['exports', 'ember-paper/components/paper-virtual-repeat-scroller'], function (exports, _emberPaperComponentsPaperVirtualRepeatScroller) {
  exports['default'] = _emberPaperComponentsPaperVirtualRepeatScroller['default'];
});
define('gsoc-prep-tasks/components/paper-virtual-repeat', ['exports', 'ember-paper/components/paper-virtual-repeat'], function (exports, _emberPaperComponentsPaperVirtualRepeat) {
  exports['default'] = _emberPaperComponentsPaperVirtualRepeat['default'];
});
define('gsoc-prep-tasks/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _emberPowerSelectComponentsPowerSelectMultiple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultiple['default'];
    }
  });
});
define('gsoc-prep-tasks/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleTrigger['default'];
    }
  });
});
define('gsoc-prep-tasks/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _emberPowerSelectComponentsPowerSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelect['default'];
    }
  });
});
define('gsoc-prep-tasks/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _emberPowerSelectComponentsPowerSelectBeforeOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectBeforeOptions['default'];
    }
  });
});
define('gsoc-prep-tasks/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _emberPowerSelectComponentsPowerSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectOptions['default'];
    }
  });
});
define('gsoc-prep-tasks/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _emberPowerSelectComponentsPowerSelectSearchMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectSearchMessage['default'];
    }
  });
});
define('gsoc-prep-tasks/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectTrigger['default'];
    }
  });
});
define('gsoc-prep-tasks/components/search-card', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      searchIssues: function searchIssues(query) {
        this.get('onSearch')(query);
      }
    },

    owner: _ember['default'].computed(function () {
      return _ember['default'].getOwner(this);
    }),

    searchParams: _ember['default'].computed('params.q', function () {
      return this.get('owner').lookup('router:main').router.state.queryParams['q'];
    })
  });
});
define('gsoc-prep-tasks/components/transition-group', ['exports', 'ember-css-transitions/components/transition-group'], function (exports, _emberCssTransitionsComponentsTransitionGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssTransitionsComponentsTransitionGroup['default'];
    }
  });
});
define('gsoc-prep-tasks/components/virtual-each', ['exports', 'virtual-each/components/virtual-each/component'], function (exports, _virtualEachComponentsVirtualEachComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _virtualEachComponentsVirtualEachComponent['default'];
    }
  });
});
define('gsoc-prep-tasks/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('gsoc-prep-tasks/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      searchIssues: function searchIssues(query) {
        this.transitionToRoute('issues', { queryParams: { q: query } });
      }
    }
  });
});
define('gsoc-prep-tasks/helpers/-paper-underscore', ['exports', 'ember-paper/helpers/underscore'], function (exports, _emberPaperHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberPaperHelpersUnderscore.underscore;
    }
  });
});
define('gsoc-prep-tasks/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('gsoc-prep-tasks/helpers/app-version', ['exports', 'ember', 'gsoc-prep-tasks/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _gsocPrepTasksConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _gsocPrepTasksConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('gsoc-prep-tasks/helpers/cancel-all', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.cancelHelper = cancelHelper;

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      _ember['default'].assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _emberConcurrencyHelpers.taskHelperClosure)('cancelAll', args);
  }

  exports['default'] = _ember['default'].Helper.helper(cancelHelper);
});
define('gsoc-prep-tasks/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectHelpersEmberPowerSelectIsGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsGroup['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('gsoc-prep-tasks/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectHelpersEmberPowerSelectIsSelected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('gsoc-prep-tasks/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('gsoc-prep-tasks/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('gsoc-prep-tasks/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('gsoc-prep-tasks/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('gsoc-prep-tasks/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('gsoc-prep-tasks/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('gsoc-prep-tasks/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('gsoc-prep-tasks/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('gsoc-prep-tasks/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('gsoc-prep-tasks/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('gsoc-prep-tasks/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('gsoc-prep-tasks/helpers/perform', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.performHelper = performHelper;

  function performHelper(args, hash) {
    return (0, _emberConcurrencyHelpers.taskHelperClosure)('perform', args, hash);
  }

  exports['default'] = _ember['default'].Helper.helper(performHelper);
});
define('gsoc-prep-tasks/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('gsoc-prep-tasks/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('gsoc-prep-tasks/helpers/task', ['exports', 'ember'], function (exports, _ember) {
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref);

    var task = _ref2[0];

    var args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports['default'] = _ember['default'].Helper.helper(taskHelper);
});
define('gsoc-prep-tasks/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define("gsoc-prep-tasks/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('gsoc-prep-tasks/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'gsoc-prep-tasks/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _gsocPrepTasksConfigEnvironment) {
  var _config$APP = _gsocPrepTasksConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('gsoc-prep-tasks/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('gsoc-prep-tasks/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('gsoc-prep-tasks/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports, _emberConcurrency) {
  exports['default'] = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('gsoc-prep-tasks/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('gsoc-prep-tasks/initializers/export-application-global', ['exports', 'ember', 'gsoc-prep-tasks/config/environment'], function (exports, _ember, _gsocPrepTasksConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_gsocPrepTasksConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _gsocPrepTasksConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_gsocPrepTasksConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('gsoc-prep-tasks/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('gsoc-prep-tasks/initializers/paper-wormhole', ['exports', 'ember-paper/initializers/paper-wormhole'], function (exports, _emberPaperInitializersPaperWormhole) {
  exports['default'] = {
    name: 'paper-wormhole',
    initialize: _emberPaperInitializersPaperWormhole['default']
  };
});
define('gsoc-prep-tasks/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('gsoc-prep-tasks/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('gsoc-prep-tasks/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("gsoc-prep-tasks/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('gsoc-prep-tasks/mixins/transition-mixin', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _emberCssTransitionsMixinsTransitionMixin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssTransitionsMixinsTransitionMixin['default'];
    }
  });
});
define('gsoc-prep-tasks/models/issue', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].Model.extend({
    url: _emberData['default'].attr(),
    repository_url: _emberData['default'].attr(),
    labels_url: _emberData['default'].attr(),
    comments_url: _emberData['default'].attr(),
    events_url: _emberData['default'].attr(),
    html_url: _emberData['default'].attr(),
    number: _emberData['default'].attr(),
    title: _emberData['default'].attr(),
    state: _emberData['default'].attr(),
    locked: _emberData['default'].attr(),
    assignee: _emberData['default'].attr(),
    milestone: _emberData['default'].attr(),
    comments: _emberData['default'].attr(),
    created_at: _emberData['default'].attr(),
    updated_at: _emberData['default'].attr(),
    closed_at: _emberData['default'].attr(),
    body: _emberData['default'].attr(),
    score: _emberData['default'].attr(),
    pullRequest: _emberData['default'].attr(),

    summary: _ember['default'].computed('body', function () {
      return this.get('body').slice(0, 30);
    })
  });
});
define('gsoc-prep-tasks/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
define('gsoc-prep-tasks/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('gsoc-prep-tasks/router', ['exports', 'ember', 'gsoc-prep-tasks/config/environment'], function (exports, _ember, _gsocPrepTasksConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _gsocPrepTasksConfigEnvironment['default'].locationType,
    rootURL: _gsocPrepTasksConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('issues', function () {
      this.route('issue', { path: "/post/:issue_id" });
    });
  });

  exports['default'] = Router;
});
define('gsoc-prep-tasks/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      searchIssues: function searchIssues(query) {
        this.transitionTo('issues', { queryParams: { q: query } });
      }
    },
    model: function model(params) {
      return params;
    }
  });
});
define('gsoc-prep-tasks/routes/issues', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    queryParams: {
      q: {
        refreshModel: true
      }
    },
    afterModel: function afterModel(model) {
      return model.reload;
    },
    model: function model(params) {
      return this.issueOnly(this.store.query('issue', params));
    },
    issueOnly: function issueOnly(model) {
      return model.then(function (issues) {
        return issues.filter(function (issue) {
          return !issue.get('pullRequest');
        });
      });
    }
  });
});
define('gsoc-prep-tasks/routes/issues/issue', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('gsoc-prep-tasks/serializers/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({});
});
define('gsoc-prep-tasks/serializers/issue', ['exports', 'gsoc-prep-tasks/serializers/application'], function (exports, _gsocPrepTasksSerializersApplication) {
  exports['default'] = _gsocPrepTasksSerializersApplication['default'].extend({
    normalizeArrayResponse: function normalizeArrayResponse(store, primaryModelClass, payload) {
      payload['issue'] = payload.items;
      return this._super.apply(this, arguments);
    }
  });
});
define('gsoc-prep-tasks/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('gsoc-prep-tasks/services/constants', ['exports', 'ember'], function (exports, _ember) {
  var Service = _ember['default'].Service;
  var inject = _ember['default'].inject;
  var computed = _ember['default'].computed;
  var EObject = _ember['default'].Object;
  exports['default'] = Service.extend({

    sniffer: inject.service('sniffer'),

    webkit: computed(function () {
      return (/webkit/i.test(this.get('sniffer.vendorPrefix'))
      );
    }),

    vendorProperty: function vendorProperty(name) {
      var prefix = this.get('sniffer.vendorPrefix').toLowerCase();
      return this.get('webkit') ? '-webkit-' + name.charAt(0) + name.substring(1) : name;
    },

    CSS: computed('webkit', function () {
      var webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: 'transitionend' + (webkit ? ' webkitTransitionEnd' : ''),
        ANIMATIONEND: 'animationend' + (webkit ? ' webkitAnimationEnd' : ''),

        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),

    KEYCODE: EObject.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),

    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },

    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });
});
define('gsoc-prep-tasks/services/paper-sidenav', ['exports', 'ember-paper/services/paper-sidenav'], function (exports, _emberPaperServicesPaperSidenav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperServicesPaperSidenav['default'];
    }
  });
});
define('gsoc-prep-tasks/services/sniffer', ['exports', 'ember'], function (exports, _ember) {
  var Service = _ember['default'].Service;
  var computed = _ember['default'].computed;

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var lowercase = function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  var toInt = function toInt(str) {
    return parseInt(str, 10);
  };

  exports['default'] = Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,

    android: computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init: function init() {
      this._super.apply(this, arguments);
      if (typeof FastBoot !== 'undefined') {
        return;
      }

      var _document = document;
      var _window = window;

      this.setProperties({
        _document: _document,
        _window: _window
      });

      var bodyStyle = _document.body && _document.body.style;
      var vendorPrefix = undefined;
      var vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

      var transitions = false;
      var animations = false;
      var match = undefined;

      if (bodyStyle) {
        for (var prop in bodyStyle) {
          if (match = vendorRegex.exec(prop)) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || vendorPrefix + 'Transition' in bodyStyle);
        animations = !!('animation' in bodyStyle || vendorPrefix + 'Animation' in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);

      this.set('vendorPrefix', vendorPrefix);
    }

  });
});
/* globals FastBoot */
define('gsoc-prep-tasks/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _emberTextMeasurerServicesTextMeasurer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTextMeasurerServicesTextMeasurer['default'];
    }
  });
});
define('gsoc-prep-tasks/services/util', ['exports', 'ember'], function (exports, _ember) {
  var Service = _ember['default'].Service;
  var $ = _ember['default'].$;

  var Util = Service.extend({

    // Disables scroll around the passed element.
    disableScrollAround: function disableScrollAround(element) {
      var util = this;
      var $document = $(window.document);

      util.disableScrollAround._count = util.disableScrollAround._count || 0;
      ++util.disableScrollAround._count;
      if (util.disableScrollAround._enableScrolling) {
        return util.disableScrollAround._enableScrolling;
      }

      var _$document$get = $document.get(0);

      var body = _$document$get.body;

      var restoreBody = disableBodyScroll();
      var restoreElement = disableElementScroll();

      return util.disableScrollAround._enableScrolling = function () {
        if (! --util.disableScrollAround._count) {
          restoreBody();
          restoreElement();
          delete util.disableScrollAround._enableScrolling;
        }
      };

      // Creates a virtual scrolling mask to absorb touchmove, keyboard, scrollbar clicking, and wheel events
      function disableElementScroll() {
        var zIndex = 50;
        var scrollMask = $('<div class="md-scroll-mask" style="z-index: ' + zIndex + '">\n          <div class="md-scroll-mask-bar"></div>\n        </div>');
        body.appendChild(scrollMask[0]);

        scrollMask.on('wheel', preventDefault);
        scrollMask.on('touchmove', preventDefault);
        $document.on('keydown', disableKeyNav);

        return function restoreScroll() {
          scrollMask.off('wheel');
          scrollMask.off('touchmove');
          scrollMask[0].parentNode.removeChild(scrollMask[0]);
          $document.off('keydown', disableKeyNav);
          delete util.disableScrollAround._enableScrolling;
        };

        // Prevent keypresses from elements inside the body
        // used to stop the keypresses that could cause the page to scroll
        // (arrow keys, spacebar, tab, etc).
        function disableKeyNav(e) {
          // -- temporarily removed this logic, will possibly re-add at a later date
          return;
          if (!element[0].contains(e.target)) {
            e.preventDefault();
            e.stopImmediatePropagation();
          }
        }

        function preventDefault(e) {
          e.preventDefault();
        }
      }

      // Converts the body to a position fixed block and translate it to the proper scroll
      // position
      function disableBodyScroll() {
        var htmlNode = body.parentNode;
        var restoreHtmlStyle = htmlNode.getAttribute('style') || '';
        var restoreBodyStyle = body.getAttribute('style') || '';
        var scrollOffset = body.scrollTop + body.parentElement.scrollTop;
        var clientWidth = body.clientWidth;

        if (body.scrollHeight > body.clientHeight) {
          applyStyles(body, {
            position: 'fixed',
            width: '100%',
            top: -scrollOffset + 'px'
          });

          applyStyles(htmlNode, {
            overflowY: 'scroll'
          });
        }

        if (body.clientWidth < clientWidth) {
          applyStyles(body, { overflow: 'hidden' });
        }

        return function restoreScroll() {
          body.setAttribute('style', restoreBodyStyle);
          htmlNode.setAttribute('style', restoreHtmlStyle);
          body.scrollTop = scrollOffset;
        };
      }

      function applyStyles(el, styles) {
        for (var key in styles) {
          el.style[key] = styles[key];
        }
      }
    },
    enableScrolling: function enableScrolling() {
      var method = this.disableScrollAround._enableScrolling;
      method && method();
    },

    /*
     * supplant() method from Crockford's `Remedial Javascript`
     * Equivalent to use of $interpolate; without dependency on
     * interpolation symbols and scope. Note: the '{<token>}' can
     * be property names, property chains, or array indices.
     */
    supplant: function supplant(template, values, pattern) {
      pattern = pattern || /\{([^\{\}]*)\}/g;
      return template.replace(pattern, function (a, b) {
        var p = b.split('.');
        var r = values;
        try {
          for (var s in p) {
            if (p.hasOwnProperty(s)) {
              r = r[p[s]];
            }
          }
        } catch (e) {
          r = a;
        }
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      });
    },
    nextTick: (function (window, prefixes, i, p, fnc) {
      while (!fnc && i < prefixes.length) {
        fnc = window[prefixes[i++] + 'equestAnimationFrame'];
      }
      return fnc && fnc.bind(window) || window.setImmediate || function (fnc) {
        window.setTimeout(fnc, 0);
      };
    })(window, 'r webkitR mozR msR oR'.split(' '), 0)

  });

  exports['default'] = Util;
});
define("gsoc-prep-tasks/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Rm7gDjup", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"layout-column\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"paper-toolbar\"],null,null,1],[\"text\",\"  \"],[\"append\",[\"helper\",[\"search-card\"],null,[[\"onSearch\",\"params\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"searchIssues\"],null],[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"hide-xs\"],[\"flush-element\"],[\"text\",\"GSOC Preparation Tasks\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"hide-gt-xs\"],[\"flush-element\"],[\"text\",\"GSOC Tasks\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"flex\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"paper-toolbar-tools\"],null,null,0]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "gsoc-prep-tasks/templates/application.hbs" } });
});
define("gsoc-prep-tasks/templates/components/search-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NtaCunwz", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"layout-column\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"searchIssues\",[\"get\",[\"searchParams\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"paper-card\"],null,null,3],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"Search\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"block\",[\"paper-button\"],null,[[\"warn\",\"raised\",\"type\"],[true,true,\"submit\"]],0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"type\",\"value\"],[\"Search\",\"text\",[\"get\",[\"searchParams\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"card\",\"content\"],null,[[\"class\"],[\"layout-column\"]],2],[\"block\",[\"card\",\"actions\"],null,[[\"class\"],[\"layout-column\"]],1]],\"locals\":[\"card\"]}],\"hasPartials\":false}", "meta": { "moduleName": "gsoc-prep-tasks/templates/components/search-card.hbs" } });
});
define("gsoc-prep-tasks/templates/components/transition-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vlwASIve", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "gsoc-prep-tasks/templates/components/transition-group.hbs" } });
});
define("gsoc-prep-tasks/templates/issues", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "WU7GXrkB", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"layout-align-center layout-row layout-wrap\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,5],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"append\",[\"helper\",[\"paper-icon\"],[\"check-circle\"],[[\"size\"],[18]]],false],[\"text\",\" Help It\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"paper-button\"],null,[[\"primary\",\"raised\",\"href\",\"target\"],[true,true,[\"get\",[\"issue\",\"html_url\"]],\"_blank\"]],0]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"append\",[\"unknown\",[\"issue\",\"summary\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"issue\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"card\",\"title\"],null,null,3],[\"block\",[\"card\",\"content\"],null,[[\"class\"],[\"layout-column\"]],2],[\"block\",[\"card\",\"actions\"],null,[[\"class\"],[\"layout-column\"]],1]],\"locals\":[\"card\"]},{\"statements\":[[\"block\",[\"paper-card\"],null,[[\"class\"],[\"flex-gt-sm-30 flex-grow flex-gt-xs-45\"]],4]],\"locals\":[\"issue\"]}],\"hasPartials\":false}", "meta": { "moduleName": "gsoc-prep-tasks/templates/issues.hbs" } });
});
define("gsoc-prep-tasks/templates/issues/issue", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Vmyv1mfp", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "gsoc-prep-tasks/templates/issues/issue.hbs" } });
});
define('gsoc-prep-tasks/utils/clamp', ['exports', 'ember-paper/utils/clamp'], function (exports, _emberPaperUtilsClamp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperUtilsClamp['default'];
    }
  });
});


define('gsoc-prep-tasks/config/environment', ['ember'], function(Ember) {
  var prefix = 'gsoc-prep-tasks';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("gsoc-prep-tasks/app")["default"].create({"name":"gsoc-prep-tasks","version":"0.0.0+cb07b852"});
}
//# sourceMappingURL=gsoc-prep-tasks.map
