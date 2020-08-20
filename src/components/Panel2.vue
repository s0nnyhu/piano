<template>
  <div class="container">
    <div class="row">
      <div class="bootcards-list col-sm-6">
        <div class="panel panel-default">
          <div class="list-group">
            <a class="list-group-item" href="#apple" onclick="comp('#apple')">
              <div class="row">
                <div class="col-sm-1">
                  <img
                    src="https://github.com/taulantspahiu/Bootcards-Examples/blob/master/contact_list/images/apple-logo.png?raw=true"
                  />
                </div>
                <div class="col-sm-5">
                  <h4 class="list-group-item-heading">Apple Inc.</h4>
                  <p class="list-group-item-text">Cupertino, California</p>
                </div>
                <div class="col-sm-6">
                  <p class="list-group-item-text">Electronics, Software</p>
                  <p class="list-group-item-text">$233.7 Billion Revenue</p>
                </div>
              </div>
            </a>
            <a class="list-group-item" href="#google" onclick="comp('#google')">
              <div class="row">
                <div class="col-sm-1">
                  <img
                    src="https://github.com/taulantspahiu/Bootcards-Examples/blob/master/contact_list/images/google-logo.png?raw=true"
                  />
                </div>
                <div class="col-sm-5">
                  <h4 class="list-group-item-heading">Google</h4>
                  <p class="list-group-item-text">Mountain Views, California</p>
                </div>
                <div class="col-sm-6">
                  <p class="list-group-item-text">Internet Services</p>
                  <p class="list-group-item-text">$74.54 Billion Revenue</p>
                </div>
              </div>
            </a>
            <a class="list-group-item" href="#microsoft" onclick="comp('#microsoft')">
              <div class="row">
                <div class="col-sm-1">
                  <img
                    src="https://github.com/taulantspahiu/Bootcards-Examples/blob/master/contact_list/images/microsoft-logo.png?raw=true"
                  />
                </div>
                <div class="col-sm-5">
                  <h4 class="list-group-item-heading">Microsoft Corporation</h4>
                  <p class="list-group-item-text">Redmond, Washington</p>
                </div>
                <div class="col-sm-6">
                  <p class="list-group-item-text">Electronics, Software</p>
                  <p class="list-group-item-text">$93.58 Billion Revenue</p>
                </div>
              </div>
            </a>
            <a class="list-group-item" href="#oracle" onclick="comp('#oracle')">
              <div class="row">
                <div class="col-sm-1">
                  <img
                    src="https://github.com/taulantspahiu/Bootcards-Examples/blob/master/contact_list/images/oracle-logo.png?raw=true"
                  />
                </div>
                <div class="col-sm-5">
                  <h4 class="list-group-item-heading">Oracle Corporation</h4>
                  <p class="list-group-item-text">Redwood City, California</p>
                </div>
                <div class="col-sm-6">
                  <p class="list-group-item-text">Database</p>
                  <p class="list-group-item-text">$38.23 Billion Revenue</p>
                </div>
              </div>
            </a>
            <a class="list-group-item" href="#dropbox" onclick="comp('#dropbox')">
              <div class="row">
                <div class="col-sm-1">
                  <img
                    src="https://github.com/taulantspahiu/Bootcards-Examples/blob/master/contact_list/images/dropbox-logo.png?raw=true"
                  />
                </div>
                <div class="col-sm-5">
                  <h4 class="list-group-item-heading">Dropbox</h4>
                  <p class="list-group-item-text">San Francisco, California</p>
                </div>
                <div class="col-sm-6">
                  <p class="list-group-item-text">File Hosting</p>
                  <p class="list-group-item-text">$400 Million Revenue</p>
                </div>
              </div>
            </a>
            <a class="list-group-item" id="fb" href="#facebook" onclick="comp('#facebook')">
              <div class="row">
                <div class="col-sm-1">
                  <img
                    src="https://github.com/taulantspahiu/Bootcards-Examples/blob/master/contact_list/images/facebook-logo.jpg?raw=true"
                  />
                </div>
                <div class="col-sm-5">
                  <h4 class="list-group-item-heading">Facebook</h4>
                  <p class="list-group-item-text">Menlo Park, California</p>
                </div>
                <div class="col-sm-6">
                  <p class="list-group-item-text">Social Networking</p>
                  <p class="list-group-item-text">$17.93 Billion Revenue</p>
                </div>
              </div>
            </a>
            <a class="list-group-item" href="#salesforce" onclick="comp('#salesforce')">
              <div class="row">
                <div class="col-sm-1">
                  <img
                    src="https://github.com/taulantspahiu/Bootcards-Examples/blob/master/contact_list/images/salesforce-logo.png?raw=true"
                  />
                </div>
                <div class="col-sm-5">
                  <h4 class="list-group-item-heading">Salesforce.com</h4>
                  <p class="list-group-item-text">San Francisco, California</p>
                </div>
                <div class="col-sm-6">
                  <p class="list-group-item-text">CRM</p>
                  <p class="list-group-item-text">$6.7 Billion Revenue</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
  padding-top: 1em;
  padding-bottom: 0;
}

a.list-group-item:before {
  content: "";
}

.list-group-item {
  margin-left: 0px;
  padding-left: 15px;
}

.list-group-item .row > div.col-sm-5 {
  margin-left: 10px;
}

.list-group-item .row > div.col-sm-6 {
  margin-left: -10px;
}

.panel-title {
  margin-top: 13px;
  margin-right: 7px;
}

.list-group-item-heading,
.list-group-item-text {
  padding-left: 3px;
}

.form-inline {
  padding-right: 1.1em;
}

.form-inline .btn-primary {
  margin-top: 0.5em;
}

@media only screen and (min-width: 768px) {
  .form-inline {
    padding-right: 0;
  }

  .form-inline .btn-primary {
    margin-top: 0;
    margin-left: 2em;
  }
}

@media only screen and (max-width: 767px) {
  .list-group-item .row > div.col-sm-5 {
    margin-left: 0px;
    padding-left: 5px;
  }
  .list-group-item-heading {
    margin-top: 3px;
  }
}

@media (max-width: 250px) {
  #search {
    padding-left: 10px;
  }
}
</style>