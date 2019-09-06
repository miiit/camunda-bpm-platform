/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe('camunda-commons-ui', function() {
  'use strict';
  // the karma-test-main.js file takes care of pre-requiring the chai lib, so you can use it
  // with require('chai') instead of require(['chai'], function(chai) { .. })
  var expect = require('chai').expect;

  beforeEach(function() {
    console.groupCollapsed(this.test.parent.title+' '+this.currentTest.title);
  });
  afterEach(function() {
    console.groupEnd(this.test.parent.title+' '+this.currentTest.title);
  });

  describe('environmement', function() {
    it('loads', function() {
      expect(function() {
        throw new Error('Bam!');
      }).to.throw(Error);
    });
  });
});
