import { dispatch, getState, subscribe } from '../store.js';

// Most of this is pulled from Polymer/pwa-helpers' connect mixin
const connect = (mapState, mapActions = {}) => baseElement => class extends baseElement {
  constructor() {
    super();

    this._actions = {};
    this._state = {};

    Object
      .entries(mapActions).forEach(([key, value]) => {
        this._actions[key] = (...args) => dispatch(value(...args));
      });
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }

    this.__storeUnsubscribe = subscribe(() => this.__stateChanged());
    this.__stateChanged();
  }

  disconnectedCallback() {
    this.__storeUnsubscribe();

    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
  }

  __stateChanged() {
    const result = mapState && mapState(getState());

    if (!result) return;

    Object
      .entries(result)
      .forEach(([key, value]) => { this._state[key] = value; });

    this.requestUpdate();
  }
};

export default connect;
