// import {Component, OnInit} from 'angular2/core';
import {Flux} from 'flux-angular2';

export default class ToyReducer extends Flux.Reducer  {
	constructor(opts) {
		super(opts);

	}

	actionSaveToy(state, action) {
		console.log('Adding toy: '+action);
	}
}