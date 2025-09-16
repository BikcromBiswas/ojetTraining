/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['../accUtils',"knockout"],
 function(accUtils,ko) {
    function Assignment2ViewModel() {
      var self=this;
      self.message=ko.observable("");
      self.clickHandler=()=>{
        if(self.message()==null || self.message()=="")
        {
          self.message("You have clicked the button! Well Done.");
        }
        else{
          self.message("");
        }
      }
    }

    return Assignment2ViewModel;
  }
);
