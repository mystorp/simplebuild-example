export function init(options){}

export const basevar = 8;

export class MyBase {
	constructor(props){
		this.props = props;
	}
	initialize(arg1, arg2, ...args){
		let myargs = [3, 5, arg2, arg1].concat(args);
		myargs.forEach((arg)=>this.logArgs(arg));
		this.realInitialize(this.props, myargs);
	}
	get width(){
		return this.props.width;
	}
	get height(){
		return this.props.height;
	}
	realInitialize(props, args) {}
	destroy(){}
}

export class Sub extends MyBase {
	constructor(width, height) {
		super({width, height});
	}
	get size(){
		return this.width * this.height;
	}
}
