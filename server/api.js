//const models = require('./db');
const express = require('express');
const router = express.Router();

var sessionId;
//用户登录接口
router.post('/api/login',(req,res) =>{
    if(req.body.account === 'root' && req.body.password === '123'){

        var result= {
            checked:'success',
            userName:req.body.account,
            password:req.body.password,
            session:parseInt(Math.random()*1000000),
            expiredays:1000*60*60
        }
        sessionId = result.session;
        res.send(result);
    }else{
        res.send('error');
    }
})

router.get('/api/treeData',(req,res) => {
    var  treeDatas
    var sourceType = req.url.split('?')[1].split('=')[1];
    console.log(sourceType)
    switch (sourceType){
         case 'mains':
            treeDatas = [
                {text:'主页',
                  id:'1',
                  icon:'folder',
                  type:'icenter',
                  children:[
                      {text:'1-1',
                        id:'1-1',
                        icon:'folder',
                        type:'main',
                        children:[
                          {text:'1-1-1',
                            id:'1-1-1',
                            icon:'file',
                            type:'system'
                          }]
                      
                      }]
                }
                ];
                break;
         case 'hosts':
            treeDatas = [
                {text:'主机',
                  id:'1',
                  icon:'folder',
                  type:'icenter',
                  children:[
                      {text:'1-1',
                        id:'1-1',
                        type:'dc',
                        icon:'folder',
                        children:[
                          {text:'1-1-1',
                            id:'1-1-1',
                            icon:'file',
                            type:'host'
                          }]
                      
                      }]
                }
                ];
                break;
        case 'vms':
             treeDatas = [
                {text:'虚拟机',
                  id:'1',
                  icon:'folder',
                  type:'icenter',
                  children:[
                      {text:'1-1',
                        id:'1-1',
                        type:'dc',
                        icon:'folder',
                        children:[
                          {text:'1-1-1',
                            id:'1-1-1',
                            type:'vm',
                            icon:'file',

                          }]
                      
                      }]
                }
                ];
                break;
        case 'stores':
            treeDatas = [
                {text:'存储',
                  id:'1',
                  icon:'folder',
                  type:'icenter',
                  children:[
                      {text:'1-1',
                        id:'1-1',
                        icon:'folder',
                        type:'dc',
                        children:[
                          {text:'1-1-1',
                            id:'1-1-1',
                            icon:'file',
                            type:'store'
                          }]
                      
                      }]
                }];
                break;
        case 'networks' :
            treeDatas = [
                {text:'网络',
                  id:'1',
                  icon:'folder',
                  type:'icenter',
                  children:[
                      {text:'1-1',
                        id:'1-1',
                        icon:'folder',
                        type:'dc',
                        children:[
                          {text:'1-1-1',
                            id:'1-1-1',
                            icon:'file',
                            type:'network'

                          }]
                      
                      }]
                }
                ];
                break;
         case 'sdns':
            treeDatas = [
                {text:'SDN',
                  id:'1',
                  icon:'folder',
                  type:'icenter',
                  children:[
                      {text:'1-1',
                        id:'1-1',
                        icon:'folder',
                        type:'dc',
                        children:[
                          {text:'1-1-1',
                            id:'1-1-1',
                            icon:'file',
                            type:'sdn'
                          }]
                      
                      }]
                }
                ];
                break;

    }
      
    res.send(treeDatas)
})

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    /*let newAccount = new models.Login({
        account : req.body.account,
        password : req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });*/
});

// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
   /* models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });*/

    res.send('ok')
});

module.exports = router;