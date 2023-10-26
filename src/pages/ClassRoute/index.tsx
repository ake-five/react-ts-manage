import { log } from 'console';
import React, { Component } from 'react';
interface MyComponentProps {
  navigator: any;
}
class MyComponent extends Component<MyComponentProps> {
  state = {
    count: 0,
  };

  componentDidMount() {
    // 在组件挂载后启动一些异步任务
    this.startAsyncTask();
  }
  route=()=>{
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    ///coms
    this.props.navigator('/coms')
  }
  async startAsyncTask() {
    // 模拟异步任务
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.setState({ count: 1 });
  }

  render() {
    const { count } = this.state;
    const { navigator } = this.props;
    return (
      <div>
        <h1>React 18 + TypeScript Class Component</h1>
        <p>Count: {count}</p>
        <button onClick={()=>this.route()}>跳转</button>
      </div>
    );
  }
}

export default MyComponent;