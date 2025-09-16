define([
  '../accUtils',
  'knockout',
  'ojs/ojinputtext',
  'ojs/ojformlayout',
  'ojs/ojbutton'
], function(accUtils, ko) {
  function CustomerViewModel() {
    var self = this;

    self.name = ko.observable('');
    self.isFormValid = ko.computed(function() {
      console.log("Name value:", self.name()," ",!!self.name());
      return !!self.name();
    });

    self.submitForm = function() {
      alert('Submitted: ' + self.name());
      self.name('');
    };

    this.connected = () => {
      accUtils.announce('Customers page loaded.');
      document.title = "Customers";
    };

    this.disconnected = () => {};
    this.transitionCompleted = () => {};
  }

  return CustomerViewModel;
});