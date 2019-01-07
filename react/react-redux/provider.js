class Provider extends Component{
  getChildContext(){
    return {
      [storeKey]:this.storeKey
    }
  }
  constructor(props,context){
    super(props,context);
    this[toreKey] = props.store;
  }
  render(){
    return  Children.only()
  }
}