import { BlinkerDevice } from '../lib/blinker';
import { ButtonWidget, NumberWidget } from '../lib/widget';

let device = new BlinkerDevice('秘钥');

// 注册组件
//在手机端app中的组件类型和名称要和这里的一致
let button1: ButtonWidget = device.addWidget(new ButtonWidget('btn-123'));
let button2: ButtonWidget = device.addWidget(new ButtonWidget('btn-abc'));
let number1: NumberWidget = device.addWidget(new NumberWidget('num-abc'));

let num = 0;

device.ready().then(() => {

    device.dataRead.subscribe(message => {
        console.log('-----start');
        console.log('otherData:', message);
        console.log('-----end');
    })

    button1.listen().subscribe(message => {
        console.log('-----start');
        console.log('button1:', message.data);
        console.log('-----end');
        num++;
        number1.value(num).update();
    })

    button2.listen().subscribe(message => {
        console.log('-----start');
        console.log('button2:', message.data);
        console.log('-----end');
        // 其他控制代码
    })

})