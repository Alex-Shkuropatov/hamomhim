window.env = {
  API_URL: 'http://api.hamomhim.coelix.online',

  MOBILE: (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1),

  regexp: {
    NAME: /^[a-zA-Z0-9 ]{2,}$/,
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PHONE: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    PASS: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/,
  }
}
