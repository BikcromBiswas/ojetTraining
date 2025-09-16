/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojbootstrap'],
  function (oj, ko) {
    function TextBindingViewModel() {
      var self = this;
      // Observable message to bind in the view
      self.greetingMessage = ko.observable("Hello, welcome to Oracle JET!");
    }
    return TextBindingViewModel;
});